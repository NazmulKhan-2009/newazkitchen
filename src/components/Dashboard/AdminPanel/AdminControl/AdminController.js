import { Grid } from "@material-ui/core";
import React, { useState } from 'react';
import { AdminForm } from '../commonClass/CommonClass';
import SelectMethod from '../SelectMethod/SelectMethod';


  const AdminController = () => {
  const [dial, setDial]=useState()
  const [selectedValue, setSelectedValue] = useState('');
  const [select, setSelect]=useState(false)
  const [form, setForm]=useState("")
  const handleInput=(isOpen,form,value)=>{

    setDial(isOpen)
    setForm(form)
    setSelectedValue(value);
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

const adminForm={
    field0:new AdminForm("adminId","Admin Id","standard","adminId"),
    field1:new AdminForm("adminName","Enter Name","standard","admin_name"),
    field2:new AdminForm("adminEmail","Enter email","standard","admin_email"),
    field3:new AdminForm("adminMobile","Enter Mobile","standard","admin_mobile"),
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