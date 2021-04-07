import React from 'react'
import { Grid } from "@material-ui/core";
import { useState } from "react";
import SelectMethod from '../SelectMethod/SelectMethod';
// import SelectMethod from "./AdminNav/SelectMethod/SelectMethod";

const OrderController = () => {


 const [selectedValue, setSelectedValue] = useState('');
  const [select, setSelect]=useState(false)
 
  const handleInput=(e)=>{
   setSelectedValue(e.target.value);
   // setSelect(true)
   // handlePayment(e.target.value,true)
   // console.log(e.target.value)
  //  if(e.target.value==='Cash On Delivery'){
  //    handleDialog(true,{
  //      title:'Cash on Delivery....',
  //      content:'Please Pay ',
  //      // payment:totalPrice,
  //      contentEnd:'once you received the product. ',
  //      btnYes:"Confirm",
  //      btnNo:"Change Mind",
  //      inputOption:"dont",
  //      purchaseDone:purchaseDone
  //      // purchaseNotify:purchaseNotify  //????????
  //      })
  //  }
  }


const contentsProps=[
 {value:"Processing",
 name:"processing",
 handleInput:handleInput,
 label:"Processing",
 checked:selectedValue === 'Processing'
 },
 {value:"Shipping",
 name:"shipping",
 handleInput:handleInput,
 label:"Shipping",
 checked:selectedValue ==="Shipping"
 },
 {value:"Delivered",
 name:"delivered",
 handleInput:handleInput,
 label:"Delivered",
 checked:selectedValue === "Delivered"
 }
]




 return (
  <Grid container>

  {contentsProps.map((item, i)=>
   <SelectMethod
      key={i}
      {...item}
      
    />
  )}

    
   
  </Grid>
 )
}



export default OrderController