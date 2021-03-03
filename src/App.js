import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Cart from './components/Cart/Cart/Cart';
import CartEmpty from './components/Cart/Cart/CartEmpty';
import NotFound from './components/Common/NotFound/NotFound';
import FormForUpload from './components/Dashboard/AdminPanel/UploadFood/FormForUpload/FormForUpload';
import UploadFoods from './components/Dashboard/AdminPanel/UploadFood/UploadFoods/UploadFoods';
import Dashboard from './components/Dashboard/Dashboard';
import Gallery from './components/Gallery/Gallery';
import AppNav from './components/Home/Header/AppBar/AppNav';
import Home from './components/Home/Home/Home';
import PaymentProcess from './components/PaymentProcess/PaymentProcess';
import PurchaseHistory from './components/PurchaseHistory/PurchaseHistory/PurchaseHistory';
import PracticeComp from './PracticeCom/PracticeComp';


export const UserContext=createContext()

// const cartGet=JSON.parse(localStorage.getItem('cartInfo'))
function App(){
  
  const [cartItem, setCartItem]=useState([])
  const [orderInfo, setOrderInfo]=useState([])
  

  useEffect(()=>{
    const cartGet=JSON.parse(localStorage.getItem('cartInfo'))
    setCartItem(cartGet)
    // console.log(cartGet)
  },[])

  // ??????
  // const cusInfo=JSON.parse(localStorage.getItem('deliveryInfo'))
  const cusInfo=true  

  return (
    <UserContext.Provider
    value={[
      cartItem,
      setCartItem, 
      orderInfo,
      setOrderInfo,
      
    ]}
    
    >
    <Router>
     <AppNav/>     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/dashboard" component={Dashboard} />    
        <Route exact path="/cart" component={cartItem ? Cart : CartEmpty} />  
         
        {/* <Route exact path="/practicecomp" component={PracticeComp} />  */}
         
        <Route exact path="/uploadfoods" component={UploadFoods} />  
        
          <Route exact path="/dashboard/payment" component={cusInfo ? PaymentProcess : NotFound} />
        
          <Route exact path="/dashboard/purchaseHistory" component={PurchaseHistory} /> 


        <Route exact path="*" component={NotFound} /> 
      </Switch>
      
    </Router>

    </UserContext.Provider>
    
  );
}

export default App;
