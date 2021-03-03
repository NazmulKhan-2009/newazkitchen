import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import OrderDelivery from './OrderDelivery.js/OrderDelivery';
import OrderDetailImages from './OrderDetailImages/OrderDetailImages';
import OrderStatus from './OrderStatus/OrderStatus';
import OrderTransaction from './OrderTransaction/OrderTransaction';

const OrderDetailsDB = ({orderInfo}) => {
 
//!console.log(orderInfo)

 return (
  
<Grid container item md={12} justify="center" spacing={5}>
  <Grid item md={4}>
   <OrderDetailImages
      orderInfo={orderInfo}
   />
  </Grid>

  <Grid item md={3}>
  <OrderDelivery
      orderInfo={orderInfo}
   />
  </Grid>
  
  <Grid item md={3}>
  <OrderTransaction
      orderInfo={orderInfo}
   />
  </Grid>

  <Grid item md={2}>
  <OrderStatus
      orderInfo={orderInfo}
   />
  </Grid>
  {/* {
      orderInfo.ordered_Data &&  orderInfo.ordered_Data.map(item=> <img key={item._id} src={item.imageUrl} alt="" width="10%"/> )
    } */}
   
  </Grid>
 );
};

export default OrderDetailsDB;