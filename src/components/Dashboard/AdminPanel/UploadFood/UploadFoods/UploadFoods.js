import { Grid } from '@material-ui/core';
import React from 'react';
import AdminInfo from '../AdminInfo/AdminInfo';
import FormCheckPoint from '../FormForUpload/FormCheckPoint/FormCheckPoint';
import FormForUpload from '../FormForUpload/FormForUpload';

const UploadFoods = () => {
 return (
  <Grid container item md={10} justify="center" style={{margin:"auto"}}>
    <FormForUpload/>
    <Grid item md={5} xs={10}>
      <AdminInfo/>
      <FormCheckPoint/>
    </Grid>
      
  </Grid>
 );
};

export default UploadFoods;