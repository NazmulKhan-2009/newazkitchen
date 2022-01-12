import React from 'react'
import { Grid } from '@material-ui/core';
import AdminNav from './AdminNav/AdminNav';
import AppNav from '../../Home/Header/AppBar/AppNav';
import MobAppNav from '../../Home/Header/AppBar/MobAppNav';
import Notification from './UploadFood/notification/Notification';




export default ()=> {
  
  const accessInfo=JSON.parse(sessionStorage.getItem('userInfo'))

 return (
   <>
      {/* <AppNav otherThanHome={false}/>
      {/* <MobAppNav otherThanHome={false}/> */} 
      <Grid container item md={10} style={{margin:'2rem auto'}} justify="center">
        <Grid item md={4} xs={10}>
          <h5 style={{color:'crimson',paddingBottom:'20px'}}>Admin Information</h5>
          <img src="https://clubsports.gcu.edu/wp-content/uploads/Coach-Avator.png" alt="" width="30%"/>
          <p><span style={{color:'crimson'}}>Title:</span>  {accessInfo?.userName}</p>
          <p><span style={{color:'crimson'}}>Email :</span> {accessInfo.userEmail}</p>
          <p><span style={{color:'crimson'}}>ID :</span>AD000</p> 
          <p><span style={{color:'crimson'}}>Time : {new Date().toLocaleDateString()}</span></p>    
          <figure>
          <img src={sessionStorage.getItem('image')} alt="" width={100}/>
          </figure>
        </Grid>
      <Grid item md={4} xs={10}>
        <AdminNav/>
      </Grid> 
      
    </Grid>
  </>


 )
}
