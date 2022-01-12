import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { UserContext } from '../../App';
import RatingReview from '../../components/RatingReview/RatingReview';
import { foodDetails, ratingReview } from '../DataManagement';
import FoodCard from '../Home/FoodCard/FoodCard';
import AppNav from '../Home/Header/AppBar/AppNav';
import MobAppNav from '../Home/Header/AppBar/MobAppNav';
import { CustomizeLoader, StarMarking } from '../Utility';
import Comments from './Comp_of_FoodSpecification/Comments';
import './specifyFood.css';


const FoodSpecification = () => {

 const {rating, setRating,dispRating, setDispRating,setFoodSync}=useContext(UserContext)
 const foodId=useParams()
 const [foodInfo, setFoodInfo]=useState({})
 const [mark, setMark]=useState('')
 const [rateMark,setRateMark]=useState(1)
 const [infoData,setInfoData]=useState({})
 const handleClose = (bool,starFixed,booll) => {
    setDispRating(bool)
    setRateMark(rateMark+starFixed)
    };
 const handleRating=(info)=>{
    ratingReview(info).then(res=>setFoodInfo(res))
    
}


useEffect(()=>{
 foodDetails(foodId.id)
 .then(res=>setFoodInfo(res))
},[])



const changeRating=( newRating, name )=> { 
    setRating(newRating) 
    setDispRating(true) 
    setFoodSync(Math.random())
}
const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
const isReviewed=foodInfo.reviews?.find(user=>user?.email===userInfo?.userEmail)
  



 return (
    <Grid container className="specific_food_cont" justify="center">
        
        <AppNav/>
        <MobAppNav/>
        {
        foodInfo.reviews ? 
        <FoodCard item={foodInfo} size={{sm:6,lg:5}} dispRating={true}/>
        :
        <Grid style={{margin:'auto'}}>
        {/* <LoadingCart/>   */}
        <CustomizeLoader/>
        </Grid>        
        }
        <Grid item md={6} sm={6} xs={10} lg={6} className="review_section">
            <i style={{color:'red'}}>Commects should descending order from DB?????</i>
            <div className="review">
                <h5>{isReviewed? "Your Rating":"Rate the Food"}</h5>             
                {
                !isReviewed?<StarMarking changeRating={changeRating} rating={rating} /> 
                  :
                <StarRatings
                    rating={isReviewed?.rate}
                    starDimension="32px"
                    starSpacing="2px"
                    starRatedColor='red'
                />  
                }        
            </div>
            <Grid item lg={6} sm={12} xs={12} style={{margin:'0 auto'}}>
                <Comments comment={foodInfo.reviews} handleRating={handleRating}/>
            </Grid>
        </Grid>

        <RatingReview 
            display={dispRating} 
            handleClose={handleClose}
            rating={rating}
            foodId={foodId}
            handleRating={handleRating}
        />
    </Grid>        

  
 );
};

export default FoodSpecification;