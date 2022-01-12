import React from "react"
import { Button, Grid } from '@material-ui/core';
import { useState } from 'react';
import classes from "./AdminNav.module.css"
import FoodController from "../AdminControl/FoodController";
import AdminController from "../AdminControl/AdminController";
import OrderController from "../AdminControl/OrderController";
import ServiceController from "../AdminControl/ServiceController";

export default function AdminNav() {

 const [isOpen, setIsOpen]=useState(false)
 const [titleWise, setTitlewise]=useState("")
 const adminTask=[
 {title:"Food Control Management", comp:<FoodController/> },
 {title:"Admin Control Management", comp:<AdminController/>},
 {title:"Order Control Management", comp:<OrderController openDial={isOpen}/> },
 {title:"Service Control Management",comp:<ServiceController/>}
  ]

 const handleSelector=(item)=>{
   setIsOpen(!isOpen)
   setTitlewise(item)
 }

 return (
  <Grid>
   <h5 style={{color:'crimson'}}>Admin Panel</h5>
   <ul className={classes.list_item}>
   {adminTask.map((item,i)=>{
      return (
      <Grid key={i}>
      <li ><Button variant="outlined" color="secondary"  onClick={()=>handleSelector(item.title)}>{item.title}</Button></li>
      {
         isOpen && item.title === titleWise && item.comp||
         isOpen && item.title === titleWise && item.comp||
         isOpen && item.title === titleWise && item.comp||
         isOpen && item.title === titleWise && item.comp
      }
      </Grid>
      )
   })}
   </ul>
</Grid>
 )
}
