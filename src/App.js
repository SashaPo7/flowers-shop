import React from 'react';

import Header from './components/Header';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Cart from './pages/Cart';
import CartEmpty from './pages/CartEmpty';
import NotFound from './pages/NotFound';

import './scss/app.scss';

export const SearchContext = React.createContext();

function App() {

  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route index element={<Home />}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/cartEmpty' element={<CartEmpty/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  )
};

// const Roote = ({searchValue, setSearchValue}) => {

//   return (
//     <div className="wrapper">
//       <SearchContext.Provider value={{ searchValue, setSearchValue }}>
//         <Header />
//         <div className="content">
//           <div className="container">
//             <Outlet/>
//           </div>
//         </div>
//       </SearchContext.Provider>
//     </div>
//   )
// }

export default App;
