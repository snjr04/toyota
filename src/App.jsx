
import {Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/favorites";
import Room from "./pages/Room/Room";
import NotFound from "./pages/NotFound/NotFound";
import './styles/style.scss'
import {useEffect, useState} from "react";
import api from "./config/api/api.js";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import Catalog from "./pages/Catalog/Catalog";

function App() {

  return (
    <>

      <Routes>

        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/sale/:id' element={<Product/>}/>
          <Route path='/basket' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>

        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>

    </>
  )
}

export default App
