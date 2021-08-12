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
  let history = useHistory();
 
  
  
  
  // //console.log(deliveryInfo)

  const handleSubmit=(e)=>{
     e.preventDefault()
    //console.log(deliveryInfo)
  // //console.log(totalPrice)
  sessionStorage.setItem("deliveryInfo", JSON.stringify({...deliveryInfo,totalPrice}))
    // localStorage.removeItem('cartInfo')
    SetDeliveryInfo({})
    // history.push("/dashboard/payment")
    history.push("/payment")
  }

  const handleInput=e=>{ 
    setSelectedValue(e.target.value);  
    SetDeliveryInfo({...deliveryInfo,[e.target.name]:e.target.value})
  }

  const totalPrice=JSON.parse(sessionStorage.getItem('totalPrice'))
  //console.log(totalPrice)

  const [selectedValue, setSelectedValue] = React.useState('');

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <Grid>
      <h3
        style={{
          textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
          color:"#fd5c63",
          margin: '1rem'
          
          // marginBottom:"3rem",
          
          }}
      > Delivery Address</h3>
      <form  className={classes.root} autoComplete="on" onSubmit={handleSubmit}>
      <div>
        <FormControlLabel value="Mr" control={<Radio required={true} size="small" name="gender" value="Mr" onChange={handleInput} checked={selectedValue === 'Mr'} color="primary" />} label="Mr" />

        <FormControlLabel value="Mrs" control={<Radio required={true} size="small" name="gender" value="Mrs" onChange={handleInput} checked={selectedValue === 'Mrs'} color="primary"/>} label="Mrs" />
      </div>
      
        <TextField 
          required={true}
          id="emailInput" 
          label="Your Name" 
          variant="outlined" 
          name="name" 
          type="text"           
          onChange={handleInput}           
          value={deliveryInfo.name ||""}
          
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
        <Button variant="outlined" color="secondary" type="submit"  >
          Go to Payment
        </Button>
        
      </form>
      
      
    </Grid>
  );
}

export default DeliveryDetails;