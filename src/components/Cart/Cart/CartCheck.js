import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:'1rem',
    
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 500,
  },
  
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  cartSide:{
   margin: 'auto',
   justifyContent: 'center',
   paddingRight:"10px"
   // maxHeight:"70vh",
   // overflow: "scroll"
  },
  header:{
   textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
   color:"#fd5c63",
   marginBottom:"3rem",
   
  }
 
}));
const CartCheck = ({handlePlaceOrder,confirmCart,setConfirmCart}) => {
 const [cartItem, setCartItem]=useContext(UserContext)
//  const [confirmBtn, setConfirmBtn]=useState(false)
 const classes = useStyles();

 

 const handleRemove=(foodTitle,index)=>{
  let cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
  let filterItem=cartInfo.filter(cartInfo=>cartInfo.title !== foodTitle)
  localStorage.setItem("cartInfo", JSON.stringify(filterItem))
  const remainItem=JSON.parse(localStorage.getItem('cartInfo'))
  if(remainItem.length<1){
    localStorage.removeItem("cartInfo");
  }
  setCartItem(remainItem)
}

const handleCartConfirm=()=>{
  handlePlaceOrder(true)
  // setConfirmBtn(true)

}

 return (
  <Grid  item={true}  md={6} >
  <h3  className={classes.header}>Your Cart Details</h3>
  <Grid 
  className={classes.cartSide}
  style={cartItem.length> 3 ? {maxHeight:"60vh", overflow: "scroll"} :{}}
  >
     
   {cartItem.map((CartData,i)=>
   
    <div className={classes.root} key={i} >
    
      <Paper className={classes.paper}>
      
        <Grid container item={true} xs={12} >
          <Grid item={true} container style={{margin:"auto"}} xs={4} md={3}>
            
              <img className={classes.img} alt="complex" src={CartData.image} />
            
          </Grid>
          <Grid container item  xs={6} md={6}>
            
             <Grid>
                <Typography gutterBottom  style={{ cursor: 'pointer',color:'blue' }} >
                  {CartData.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Quantity: {CartData.quantity}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  Price:BDT {CartData.total}
                </Typography>
                {!confirmCart ?
                  <Typography variant="body2" style={{ cursor: 'pointer',color:'red' }} onClick={()=>handleRemove(CartData.title,i)}>
                  Remove
                </Typography>
                :
                <Typography variant="body2" style={{color:'red' }}>
                  {`(${CartData.quantity} x ${CartData.price}) = ${CartData.quantity*CartData.price}`}
                </Typography>
                }
                

                
            </Grid>
                 
          </Grid>
        </Grid>
      </Paper>
    </div>

    )}
    
    </Grid>
    {!confirmCart ? 
      <div style={{maxWidth:'15rem',paddingTop:'1rem'}}>
    <Fab
          variant="extended"
          size="medium"
          color="secondary"
          aria-label="add"
          onClick={handleCartConfirm}
          // className={classes.margin}
        >
          {/* <NavigationIcon className={classes.extendedIcon} /> */}
          <img src='https://media3.giphy.com/media/Ply1nOFdlZZsLTz6mr/giphy.gif' alt=""  style={{maxWidth:"13%"}}/>
          <span style={{paddingLeft:"10px"}}>Confirm Cart</span> 
        </Fab>
    </div>
    :
    <ArrowBackIcon
      onClick={()=>handlePlaceOrder(false)}
      // onClick={()=>window.location.reload()}
    />
    }
    

    </Grid>
 );
};

export default CartCheck;