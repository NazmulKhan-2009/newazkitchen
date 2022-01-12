import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import DeliveryDetails from './DeliveryDetails/DeliveryDetails';
import PriceDetails from './PriceDetails';

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
   paddingRight:"0px"
  },
  header:{
   textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
   color:"#fd5c63",
   marginBottom:"3rem",
  }
}));
const CartCheck = ({handlePlaceOrder,confirmCart,setConfirmCart,handleDialog}) => {
 const {cartItem, setCartItem}=useContext(UserContext)
 const classes = useStyles();
 const handleRemove=(foodTitle,index,id)=>{
    let cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
    let filterItem=cartInfo.filter(cartInfo=>cartInfo._id !== id)
    localStorage.setItem("cartInfo", JSON.stringify(filterItem))
    const remainItem=JSON.parse(localStorage.getItem('cartInfo'))

    if(remainItem.length<1){
      localStorage.removeItem("cartInfo");
    }
    setCartItem(remainItem)
};

  const handleCartConfirm=()=>{
    handleDialog(true)
    handlePlaceOrder(true)
  };


 return (
  <Grid  item={true}  md={6} xs={12} sm={12} className="cart_details_wrapper">
    {/* <h5  className={classes.header}>Your Cart Details</h5> */}
    <Grid 
      className={classes.cartSide}
      style={cartItem.length> 2 ? {maxHeight:"40vh", overflow: "scroll"} :{}}>     
        {cartItem.map((CartData,i)=>
          <div className={classes.root} key={i} >  
            <Paper className={classes.paper} elevation={5}>
              <Grid container item={true} xs={12} >
                <Grid item={true} container style={{margin:"auto"}} xs={4} md={3}>
                  <img className={classes.img} alt="complex" src={CartData.imageUrl} />  
                </Grid>
                <Grid container item  xs={6} md={6}>         
                  <Grid>
                      <Typography gutterBottom  style={{ cursor: 'pointer',color:'blue' }} >
                        {CartData.foodTitle}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Quantity: {CartData.quantity}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Price:BDT {CartData.total}
                      </Typography>
                      {!confirmCart ?
                        <Typography variant="body2" style={{ cursor: 'pointer',color:'red' }} onClick={()=>handleRemove(CartData.foodTitle,i,CartData._id)}>
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
    <PriceDetails/>
    {/* <DeliveryDetails/> */}
      {/* {!confirmCart ? 
      <div style={{maxWidth:'15rem',paddingTop:'1rem'}}>
        <Fab
              variant="extended"
              size="medium"
              color="secondary"
              aria-label="add"
              onClick={handleCartConfirm}
            >  
            <span style={{paddingLeft:"10px"}}>Confirm Cart</span> 
        </Fab>
      </div>
      :
      <ArrowBackIcon
        onClick={()=>handlePlaceOrder(false)}
      />
      }  */}
  </Grid>
 );
};

export default CartCheck;