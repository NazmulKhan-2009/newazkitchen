import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import WaitingOrder from '../../Cart/Cart/WaitingOrder';
import { orderHistory } from '../../DataManagement';
import Loader from './Loader';
import OrderDataHistory from './OrderedDataHistory/OrderDataHistory';




const PurchaseHistory = () => {

 const [orderHistoryData, setOrderHistoryData]=useState([])
//  const [dataFound, setDataFound]=useState(false)
 //todo console.log(orderHistoryData)
//  const email="nazmulustc09@yahoo.com"
//  const email="ustciiucbracbank@gmail.com"
//  const email="ustciiucbracbank@outlook.com"
 const email="nazmulustc09@gmail.com"


  

   useEffect(()=>{
    const orderDataHistory =async()=>{
     const data=await orderHistory(email)
     setOrderHistoryData(data)
     // console.log(data)
     
    }
     orderDataHistory()
   },[])

   
  // if(orderHistoryData.length<1){
  //     return <h1>No item</h1>
        
      
  // }
 
 
 

 return (
  <>
   

   {orderHistoryData.length>0 ?
   <Grid>
    <h3 style={{
      textAlign: 'center',
      textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
      color:"#6C6C6C",
      }}>Purchase History</h3>
    <OrderDataHistory
    orderHistoryData={orderHistoryData}
   />
   </Grid>
   : 
   <>
   <Loader/>
   <WaitingOrder
     info={{
       text:"Nothing found yet in Purchased History",
       img:"https://admissions.nyinst.com/images/no-data.png",
       width:"40%"
     }}
   />
   </>
   }
   
  </>
 );
};

export default PurchaseHistory;