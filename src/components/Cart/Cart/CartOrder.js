import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CartCheck from './CartCheck';
import WaitingOrder from './WaitingOrder';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import CartEmpty from './CartEmpty';
import { useState } from 'react';
import DeliveryDetails from './DeliveryDetails/DeliveryDetails';
import PriceDetails from './PriceDetails';
import PaymentDetails from './PaymentDetails/PaymentDetails';

const CartOrder=({handleDialog})=>{
  const [cartItem, setCartItem]=useContext(UserContext)
  const [placeOrder, setPlaceOrder]=useState(false)
  const [confirmCart, setConfirmCart]=useState(false)
  
  

  const handlePlaceOrder=(bool)=>{
    setConfirmCart(bool)
  }


  

  
  
// const cartItems=[{car:"toyota",price:200},{car:"toyota",price:200}]
  return (
    <>
    {/* {cartItem.length>0 || placeOrder ?

      <Grid item={true} container md={10} xs={10} style={{margin:"auto",marginTop:"2rem"}}>
      
      {placeOrder ? 
      <>
        <CartCheck
        handlePlaceOrder={handlePlaceOrder}
      />  
        <DeliveryDetails/> 
      </>
      : 
      <>
        <CartCheck
        handlePlaceOrder={handlePlaceOrder}
      />
      <WaitingOrder/>
      </>
      }
        
    </Grid>
    : 
    <CartEmpty/>  
    
    } */}

    {/* other Way**************************** */}

    {cartItem.length>0 ?

    <Grid item container md={10} xs={10} style={{margin:"auto",marginTop:"-1rem"}}>   
      
      <CartCheck
        handlePlaceOrder={handlePlaceOrder}
        confirmCart={confirmCart}
        handleDialog={handleDialog}
      />     
       <PaymentDetails 
         confirmCart={confirmCart}
         setConfirmCart={setConfirmCart}
         
       />
      {/* {confirmCart && 
        <WaitingOrder
        confirmCart={confirmCart}
      />
      } */}
      
         
    </Grid>
    : 
    <CartEmpty/>  
    
    }

    </>
  
  )
   }
  

export default CartOrder