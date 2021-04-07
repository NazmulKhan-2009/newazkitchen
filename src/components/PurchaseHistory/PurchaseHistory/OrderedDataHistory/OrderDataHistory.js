import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Grid } from '@material-ui/core';
import { orderHandleImg } from '../../../CommonFunction';
import './OrderDataHistory.css'


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       { date: '2020-01-05', customerId: '11091700', amount: 3 },
//       { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
//     ],
//   };
// }

function Row({item}) {
  const { email,order_Time,orderId,order_status,delivery_Info,ordered_Data} = item;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className="table_row">
        <TableCell >
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center" >
          {orderId}
        </TableCell>
        <TableCell align="center" >{delivery_Info.totalPrice}</TableCell>
        <TableCell align="center">{email}</TableCell>
        <TableCell align="center" >{order_Time}</TableCell>
        <TableCell align="center"  className="order_img"><img src={orderHandleImg(order_status)} alt="" width="100%"/></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} >
              <Typography variant="h6" gutterBottom component="div" align="center">
                Order Break Down
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow className="cell_head">
                    <TableCell>Date</TableCell>                  
                    <TableCell align="left">Customer</TableCell>
                    <TableCell >Amount</TableCell>
                    <TableCell>Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ordered_Data.map((item) => (
                    <TableRow key={item._id} className="history_data">
                      <TableCell align="left">
                      <img src={item.imageUrl} alt="" width="40%"/>
                      {/* {item.quantity} */}
                      </TableCell>
                      <TableCell align="left">{item.quantity}</TableCell>
                      <TableCell align="left">{item.quantity * item.price}</TableCell>
                      <TableCell align="left">{item.quantity}</TableCell>
                      {/* <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell> */}
                    </TableRow>
                    
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

export default function OrderDataHistory({orderHistoryData}) {
 //todo console.log(orderHistoryData)
  return (
   <Grid container justify='center' >
   <Grid  item md={10} xs={11}>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" >
        <TableHead>
          <TableRow >
            {/* <TableCell colSpan={1}/> */}
            <TableCell align="center" colSpan={2} className="table_cell" >Order Id</TableCell>
            <TableCell align="center" className="table_cell" >Total Price</TableCell>
            <TableCell align="center" className="table_cell" >Payment Method</TableCell>
            <TableCell align="center" className="table_cell" >Contact</TableCell>
            <TableCell align="center" className="table_cell" >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderHistoryData.slice(0).reverse().map(item => (
            <Row key={item._id} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </Grid> 
   </Grid> 
  );
}
