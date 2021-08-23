import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import WaitingOrder from '../../../../Cart/Cart/WaitingOrder';
import { Badge, Button, Grid } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


//!Button
import {withStyles} from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import { green, purple, red, yellow , orange , lightBlue} from '@material-ui/core/colors';
import { useEffect } from 'react';
import EventCancelDialog from './EventCancelDialog';
import { UserContext } from '../../../../../App';
import loaderImg from '../../../../../images/loader/loader.gif'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const ReceivedButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText( orange[500]),
    backgroundColor: purple[300],
    textTransform: "Capitalize",
    width:100
    // '&:hover': {
    //   backgroundColor: purple[300],
    // },
  },
}))(Button);
const PendingButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText( orange[500]),
    backgroundColor: lightBlue[400],
    textTransform: "Capitalize",
    width:100
    
  },
}))(Button);
const ClosedButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText( lightBlue[500]),
    backgroundColor: orange[400],
    textTransform: "Capitalize",
    width:100
    
  },
}))(Button);

const CancelButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText( orange[500]),
    backgroundColor: red[800],
    textTransform: "Capitalize",
    width:100
    
  },
}))(Button);

// const useStylesBtn = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(),
//   },
// }));


// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function EventTable({event}) {

  const {loader,setLoader,canceledEvent}= useContext(UserContext)
  // console.log(event)
  const classes = useStyles();
  // const classesBtn = useStylesBtn();
  const [reverse, setReverse]=useState(true)
  const [dispEvent, setDispEvent]=useState(false)
  // const [open, setOpen] = useState(false);
const [change, setChange]=useState(false)

  const [open, setOpen] = React.useState(false);
  const [eventData, setEventData] = React.useState('');

  const dialogOpen = (open,eventId) => {
    setOpen(open);
    setEventData(eventId)
  };

  const dialogClose = (close) => {
    setOpen(close);
  };



  // useEffect(()=>{
  //   setDispEvent(true)
  // },[event.length])


  const loading=(bool)=>{
    setChange(true)
  }

  // useEffect(()=>{
  //   if(canceledEvent){
  //     setLoader(false)
  //   }
    
  // },[])
  // const handleClickOpen = (open) => {
  //   setOpen(open);
  // };

  
 

  return (
    <>
    
    {event?.length ?
    
    <TableContainer component={Paper}>
    
      <Table className={classes.table} size="small" aria-label="a dense table">
     
        <TableHead>
       
          <TableRow >
            <TableCell>Event entry</TableCell>
            <TableCell>Event Type</TableCell>
            <TableCell>Event Held on</TableCell>
            <TableCell>Event status</TableCell>
            
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
       
        </TableHead>
          
         <TableBody>
          {event?.map((item) => (
            <TableRow key={Math.random()}>
            <TableCell >{item.created_at.slice(0,10)}</TableCell>
              <TableCell component="th" scope="row">
                {item.eventType}
              </TableCell>
              <TableCell >{item.eventTime}</TableCell>
              
            

              <TableCell>
              {item.status==="received" && <ReceivedButton>{item.status}</ReceivedButton> || 
              item.status==="pending" && <PendingButton>{item.status}</PendingButton> || 
              item.status==="closed" && <ClosedButton>{item.status}</ClosedButton> ||
              item.status==="cancel" && <CancelButton>{item.status}</CancelButton> }

              <Badge title="Delete Event" style={{cursor:'pointer'}}><DeleteForeverIcon color="secondary" onClick={()=>dialogOpen(true,item._id)}/></Badge>
              </TableCell>

              {/* <TableCell>{change && "Loading...."}</TableCell> */}

              {/* <TableCell>{item.status!=="cancel" && canceledEvent._id!==item._id && loader ?
              <img src={loaderImg} alt=""/>:""
              }</TableCell>  */}

              {
                item.status!=="cancel" && item._id===eventData  && loader ?   <TableCell><img src={loaderImg} alt=""/> </TableCell>:
                <TableCell></TableCell>
              }
             
              {
                console.log('item==> '+item._id)
                
              }
             
              {
                console.log('event==> '+eventData)
                
              }
             

            </TableRow>
          ))}
        </TableBody>
      </Table>
    
     
    </TableContainer>
    
    
    
     

:<div style={{textAlign:'center'}}>
    <img src="https://i.pinimg.com/originals/ec/d6/bc/ecd6bc09da634e4e2efa16b571618a22.gif" alt=''/>       
    </div>

    }
    <EventCancelDialog open={open} dialogClose={dialogClose} eventData={eventData} loading={loading}/>
    </>
  );
}
