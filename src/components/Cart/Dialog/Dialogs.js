import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useHistory } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Dialogs=({dial,handleAgree})=>{

  let history = useHistory();
  const handleDisagree = () => {
   
    history.push("/");
  };

  const totalPrice=JSON.parse(sessionStorage.getItem('totalPrice'))
  

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={dial}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleAgree}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Payment process...."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Before Next level of payment please be informed you have to Pay by Bkash as 50% of your total price about <span style={{textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
        color:"#fd5c63"}}>{totalPrice*.5}/=</span> and rest of price will be collected on delivery. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
          <Button onClick={handleDisagree} color="primary">
            Don't Proceed
          </Button>
          <Button onClick={()=>handleAgree(false)} color="primary">
            Proceed 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default Dialogs