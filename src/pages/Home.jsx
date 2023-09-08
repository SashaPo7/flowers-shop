import React from 'react';

import Navigation from '../components/Navigation';
import Sort from '../components/Sort';
import FlowersBlock from '../components/FlowersBlock';
import Skeleton from '../components/FlowersBlock/Skeleton';

const Home = () => {
  const [flowers, setFlowers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://64d2412cf8d60b174361bc8a.mockapi.io/flowers')
    .then((res) => res.json())
    .then((arr) => {
      setFlowers(arr);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="content__top">
        <Navigation />
        <Sort />
      </div>
      <div className="content__items">
        {isLoading
          ? [... new Array(6)].map((_, index) => <Skeleton key={index} />)
          : flowers.map((obj) => <FlowersBlock key={obj.id} {...obj} /> )} 
      </div>
    </>
  )
}

export default Home;