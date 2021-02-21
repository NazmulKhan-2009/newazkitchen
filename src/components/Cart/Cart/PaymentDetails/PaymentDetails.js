import { Grid } from '@material-ui/core';
import React from 'react';
import Dialogs from '../../Dialog/Dialogs';

import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';
import PriceDetails from '../PriceDetails';
import WaitingOrder from '../WaitingOrder';

const PaymentDetails = ({confirmCart}) => {
 return (
  <Grid container item md={6} xs={12} style={{margin:'auto'}}>
    
   <PriceDetails
   
   />
   
   {confirmCart ? 
   <DeliveryDetails/>:<WaitingOrder/>
   }
   
  
  </Grid>
 );
};

export default PaymentDetails;