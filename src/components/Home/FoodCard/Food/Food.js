import { Fab, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { cuisine } from '../../../FakeData/FakeData';
import FoodCard from '../FoodCard';
import NavigationIcon from '@material-ui/icons/Navigation'
import "./Food.css"
import FoodType from './FoodType/FoodType';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
}));
const Food = () => {
  const [sliceFood, setSliceFood]=useState(6)
  const [itemWise, setItemWise]=useState(cuisine)
  const classes = useStyles();

  const handleFood=(item)=>{
     const foodTypeWise=cuisine.filter(foods=>item!=="all" ? foods.type===item:cuisine)
     setItemWise(foodTypeWise)
  }
const itemBtn=["all","baking",'frozen',"deshi"]

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
        <Button key={i} variant="contained" color="primary" onClick={()=>handleFood(item)}>{item}</Button>
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