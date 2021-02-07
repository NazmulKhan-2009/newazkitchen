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
import { UserContext } from '../../../App';

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

const FoodCard=({item,ind})=>{
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [cartCount, setCartCount] = useState(0)
  // const [cart,setCart]=useState([])
 const [cartItem, setCartItem]=useContext(UserContext)
console.log(ind)
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  
  const handleCartAdd=(foodTitle)=>{
    // const addCart=[]
     
  if(cartCount>0){

  let cartInfo=[]
  const selectedFood={...item,quantity:cartCount,total:cartCount*item.price}
  

    if(JSON.parse(localStorage.getItem('cartInfo'))){
      cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
      cartInfo=cartInfo.filter(cartInfo=>cartInfo.title!==foodTitle)
    }
    cartInfo.push(selectedFood)  
    localStorage.setItem("cartInfo", JSON.stringify(cartInfo))

    setCartItem(JSON.parse(localStorage.getItem('cartInfo')))
  setCartCount(0)
  }
  }
  return (
   
    <Grid container item={true} md={4} xs={10} className={classes.cardStyle}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar sizes="string" aria-label="recipe" className={classes.avatar} variant='square'>
            {item.price}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          
      
            <MoreVertIcon />
          </IconButton>
        }
     
        // title={`${item.title} ${item.price}`}
        title={item.title}
        
      />
      {item.image &&
      <CardMedia
        className={classes.media}
        image={item.image}
        
        title={item.title}
      />
      }
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.detail}
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
            onClick={()=>setCartCount(cartCount+1)}
            // onClick={() => {
            //   setCount(count + 1);
            // }}
          >
            <AddIcon fontSize="small" />
          </Button>

          <Button
            aria-label="reduce"
            size="small"
            onClick={()=>setCartCount(cartCount>0? cartCount-1:0)}
            
            // onClick={() => {
            //   setCount(Math.max(count - 1, 0));
            // }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
        </ButtonGroup>

         <span style={{color:"#1769aa",fontWeight:"bold"}}>{cartCount>0 && `${cartCount*item.price} BDT`}</span>

        <Badge 
          title={cartCount>0 ? "Add To Cart" : "Nothing in Cart Yet"}
          color="secondary"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
           badgeContent={cartCount}>
          <ShoppingCartIcon 
          onClick={()=>handleCartAdd(item.title)}

          />
        </Badge>
      
</CardActions>      
    </Card>
   </Grid>
  );
}

export default FoodCard