import { Grid } from '@material-ui/core';
import React from 'react';
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';
import PriceDetails from '../PriceDetails';
import WaitingOrder from '../WaitingOrder';

const PaymentDetails = ({confirmCart}) => {
 return (
  <Grid container item md={6} xs={10}>
    
   <PriceDetails/>
   {confirmCart ?  
   <DeliveryDetails/>:<WaitingOrder/>
   }
   
  
  </Grid>
 );
};

export default PaymentDetails;