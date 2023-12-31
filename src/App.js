import './App.scss';
import { Hats } from './Routes/Hats/hats.route';
import { Jackets } from './Routes/Jackets/jackets.route';
import { Mens } from './Routes/Men/mens.route';
import { Sneakers } from './Routes/Sneakers/sneakers.route';
import { Womens } from './Routes/Womens/womens.route';
import { Fixed } from './Routes/fixed/fixed.route';
import { HomePage } from './Routes/homepage/homepage.route';
import { Routes, Route, Router } from 'react-router-dom';
import { Shop } from './Routes/shop/shop.route';
import { useEffect } from 'react';
import { CheckOut } from './Routes/checkout/checkout.component';
function App() {

  return (

    <Routes >
      <Route path='/' element={<Fixed />}>
        <Route index element={<HomePage />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='/womens' element={<Womens />} />
        <Route path='/hats' element={<Hats />} />
        <Route path='/jackets' element={<Jackets />} />
        <Route path='/sneakers' element={<Sneakers />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Route>
    </Routes>


  );
}

export default App;
