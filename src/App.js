import { Paper } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import axios from 'axios';
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
import NotFound from './components/Common/NotFound/NotFound';
import ContactUs from './components/ContactUs/ContactUs';
import AdminPanel from './components/Dashboard/AdminPanel/AdminPanel';
import Dashboard from './components/Dashboard/Dashboard';
import MyEvents from './components/Dashboard/UserDashboard/DashboardComponents/MyEvents/MyEvents';
import MyFavorites from './components/Dashboard/UserDashboard/DashboardComponents/MyFavorites/MyFavorites';
import { orderHistory } from './components/DataManagement';
import FoodSpecification from './components/FoodSpecification/FoodSpecification';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home/Home';
import PaymentProcess from './components/PaymentProcess/PaymentProcess';
import PurchaseHistory from './components/PurchaseHistory/PurchaseHistory/PurchaseHistory';
import PrivateRoute from './PrivateRoute/PrivateRoute';




export const UserContext=createContext()

// const cartGet=JSON.parse(localStorage.getItem('cartInfo'))
function App(){
  
  const [cartItem, setCartItem]=useState([])
  const [orderInfo, setOrderInfo]=useState([])
  const [loginInfo, setLoginInfo]=useState({})
  //console.log(loginInfo)
  const [admin, setAdmin]=useState("")
  const [isAdmin,setIsAdmin]=useState(false)
  const [count, setCount]=useState(0)
  const [profilePhoto, setProfilePhoto]=useState('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png')
  
  const [foodDetails, setFoodDetails]=useState([])
  // //console.log(foodDetails)
  const [itemWise, setItemWise]=useState([]) //!not in previous
  const [foodSync, setFoodSync]=useState("") //!not in previous
  //! sync order
  const [profileSync,setProfileSync]=useState("")
  const [rating, setRating]=useState(0)//!bring from food specification-28
  const [dispRating, setDispRating]=useState(false)//!bring from food specification-29
  const [orderHistoryData, setOrderHistoryData]=useState([])
  //console.log(orderHistoryData)
  const [orderSync, setOrderSync]=useState('') 
  const [userData, setUserData]=useState({})
  const [loader, setLoader]=useState(false)
  const [canceledEvent, setCanceledEvent]=useState({})
  //console.log(userData) 
  // const current_screen_mode=localStorage.getItem('dark_mode')
  // //console.log(current_screen_mode)

  // ! DARK/LIGHT STORAGE NOT DONE YET 
  const [darkMode,setDarkMode]=useState(false)

  //! Cart Drawer
  const [cartOpen, setCartOpen] = useState(false);

  
  // //console.log(darkMode)

  const theme=createMuiTheme({
    palette:{
     type: darkMode ? "dark":"light"
    }
   })



  useEffect(()=>{

    const cartGet=JSON.parse(localStorage.getItem('cartInfo'))
    setCartItem(cartGet)
    // //console.log(cartGet)
  },[])


  
//! not in previous 
  useEffect(()=>{

    const serverFoodList=async()=>{
       try{
         const foods=await axios.get("http://localhost:5000/api/food/fooddetail")
         // setItemWise(foods.data.slice(90,105))
         setFoodDetails(foods.data)
         setItemWise(foods.data.reverse())
         
         
        }catch(e){
          //console.log(`error on getting Food List from server ${e}`)
         } ;
       
     }
     serverFoodList()
 
     
   
   },[foodSync])
 

   //imp use effect for user data
   useEffect(()=>{
     (async()=>{
      const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))

      try{
          const userData=await axios(`http://localhost:5000/api/user/alluser/${userInfo.userEmail}`)

          setUserData(userData.data)
       }catch(e){
         
        } ;

       
     })()
   
   },[profileSync])

//console.log(loginInfo)
   //!REFACTOR FROM PURCHASE HISTORY
//console.log(orderHistoryData)   
   useEffect(()=>{
    const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
    const email=userInfo?.userEmail
    const token=sessionStorage.getItem('token')

    const orderDataHistory =async()=>{
     const data=await orderHistory(email,token)
     setOrderHistoryData(data)
     //console.log(data)
     
    }
     orderDataHistory()
   },[loginInfo,orderSync])



  //  useEffect(()=>{
  //   const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
  //   const email=userInfo?.userEmail


  //  },[])

  
       
       
  
    

   
  

   const screenMode=(type)=>{
    localStorage.setItem('dark_mode', type)
      setDarkMode(type)
    
    
   }

   

  // const accessAdmin=JSON.parse(sessionStorage.getItem('userInfo'))

  // useEffect(()=>{
  
  //   accessAdmin!==null ? setAdmin(accessAdmin.accessAs):setAdmin('');
    
  // },[accessAdmin])

  // ??????
  // const cusInfo=JSON.parse(localStorage.getItem('deliveryInfo'))
  const cusInfo=true  

  return (


    <ThemeProvider theme={theme}>
  {/* <Switchh checked={darkMode} onChange={()=>setDarkMode(!darkMode)}></Switchh> */}
  <Paper style={{minHeight:"100vh",borderRadius:'0px'}} >
    <UserContext.Provider
    value={{
      cartItem,
      setCartItem, 
      orderInfo,
      setOrderInfo,
      loginInfo,
      setLoginInfo,
      isAdmin,
      setIsAdmin,
      darkMode,
      screenMode,
      cartOpen, 
      setCartOpen,
      count, setCount,
      profilePhoto, setProfilePhoto,
      foodDetails, setFoodDetails,
      itemWise, setItemWise,
      foodSync, setFoodSync,rating, 
      setRating,dispRating, setDispRating,
      orderHistoryData, setOrderHistoryData,
      setOrderSync,userData, setUserData,setProfileSync,loader, setLoader,
      canceledEvent, setCanceledEvent
      

      
    }}

    // value={{cart:cartItem,setCart:setCartItem,order:orderInfo,login:loginInfo,setLogin:setLoginInfo}}
    
    >
    
    <Router>
    {/* <CartDrawer>
      <AppNav />
    </CartDrawer> */}
    {/* <AppNav /> */}
     
         
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
          <PrivateRoute exact path="/dashboard-purchasehistory">
            <PurchaseHistory/>
          </PrivateRoute> 

          <Route exact path="/foodspecification/:id">
            <FoodSpecification/>
          </Route>

          <Route exact path="/verified/:user">
            <VerifiedUser/>
          </Route>

          <PrivateRoute exact path="/dashboard-myfavorites">
            <MyFavorites/>
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard-myevents">
            <MyEvents/>
          </PrivateRoute>

          
          {/* <Route exact path="/myorder">
            <MyOrder/>
          </Route> */}


        <Route exact path="*" component={NotFound} /> 
      </Switch>
      
    </Router>

    </UserContext.Provider>

    </Paper>


  

  

</ThemeProvider>
    
  );
}

export default App;
