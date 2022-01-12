import { Fab, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NavigationIcon from '@material-ui/icons/Navigation';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import { searchFood } from '../../../DataManagement';
import { CustomizeLoader, SearchItem } from '../../../Utility';
import FoodCard from '../FoodCard';
import "./Food.css";
import FoodType from './FoodType/FoodType';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),     
    },
  },
}));
const Food = () => {
  const [sliceFood, setSliceFood]=useState(8)
  const {foodDetails,itemWise, setItemWise}=useContext(UserContext)  
  const classes = useStyles();
  //SEARCH FOOD HANDLE
  const searchingFood=(food)=>{
    searchFood(food)
    .then(res=>setItemWise(res.data.data))
  }
  const itemBtn=["all","baking",'frozen',"deshi","chineese"]
  const [colValue,setColvalue]= useState('')
  const handleFood=(item,color)=>{
    setColvalue(item)  
    const foodTypeWise=foodDetails.filter(foods=>item!=="all" ? foods.foodType===item:foodDetails) 
    setItemWise(foodTypeWise)
  }

  
return (
  <Grid className="Food_style_device" id='order'>
    <h1>Order your favorite one</h1>
    <div className={classes.root} style={{textAlign:'center'}}>   
      <Grid container item md={10} justify="space-evenly" className="my_search">
        <div>
          <SearchItem searchingFood={searchingFood}/>
        </div>
        <div className="btns">
        {itemBtn.map((item,i)=>
          <Button key={i} variant= {item===colValue ? "contained" :"outlined"} color={item===colValue ? "primary" :"secondary"} onClick={()=>handleFood(item)}>{item}</Button>
        )}    
        </div>   
      </Grid>     
    </div>    
    <Grid container item={true} md={10} xs={12} style={{margin:'auto'}}>  
      {itemWise.length<1 ? 
        <Grid container justify="center">
        <CustomizeLoader/>
        </Grid>    
      : 
       itemWise.slice(0,sliceFood).map((item,ind)=>
        <FoodCard
        key={ind}
        item={item}
        ind={ind}
        foodDet={foodDetails}
        foodId={item._id}/>
      )}   
    </Grid>   
    <div style={{textAlign: 'center',marginTop:'2rem'}}>
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        onClick={()=>sliceFood<foodDetails.length? setSliceFood(sliceFood+4):alert('finished food collection')}>
        <NavigationIcon/>
        More Foods
      </Fab>
    </div>       
  </Grid>
 );
};



export default Food;