// import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import React, { useState } from 'react';
import DataUpdateForm from '../DataUpdateForm/DataUpdateForm';
import './ControlDialog.css';
// import { orderedData } from '../../DataManagement';
// import { UserContext } from '../../../App';
// import CreateFood from '../foodcms/Components/Createfood/CreateFood';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const ControlDialog=({dial,closeDialog,handleAgree,dialogInfo,handleDisagree,dbOrderedInfo,handleDialog,formTitle,adminForm})=>{

  //console.log(formTitle)
  const [purchasedInfo,setPrchasedInfo]= useState({}) 
const [cancel,setCancel]= useState({}) 
  //? const [orderInfo,setOrderInfo]= useState({}) 
  
  // const cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
  // const StyledBadge = withStyles((theme) => ({
  //   badge: {
  //     right: -3,
  //     top: 13,
  //     border: `2px solid ${theme.palette.background.paper}`,
  //     padding: '0 4px',
  //   },
  // }))(Badge);

  

  


//   const handleSubmit=async(e)=>{
//     e.preventDefault()
//     // if(dialogInfo.title!=='Payment Process....'){
//     // //  const deliveryInfo=JSON.parse(sessionStorage.getItem('deliveryInfo'))
//     // //!  sessionStorage.setItem('purchasedInfo',JSON.stringify({payment_by:dialogInfo.title,...purchasedInfo,...deliveryInfo}))

//     // const email="nazmulustc09@gmail.com";
//     // const order_status='processing'
//     // const orderedDetails=await orderedData(email,dialogInfo.title,order_status,purchasedInfo)
//     // // dbOrderedInfo(orderedDetails)
//     // setOrderInfo(orderedDetails)
//     //  dialogInfo.purchaseDone(true)
//     // }   
//     setIsDisable(true)
//     handleAgree(false,true)
  
//  }

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
        
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialogInfo && dialogInfo.content}<span style={{textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
        color:"#fd5c63"}}>{dialogInfo && `${dialogInfo.payment}/- `}</span> {dialogInfo && dialogInfo.contentEnd}
          </DialogContentText>
        </DialogContent> */}
        
        
        
        <DialogActions>

        
         <DataUpdateForm
          formTitle={formTitle}
          adminForm={adminForm}
          handleDialog={handleDialog}
          

          
         />
        
        
        
        {/* {dialogInfo.inputField} */}
        

          {/* <Button onClick={()=>handleDisagree(false)} color="primary">
            {dialogInfo && dialogInfo.btnNo}
          </Button>
          <Button onClick={()=>handleAgree(false,true)} color="primary">
            {dialogInfo && dialogInfo.btnYes} 
          </Button> */}
          
          {/* <form   autoComplete="on" onSubmit={handleSubmit}> */}
          
           
          
         {/* {dialogInfo.inputOption==='do' &&
         <>
          <TextField
            id="transaction no"
            label="Transaction Ref No" 
            variant="outlined" 
            name="transaction_No" 
            type="text" 
            // inputProps={{ minLength: 3,maxLength: 50 }}
            onChange={handleInput} 
            required={true}
            // value={foodInfo.foodTitle ||""}  
          />
          
          <TextField
            id="ac no"
            label="Money send from" 
            variant="outlined" 
            name="sentMobileAc" 
            type="text" 
            inputProps={{ minLength: 3,maxLength: 50 }}
            onChange={handleInput} 
            required={true}
            // value={foodInfo.foodTitle ||""}  
          />
          </>
         }
           */}
          
           
          
         
          {/* <Grid container justify="flex-end">
          
            <Button onClick={()=>handleDisagree(false)} color="primary">
              {dialogInfo && dialogInfo.btnNo}
            </Button>
          
            <Button type='submit'  color="primary" disabled={isDisable}>
              {dialogInfo && dialogInfo.btnYes} 
            </Button>
          </Grid> */}

          {/* </form> */}
          
        </DialogActions>

        {/* <Button onClick={()=>{handleDialog(false); window.location.reload()}} color="primary">
              cancel
        </Button> */}
        
      </Dialog>
    </Grid>
  );
}


export default ControlDialog