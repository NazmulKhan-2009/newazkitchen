import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import {FormControlLabel, Tooltip} from '@material-ui/core';

const SelectMethod = ({handlePayment,handleDialog,purchaseDone,purchaseNotify}) => {

 const [selectedValue, setSelectedValue] = React.useState('');
//  const [select, setSelect]=useState(false)

 const handleInput=(e)=>{
  setSelectedValue(e.target.value);
  // setSelect(true)
  handlePayment(e.target.value,true)
  // console.log(e.target.value)
  if(e.target.value==='Cash On Delivery'){
    handleDialog(true,{
      title:'Cash on Delivery....',
      content:'Please Pay ',
      // payment:totalPrice,
      contentEnd:'once you received the product. ',
      btnYes:"Confirm",
      btnNo:"Change Mind",
      inputOption:"dont",
      purchaseDone:purchaseDone
      // purchaseNotify:purchaseNotify  //????????
      })
  }
 }

 return (
  
  <div style={{width:"100%"}}>
        <FormControlLabel value="Card Payment" control={<Radio required={true} size="small" name="paymentBy" value="Card Payment" onChange={handleInput} checked={selectedValue === 'Card Payment'} color="primary" />} label="Card Payment" />

        <FormControlLabel value="Mobile Transfer" control={<Radio required={true} size="small" name="paymentBy" value="Mobile Transfer" onChange={handleInput} checked={selectedValue === 'Mobile Transfer'} color="primary"/>} label="Mobile Transfer" />

        {/* <Tooltip title="Service not Available Yet" placement='top' aria-label="add">
        <FormControlLabel value="Cash On Delivery" control={<Radio required={true} size="small" name="paymentBy" value="Cash On Delivery" onChange={handleInput} disabled={true} checked={selectedValue === 'Cash On Delivery'} color="primary"/>} label="Cash On Delivery" />
        </Tooltip> */}

        
        <FormControlLabel value="Cash On Delivery" control={<Radio required={true} size="small" name="paymentBy" value="Cash On Delivery" onChange={handleInput} checked={selectedValue === 'Cash On Delivery'} color="primary"/>} label="Cash On Delivery" />
        
      </div>
   
  
 );
};

export default SelectMethod;