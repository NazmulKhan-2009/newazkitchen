import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import WaitingOrder from '../../Cart/Cart/WaitingOrder';
import CardPayment from './CardPayment/CardPayment';
import CashOnDelivery from './CashOnDelivery/CashOnDelivery';
import MobileTransfer from './MobileTransfer/MobileTransfer';
import SelectMethod from './SelectMethod/SelectMethod';

const PaymentMethod = ({setPaymentData,handleDialog}) => {
const [paymentMethod, setPaymentpaymentMethod]=useState({isType:false,methodName:''})
const [paymentType,setPaymentType]=useState(false)


const handlePayment=(paymentType,bool)=>{
 // if(paymentType==='Card Payment'){
 //  setPaymentpaymentMethod()
 // }
//  console.log(paymentType)
//  console.log(bool)
 setPaymentpaymentMethod({isType:bool,methodName:paymentType})
 
// console.log(paymentType)
}


 return (
  <Grid
   item
   md={5}
   sm={5} 
   xs={10} >
   <h3 className='head'>Payment Method</h3>
   <SelectMethod  handlePayment={handlePayment} handleDialog={handleDialog}/>
   {
    paymentMethod.isType?
    <>
     {paymentMethod.methodName==='Card Payment' && <CardPayment setPaymentData={setPaymentData}/>}
     {paymentMethod.methodName==='Mobile Transfer' && <MobileTransfer/>}
     {paymentMethod.methodName=== 'Cash On Delivery' && <CashOnDelivery/> }
   </>:
   <WaitingOrder 
   info={{text:"Waiting For Payment Option",
          img:'https://pizzahouse.pk/wp-content/uploads/2020/06/QualifiedRecklessIrukandjijellyfish-max-1mb.gif'}}/>

   }
  

       
   
  </Grid>
 );
};

export default PaymentMethod;