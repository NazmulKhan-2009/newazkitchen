
import React from 'react';
import { Grid } from "@material-ui/core";
import { useState } from "react";
// import {AdminForm} from "../../../commonClass/commonClass";
// import ControlDialog2 from "../ControlDialog/ControlDialog2";
import ControlDialog from "../ControlDialog/ControlDialog";
import SelectMethod from '../SelectMethod/SelectMethod';
import { AdminForm } from '../commonClass/CommonClass';
// import SelectMethod from "./AdminNav/SelectMethod/SelectMethod";

const FoodController = () => {
//!console.log('FoodController rendered')

const [dial, setDial]=useState()
 const [selectedValue, setSelectedValue] = useState('');
  const [select, setSelect]=useState(false)
  const [formTitle, setFormTitle]=useState("")
 
  const handleInput=(isOpen,formTitle,value)=>{
   setDial(isOpen)
  
   setFormTitle(formTitle)
   setSelectedValue(value);
   // setSelect(true)
   // handlePayment(e.target.value,true)
   // console.log(e.target.value)
   // if(e.target.value==='Cash On Delivery'){
   //   handleDialog(true,{
   //     title:'Cash on Delivery....',
   //     content:'Please Pay ',
   //     // payment:totalPrice,
   //     contentEnd:'once you received the product. ',
   //     btnYes:"Confirm",
   //     btnNo:"Change Mind",
   //     inputOption:"dont",
   //     purchaseDone:purchaseDone
   //     // purchaseNotify:purchaseNotify  //????????
   //     })
   // }
  }


const contentsProps=[
 {value:"Create Food",
 name:"create_Food",
 handleInput:handleInput,
 label:"Create Food",
 checked:selectedValue === 'Create Food'
 },
 {value:"Update Food",
 name:"update_Food",
 handleInput:handleInput,
 label:"Update Food",
 checked:selectedValue ==="Update Food"
 },
 {value:"Delete Food",
 name:"delete_Food",
 handleInput:handleInput,
 label:"Delete Food",
 checked:selectedValue === "Delete Food"
 },
 {value:"Search Food",
 name:"search_Food",
 handleInput:handleInput,
 label:"Search Food",
 checked:selectedValue === "Search Food"
 }
]

// class AdminForm{
//   constructor(id,label,variant,name){
//     this.id=id;
//     this.label=label;
//     this.variant=variant;
//     this.name=name
//   }
// }

const adminForm={
  field0:new AdminForm("foodId","Food Id","outlined","foodId"),
  field1:new AdminForm("food-title","Food Title","outlined","foodTitle"),
  field2:new AdminForm("insInput","Food Description","outlined","description"),
  field3:new AdminForm("priceInput","Price","outlined","price"),

//   field1:{
//     id:"food-title",
//     label:"Food Title",
//     variant:"outlined",
//     name:"foodTitle",
// },
  // field2:{
  //   id:"insInput",
  //   label:"Food Description", 
  //   variant:"outlined" ,
  //   name:"description"

  // },
  // field3:{
  //   id:"priceInput",
  //   label:"Price" ,
  //   variant:"outlined" ,
  //   name:"price",

  // }

}

// const handleDialog=(isOpen)=>{
//  setDial(isOpen)
// }

 return (
  <Grid container>

  {contentsProps.map((item, i)=>
   <SelectMethod
      key={i}
      {...item}
      adminForm={adminForm}

    />
  )}

  {/* <ControlDialog
   handleDialog={handleDialog}
   dial={dial}
   formTitle={formTitle}
   
  /> */}

    
   
  </Grid>
 )
}


export default FoodController