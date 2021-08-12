import axios from "axios";
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../../../App';
import DashBoardTitle from '../DashBoardTitle';
import Sidebar from '../Sidebar/Sidebar';
export default function MyFavorites() {
const {loginInfo,userData,setUserData}=useContext(UserContext)

//console.log(userData)
 useEffect(()=>{

  (async()=>{

   const data=await axios.get('https://mysql.newazkitchenbdapi.com/mens')
   //console.log(data)
  })()

 },[])
 

 const postSubmit=()=>{

  (async()=>{

   const data=await axios.post('https://mysql.newazkitchenbdapi.com/mens',{ ranking:4444,
   name:"computer fair", dist:"jugnidaha"})
   //console.log(data)
  })()

 }


 return (
  <Sidebar>
   {/* <h2>That is my Favorites page</h2>
   <button onClick={postSubmit}>post</button> */}

   {/* <div className="container-fluid py-5" id="contact">
        <div className="container-fluid">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white contract_stroke" >My Favorites</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Favorites</h1>
            </div>
         </div>
    </div>   */}

    <DashBoardTitle dashTitle={"My Favorites"}/>

    {
        userData.favorite?.map(item=>
        <img key={Math.random()} src={item.imageUrl} alt="" width={100}/>
        )
    }


  </Sidebar>
 )
}
