import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { foodDetails, ratingReview } from '../DataManagement';
import FoodCard from '../Home/FoodCard/FoodCard';
// import LoadingCart from '../../../Common/NotFound/LoadingCard';
import LoadingCart from '../Common/NotFound/LoadingCard';
import { CustomizeLoader, StarMarking, StarRated } from '../Utility';
import './specifyFood.css';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

import RatingReview from '../../components/RatingReview/RatingReview';
import Comments from './Comp_of_FoodSpecification/Comments';
import StarRatings from 'react-star-ratings';

const FoodSpecification = () => {

 const foodId=useParams()

 const [foodInfo, setFoodInfo]=useState({})

 const [mark, setMark]=useState('')
 const [rating, setRating]=useState(0)
 const [dispRating, setDispRating]=useState(false)

const [rateMark,setRateMark]=useState(1)

// const [isReviewed,setIsReviewed]=useState({})

// console.log(rate)
 const [infoData,setInfoData]=useState({})

// const {foodTitle,foodType,price,imageUrl,}=foodInfo[0]
 console.log(foodInfo)

 const handleClose = (bool,starFixed,booll) => {
    setDispRating(bool)
    setRateMark(rateMark+starFixed)
    

   };

   

const handleRating=(info)=>{
    ratingReview(info).then(res=>setFoodInfo(res))
    console.log('okay')
}


useEffect(()=>{


 foodDetails(foodId.id)
 .then(res=>setFoodInfo(res))


//  console.log(foodInfo)

//  if(rateMark){
//     alert('Thank for rating')
//  }



},[])

// useEffect(()=>{
//     const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
//     setIsReviewed(foodInfo[0]?.reviews.find(user=>user.email===userInfo.userEmail))
// },[])

// useEffect(()=>{

// },[])


// const ratingChanged = (newRating) => {
//     setMark(newRating)
//   }

const changeRating=( newRating, name )=> {
    // this.setState({
    //   rating: newRating
    // });
    setRating(newRating)
    setDispRating(true)

    

  }
  

   

   const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
   const isReviewed=foodInfo.reviews?.find(user=>user.email===userInfo.userEmail)
   console.log(isReviewed)


//   const rateChange=(bool)=>{
//         setRateMark(rateMark+bool)
//   }



 return (
  

//   <Grid style={{display:'flex', justifyContent:"space-between"}}>
    
//         {
//         foodInfo.length>0 ? 
//         <FoodCard item={foodInfo[0]}/>

//         :

//             <Grid style={{margin:'auto'}}>
//             {/* <LoadingCart/>   */}
//             <CustomizeLoader/>
//             </Grid>
            
            
//         }
    

//         <Grid md={10} sm={10} lg={5}>
//             <h1 className="look">Customer Ineraction</h1>
//         </Grid>
//   </Grid>

<Grid container className="specific_food_cont">
        {
        foodInfo.reviews ? 
        <FoodCard item={foodInfo} size={{sm:6,lg:5}} dispRating={true}/>

        :

            <Grid style={{margin:'auto'}}>
            {/* <LoadingCart/>   */}
            <CustomizeLoader/>
            </Grid>
            
            
        }



        <Grid item md={10} lg={6} className="review_section">
            {/* <h3 className="look" >Customer Ineraction</h3> */}
            <div className="review">
                <h5>{isReviewed? "Your Rating":"Rate the Food"}</h5> 
                {/* <StarRated ratingChanged={ratingChanged} /> */}
                {/* <StarRated/> */}
                {!isReviewed?<StarMarking changeRating={changeRating} rating={rating} /> 
                    :
                 <StarRatings
                    rating={isReviewed?.rate}
                    starDimension="32px"
                    starSpacing="2px"
                    starRatedColor='red'
                />  
                }        
            </div>

            {/* <div className="review">
                <h5>Your Rating</h5> 
                
                
                <StarRatings
                    rating={4}
                    starDimension="32px"
                    starSpacing="2px"
                    starRatedColor='red'
                />
                          
            </div> */}

            <Grid item lg={6}>
                <Comments/>
            </Grid>


        </Grid>

        

    {/* RATING REVIEW DIALOG */}
        <RatingReview 
            display={dispRating} 
            handleClose={handleClose}
            rating={rating}
            foodId={foodId}
            // rateChange={rateChange}
            handleRating={handleRating}
            />

</Grid>        

  
 );
};

export default FoodSpecification;