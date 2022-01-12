import { Button, Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import UIfx from 'uifx';
import { UserContext } from '../../../App';
// import bellAudio from './my-sounds/bell.mp3'
import favTone from '../../../mySounds/favtone.mp3';
import { addFavFood } from '../../DataManagement';
import { StarRated } from '../../Utility';
import './Food/Food.css'


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 600,
    '@media (max-width: 958px)' : {
      maxWidth: '100%',
      margin:"auto"      
    },  
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    cursor:"pointer",
    },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardStyle:{
    margin:"auto",
    padding:".5rem",
    marginTop:"20px",
    height:"auto",
    '&:hover':{
      cursor: "pointer",
      boxShadow: "0px 0px 17px 8px rgba(194,194,194,0.98)",
      transition: ".5s ease-in-out"
    } 
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -15,
    left:0,
    right:0,
    margin: '0 auto',
  },
  desc:{
    height:'100px'
  }
}));

const FoodCard=({item,ind,foodDet,count,size,dispRating,foodId})=>{
  const classes = useStyles();
  const {setCartItem}=useContext(UserContext)
  const [foodIdCount,setFoodIdCount]=useState({id:"",count:0})
  const [isFav,setIsFav]=useState(false)
  const {cartOpen, setCartOpen,setProfileSync,userData}=useContext(UserContext)
  const isfavoriteMarked=userData.favorite?.some(food=>food._id===item._id)

  console.log(item)
  
  let history=useHistory()
  const bell = new UIfx(
  // bellAudio,
  favTone,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }
)
const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
let avgRate=''
const totalRatedLen=item.reviews.filter(mark=>mark.rate>0)

if(item.reviews.length>0){
  const totRate=item.reviews.map(mark=>mark.rate)
  const tot=totRate.reduce((p,c)=>p+c) 
  avgRate=tot/totalRatedLen.length
}
  const handleCartAdd=(id)=>{
     
  if(foodIdCount.count>0 && id === foodIdCount.id){
    let cartInfo=[]
    const selectedFood={...item,quantity:foodIdCount.count,total:foodIdCount.count*item.price} 
    if(JSON.parse(localStorage.getItem('cartInfo'))){
      cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
      cartInfo=cartInfo.filter(cartInfo=>cartInfo._id!==id)
    }
    cartInfo.push(selectedFood)  
    localStorage.setItem("cartInfo", JSON.stringify(cartInfo))
    setCartItem(JSON.parse(localStorage.getItem('cartInfo')))
    setFoodIdCount({count:0})
    setCartOpen(!cartOpen)
  }
  }
  const handleCartCount=(id)=>{
    if(id === foodIdCount.id){
    setFoodIdCount({id:id,count:foodIdCount.count+1})
    }else{
    setFoodIdCount({id:id,count:0+1})
    }}
  const handleReduce=(id)=>{
    if(id === foodIdCount.id && foodIdCount.count>0){
      setFoodIdCount({id:id,count:foodIdCount.count-1})
    }}
  const foodRoute=(foodId)=>{
    history.push(`/foodspecification/${foodId}`)    
  }    
  const favClick=(foodId)=>{
    if(userInfo){
      // bell.play()
      setIsFav(true)
      addFavFood({foodId,email:userInfo.userEmail})
      setProfileSync(Math.random())
    }else{
      history.push('/login')
    }
  }

return ( 
  <Grid  item={true} xs={10}  sm={size?.sm||4} md={size?.sm||4}  lg={size?.lg||3} className={`${classes.cardStyle}`}>
    <Card className={classes.root}>
    <StarRated rating={avgRate} />
      <CardHeader
        avatar={
          <Avatar sizes="string" aria-label="recipe" className={classes.avatar} variant='circular' style={{width:'80px'}}>
            <span style={{fontSize:".8rem"}}>{item.price}/-</span> 
          </Avatar>}   
        action={
          <IconButton aria-label="settings">   
            <Badge title={isfavoriteMarked ? "Already in fav" : "Add to Fav"}>
              {isfavoriteMarked ?<FavoriteIcon color='secondary'/>:<FavoriteBorderIcon color='primary' onClick={()=>favClick(foodId)}/>}
            </Badge>           
          </IconButton>
          }
        title={item.foodTitle}       
      />    
      {item.imageUrl &&
      <CardMedia
        onClick={()=>foodRoute(item._id)}
        className={classes.media}
        image={item.imageUrl}
        title={item.foodTitle}
      />
      }
      <CardContent className={classes.desc}>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>     
      <CardActions style={{display:"flex",justifyContent:"space-between "}}>      
        <ButtonGroup>         
          <Button
            aria-label="increase"
            size="small"
            onClick={()=>handleCartCount(item._id)}
          >
          <AddIcon fontSize="small" />
          </Button>
          <Button
            aria-label="reduce"
            size="small"
            onClick={()=>handleReduce(item._id)}
          >
          <RemoveIcon fontSize="small" />
          </Button>
        </ButtonGroup>
         {item._id===foodIdCount.id && foodIdCount.count>0 &&
          <span style={{color:"#1769aa",fontWeight:"bold"}}>{`${foodIdCount.count*item.price} BDT`}</span>
         }
        <Badge 
          title={foodIdCount.count>0 ? "Add To Cart" : "Nothing in Cart Yet"}
          color="secondary"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          badgeContent={foodIdCount.id===item._id ? foodIdCount.count : 0}>
          <ShoppingCartIcon onClick={()=>handleCartAdd(item._id)}/>
        </Badge>    
      </CardActions>      
    </Card>
   </Grid>
  );
}



export default FoodCard