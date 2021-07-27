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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import { StarRated } from '../../Utility';

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
    cursor:"pointer"
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
    padding:"1rem"
    
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -15,
    left:0,
    right:0,
    margin: '0 auto',
  },
}));

const FoodCard=({item,ind,foodDet,count,size,dispRating})=>{
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [cartCount, setCartCount] = useState(0)
  // const [cart,setCart]=useState([])
 const {cartItem, setCartItem}=useContext(UserContext)

 const [foodIdCount,setFoodIdCount]=useState({id:"",count:0})

 //!Drawer Content
 const {cartOpen, setCartOpen}=useContext(UserContext)

 let history=useHistory()


//  console.log(item.reviews.reduce((pv,cv)=>pv.rate+cv.rate))
// const review=foodDet.map(item=>item.reviews)
// console.log(item)

// console.log(item)
// console.log("------>")
let avgRate=''
const totalRatedLen=item.reviews.filter(mark=>mark.rate>0)
// console.log(totalRatedLen)
if(item.reviews.length>0){
  // console.log(item.reviews.map(mark=>mark.rate))
  const totRate=item.reviews.map(mark=>mark.rate)
  const tot=totRate.reduce((p,c)=>p+c)
  // console.log(tot/item.reviews.length)
  // avgRate=tot/item.reviews.length
  avgRate=tot/totalRatedLen.length


  
  // const total=item.reviews.reduce((pv,cv)=>pv.rate+cv.rate)
  // avgRate=total/item.reviews.length
  // console.log(avgRate)
  // console.log(total)

  //!avg rating DB

}


 
//  const avgRate=item.reviews.reduce((pv,cv)=>pv.rate+cv.rate)
// console.log(item)
// console.log(`for ${item._id} count is ${cartCount}`)
// console.log(`special id ${foodId}`)

//  console.log(item._id)
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  
  // const handleCartAdd=(id)=>{
  //   // const addCart=[]
     
  // if(cartCount>0){

  // let cartInfo=[]
  // const selectedFood={...item,quantity:cartCount,total:cartCount*item.price}
  

  //   if(JSON.parse(localStorage.getItem('cartInfo'))){
  //     cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
  //     // cartInfo=cartInfo.filter(cartInfo=>cartInfo.title!==foodTitle)
  //     // cartInfo=cartInfo.filter(cartInfo=>cartInfo.foodTitle!==foodTitle)
  //     cartInfo=cartInfo.filter(cartInfo=>cartInfo._id!==id)
  //   }
  //   cartInfo.push(selectedFood)  
  //   localStorage.setItem("cartInfo", JSON.stringify(cartInfo))

  //   setCartItem(JSON.parse(localStorage.getItem('cartInfo')))
  // // setCartCount(0)
  // }
  // }

  // senond way

  const handleCartAdd=(id)=>{
    // const addCart=[]
     
  if(foodIdCount.count>0 && id === foodIdCount.id){

  let cartInfo=[]
  const selectedFood={...item,quantity:foodIdCount.count,total:foodIdCount.count*item.price}
  

    if(JSON.parse(localStorage.getItem('cartInfo'))){
      cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
      // cartInfo=cartInfo.filter(cartInfo=>cartInfo.title!==foodTitle)
      // cartInfo=cartInfo.filter(cartInfo=>cartInfo.foodTitle!==foodTitle)
      cartInfo=cartInfo.filter(cartInfo=>cartInfo._id!==id)
    }
    cartInfo.push(selectedFood)  
    localStorage.setItem("cartInfo", JSON.stringify(cartInfo))

    setCartItem(JSON.parse(localStorage.getItem('cartInfo')))
  // setCartCount(0)
  setFoodIdCount({count:0})
  //! drawer try
  setCartOpen(!cartOpen)
  }
  }

  
  const handleCartCount=(id)=>{
    if(id === foodIdCount.id){
    setFoodIdCount({id:id,count:foodIdCount.count+1})
  }else{
    setFoodIdCount({id:id,count:0+1})
  }
  }

  const handleReduce=(id)=>{
    if(id === foodIdCount.id && foodIdCount.count>0){
      setFoodIdCount({id:id,count:foodIdCount.count-1})
    }
      }

  const foodRoute=(foodId)=>{
    history.push(`/foodspecification/${foodId}`)    

  }    

  return (
   
    <Grid  item={true} xs={10}  sm={size?.sm||4} md={size?.sm||4}  lg={size?.lg||3} className={classes.cardStyle}>
    <Card className={classes.root}>
    <StarRated rating={avgRate} />
      <CardHeader
        avatar={
          <Avatar sizes="string" aria-label="recipe" className={classes.avatar} variant='circular' style={{width:'80px'}}>
            <span style={{fontSize:".8rem"}}>{item.price}/-</span> 
          </Avatar>
        }
         
      
        action={
          <IconButton aria-label="settings">
          
      
            <MoreVertIcon />
          </IconButton>
        }
     
        // title={`${item.title} ${item.price}`}
        // title={item.title}
        title={item.foodTitle}
        
      />
      
      {item.imageUrl &&
      <CardMedia
        onClick={()=>foodRoute(item._id)}
        className={classes.media}
        // image={item.image}
        image={item.imageUrl}
        
        
        
        // title={item.title}
        title={item.foodTitle}
      />
      }
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* {item.detail} */}
          {item.description}
        </Typography>
      </CardContent>
      {/* <CardActions 
      style={{display:"flex",justifyContent:"space-between ",}}
      >
      <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon onClick={()=>setCartCount(cartCount+1)}/>
        </Fab>

        <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
        <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon/>
              </Badge>
          
          <small>Add to Cart</small>
        </Fab>
        
        

        <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
          <RemoveIcon onClick={()=>setCartCount(cartCount>0? cartCount-1:0)}/>
        </Fab>
      </CardActions> */}
<CardActions style={{display:"flex",justifyContent:"space-between "}}>
      
        
        <ButtonGroup>
          
          <Button
            aria-label="increase"
            size="small"
            // onClick={()=>setCartCount(cartCount+1)}
            onClick={()=>handleCartCount(item._id)}
            
            // onClick={() => {
            //   setCount(count + 1);
            // }}
          >
            <AddIcon fontSize="small" />
          </Button>

          <Button
            aria-label="reduce"
            size="small"
            // onClick={()=>setCartCount(cartCount>0? cartCount-1:0)}
            onClick={()=>handleReduce(item._id)}
            
            // onClick={() => {
            //   setCount(Math.max(count - 1, 0));
            // }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
        </ButtonGroup>

         {/* <span style={{color:"#1769aa",fontWeight:"bold"}}>{cartCount>0 && `${cartCount*item.price} BDT`}</span> */}
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
          <ShoppingCartIcon 
          // onClick={()=>handleCartAdd(item.title)}
          // onClick={()=>handleCartAdd(item.foodTitle)}
          onClick={()=>handleCartAdd(item._id)}

          />
        </Badge>
        
      
</CardActions>      
    </Card>
   </Grid>
  );
}

export default FoodCard