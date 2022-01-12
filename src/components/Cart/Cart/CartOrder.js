import React from 'react';
import Grid from '@material-ui/core/Grid';
import CartCheck from './CartCheck';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import CartEmpty from './CartEmpty';
import { useState } from 'react';
import PaymentDetails from './PaymentDetails/PaymentDetails';
import DeliveryDetails from './DeliveryDetails/DeliveryDetails';

const CartOrder=({handleDialog})=>{
  const {cartItem}=useContext(UserContext)
  const [confirmCart, setConfirmCart]=useState(false)
  
  const handlePlaceOrder=(bool)=>{
    setConfirmCart(bool)
  }

  return (
    <>
      {cartItem.length>0 ?
        <Grid item container md={10} xs={11} sm={6} style={{margin:"auto",marginTop:"1rem"}}>   
          <CartCheck
          handlePlaceOrder={handlePlaceOrder}
          confirmCart={confirmCart}
          handleDialog={handleDialog}
          />     
         
          {/* <PaymentDetails 
          confirmCart={confirmCart}
          setConfirmCart={setConfirmCart}     
          />      */}
          <DeliveryDetails/>
        </Grid>
        : 
        <CartEmpty/>  
      }
    </>
  )

   }
  

export default CartOrder