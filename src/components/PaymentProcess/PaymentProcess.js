import { Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import WaitingOrder from '../Cart/Cart/WaitingOrder';
import Dialogs from '../Cart/Dialog/Dialogs';
import AppNav from '../Home/Header/AppBar/AppNav';
import MobAppNav from '../Home/Header/AppBar/MobAppNav';
import DeliveryConfirmation from './DeliveryConfirmation/DeliveryConfirmation';
import PaymentMethod from './PaymentMethod/PaymentMethod';


const PaymentProcess = () => {
   const [paymentData, setPaymentData] = useState({});
   const [paymentType, setPaymentType] = useState({});
   const totalPrice=JSON.parse(sessionStorage.getItem('totalPrice'))
   const deliveryInfo=JSON.parse(sessionStorage.getItem('deliveryInfo'))
   const [open, setOpen] = React.useState(false);
   const [purchaseNotify, setPurchaseNotify] = React.useState(false);
   //! const [orderInfo,setOrderInfo]= useState({})
   const {orderInfo, setOrderInfo,loginInfo,setLoginInfo}=useContext(UserContext)

   const handleDialog=(bool,dialogInfo)=>{
      setOpen(bool)
      setPaymentType(dialogInfo)
     }
     
   const handleAgree=(forDialog,forSatus)=>{
      setOpen(forDialog)
      if(forSatus){
              
      }
     }

     const handleDisagree=(bool)=>{
      setOpen(bool)
     }

     const purchaseDone=(bool)=>{
      setPurchaseNotify(bool)
     }

   
 return (
    
  <Grid>
   <AppNav otherThanHome={false}/>
   <MobAppNav otherThanHome={false}/>
   <Grid item md={10} style={{margin:"2rem auto"}} container justify="center">
      {deliveryInfo==null ?
         <WaitingOrder
            info={{text:'You dont purchased Yet',
            img:"https://media3.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif"
            }}
         />
         :
         <>                      
            {!purchaseNotify && <DeliveryConfirmation />}   

            <PaymentMethod 
               setPaymentData={setPaymentData} 
               handleDialog={handleDialog}
               purchaseDone={purchaseDone} 
               purchaseNotify={purchaseNotify}              
            />                      
         </>
      }
   </Grid>  

   <Dialogs 
      dial={open} 
      handleAgree={handleAgree}
      handleDisagree={handleDisagree}
      fromPayVerify="processDialog"
      dialogInfo={{
         title:`${paymentType.title}`,
         content:`${paymentType.content}`,
         payment:totalPrice,
         contentEnd:`${paymentType.contentEnd}`,
         btnYes:`${paymentType.btnYes}`,
         btnNo:`${paymentType.btnNo}`,
         inputOption:`${paymentType.inputOption}`,
         purchaseDone:paymentType.purchaseDone
         }}
   />
   </Grid>
 );
};

export default PaymentProcess;