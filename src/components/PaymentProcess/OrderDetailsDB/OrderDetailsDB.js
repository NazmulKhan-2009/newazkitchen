import { Grid } from '@material-ui/core';
import React from 'react';
import OrderDetailImages from './OrderDetailImages/OrderDetailImages';

const OrderDetailsDB = ({orderInfo}) => {
console.log(orderInfo)

 return (
  <Grid container>

  <Grid item md={3}>
   <OrderDetailImages
      orderInfo={orderInfo}
   />
  </Grid>

  <Grid item md={3}>
    {/* {
     
     orderInfo.delivery_Info &&
     
     
    
     
    } */}
  </Grid>
  
  <Grid item md={3}>

  </Grid>

  <Grid item md={3}>

  </Grid>
  {/* {
      orderInfo.ordered_Data &&  orderInfo.ordered_Data.map(item=> <img key={item._id} src={item.imageUrl} alt="" width="10%"/> )
    } */}
   
  </Grid>
 );
};

export default OrderDetailsDB;