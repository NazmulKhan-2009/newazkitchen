import { Grid } from "@material-ui/core";
import React, { useState } from 'react';
import { AdminForm } from '../commonClass/CommonClass';
import SelectMethod from '../SelectMethod/SelectMethod';


  const FoodController = () => {
  const [dial, setDial]=useState()
  const [selectedValue, setSelectedValue] = useState('');
  const [select, setSelect]=useState(false)
  const [formTitle, setFormTitle]=useState("")
  const handleInput=(isOpen,formTitle,value)=>{
   setDial(isOpen)
   setFormTitle(formTitle)
   setSelectedValue(value);
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

  const adminForm=
        {
        field0:new AdminForm("foodId","Food Id","outlined","foodId"),
        field1:new AdminForm("food-title","Food Title","outlined","foodTitle"),
        field2:new AdminForm("insInput","Food Description","outlined","description"),
        field3:new AdminForm("priceInput","Price","outlined","price"),
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


export default FoodController