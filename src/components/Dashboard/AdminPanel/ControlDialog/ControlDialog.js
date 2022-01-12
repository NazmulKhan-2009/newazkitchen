import { Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import React, { useState } from 'react';
import DataUpdateForm from '../DataUpdateForm/DataUpdateForm';
import './ControlDialog.css';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

  const ControlDialog=({dial,closeDialog,handleAgree,dialogInfo,handleDisagree,dbOrderedInfo,handleDialog,formTitle,adminForm})=>{
  const [purchasedInfo,setPrchasedInfo]= useState({}) 
  const [cancel,setCancel]= useState({}) 
  const handleInput=e=>{   
    setPrchasedInfo({...purchasedInfo,[e.target.name]:e.target.value})
  }


  return (
    <Grid>     
     <Dialog
        open={dial}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleAgree}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"       
      >
        <DialogTitle  id="alert-dialog-slide-title">Food Control</DialogTitle>     
        <DialogActions>
          <DataUpdateForm
            formTitle={formTitle}
            adminForm={adminForm}
            handleDialog={handleDialog}     
         />        
        </DialogActions>   
      </Dialog>
    </Grid>
  );
}


export default ControlDialog