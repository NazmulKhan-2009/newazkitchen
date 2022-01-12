import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../../../App';
import FoodCard from "../../../../Home/FoodCard/FoodCard";
import DashBoardTitle from '../DashBoardTitle';
import Sidebar from '../Sidebar/Sidebar';
export default function MyFavorites() {
const {loginInfo,userData,setUserData}=useContext(UserContext)

// console.log(userData)

let history=useHistory()

const order=(foodId)=>{
   history.push(`/foodspecification/${foodId}`)
}

 return (
  <Sidebar>
 
   <DashBoardTitle dashTitle={"My Favorites"}/>
    
    <Grid container justify="center">
       
            { userData.favorite?.map(item=>
            <Grid md={4} sm={6} xs={10} spacing={10} style={{margin:'auto',textAlign:'center',cursor:"pointer"}} onClick={()=>order(item._id)}>
                <img src={item.imageUrl} alt=""  style={{width:'250px',height:'200px',padding:'20px' }}/>
                <h5>{item.foodTitle}</h5>
            </Grid>
            )}
            
       
        
    </Grid>
  </Sidebar>
 )
}
