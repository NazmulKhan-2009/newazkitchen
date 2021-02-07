import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      minWidth: '30ch',
    },
  },
}));

const DeliveryDetails=()=> {
  const classes = useStyles();
  const [deliveryInfo,SetDeliveryInfo]=useState({})
  
 
  
  
  // console.log(deliveryInfo)

  const handleSubmit=(e)=>{
     e.preventDefault()
    console.log(deliveryInfo)
    sessionStorage.setItem("deliveryInfo", JSON.stringify(deliveryInfo))
    // localStorage.removeItem('cartInfo')
    SetDeliveryInfo({})
  }

  const handleInput=e=>{   
    SetDeliveryInfo({...deliveryInfo,[e.target.name]:e.target.value})
  }

  return (
    <Grid>
      <h3
        style={{
          textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
          color:"#fd5c63",
          // marginBottom:"3rem",
          
          }}
      > Delivery Address</h3>
      <form  className={classes.root} autoComplete="on" onSubmit={handleSubmit}>
        
        <TextField 
          required={true}
          id="emailInput" 
          label="Your Email" 
          variant="outlined" 
          name="email" 
          type="email"           
          onChange={handleInput}           
          value={deliveryInfo.email ||""}
        />
        <TextField 
          id="cellInput" 
          label="Your Cell" 
          inputProps={{ minLength: 11,maxLength: 11 }}
          variant="outlined" 
          name="cell" 
          type="text" 
          onChange={handleInput} 
          required={true}
          value={deliveryInfo.cell ||""} 
          
        />
        <TextField
          id="addressInput"
          label="Your Address" 
          variant="outlined" 
          name="address" 
          type="text" 
          onChange={handleInput} 
          required={true}
          value={deliveryInfo.address ||""}  
        />
        <TextField
          id="insInput"
          label="Additional Instruction" 
          variant="outlined" 
          name="instruction"
          type="text" 
          onChange={handleInput} 
          value={deliveryInfo.instruction ||""} 
        />
        <Button variant="outlined" color="secondary" type="submit">
          Go to Payment
        </Button>
        
      </form>
      
      
    </Grid>
  );
}

export default DeliveryDetails;