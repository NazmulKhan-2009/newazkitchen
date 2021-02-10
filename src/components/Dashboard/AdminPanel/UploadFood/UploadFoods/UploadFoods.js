import { Grid } from '@material-ui/core';
import React from 'react';
import AdminInfo from '../AdminInfo/AdminInfo';
import FormForUpload from '../FormForUpload/FormForUpload';

const UploadFoods = () => {
 return (
  <Grid container item md={10} justify="center" style={{margin:"auto"}}>
    <FormForUpload/>
    <AdminInfo/>  
  </Grid>
 );
};

export default UploadFoods;