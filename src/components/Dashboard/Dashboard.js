import { Button, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import axios from "axios"
const Dashboard = () => {
  const {loginInfo, setLoginInfo,setIsAdmin}=useContext(UserContext)
  console.log(loginInfo)
  const history=useHistory()

const handleSignOut=()=>{
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('userInfo')
  setIsAdmin(false)
  sessionStorage.removeItem('isAdmin',false)
  
  setLoginInfo({user_name:''})
  history.push('/')

}


const handlePurchase=()=>{
  
  const userInfo=JSON.parse(sessionStorage.getItem('userInfo')) 
  const token=sessionStorage.getItem('token')
  console.log(userInfo)

  const orderData=async()=>{


    // const data=await axios({
    //   method: 'get',
    //   url: `http://localhost:5000/api/order/orderhistory/${userInfo.userEmail}`,
    //   // data: {
    //   //   firstName: 'Fred',
    //   //   lastName: 'Flintstone'
    //   // },
    //   headers: {'Authorization': 'Bearer '+ token}
    // });
    // console.log(data)

    // try{
    //   const data=await axios({
    //     method: 'get',
    //     url: `http://localhost:5000/api/order/orderhistory/${userInfo.userEmail}`,
    //     // url: "http://localhost:5000/api/order/previousorders",
    //     // data: {
    //     //   firstName: 'Fred',
    //     //   lastName: 'Flintstone'
    //     // },
    //     headers: {'Authorization': 'Bearer '+ token}
    //   });
    //   // console.log(data.data.session)
    //   // const data=await axios.get("http://localhost:5000/api/order/previousorders")
    //   // console.log(data)
      
    //   if(data.data.session){
    //     console.log(data)  
    //   }else{
    //     sessionStorage.removeItem('token')
    //     sessionStorage.removeItem('userInfo')
    //     setLoginInfo({user_name:''})
    //     history.push('/login')
    //   }
    // }catch(e){
    //   console.log(`error here ${e}`)
    //  } ;

    //! try with populate relation data base
    try{
        // const data=await axios.get('http://localhost:5000/api/order/orderdetail')
        // console.log(data)

        const data=await axios({
          method:'get',
          url:'http://localhost:5000/api/order/orderdetail',
          headers: {'Authorization': 'Bearer '+ token}

        })

        console.log(data)

        history.push('/PurchaseHistory')

     }catch(e){
       
      } ;
  }

 
  
orderData()

}

const {userName,accessAs}=JSON.parse(sessionStorage.getItem('userInfo'))

 return (

  <Grid md={10} item container justify="center">
      <Grid> 
        <p>Welcome <span style={{color:'indigo',fontWeight:"bold"}}>{userName} </span> <span style={{color:'tomato',cursor:"pointer"}} onClick={handleSignOut}>Sign out</span></p>
      {accessAs==="success" &&
        <Button variant="contained" color='primary' onClick={handlePurchase}>user Purchase History</Button>}

        {accessAs==="admin" && <Button variant="contained" color='primary' onClick={handlePurchase}>admin Purchase History</Button>}


      </Grid>
    
  </Grid>
   
  
 );
};

export default Dashboard;