import { Grid } from '@material-ui/core';
import React from 'react';

import DeliveryConfirmation from './DeliveryConfirmation/DeliveryConfirmation';
import PaymentMethod from './PaymentMethod/PaymentMethod';

const PaymentProcess = () => {


 return (
  <Grid>
     <Grid container item md={10} justify="center"> 
        <DeliveryConfirmation />
        <PaymentMethod/>  
     </Grid>
     <Grid>
       <h3>Purchase History</h3>
     </Grid>
     
  </Grid>
 );
};

export default PaymentProcess;