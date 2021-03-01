import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import WaitingOrder from '../Cart/Cart/WaitingOrder';
import Dialogs from '../Cart/Dialog/Dialogs';

import DeliveryConfirmation from './DeliveryConfirmation/DeliveryConfirmation';
import OrderDetailsDB from './OrderDetailsDB/OrderDetailsDB';
import PaymentMethod from './PaymentMethod/PaymentMethod';
import PurchaseDone from './PurchaseDone/PurchaseDone';

const PaymentProcess = () => {
   const [paymentData, setPaymentData] = useState({});
   const [paymentType, setPaymentType] = useState({});
   const totalPrice=JSON.parse(sessionStorage.getItem('totalPrice'))
   const deliveryInfo=JSON.parse(sessionStorage.getItem('deliveryInfo'))
   // console.log(paymentData)
   const [open, setOpen] = React.useState(false);
   const [purchaseNotify, setPurchaseNotify] = React.useState(false);
   const [orderInfo,setOrderInfo]= useState({})

   console.log(orderInfo)

   const handleDialog=(bool,dialogInfo)=>{
      setOpen(bool)
      setPaymentType(dialogInfo)
     }
     
   //   let history = useHistory();

     const handleAgree=(forDialog,forSatus)=>{
      setOpen(forDialog)
      if(forSatus){
         // history.push("/dashboard/purchaseHistory")
         
      }
     }

     const handleDisagree=(bool)=>{
      setOpen(bool)
     }

     const purchaseDone=(bool)=>{
      setPurchaseNotify(bool)
     }

     const dbOrderedInfo=(db_order)=>{
      setOrderInfo(db_order)
     }
     
// console.log(purchaseNotify) //?????

 return (
    
  <Grid item md={10} style={{margin:"8vh auto"}}>
  {deliveryInfo==null ?
   <WaitingOrder
      info={{text:'You dont purchased Yet',
           img:"https://media3.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif"
    }}
   />:
   <>
   <Grid container item md={12} justify="center"> 
      {/* {
         
      purchaseNotify ? <PurchaseDone /> : <DeliveryConfirmation />  
   
      } */}
      {!purchaseNotify && <DeliveryConfirmation />}
      {purchaseNotify &&  <OrderDetailsDB
           orderInfo={orderInfo}
        /> }
        
        <PaymentMethod 
            setPaymentData={setPaymentData} 
            handleDialog={handleDialog}
            purchaseDone={purchaseDone} 
            purchaseNotify={purchaseNotify}
            dbOrderedInfo={dbOrderedInfo}
            
            />  
      
      
          
      
     </Grid>
     
     </>
  }
     
  <Dialogs 
   dial={open} 
   handleAgree={handleAgree}
   handleDisagree={handleDisagree}
   dbOrderedInfo={dbOrderedInfo}
   // dialogInfo={{
   //    // title:'Cash on Delivery....',
   //    title:`Delivery by ${paymentType} payment `,
   //    content:'Please Pay ',
   //    payment:totalPrice,
   //    contentEnd:'once you received the product. ',
   //    btnYes:"Confirm",
   //    btnNo:"Change Mind"
   //    }}
   dialogInfo={{
      title:`${paymentType.title}`,
      content:`${paymentType.content}`,
      payment:totalPrice,
      contentEnd:`${paymentType.contentEnd}`,
      btnYes:`${paymentType.btnYes}`,
      btnNo:`${paymentType.btnNo}`,
      inputOption:`${paymentType.inputOption}`,
      purchaseDone:paymentType.purchaseDone
      // inputField:paymentType.inputField,
      }}
  />
  {/* {console.log(paymentType.inputField)} */}
  </Grid>
 );
};

export default PaymentProcess;