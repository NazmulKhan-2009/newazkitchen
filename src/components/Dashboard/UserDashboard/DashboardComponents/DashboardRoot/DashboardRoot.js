import { Grid } from '@material-ui/core';
import React from 'react'
import { dashboardData } from '../../DataOfDashboard';
import classes from './Dashboard.module.css' ;
import { CountUp } from 'use-count-up';


export default function DashboardRoot() {
 // const {dash_box_cus, icon_custom , box_container_cus}=classes

 const {userName,accessAs}=JSON.parse(sessionStorage.getItem('userInfo'))
 

 return (
  <div>
  <h2 style={{textAlign:'center',padding:"20px"}}>Welcome to dashboard <span style={{color:'tomato' }}>{userName}</span> </h2>
       <div className={classes.box_container_cus}>
         {
          dashboardData.map((item,index)=>
          <div key={item.boxTitle}  style={{ background:item.color }} className={classes.dash_box_cus}>
          <div className={classes.icon_custom}>{item.icon}</div>
          <h2>{item.boxTitle}</h2>
          <h2 ><CountUp isCounting end={item.count} duration={5.2} /></h2>
          </div>

          )
         }
         {/* <p className={`${font} ${para} ${border}`}>Perfect</p> */}
          </div>
   
  </div>
 )
}
