import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import WaitingOrder from '../../Cart/Cart/WaitingOrder';
import CommonTitle from '../../common_comps/CommonTitle';
import CardPayment from './CardPayment/CardPayment';
import CashOnDelivery from './CashOnDelivery/CashOnDelivery';
import MobileTransfer from './MobileTransfer/MobileTransfer';
import classes from "./PaymentMethod.module.css";
import SelectMethod from './SelectMethod/SelectMethod';


  const PaymentMethod = ({setPaymentData,handleDialog,purchaseDone,purchaseNotify,dbOrderedInfo}) => {
  const [paymentMethod, setPaymentpaymentMethod]=useState({isType:false,methodName:''})
  const [paymentType,setPaymentType]=useState(false)
  const handlePayment=(paymentType,bool)=>{
 setPaymentpaymentMethod({isType:bool,methodName:paymentType})
}

 return (
  <Grid
   item
   md={!purchaseNotify ? 5 : 11}
   sm={5} 
   xs={10} >
   {!purchaseNotify && <>
   {/* <h3 className={classes.head}>Payment Method</h3> */}
   <CommonTitle title="Payment Method"/>
   <SelectMethod  handlePayment={handlePayment} handleDialog={handleDialog} purchaseDone={purchaseDone} purchaseNotify={purchaseNotify}/>
   </>
   }
   {
      paymentMethod.isType &&
    <>
     {paymentMethod.methodName==='Card Payment' && <CardPayment setPaymentData={setPaymentData} purchaseDone={purchaseDone} dbOrderedInfo={dbOrderedInfo} purchaseNotify={purchaseNotify}/>}
     {paymentMethod.methodName==='Mobile Transfer' && <MobileTransfer handleDialog={handleDialog} purchaseDone={purchaseDone} purchaseNotify={purchaseNotify}/>}
     {paymentMethod.methodName=== 'Cash On Delivery' && <CashOnDelivery purchaseDone={purchaseDone} purchaseNotify={purchaseNotify} /> }
    </>
   }
  </Grid>
 );
};

export default PaymentMethod;