import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { foodDetails } from '../DataManagement';

const FoodSpecification = () => {

 const foodId=useParams()
 const [foodInfo, setFoodInfo]=useState({})


 console.log(foodId)

useEffect(()=>{


 foodDetails(foodId.id)
 .then(res=>setFoodInfo(res))
 

},[])

 return (
  <div>

  <img src={foodInfo.imageUrl} alt="" />
   
  </div>
 );
};

export default FoodSpecification;