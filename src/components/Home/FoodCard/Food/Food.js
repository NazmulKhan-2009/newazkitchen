import { Fab, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { cuisine } from '../../../FakeData/FakeData';
import FoodCard from '../FoodCard';
import NavigationIcon from '@material-ui/icons/Navigation'
import "./Food.css"
import FoodType from './FoodType/FoodType';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));
const Food = () => {
  const [sliceFood, setSliceFood]=useState(6)
  const [itemWise, setItemWise]=useState([])
  const [foodDetails, setFoodDetails]=useState([])
  // console.log(foodDetails)
  

  const classes = useStyles();
  
  // console.log(itemWise)
  //Food from Server
  useEffect(()=>{

    const serverFoodList=async()=>{
      try{
        const foods=await axios.get("http://localhost:5000/api/food/fooddetail")
        // setItemWise(foods.data.slice(90,105))
        setFoodDetails(foods.data)
        setItemWise(foods.data)
        
       }catch(e){
         console.log(`error on getting Food List from server ${e}`)
        } ;
      
    }
    serverFoodList()
  
  },[])
  const itemBtn=["all","baking",'frozen',"deshi","chineese"]

//  const [btnColor,setBtnColor]= useState('primary')
 const [colValue,setColvalue]= useState('')

const handleFood=(item,color)=>{
  setColvalue(item)
    

    // const color=itemBtn.find(btn=>btn===item?"secondary":"primary")
    
    //  const foodTypeWise=cuisine.filter(foods=>item!=="all" ? foods.type===item:cuisine)
    //  const foodTypeWise=itemWise.filter(foods=>item!=="all" ? foods.foodType===item:window.location.reload())
    //  const foodTypeWise=itemWise.filter(foods=>item!=="all" ? foods.foodType===item:itemWise)
     const foodTypeWise=foodDetails.filter(foods=>item!=="all" ? foods.foodType===item:foodDetails)
    //  const foodTypeWise=foodDetails.filter(foods=>item===foods.foodType)
    //  console.log(foodTypeWise)
    //  setItemWise(foodTypeWise)
    setItemWise(foodTypeWise)
    // console.log(itemWise)
  }

  


 return (
  <Grid className="Food_style_device">
    <h1>Cart your Favourite Cuisine <FoodType/>  </h1>

    <div className={classes.root} style={{textAlign:'center'}}>
    
      {/* <Button variant="contained" onClick={()=>setItemWise(cuisine)}>All</Button>
      <Button variant="contained" color="primary" onClick={()=>handleFood('baking')}>
        Baking
      </Button>
      <Button variant="contained" color="secondary" onClick={()=>handleFood('frozen')}>
        Frozen
      </Button>
      <Button variant="contained" onClick={()=>handleFood('deshi')}>
        deshi
      </Button>
      <Button variant="contained" color="primary" onClick={()=>handleFood('other')}>
        Others
      </Button> */}
{
     itemBtn.map((item,i)=>
        <Button key={i} variant= {item===colValue ? "contained" :"outlined"} color={item===colValue ? "primary" :"secondary"} onClick={()=>handleFood(item)}>{item}</Button>
     )
}       
      

    </div>
     
    <Grid container item={true} md={10} xs={12} style={{margin:'auto'}}>  
    
    {
      itemWise.slice(0,sliceFood).map((item,ind)=>
      <FoodCard
       key={ind}
       item={item}
       ind={ind}
       foodDet={foodDetails}
       
      />
     )
    }
    
    </Grid>
    
    <div style={{textAlign: 'center',marginTop:'2rem'}}>
    <Fab
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
          onClick={()=>setSliceFood(sliceFood+3)}
          
        >
          <NavigationIcon/>
          Extended
        </Fab>
    </div>
        
  </Grid>
 );
};

export default Food;