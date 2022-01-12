import axios from "axios";
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import DashboardRoot from './UserDashboard/DashboardComponents/DashboardRoot/DashboardRoot';
import Sidebar from "./UserDashboard/DashboardComponents/Sidebar/Sidebar";



const Dashboard = () => {
  const {loginInfo, setLoginInfo,setIsAdmin,orderHistoryData}=useContext(UserContext)
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
  //console.log(userInfo)

  const orderData=async()=>{
    //! try with populate relation data base
    try{
        const data=await axios({
          method:'get',
          url:'https://quiet-cove-17146.herokuapp.com/api/order/orderdetail',
          headers: {'Authorization': 'Bearer '+ token}
        })
        history.push('/PurchaseHistory')
     }catch(e){
       console.log(e)
      } ;
  }
    orderData()

}

const {userName,accessAs}=JSON.parse(sessionStorage.getItem('userInfo'))

 return (

     <Sidebar>  
        <DashboardRoot />  
     </Sidebar>
  
 );
};

export default Dashboard;
