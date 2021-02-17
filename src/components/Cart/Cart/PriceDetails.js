import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Fab, Grid } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../../../App';

// const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth:"25rem"  
  },
});

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow('Paperclips (Box)', 100, 1.15),
//   createRow('Paper (Case)', 10, 45.99),
//   createRow('Waste Basket', 2, 17.99),
// ];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const PriceDetails=()=>{
  const classes = useStyles();
  const [cartItem, setCartItem]=useContext(UserContext)

  

  const priceData=cartItem.map(data=>data.total)
  const inTotalPrice=priceData.reduce((pv,cv)=>pv+cv)
  const vat=Math.round(inTotalPrice*.05) 
  const deliveryCost=inTotalPrice>1000?50:80
  const havetoPay=inTotalPrice+vat+deliveryCost


  return (
    <Grid item md={11} >
    <h3
      style={{
        textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
        color:"#fd5c63",
        // marginBottom:"3rem",
        
        }}
     > Payment Details</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        
        <TableBody>
          

          <TableRow>
            <TableCell rowSpan={0} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{inTotalPrice}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Vat</TableCell>
            <TableCell align="right">5%</TableCell>
            <TableCell align="right">{vat}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Delivery Cost</TableCell>
            
            <TableCell align="right" colSpan={2}>{deliveryCost}</TableCell>
          </TableRow>

          <TableRow>
           
            <TableCell align="center" colSpan={2}>Total</TableCell>
            <TableCell align="right">{havetoPay}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

   
  </Grid> 
  );
}

export default PriceDetails