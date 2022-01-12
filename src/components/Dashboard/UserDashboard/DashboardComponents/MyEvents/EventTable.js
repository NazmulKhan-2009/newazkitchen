import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Badge, Button, Grid } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {withStyles} from '@material-ui/core/styles';
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
export default function EventTable({event}) {

  const {loader,setLoader,canceledEvent}= useContext(UserContext)
  const classes = useStyles();
  const [reverse, setReverse]=useState(true)
  const [dispEvent, setDispEvent]=useState(false)
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
  const loading=(bool)=>{
    setChange(true)
  }


  return (
    <> 
      {event?.length ?  
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">  
            <TableHead>      
              <TableRow>
                <TableCell>Event entry</TableCell>
                <TableCell>Event Type</TableCell>
                <TableCell>Event Held on</TableCell>
                <TableCell>Event status</TableCell>
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
                    <Badge title="Delete Event" style={{cursor:'pointer'}}><DeleteForeverIcon color="secondary" onClick={()=>dialogOpen(true,item._id)}/>
                    </Badge>
                  </TableCell>
                  {
                    item.status!=="cancel" && item._id===eventData  && loader ?   <TableCell><img src={loaderImg} alt=""/> </TableCell>:
                    <TableCell></TableCell>
                  }
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
        <EventCancelDialog open={open} dialogClose={dialogClose} eventData={eventData} loading={loading}/>
    </>
  );
}
