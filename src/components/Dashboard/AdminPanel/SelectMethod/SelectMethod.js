import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import {FormControlLabel, Grid, Tooltip} from '@material-ui/core';
// import ControlDialog2 from '../../../ControlDialog/ControlDialog2';
import ControlDialog from '../ControlDialog/ControlDialog';
// import ControlDialog from '../../../ControlDialog/ControlDialog';

const SelectMethod = ({value,name,handleInput,label,checked,adminForm}) => {
//!console.log("SelectMethod renedred")
 const [selectedValue, setSelectedValue] = React.useState('');
 const [dial, setDial]=useState(false)

 const handleDialog=(isClose)=>{
  setDial(isClose)
 }
//  const [select, setSelect]=useState(false)

//  const handleInput=(e)=>{
//   setSelectedValue(e.target.value);
//   // setSelect(true)
//   handlePayment(e.target.value,true)
//   // console.log(e.target.value)
//   if(e.target.value==='Cash On Delivery'){
//     handleDialog(true,{
//       title:'Cash on Delivery....',
//       content:'Please Pay ',
//       // payment:totalPrice,
//       contentEnd:'once you received the product. ',
//       btnYes:"Confirm",
//       btnNo:"Change Mind",
//       inputOption:"dont",
//       purchaseDone:purchaseDone
//       // purchaseNotify:purchaseNotify  //????????
//       })
//   }
//  }

 return (
  
  <>
        {/* <FormControlLabel value="Card Payment" control={<Radio required={true} size="small" name="paymentBy" value="Card Payment" onChange={handleInput} checked={selectedValue === 'Card Payment'} color="primary" />} label="Card Payment" />

        <FormControlLabel value="Mobile Transfer" control={<Radio required={true} size="small" name="paymentBy" value="Mobile Transfer" onChange={handleInput} checked={selectedValue === 'Mobile Transfer'} color="primary"/>} label="Mobile Transfer" /> */}

        {/* //! no need bellow code */}
        {/* <Tooltip title="Service not Available Yet" placement='top' aria-label="add">
        <FormControlLabel value="Cash On Delivery" control={<Radio required={true} size="small" name="paymentBy" value="Cash On Delivery" onChange={handleInput} disabled={true} checked={selectedValue === 'Cash On Delivery'} color="primary"/>} label="Cash On Delivery" />
        </Tooltip> */}

        
        {/* <FormControlLabel value={value} control={<Radio required={true} size="small" name={name} value={value} onChange={()=>handleInput(true,name,value)} checked={checked} color="primary"/>} label={label} /> */}
        
        <FormControlLabel value={value} control={<Radio required={true} size="small" name={name} value={value} onChange={()=>setDial(true)} checked={checked} color="primary"/>} label={label} />
        
      {<ControlDialog
        handleDialog={handleDialog}
        dial={dial}
        formTitle={name}
        adminForm={adminForm}
        
      />}
        
    </>
   
  
 );
};

export default SelectMethod;