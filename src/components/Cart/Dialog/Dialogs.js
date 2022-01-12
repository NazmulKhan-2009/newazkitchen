import { Badge, Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import { orderedData } from '../../DataManagement';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Dialogs=({dial,handleAgree,dialogInfo,handleDisagree,dbOrderedInfo,fromPayVerify})=>{

  const [purchasedInfo,setPrchasedInfo]= useState({}) 
  const {setOrderInfo,setOrderSync}=useContext(UserContext)
  const [isDisable, setIsDisable]=useState(false)
  const cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(fromPayVerify==="processDialog"){
      // e.preventDefault()
    if(dialogInfo.title!=='Payment Process....'){

    const userInfo=JSON.parse(sessionStorage.getItem("userInfo"))
    const email=userInfo.userEmail
    const order_status='processing'
    const paymentCondition="unverified"
    const orderedDetails=await orderedData(email,dialogInfo.title,order_status,purchasedInfo,paymentCondition)
    setOrderInfo(orderedDetails)
     dialogInfo.purchaseDone(true)
     setOrderSync(Math.random())
    }}  else{
      alert('verifed')
    } 
    setIsDisable(true)
    handleAgree(false,true)
}

  const handleInput=e=>{   
    setPrchasedInfo({...purchasedInfo,[e.target.name]:e.target.value})}


  return (
    <div> 
      <Dialog
        open={dial}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"  
      >
        <DialogTitle id="alert-dialog-slide-title">{dialogInfo && dialogInfo.title}</DialogTitle>
      {fromPayVerify==="processDialog" && <Grid container justify="center">
          {cartInfo!==null &&  cartInfo.map((purchasedFoodInfo)=> 
          <Grid key={purchasedFoodInfo._id} item xs={3}> 
            <StyledBadge badgeContent={purchasedFoodInfo.quantity} color="secondary">       
            <ShoppingCartIcon />
            </StyledBadge>     
            <img  src={purchasedFoodInfo.imageUrl} alt="" width="70%" style={{borderRadius:'50px'}}/> 
          </Grid>              
          )
          }
      </Grid>
      }
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialogInfo && dialogInfo.content}<span style={{textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
            color:"#fd5c63"}}>{dialogInfo && `${dialogInfo.payment}/- `}</span> {dialogInfo && dialogInfo.contentEnd}
          </DialogContentText>
        </DialogContent>  

        <DialogActions>
          <form   autoComplete="on" onSubmit={handleSubmit}>   
            {dialogInfo.inputOption==='do' &&
            <>
              <TextField
                id="transaction no"
                label="Transaction Ref No" 
                variant="outlined" 
                name="transaction_No" 
                type="text" 
                onChange={handleInput} 
                required={true} 
              />  
              <TextField
                id="ac no"
                label="Money send from" 
                variant="outlined" 
                name="sentMobileAc" 
                type="text" 
                inputProps={{ minLength: 3,maxLength: 50 }}
                onChange={handleInput} 
                required={true}
              />
            </>
            }
            <Grid container justify="flex-end">      
              <Button onClick={()=>handleDisagree(false)} color="primary">
                {dialogInfo && dialogInfo.btnNo}
              </Button>       
              {/* <Button type='submit'  color="primary" disabled={isDisable}>
                {dialogInfo && dialogInfo.btnYes} 
              </Button> */}
              <Button type='submit'  color="primary">
                {dialogInfo && dialogInfo.btnYes} 
              </Button>
            </Grid>
          </form>       
        </DialogActions>   
    </Dialog>
  </div>
  );
}



export default Dialogs