import { Grid } from '@material-ui/core';
import React from 'react';

const PaymentMethod = () => {
 return (
  <Grid
   // component="elementType"
   // disableGutters={true}
   // fixed={false}
   // maxWidth="md"
   item
   md={5}
   sm={5} 
   xs={10} >
   <h3 className='head'>Payment Method</h3>
  </Grid>
 );
};

export default PaymentMethod;