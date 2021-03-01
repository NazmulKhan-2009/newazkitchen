import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import WaitingOrder from '../../Cart/Cart/WaitingOrder';
import CardPayment from './CardPayment/CardPayment';
import CashOnDelivery from './CashOnDelivery/CashOnDelivery';
import MobileTransfer from './MobileTransfer/MobileTransfer';
import SelectMethod from './SelectMethod/SelectMethod';

const PaymentMethod = ({setPaymentData,handleDialog,purchaseDone,purchaseNotify,dbOrderedInfo}) => {
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
   {!purchaseNotify && <>
   <h3 className='head'>Payment Method</h3>
   <SelectMethod  handlePayment={handlePayment} handleDialog={handleDialog} purchaseDone={purchaseDone} purchaseNotify={purchaseNotify}/>
   </>
   }
   {
    paymentMethod.isType?
    <>
     {paymentMethod.methodName==='Card Payment' && <CardPayment setPaymentData={setPaymentData} purchaseDone={purchaseDone} dbOrderedInfo={dbOrderedInfo}/>}
     {paymentMethod.methodName==='Mobile Transfer' && <MobileTransfer handleDialog={handleDialog} purchaseDone={purchaseDone} purchaseNotify={purchaseNotify}/>}
     {paymentMethod.methodName=== 'Cash On Delivery' && <CashOnDelivery purchaseDone={purchaseDone} purchaseNotify={purchaseNotify}/> }
   </>:
   <WaitingOrder 
//    info={{text:"Waiting For Payment Option",
//           img:'https://pizzahouse.pk/wp-content/uploads/2020/06/QualifiedRecklessIrukandjijellyfish-max-1mb.gif'}}

       info={{text:"Waiting For Payment Option",
              img:' https://media.tenor.com/images/f877ce050749a1ab7db5cad6997658f3/tenor.gif'}}

          />
       
       }
  
  
       
   
  </Grid>
 );
};

export default PaymentMethod;