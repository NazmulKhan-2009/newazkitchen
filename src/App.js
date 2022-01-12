import { Paper } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import Login from './components/Authentication/Login/Login';
import VerifiedUser from './components/Authentication/VerifiedUser/VerifiedUser';
import Cart from './components/Cart/Cart/Cart';
import CartEmpty from './components/Cart/Cart/CartEmpty';
import ShoppingCart from "./components/CartHistory/ShoppingCart";
import NotFound from './components/Common/NotFound/NotFound';
import ContactUs from './components/ContactUs/ContactUs';
import DashboardMaintenence from "./components/Dashboard/adminDashboard/DashboardMaintenence";
import AdminPanel from './components/Dashboard/AdminPanel/AdminPanel';
import Dashboard from './components/Dashboard/Dashboard';
import MyEvents from './components/Dashboard/UserDashboard/DashboardComponents/MyEvents/MyEvents';
import MyFavorites from './components/Dashboard/UserDashboard/DashboardComponents/MyFavorites/MyFavorites';
import { allFoodsList, orderHistory, orderHistoryAll, userLoginData } from './components/DataManagement';
import FoodSpecification from './components/FoodSpecification/FoodSpecification';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home/Home';
import PaymentProcess from './components/PaymentProcess/PaymentProcess';
import PurchaseHistory from './components/PurchaseHistory/PurchaseHistory/PurchaseHistory';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const UserContext=createContext()
function App(){ 
  const [cartItem, setCartItem]=useState([])
  const [orderInfo, setOrderInfo]=useState([])
  const [loginInfo, setLoginInfo]=useState({})
  const [isAdmin,setIsAdmin]=useState(false)
  const [count, setCount]=useState(0)
  const [profilePhoto, setProfilePhoto]=useState('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png')
  const [foodDetails, setFoodDetails]=useState([])
  const [itemWise, setItemWise]=useState([])
  const [foodSync, setFoodSync]=useState("")
  //! sync order
  const [profileSync,setProfileSync]=useState("")
  const [orderSync, setOrderSync]=useState('') 

  const [rating, setRating]=useState(0)
  const [dispRating, setDispRating]=useState(false)
  const [orderHistoryData, setOrderHistoryData]=useState([])
  const [userData, setUserData]=useState({})
  const [loader, setLoader]=useState(false)
  const [canceledEvent, setCanceledEvent]=useState({})
 
  const [darkMode,setDarkMode]=useState(false)
  // const [sidebarSwitch, setSidebarSwitch]=useState("")

  //! Cart Drawer
  const [cartOpen, setCartOpen] = useState(false);

  const theme=createMuiTheme({
    palette:{
     type: darkMode ? "dark":"light"
    }
   })


  useEffect(()=>{
    const cartGet=JSON.parse(localStorage.getItem('cartInfo'))
    setCartItem(cartGet)
  },[])


  

  useEffect(()=>{

    const serverFoodList=async()=>{
       try{
         allFoodsList().then(data=>
          {setFoodDetails(data)
          setItemWise(data.reverse())
          }
          )        
        }catch(e){
          //console.log(`error on getting Food List from server ${e}`)
         } ;      
     }
        serverFoodList()   
   },[foodSync])
 

   useEffect(()=>{
     (async()=>{
      const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
       try{
          userLoginData(userInfo.userEmail).then(data=>setUserData(data))
       }catch(e){
        //  throw Error(e)
        } ;      
     })()
   
   },[profileSync])

  
   useEffect(()=>{
    const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
    const email=userInfo?.userEmail
    // const token=sessionStorage.getItem('token')
    const orderDataHistory =async()=>{
      if(userInfo?.accessAs==="admin"){
        const data=await orderHistoryAll()
        setOrderHistoryData(data)
      }else{
        const token=sessionStorage.getItem('token')
        const data=await orderHistory(email,token)
        setOrderHistoryData(data)
      }
     
    
    }
     orderDataHistory()
   },[loginInfo,orderSync])


   const screenMode=(type)=>{
    localStorage.setItem('dark_mode', type)
      setDarkMode(type)
   }

return (
    <ThemeProvider theme={theme}>
      <Paper style={{minHeight:"100vh",borderRadius:'0px'}} >
        <UserContext.Provider
          value={{
            cartItem,setCartItem, 
            orderInfo,setOrderInfo,
            loginInfo,setLoginInfo,
            isAdmin,setIsAdmin,
            darkMode,screenMode,
            cartOpen, setCartOpen,
            count, setCount,
            profilePhoto, setProfilePhoto,
            foodDetails, setFoodDetails,
            itemWise, setItemWise,
            foodSync, setFoodSync,
            rating,setRating,
            dispRating, setDispRating,
            orderHistoryData, setOrderHistoryData,
            setOrderSync,userData, setUserData,
            setProfileSync,loader, setLoader,
            canceledEvent, setCanceledEvent,
            
          }}
   > 
        <Router>     
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={ContactUs} />
            <PrivateRoute exact path="/dashboard"><Dashboard/></PrivateRoute>  
            <Route exact path="/login" component={Login} />    
            <Route exact path="/cart" component={cartItem ? Cart : CartEmpty} />  
            {/* <Route exact path="/cart" component={cartItem ? ShoppingCart : CartEmpty} />   */}
            <PrivateRoute exact path="/adminpanel"><AdminPanel/> </PrivateRoute> 
            <PrivateRoute exact path="/payment"><PaymentProcess/> </PrivateRoute> 
            <PrivateRoute exact path="/dashboard-purchasehistory"><PurchaseHistory/></PrivateRoute> 
            <Route exact path="/foodspecification/:id"><FoodSpecification/></Route>
            <Route exact path="/verified/:user"><VerifiedUser/></Route>
            <PrivateRoute exact path="/dashboard-myfavorites"><MyFavorites/></PrivateRoute>
            <PrivateRoute exact path="/dashboard-myevents"><MyEvents/></PrivateRoute>
            {/* admin sidebar */}
            <PrivateRoute exact path="/dashboard-maintenence"><DashboardMaintenence/> </PrivateRoute>
            <Route exact path="*" component={NotFound} /> 
          </Switch>    
        </Router>
      </UserContext.Provider>
    </Paper>
  </ThemeProvider>
    
  );
}

export default App;
