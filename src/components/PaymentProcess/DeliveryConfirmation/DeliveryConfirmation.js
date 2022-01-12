import { Grid } from '@material-ui/core';
import React from 'react';
import CommonTitle from '../../common_comps/CommonTitle';
import classes from './DeliveryConfirmation.module.css';

const DeliveryConfirmation = ({handleDialog}) => {
 const deliveryInfo=JSON.parse(sessionStorage.getItem('deliveryInfo'))
 const {address,contact,instruction,name,totalPrice,gender}=deliveryInfo
 

 return (
  <Grid item md={5} sm={5} xs={10} className={classes.delivery_confirmation}>
    {/* <h3  className={classes.head} onClick={()=>handleDialog(false)}>Dispatch Details</h3>  */}
    <CommonTitle title="Dispatch Details"/>
    <p>{`Name : ${gender +'. '+ name.toUpperCase()}`}</p>
    <p>{`Contact : ${contact}`}</p>
    <p style={{width:"250px"}}>{`Delivery Address : ${address}`}</p>
    <p>{`Total Price : BDT ${totalPrice}`}</p>
    <p>{instruction && `Instruction : ${instruction}`}</p> 
  </Grid>
 );
};

export default DeliveryConfirmation;