import { Grid } from "@material-ui/core";
import React, { useState } from 'react';
import { AdminForm } from '../commonClass/CommonClass';
// import {AdminForm} from "../../../commonClass/commonClass";
import SelectMethod from '../SelectMethod/SelectMethod';
// import SelectMethod from "./AdminNav/SelectMethod/SelectMethod";

const AdminController = () => {

  const [dial, setDial]=useState()
  const [selectedValue, setSelectedValue] = useState('');
  const [select, setSelect]=useState(false)
  const [form, setForm]=useState("")

 
 
  const handleInput=(isOpen,form,value)=>{

  setDial(isOpen)
  setForm(form)
  setSelectedValue(value);

  //  setSelectedValue(e.target.value);
   // setSelect(true)
   // handlePayment(e.target.value,true)
   // //console.log(e.target.value)
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
 {value:"Create Admin",
 name:"create_Admin",
 handleInput:handleInput,
 label:"Create Admin",
 checked:selectedValue === 'Create Admin'
 },
 {value:"Update Admin",
 name:"update_Admin",
 handleInput:handleInput,
 label:"Update Admin",
 checked:selectedValue ==="Update Admin"
 },
 {value:"Delete Admin",
 name:"delete_Admin",
 handleInput:handleInput,
 label:"Delete Admin",
 checked:selectedValue === "Delete Admin"
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

field0:new AdminForm("adminId","Admin Id","standard","adminId"),
field1:new AdminForm("adminName","Enter Name","standard","admin_name"),
field2:new AdminForm("adminEmail","Enter email","standard","admin_email"),
field3:new AdminForm("adminMobile","Enter Mobile","standard","admin_mobile"),

  // field1:{
  //   id:"adminName",
  //   label:"Enter Name",
  //   variant:"standard",
  //   name:"admin_name",

  // },
  // field2:{
  //   id:"adminEmail",
  //   label:"Enter email",
  //   variant:"standard",
  //   name:"admin_email",

  // },
  // field3:{
  //   id:"adminMobile",
  //   label:"Enter Mobile",
  //   variant:"standard",
  //   name:"admin_mobile",

  // }


}


 return (
  <Grid container>

  {contentsProps.map((item, i)=>
   <SelectMethod
      key={i}
      {...item}
      adminForm={adminForm}

    />
  )}

    
   
  </Grid>
 )
}




export default AdminController