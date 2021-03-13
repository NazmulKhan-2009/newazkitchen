import axios from "axios";

export const orderedData=(email,payment_by,order_status,purchasedInfo)=>{

 const cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
//  const purchasedInfo=JSON.parse(sessionStorage.getItem('purchasedInfo'))
 const orderedData={
   email,
   cart:cartInfo,
   payment_by,
   order_status,
   purchasedInfo:purchasedInfo,  
   deliveryInfo: JSON.parse(sessionStorage.getItem('deliveryInfo'))
 }
 const orderFood= async()=>{
   try{
       const response=await axios.post("http://localhost:5000/api/order/orderdetail", orderedData) 
       //! setOrderInfo(response.data.data)
       return response.data.data
       
     }catch(e){
      console.log(`add Order error ${e}`)
     } ;
 }  
 
 return orderFood()

}


//Order Hisotry

// export const orderHistory=async(email)=>{
//   try {
//    const response= await axios.get(`http://localhost:5000/api/order/orderhistory/${email}`)

//    return response.data.data
//   } catch (e) {
//     console.log(`error to get order history ${e}`)
//   }

// }

export const orderHistory=(email)=>{
const orderData=async()=>{

  try {
    const response= await axios.get(`http://localhost:5000/api/order/orderhistory/${email}`)
 
    return response.data.data
   } catch (e) {
     console.log(`error to get order history ${e}`)
   }
}
    
return orderData()

}