import { Grid } from '@material-ui/core';
import React from 'react';
import WaitingOrder from '../../Cart/Cart/WaitingOrder';
import classes from './DeliveryConfirmation.css'

const DeliveryConfirmation = ({handleDialog}) => {
 // const [open, setOpen] = React.useState(false);
 const deliveryInfo=JSON.parse(sessionStorage.getItem('deliveryInfo'))

 
 
///**TRY for destructure from session */
 // // const {address,contact,instruction,name,totalPrice,gender}=deliveryInfo==null ?null:deliveryInfo
 // if(deliveryInfo!=null){
 //  const {address,contact,instruction,name,totalPrice,gender}=deliveryInfo
 // }
 
 console.log(deliveryInfo)


 return (
  <Grid item md={5} sm={5} xs={10}>
  {
   deliveryInfo==null ?
   <WaitingOrder/>
   : 
   <>
   <h3  className={classes.head} onClick={()=>handleDialog(true)}>Dispatch Details</h3>
   <div>
    <p>{`Name : ${deliveryInfo.gender +'. '+ deliveryInfo.name.toUpperCase()}`}</p>
    <p>{`Contact : ${deliveryInfo.contact}`}</p>
    <p>{`Delivery Address : ${deliveryInfo.address}`}</p>
    <p>{`Total Price ${deliveryInfo.totalPrice}/=`}</p>
    
   </div>
   </>
  }
   
  </Grid>
 );
};

export default DeliveryConfirmation;