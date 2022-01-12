import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { Grid } from '@material-ui/core';
import "./priceDetails.css"
import DeliveryDetails from './DeliveryDetails/DeliveryDetails';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth:"25rem",  
  },
}));

const PriceDetails=()=>{
  const classes = useStyles();
  const {cartItem, setCartItem}=useContext(UserContext)
  const priceData=cartItem.map(data=>data.total)
  const inTotalPrice=priceData.reduce((pv,cv)=>pv+cv)
  const vat=Math.round(inTotalPrice*.05) 
  const deliveryCost=inTotalPrice>1000?50:80
  const havetoPay=inTotalPrice+vat+deliveryCost

  sessionStorage.setItem("totalPrice", JSON.stringify(havetoPay))
  
  return (
  <Grid item md={12} xs={12} sm={12}> 
    <Grid className="price_details_wrapper" >
      <div className="price_type">
        <div className="d-flex flex-column justify-content-between" style={{height:"20vh"}}>
          <h6>Subtotal</h6>
          <h6>vat (5%)</h6>                  
          <h6>Delivery Cost</h6>
        </div>      
        <div className="d-flex flex-column justify-content-between value">
          <h6>{inTotalPrice}</h6>
          <h6>{vat}</h6>           
          <h6>{deliveryCost}</h6>
        </div>              
      </div> 
      <div className="total">
        <h6>Total</h6>
        <h6>{havetoPay}</h6>
      </div>    
    </Grid>
    {/* <DeliveryDetails/> */}
  </Grid> 
  );
}



export default PriceDetails