// import { Grid } from '@material-ui/core';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// const AdminInfo = () => {

// const [foodsList,setFoodsList ]=useState([])  

// // console.log(foodsList)
// useEffect(()=>{

//   const serverFoodList=async()=>{
//     try{
//       const foods=await axios.get("http://localhost:5000/api/food/fooddetail")
//       setFoodsList(foods.data.slice(90,103))
      
//      }catch(e){
//        console.log(`error on getting Food List from server ${e}`)
//       } ;
    
//   }
//   // serverFoodList()

// },[])

//  return (
  
//    <Grid 
//       container 
//       justify="center"
//       style={{height:"20vh"}}
//     >
//      <h3>Admin Infos</h3>
//      {foodsList.slice(90,103).map(food=>
//        <div key={food._id}>
       
//          <p>{food.foodTitle}</p>
//          <p>{food.price}</p>
//          <p>{food.description}</p>
//          <p>{food.foodType}</p>
//          <p>{food.Local_Time}</p>
//          <img src={food.imageUrl} alt="" width="20%"/>
//        </div>
//      )}
//    </Grid>
  
//  );
// };

// export default AdminInfo;

import React , {Component} from 'react'

class AdminInfo extends Component{

    state={count:0,go:2}

    inc=()=>{
      let c=this.state.count
      c+=1
      let g=this.state.go
      g+=2
      this.setState({go:g,count:c})
      
    }
  render(){
    return(<div>
    <h5>Hello Componnets {this.state.go} {this.state.count}</h5>
    <button onClick={this.inc}>Click</button>
   </div>
   )
  }
}

export default AdminInfo