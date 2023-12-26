import React from 'react';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todos from './components/todos/Todos';
import Products from './components/products/Products';
import Home from './components/Home/Home';
import Cart from './components/cart/Cart';
import NavBar from './components/Navbar/NavBar';


function App() {
  return (
    <>
    {/*
    <Products/>
    <Home/>
    <Todos/>
    <Cart/> */}
   <NavBar/>  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/todos' element= {<Todos/>}/>
      <Route path='/cart' element= {<Cart/>}/>
    </Routes>
    </>
  );
}

export default App;
