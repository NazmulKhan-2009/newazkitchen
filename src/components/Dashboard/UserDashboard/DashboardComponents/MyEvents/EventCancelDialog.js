// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Slide from '@material-ui/core/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function EventCancelDialog({open,dialogClose}) {
//   // const [open, setOpen] = React.useState(false);

//   // const handleClickOpen = (open) => {
//   //   setOpen(open);
//   // };

//   // const handleClose = () => {
//   //   setOpen(false);
//   // };

//   return (
//     <div>
//       {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Slide in alert dialog
//       </Button> */}
//       <Dialog
//         open={open}
//         TransitionComponent={Transition}
//         keepMounted
//         // onClose={handleClose}
//         aria-labelledby="alert-dialog-slide-title"
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle id="alert-dialog-slide-title">Have You confirmed to Cancel your Events?</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
            
//             <textarea name="" id="" cols="50" rows="2" placeholder="Reason for cancel events..."></textarea>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={()=>dialogClose(false)} color="primary">
//             Yes, I Confirm
//           </Button>
//           <Button onClick={()=>dialogClose(false)} color="primary">
//             Change mind
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }








// EventCancelDialog
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckIcon from '@material-ui/icons/Check';
import { useState } from 'react';
import { eventCancel } from '../../../../DataManagement';
import { UserContext } from '../../../../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    '& > * + *': {
      marginTop: theme.spacing(2),
      
    },
  },
}));

export default function EventCancelDialog({open,dialogClose,eventData,loading}) {
  const classes = useStyles();
 const {setUserData, setProfileSync,setLoader,setCanceledEvent}= useContext(UserContext)
  
console.log(eventData)

const handleEventCancel=()=>{
  setLoader(true)
  eventCancel(eventData).then((res)=> console.log(res))
  setProfileSync(Math.random())
  dialogClose(false)
  loading(true)
}


  

  return (
<>
    { open && 
    <div className={classes.root} style={{position:'absolute',top:'40%',left:'40%'}}>
      <Alert variant="filled" severity="error">
      Have You confirmed to Cancel your Events?
      <div>
        <CheckIcon onClick={handleEventCancel}/> 
        <HighlightOffIcon onClick={()=>dialogClose(false)} />
      </div>
      
      </Alert>
{/*       
      <Button onClick={()=>dialogClose(false)} color="primary">
            Change mind
        </Button> */}
    </div>
    }
    </>
  );
}
