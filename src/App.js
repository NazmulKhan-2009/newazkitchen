import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Cart from './components/Cart/Cart/Cart';
import CartEmpty from './components/Cart/Cart/CartEmpty';
import NotFound from './components/Common/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import Gallery from './components/Gallery/Gallery';
import AppNav from './components/Home/Header/AppBar/AppNav';
import Home from './components/Home/Home/Home';


export const UserContext=createContext()

// const cartGet=JSON.parse(localStorage.getItem('cartInfo'))
function App(){
  
  const [cartItem, setCartItem]=useState([])
  useEffect(()=>{
    const cartGet=JSON.parse(localStorage.getItem('cartInfo'))
    setCartItem(cartGet)
    // console.log(cartGet)
  },[])

  return (
    <UserContext.Provider
    value={[
      cartItem,
      setCartItem
    ]}
    
    >
    <Router>
     <AppNav/>     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/dashboard" component={Dashboard} />    
        <Route exact path="/cart" component={cartItem ? Cart : CartEmpty} />    
      </Switch>
      
    </Router>

    </UserContext.Provider>
    
  );
}

export default App;
