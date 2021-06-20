import axios from "axios";

export const orderedData=(email,payment_by,order_status,purchasedInfo)=>{

const adminVerify=JSON.parse(sessionStorage.getItem('userInfo'))

 const cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
 const token=sessionStorage.getItem('token')
//  const purchasedInfo=JSON.parse(sessionStorage.getItem('purchasedInfo'))
 const orderedData={
   email,
   cart:cartInfo,
   payment_by,
   order_status,
   purchasedInfo:purchasedInfo,  
   deliveryInfo: JSON.parse(sessionStorage.getItem('deliveryInfo'))
 }
 if(adminVerify.accessAs==='success'){
   const orderFood= async()=>{
   try{
       const response=await axios.post("http://localhost:5000/api/order/orderdetail", orderedData,{headers: {'Authorization': 'Bearer '+ token}}) 
       //! setOrderInfo(response.data.data)
       return response.data.data
       
     }catch(e){
      console.log(`add Order error ${e}`)
     } ;
 }  
 
 return orderFood()
}else if(adminVerify.accessAs==='admin'){
  alert('You Admin hmmmm!')
}

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

export const orderHistory=(email,token)=>{
const orderData=async()=>{

  // try {
  //   const response= await axios.get(`http://localhost:5000/api/order/orderhistory/${email}`)
 
  //   return response.data.data
  //  } catch (e) {
  //    console.log(`error to get order history ${e}`)
  //  }

  try{
      const response=await axios({
        method:"get",
        url:`http://localhost:5000/api/order/orderhistory/${email}`,
        headers: {'Authorization': 'Bearer '+ token}
      })
      return response.data.data
   }catch(e){
     
    } ;
}
    
return orderData()

}


//!USER INFO CONNECTION WITH DATA BASE

export const userDataDb=(db)=>{
  console.log(`data base is connected with ${db}`)
}


//USER SIGN UP 
// export const userSignUp=(userData)=>{

//   const userCreate=async()=>{

//     try {
//       const responsedData=await axios.post("http://localhost:5000/api/user/signup", userData)
//       console.log(responsedData)
      
//     } catch (error) {
//       console.log(`something problem in sign up`)
//     }

//   }
//   userCreate()
    
  
// }

//SIGN UP 
export const userSignUp=async(userData)=>{
  try {
    const resData=await axios.post('http://localhost:5000/api/user/signup' , userData)
    // console.log(resData)
    return resData
    
  } catch(e){
  //  console.log(e)
  // return 
  }
    
}

//SIGN IN

export const userSignIn=async(userData)=>{
 
 try{
    const resData=await axios.post('http://localhost:5000/api/user/signin' , userData) 

    return resData
  }catch{
    console.log()
   } ;

}

//SEARCH FOOD

export const searchFood=async(keyWord)=>{
try{
    const resData=await axios.post('http://localhost:5000/api/food/searchfood',{keyWord})
      return resData
    // console.log(resData)
 }catch(e){
   console.log(e)
  } ;
}


//SPECIFIC FOOD SPECIFICATION

export const foodDetails=async(id)=>{

  try{
    const resData=await axios.get(`http://localhost:5000/api/food/${id}`) 
    return resData.data.data[0]
    // console.log(resData.data.data)
 
    }catch(e){
      console.log(e)
    } ;
 
  }


//RATING REVIEW
export const ratingReview=async(reviewData)=>{
try{
    const resData=await axios.post('http://localhost:5000/api/food/review',reviewData)

    // console.log(resData)
    return resData.data.data
 }catch(e){
   
  } ;

}  
