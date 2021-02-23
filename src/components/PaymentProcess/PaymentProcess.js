import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import WaitingOrder from '../Cart/Cart/WaitingOrder';
import Dialogs from '../Cart/Dialog/Dialogs';

import DeliveryConfirmation from './DeliveryConfirmation/DeliveryConfirmation';
import PaymentMethod from './PaymentMethod/PaymentMethod';

const PaymentProcess = () => {
   const [paymentData, setPaymentData] = useState({});
   const deliveryInfo=JSON.parse(sessionStorage.getItem('deliveryInfo'))
   console.log(paymentData)
   const [open, setOpen] = React.useState(false);

   const handleDialog=(bool)=>{
      setOpen(bool)
     }
     
     const handleAgree=(bool)=>{
      setOpen(bool)
     }

 return (
    
  <Grid>
  {deliveryInfo==null ?
   <WaitingOrder
      info={{text:'You dont purchased Yet',
           img:"https://media3.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif"
    }}
   />:
   <>
   <Grid container item md={10} justify="center"> 
        <DeliveryConfirmation />
        <PaymentMethod setPaymentData={setPaymentData} handleDialog={handleDialog}/>  
     </Grid>
     <Grid>
       <h3>Purchase History</h3>
     </Grid>
     </>
  }
     
  <Dialogs dial={open} handleAgree={handleAgree}/>
  </Grid>
 );
};

export default PaymentProcess;