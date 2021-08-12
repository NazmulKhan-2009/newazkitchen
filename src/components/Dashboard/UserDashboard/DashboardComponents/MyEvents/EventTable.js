import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import WaitingOrder from '../../../../Cart/Cart/WaitingOrder';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function EventTable({event}) {
  console.log(event)
  const classes = useStyles();

  return (
    <>
    {event?.length ?
    <TableContainer component={Paper}>
    
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Event Type</TableCell>
            <TableCell>Event Time</TableCell>
            <TableCell>Event status</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>

         <TableBody>
          {event?.reverse().map((item) => (
            <TableRow key={Math.random()}>
              <TableCell component="th" scope="row">
                {item.eventType}
              </TableCell>
              <TableCell >{item.eventTime}</TableCell>
            <TableCell><Button variant="contained" color={item.status==="received" && "secondary" }>{item.status}</Button></TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </TableContainer>
    :
    <div style={{textAlign:'center'}}>
    <img src="https://i.pinimg.com/originals/ec/d6/bc/ecd6bc09da634e4e2efa16b571618a22.gif" alt=''/>       
    </div>
     }
    </>
  );
}
