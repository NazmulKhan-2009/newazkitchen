import { Button, FormControlLabel, Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './DeliveryDetails.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      minWidth: '15rem',   
    },
    
  },
}));

const DeliveryDetails=()=> {
  const classes = useStyles();
  const [deliveryInfo,SetDeliveryInfo]=useState({})
  const [selectedValue, setSelectedValue] =useState('');
  const [gender, setGender]=useState("")
  let history = useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault()
    sessionStorage.setItem("deliveryInfo", JSON.stringify({...deliveryInfo,totalPrice}))
    SetDeliveryInfo({})
    history.push("/payment")
  }
  const handleInput=e=>{ 
    setSelectedValue(e.target.value);  
    SetDeliveryInfo({...deliveryInfo,[e.target.name]:e.target.value})
  }

  const handleGender=(e)=>{
    setGender(e.target.value)
    SetDeliveryInfo({...deliveryInfo,[e.target.name]:e.target.value})
  }
  const totalPrice=JSON.parse(sessionStorage.getItem('totalPrice'))
  console.log(selectedValue)

  
  return (
    <Grid container item md={6} xs={12} sm={12} className="delivery_form">
      
      <form  className={classes.root} autoComplete="on" onSubmit={handleSubmit}>
        <div className="form_row">   
          <FormControlLabel value="Mr" control={<Radio  required={true} size="small" name="gender" value="Mr" onChange={handleGender} checked={gender === 'Mr' && 'checked'} color="primary" />} label="Mr" />

          <FormControlLabel value="Mrs" control={<Radio required={true} size="small" name="gender" value="Mrs" onChange={handleGender} checked={gender ==='Mrs' && 'checked'} color="primary"/>} label="Mrs" />    
        </div>
       <div className="field_wrapper">
        <TextField 
          required={true}
          id="emailInput" 
          label="Your Name" 
          variant="outlined" 
          name="name" 
          type="text"           
          onChange={handleInput}           
          value={deliveryInfo.name ||""}   
          className="field"    
        />   
        <TextField 
          required={true}
          id="cellInput" 
          label="Your Contact" 
          inputProps={{ minLength: 11,maxLength: 11 }}
          variant="outlined" 
          name="contact" 
          type="text" 
          onChange={handleInput}           
          value={deliveryInfo.contact ||""}  
          className="field"         
        />  
          
        <TextField
          id="addressInput"
          label="Your Address in details" 
          variant="outlined" 
          name="address" 
          type="text" 
          onChange={handleInput} 
          required={true}
          value={deliveryInfo.address ||""}  
          className="field"
        />
        <TextField       
          id="insInput"
          label="Additional Instruction" 
          variant="outlined" 
          name="instruction"
          type="text" 
          onChange={handleInput} 
          value={deliveryInfo.instruction ||""} 
          className="field"
        />
        </div>
        <div style={{textAlign: "center",paddingTop:"30px"}}>
          <Button variant="outlined" color="secondary" type="submit"  >
          Go to Payment
          </Button>
        </div>  
        
      </form>
      
      
    </Grid>
  );
}

export default DeliveryDetails;