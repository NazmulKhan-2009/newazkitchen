import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";

import Login from './components/Authentication/Login/Login';


import Cart from './components/Cart/Cart/Cart';
import CartEmpty from './components/Cart/Cart/CartEmpty';
import NotFound from './components/Common/NotFound/NotFound';
import ContactUs from './components/ContactUs/ContactUs';
import AdminPanel from './components/Dashboard/AdminPanel/AdminPanel';
import FormForUpload from './components/Dashboard/AdminPanel/UploadFood/FormForUpload/FormForUpload';
import UploadFoods from './components/Dashboard/AdminPanel/UploadFood/UploadFoods/UploadFoods';
import Dashboard from './components/Dashboard/Dashboard';
import Gallery from './components/Gallery/Gallery';
import AppNav from './components/Home/Header/AppBar/AppNav';
import Home from './components/Home/Home/Home';
import PaymentProcess from './components/PaymentProcess/PaymentProcess';
import PurchaseHistory from './components/PurchaseHistory/PurchaseHistory/PurchaseHistory';
import PracticeComp from './PracticeCom/PracticeComp';
import './App.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import FoodSpecification from './components/FoodSpecification/FoodSpecification';

export const UserContext=createContext()

// const cartGet=JSON.parse(localStorage.getItem('cartInfo'))
function App(){
  
  const [cartItem, setCartItem]=useState([])
  const [orderInfo, setOrderInfo]=useState([])
  const [loginInfo, setLoginInfo]=useState({})
  const [admin, setAdmin]=useState("")
  const [isAdmin,setIsAdmin]=useState(false)
  

  useEffect(()=>{
    const cartGet=JSON.parse(localStorage.getItem('cartInfo'))
    setCartItem(cartGet)
    // console.log(cartGet)
  },[])

  // const accessAdmin=JSON.parse(sessionStorage.getItem('userInfo'))

  // useEffect(()=>{
  
  //   accessAdmin!==null ? setAdmin(accessAdmin.accessAs):setAdmin('');
    
  // },[accessAdmin])

  // ??????
  // const cusInfo=JSON.parse(localStorage.getItem('deliveryInfo'))
  const cusInfo=true  

  return (
    <UserContext.Provider
    value={{
      cartItem,
      setCartItem, 
      orderInfo,
      setOrderInfo,
      loginInfo,
      setLoginInfo,
      isAdmin,
      setIsAdmin

      
    }}

    // value={{cart:cartItem,setCart:setCartItem,order:orderInfo,login:loginInfo,setLogin:setLoginInfo}}
    
    >
    
    <Router>
    
     <AppNav />
         
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={ContactUs} />

        {/* <Route exact path="/dashboard" component={Dashboard} />  */}

        <PrivateRoute exact path="/dashboard">
            <Dashboard/>
          </PrivateRoute>  

        <Route exact path="/login" component={Login} />    
        <Route exact path="/cart" component={cartItem ? Cart : CartEmpty} />  
         
        {/* <Route exact path="/practicecomp" component={PracticeComp} />  */}
         
         {/*//! bellow transmission from next js */}
        {/* <Route exact path="/uploadfoods" component={UploadFoods} />   */}
        {/* <Route exact path="/adminpanel" component={AdminPanel} /> */}
        <PrivateRoute exact path="/adminpanel">
            
            <AdminPanel/> 
          </PrivateRoute> 
        
          {/* <Route exact path="/dashboard/payment" component={cusInfo ? PaymentProcess : NotFound} /> */}

          <PrivateRoute exact path="/payment">
            
            <PaymentProcess/> 
          </PrivateRoute> 
        
          {/* <Route exact path="/purchaseHistory" component={PurchaseHistory} />  */}
          <PrivateRoute exact path="/purchasehistory">
            <PurchaseHistory/>
          </PrivateRoute> 

          <Route exact path="/foodspecification/:id">
            <FoodSpecification/>
          </Route>


        <Route exact path="*" component={NotFound} /> 
      </Switch>
      
    </Router>

    </UserContext.Provider>
    
  );
}

export default App;
