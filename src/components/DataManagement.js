import axios from "axios";


const url='http://localhost:5000'
// const url='https://quiet-cove-17146.herokuapp.com'


export const allFoodsList=async()=>{
  const result=await axios.get(`${url}/api/food/fooddetail`)
  return result.data
}

export const userLoginData=async(userEmail)=>{
 const result= await axios(`${url}/api/user/alluser/${userEmail}`)
 return result.data
}

export const orderedData=(email,payment_by,order_status,purchasedInfo,paymentCondition)=>{

const adminVerify=JSON.parse(sessionStorage.getItem('userInfo'))

 const cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
 const token=sessionStorage.getItem('token')
 const orderedData={
   email,
   cart:cartInfo,
   payment_by,
   order_status,
   purchasedInfo:purchasedInfo,
   paymentCondition,  
   deliveryInfo: JSON.parse(sessionStorage.getItem('deliveryInfo'))
 }
 if(adminVerify.accessAs==='success'){
   const orderFood= async()=>{
   try{
       const response=await axios.post(`${url}/api/order/orderdetail`, orderedData,{headers: {'Authorization': 'Bearer '+ token}}) 
       return response.data.data
       
      }catch(e){
        return e
      } ;
 }  
  return orderFood()
  }else if(adminVerify.accessAs==='admin'){
  alert('You Admin hmmmm!')
}
}

export const orderHistory=(email,token)=>{
const orderData=async()=>{
  try{
      const response=await axios({
        method:"get",
        url:`${url}/api/order/orderhistory/${email}`,
        headers: {'Authorization': 'Bearer '+ token}
      })
      return response.data.data
      // console.log(response.data.data)
    }catch(e){
     return e
    } ;
    }    
  return orderData()
}

export const orderHistoryAll=async()=>{
try{
    const response=await axios({
      method:'get',
      url:`${url}/api/order/orderhistoryall`})
    // console.log(response.data.data)
    return response.data.data
 }catch(e){
   console.log(e)
  } ;
}

//SIGN UP 
export const userSignUp=async(userData)=>{
  try {
    const resData=await axios.post(`${url}/api/user/signup` , userData)
    return resData
  } catch(e){
    return e
  }  
}

//SIGN IN

export const userSignIn=async(userData)=>{
 try{   
    const resData=await axios.post(`${url}/api/user/signin` , userData) 
    return resData
  }catch(e){
    return e
   } ;

}

//SEARCH FOOD

export const searchFood=async(keyWord)=>{
try{  
    const resData=await axios.post(`${url}/api/food/searchfood`,{keyWord})
    return resData
 }catch(e){
  return e
  } ;
}


//SPECIFIC FOOD SPECIFICATION

export const foodDetails=async(id)=>{
  try{
    const resData=await axios.get(`${url}/api/food/${id}`) 
    return resData.data.data[0]
    }catch(e){
      return e
    } ;
  }


//RATING REVIEW
export const ratingReview=async(reviewData)=>{
    try{
        const resData=await axios.post(`${url}/api/food/review`,reviewData)
        return resData.data.data
    }catch(e){
      return e
      } ;
}  

// dashboard management with database
export const imageUpload=async(image,type)=>{
  if(type==='profilePhoto'){
    try{
      const response=await axios.patch(`${url}/api/user/alluser`,image)    
      return response    
    }catch(e){
      return e
    } ;

  }

  if(type==='getProfile'){
    try{
      const response=await axios.get( `${url}/api/user/alluser/${image}`) 
      return response     
    }catch(e){
      return e
    } ;
  } 
}


export const addFavFood=async(info)=>{
  try{
    const data=await axios.patch(`${url}/api/user/favfood/${info.foodId}/${info.email}`)
    return data
   }catch(e){
    return e
    } ;
}

//! ADD EVENTS
export const addEvents=async(data)=>{
  try{
    const resData=await axios.post(`${url}/api/user/addevent/`,data)
    return resData
   }catch(e){
    return e
    } ;

}

export const eventCancel=async(eventId)=>{
  try{
    const result=await axios.patch(`${url}/api/user/event/${eventId}`)
    return result
   }catch(e){
    return e
    } ;

}

//!RESET PASSWORD
export const resetUserPassword=async(dataToChange)=>{
  try{
    const response=await axios.patch(`${url}/api/user/resetpassword`,dataToChange)
    return response
   }catch(e){
    return e
    } ;
  
}