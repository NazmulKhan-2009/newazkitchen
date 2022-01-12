import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';

export default function OrderedInfo({searchFood,handleOrderStatus}) {
const [checked, setChecked]=useState('')
const [openStatus, setOpenStatus]=useState('')

 const style={
  textShadow: "5px 4px 5px rgba(0, 0, 0, 0.36) ",
  color:"#863D41"
 }

 const handleChange=(e)=>{
  setChecked(e.target.value)
  handleOrderStatus(e.target.value)
 }

 const {orderStatus,email,foodName,paymentStatus}=searchFood
 return (
  <div style={style}>
  <ul>
   {foodName && foodName.map(item=><li key={Math.random()}><h4>{item}</h4></li>)}
  </ul>
  <p>{`email : ${email}`}</p> 

  <FormControlLabel value='verified' control={<Radio required={true} size="small" name="paymentStatus" disabled={paymentStatus==='verified'} checked={checked==="verified"} onChange={handleChange}  color="primary" value='verified'/> } label='payment verified' />

 <FormControlLabel value="unverified" control={<Radio required={true} size="small" name="paymentStatus" disabled={paymentStatus==='unverified'} checked={checked==="unverified"} onChange={handleChange}   color="primary" value='unverified'/>} label='payment unverified' />

  <p>{`Orderstatus : ${orderStatus}`} <span
  style={{cursor:"pointer"}} onClick={()=>setOpenStatus(true)}
  ><EditIcon/></span></p> 
  
  

  
   {openStatus && 
   <>
   <FormControlLabel value='processing' control={<Radio required={true} size="small" name="orderStatus" disabled={orderStatus==='processing'} checked={checked==="processing"} onChange={handleChange}  color="primary" value='processing'/> } label='processing' />

  <FormControlLabel value="shipping" control={<Radio required={true} size="small" name="orderStatus" disabled={orderStatus==='shipping'} checked={checked==="shipping"} onChange={handleChange}   color="primary" value='shipping'/>} label='shipping' />

  <FormControlLabel value="delivered" control={<Radio required={true} size="small" name="orderStatus" disabled={orderStatus==='delivered'} checked={checked==="delivered"} onChange={handleChange}  color="primary" value='delivered'/>} label='delivered' />

  {/* onChange={()=>setChecked('delivered')} */}
  </>

  
  
  }

 
  </div>
 )
}
