import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import WaitingOrder from '../../Cart/Cart/WaitingOrder';
import DashBoardTitle from '../../Dashboard/UserDashboard/DashboardComponents/DashBoardTitle';
import Sidebar from '../../Dashboard/UserDashboard/DashboardComponents/Sidebar/Sidebar';
import Loader from './Loader';
import OrderDataHistory from './OrderedDataHistory/OrderDataHistory';
import OrderHistoryMobile from './OrderedDataHistory/orderHistoryForMobile/OrderHistoryMobile';




const PurchaseHistory = () => {

  const {orderHistoryData}=useContext(UserContext)
  
 
 return (
  <Sidebar>
  <DashBoardTitle dashTitle="Order"/>
   {orderHistoryData?.length>0 ?
   <Grid>
    <h3 style={{
      textAlign: 'center',
      textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
      color:"#6C6C6C",
      }}>Purchase History</h3>

    <OrderDataHistory
    orderHistoryData={orderHistoryData}
   />

   <OrderHistoryMobile orderHistoryData={orderHistoryData}/>

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
   
  </Sidebar>
 );
};

export default PurchaseHistory;