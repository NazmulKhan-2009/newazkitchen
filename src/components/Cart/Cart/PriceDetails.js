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

// const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth:"25rem",
    
    
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

  

  return (
    <Grid item md={11}>
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
            <TableCell align="right">400</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">40</TableCell>
            <TableCell align="right">440</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Delivery Cost</TableCell>
            <TableCell align="right">50</TableCell>
            <TableCell align="right">520</TableCell>
          </TableRow>

          <TableRow>
           
            <TableCell align="center" colSpan={2}>Total</TableCell>
            <TableCell align="right">600</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

   
  </Grid> 
  );
}

export default PriceDetails