import { Grid } from '@material-ui/core';
import React from 'react';
import Dialogs from '../../Dialog/Dialogs';

import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';
import PriceDetails from '../PriceDetails';
import WaitingOrder from '../WaitingOrder';

const PaymentDetails = ({confirmCart}) => {
 return (
  <Grid container item md={6} xs={11} sm={6} style={{margin:'auto'}}>

   {/* <PriceDetails/> */}
   {/* <DeliveryDetails/> */}
   {/* {confirmCart ? 
   <DeliveryDetails/>
   :
   <WaitingOrder 
   info={{text:'Waiting for Confirm cart',img:'https://media1.giphy.com/media/LVd5BbSMsgKLEjKpqL/source.gif'}}/>
   } */}
   
  
  </Grid>
 );
};

export default PaymentDetails;