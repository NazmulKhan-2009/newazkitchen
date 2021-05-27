import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useHistory } from 'react-router-dom';
import { Badge, Grid, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { orderedData } from '../../DataManagement';
import { UserContext } from '../../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Dialogs=({dial,handleAgree,dialogInfo,handleDisagree,dbOrderedInfo})=>{

  const [purchasedInfo,setPrchasedInfo]= useState({}) 
  //? const [orderInfo,setOrderInfo]= useState({}) 
  const {orderInfo,setOrderInfo,loginInfo}=useContext(UserContext)

  const [isDisable, setIsDisable]=useState(false)

  // console.log(orderInfo)
  // let history = useHistory();

  // const handleDisagree = (bool) => {
    
    
  //     // history.push("/")
    
  // };

  // const totalPrice=JSON.parse(sessionStorage.getItem('totalPrice'))

  const cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

  

  // ! const handleSubmit=(e)=>{
  //    e.preventDefault()
  //    if(dialogInfo.title!=='Payment Process....'){
  //     const deliveryInfo=JSON.parse(sessionStorage.getItem('deliveryInfo'))
  //     sessionStorage.setItem('purchasedInfo',JSON.stringify({payment_by:dialogInfo.title,...purchasedInfo,...deliveryInfo}))

  //     dialogInfo.purchaseDone(true)
  //    }   
     
  //    handleAgree(false,true)
   
  // }


  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(dialogInfo.title!=='Payment Process....'){
    //  const deliveryInfo=JSON.parse(sessionStorage.getItem('deliveryInfo'))
    //!  sessionStorage.setItem('purchasedInfo',JSON.stringify({payment_by:dialogInfo.title,...purchasedInfo,...deliveryInfo}))

    // const email="nazmulustc09@gmail.com";
    // const email=loginInfo.data.user_email
    const userInfo=JSON.parse(sessionStorage.getItem("userInfo"))
    const email=userInfo.userEmail
    console.log(email)
    const order_status='processing'
    const orderedDetails=await orderedData(email,dialogInfo.title,order_status,purchasedInfo)
    // dbOrderedInfo(orderedDetails)
    setOrderInfo(orderedDetails)
     dialogInfo.purchaseDone(true)
    }   
    setIsDisable(true)
    handleAgree(false,true)
  
 }

  const handleInput=e=>{   
    setPrchasedInfo({...purchasedInfo,[e.target.name]:e.target.value})

  }


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
        <DialogTitle id="alert-dialog-slide-title">{dialogInfo && dialogInfo.title}</DialogTitle>
        <Grid container justify="center">
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
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialogInfo && dialogInfo.content}<span style={{textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
        color:"#fd5c63"}}>{dialogInfo && `${dialogInfo.payment}/- `}</span> {dialogInfo && dialogInfo.contentEnd}
          </DialogContentText>
        </DialogContent>
        
        
        
        <DialogActions>
        
        
        
        {/* {dialogInfo.inputField} */}
        

          {/* <Button onClick={()=>handleDisagree(false)} color="primary">
            {dialogInfo && dialogInfo.btnNo}
          </Button>
          <Button onClick={()=>handleAgree(false,true)} color="primary">
            {dialogInfo && dialogInfo.btnYes} 
          </Button> */}
          
          <form   autoComplete="on" onSubmit={handleSubmit}>
          
           
          
         {dialogInfo.inputOption==='do' &&
         <>
          <TextField
            id="transaction no"
            label="Transaction Ref No" 
            variant="outlined" 
            name="transaction_No" 
            type="text" 
            // inputProps={{ minLength: 3,maxLength: 50 }}
            onChange={handleInput} 
            required={true}
            // value={foodInfo.foodTitle ||""}  
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
            // value={foodInfo.foodTitle ||""}  
          />
          </>
         }
          
          
          
          
         
          <Grid container justify="flex-end">
          
            <Button onClick={()=>handleDisagree(false)} color="primary">
              {dialogInfo && dialogInfo.btnNo}
            </Button>
          
            <Button type='submit'  color="primary" disabled={isDisable}>
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