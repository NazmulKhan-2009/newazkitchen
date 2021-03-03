import { Grid } from '@material-ui/core';
import React from 'react';
import classes from './OrderDelivery.module.css'
const OrderDelivery = ({orderInfo}) => {
const {name,contact,address,gender,totalPrice,instruction}=orderInfo.delivery_Info
const {payment_by,orderId}=orderInfo
const {id,billing_details,card,type}=payment_by

 return (
  <>
  <Grid>
   <h4 className={classes.delivery_header}>Delivery Details</h4>
   <Grid className={classes.detail}>
     <p>Name : {`${gender}. ${name}`.toLocaleUpperCase()}</p> 
     <p>Contact : {`${contact}`} </p>
     <p>Email : {`${orderInfo.email}`} </p>
     <p>Delivery Address : {`${address}`} </p>
     <p>Order Time : {`${orderInfo.order_Time}`}</p>
     <p>{instruction && `Instruction : ${instruction}`}</p>
   </Grid> 
  </Grid>

  <Grid>
   <h4 className={classes.transaction_header}>Transaction Details</h4>
   <Grid className={classes.detail}>
     <p>Total Amount : {`${totalPrice}`}</p>
     <p>Order Id : {`${orderId}`}</p>
     <p>{payment_by.card && `Txn Id : ${id}`}</p>
     <p>Payment Method :{payment_by.card ? ` ${card.brand.toLocaleUpperCase() +" "+ type.toUpperCase()}  ************${card.last4}` : `${payment_by}`} </p>   
   </Grid>
  </Grid>
  </>
 );
};

export default OrderDelivery;