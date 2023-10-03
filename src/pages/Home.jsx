import React from 'react';
import qs from 'qs';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { setNavigationItem, setPageCount, setFilters } from '../redux/slices/filterSlice';
import Navigation from '../components/Navigation';
import Sort from '../components/Sort';
import FlowersBlock from '../components/FlowersBlock';
import Skeleton from '../components/FlowersBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { navigationItem, sortItem, pageCount } = useSelector((state) => state.filter);
  

  const { searchValue } = React.useContext(SearchContext);
  const [flowers, setFlowers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const list = [{name:'price', sortProperty: 'price'}, {name:'alphabet', sortProperty: 'title'}];
 
  const onClickNavigationItem = (item) => {
    dispatch(setNavigationItem(item));
  }

  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  }

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log(list);
      const sort = list.find((obj) => obj.sort === params.sort)

      dispatch(
        setFilters({
          ...params, 
          sort,
        }),
      );
    }
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://64d2412cf8d60b174361bc8a.mockapi.io/flowers?page=${pageCount}&limit=4&sortBy=${sortItem.name}&category=${navigationItem}&filter=${searchValue}&order=asc`)
      .then((res) => {
        setFlowers(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [sortItem, navigationItem, pageCount, searchValue]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortItem: sortItem.name,
      navigationItem, 
      pageCount,
    });
    navigate(`?${queryString}`);
  }, [sortItem, navigationItem, pageCount]);

  const items = flowers.map((obj) => <FlowersBlock key={obj.id} {...obj} /> );
  const skeletons = [... new Array(6)].map((index) => <Skeleton key={index} />);

  return (
    <>
      <div className="content__top">
        <Navigation value={navigationItem} onClickItem={onClickNavigationItem}/>
        <Sort list={list}/>
      </div>
      <div className="content__items">
        {isLoading ? skeletons : items} 
      </div>
      <Pagination value={pageCount} onChangePage={onChangePage}/>
    </>
  )
}

export default Home;