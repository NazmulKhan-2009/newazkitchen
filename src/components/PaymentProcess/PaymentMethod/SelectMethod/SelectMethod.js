import { FormControlLabel } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import React from 'react';

const SelectMethod = ({handlePayment,handleDialog,purchaseDone,purchaseNotify}) => {

 const [selectedValue, setSelectedValue] = React.useState('');
 const handleInput=(e)=>{
  setSelectedValue(e.target.value);
  handlePayment(e.target.value,true)
  if(e.target.value==='Cash On Delivery'){
    handleDialog(true,{
      title:'Cash on Delivery....',
      content:'Please Pay ',
      contentEnd:'once you received the product. ',
      btnYes:"Confirm",
      btnNo:"Change Mind",
      inputOption:"dont",
      purchaseDone:purchaseDone
      })
  }
 }

 return (
  
    <div style={{width:"100%"}}>
        <FormControlLabel value="Card Payment" control={<Radio required={true} size="small" name="paymentBy" value="Card Payment" onChange={handleInput} checked={selectedValue === 'Card Payment'} color="primary" />} label="Card Payment" />

        <FormControlLabel value="Mobile Transfer" control={<Radio required={true} size="small" name="paymentBy" value="Mobile Transfer" onChange={handleInput} checked={selectedValue === 'Mobile Transfer'} color="primary"/>} label="Mobile Transfer" />

           
        <FormControlLabel value="Cash On Delivery" control={<Radio required={true} size="small" name="paymentBy" value="Cash On Delivery" onChange={handleInput} checked={selectedValue === 'Cash On Delivery'} color="primary"/>} label="Cash On Delivery" />
        
    </div>
   
  
 );
};

export default SelectMethod;