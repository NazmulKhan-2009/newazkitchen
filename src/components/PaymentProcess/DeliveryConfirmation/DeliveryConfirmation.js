import { Grid } from '@material-ui/core';
import React from 'react';
import classes from './DeliveryConfirmation.css'

const DeliveryConfirmation = ({handleDialog}) => {
 // const [open, setOpen] = React.useState(false);
 const deliveryInfo=JSON.parse(sessionStorage.getItem('deliveryInfo'))
 const {address,contact,instruction,name,totalPrice,gender}=deliveryInfo
 
 return (
  <Grid item md={5} sm={5} xs={10}>
   <h3  className={classes.head} onClick={()=>handleDialog(true)}>Dispatch Details</h3>
   <div>
    <p>{`Name : ${gender +'. '+ name.toUpperCase()}`}</p>
    <p>{`Contact : ${contact}`}</p>
    <p>{`Delivery Address : ${address}`}</p>
    <p>{`Total Price ${totalPrice}/=`}</p>
    
   </div>
  </Grid>
 );
};

export default DeliveryConfirmation;