// import React from 'react'
// import { Grid } from "@material-ui/core";
// import { useState } from "react";
// import SelectMethod from '../SelectMethod/SelectMethod';
// // import { AdminForm } from '../commonClass/CommonClass';
// // import SelectMethod from "./AdminNav/SelectMethod/SelectMethod";

// const OrderController = () => {


//  const [selectedValue, setSelectedValue] = useState('');
//   const [select, setSelect]=useState(false)
 
//   const handleInput=(e)=>{
//    setSelectedValue(e.target.value);
//    // setSelect(true)
//    // handlePayment(e.target.value,true)
//    // console.log(e.target.value)
//   //  if(e.target.value==='Cash On Delivery'){
//   //    handleDialog(true,{
//   //      title:'Cash on Delivery....',
//   //      content:'Please Pay ',
//   //      // payment:totalPrice,
//   //      contentEnd:'once you received the product. ',
//   //      btnYes:"Confirm",
//   //      btnNo:"Change Mind",
//   //      inputOption:"dont",
//   //      purchaseDone:purchaseDone
//   //      // purchaseNotify:purchaseNotify  //????????
//   //      })
//   //  }
//   }


// const contentsProps=[
//  {value:"Processing",
//  name:"processing",
//  handleInput:handleInput,
//  label:"Processing",
//  checked:selectedValue === 'Processing'
//  },
//  {value:"Shipping",
//  name:"shipping",
//  handleInput:handleInput,
//  label:"Shipping",
//  checked:selectedValue ==="Shipping"
//  },
//  {value:"Delivered",
//  name:"delivered",
//  handleInput:handleInput,
//  label:"Delivered",
//  checked:selectedValue === "Delivered"
//  }
// ]




// // const adminForm={

// //   field0:new AdminForm("orderId","Order Id","standard","orderId"),
// //   field1:new AdminForm("adminName","Enter Name","standard","admin_name"),
// //   field2:new AdminForm("adminEmail","Enter email","standard","admin_email"),
// //   field3:new AdminForm("adminMobile","Enter Mobile","standard","admin_mobile"),

// // }


//  return (
//   <Grid container>

//   {contentsProps.map((item, i)=>
//    <SelectMethod
//       key={i}
//       {...item}
//       // adminForm={adminForm}
      
//     />
//   )}

    
   
//   </Grid>
//  )
// }



// export default OrderController


import React, { useState } from 'react'
import { AdminForm } from '../commonClass/CommonClass';
import ControlDialog from '../ControlDialog/ControlDialog';

export default function OrderController({openDial,closeDialog}) {

  const [dial, setDial]=useState(openDial)
  const handleDialog=(isClose)=>{
    setDial(isClose)
   }

   const adminForm={

    field0:new AdminForm("orderId","Order Id","standard","orderId")
   }

  return (
   <ControlDialog
     dial={dial}
      handleDialog={handleDialog}
      adminForm={adminForm}
      formTitle={"orderControl"}
   />
  )
}
