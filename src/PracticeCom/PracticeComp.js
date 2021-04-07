import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { createContext, useState ,useMemo, useEffect} from 'react';
import { orderedData } from '../components/DataManagement';
import ChildrenComp from './ChildrenComp/ChildrenComp';
import ClassComPrac from './ClassComPrac/ClassCompPrac';
import CousinComp,{info} from './CousinComp/CousinComp';
import  {MyCity} from './myCity';
import ParentCom from './ParentCom/ParentCom';
import PracMemo from './PracMemo';
import { PracticeProvider } from './PracticePro';


const fetchData=(use)=>{
  fetch(`https://jsonplaceholder.typicode.com/${use}`)
  .then(response => response.json())
  .then(json => console.log(json))
}
const PracticeComp = () => {
 
  // const[dist,setDist]=useState(<h2>Canada Usa</h2>)
  const[dist,setDist]=useState(false)
  const ele=<h1 key="2" style={{color:'red'}} className="do" >Welcome Cumilla</h1>
  // console.log(ele)
  // console.log(<PracticeProvider/>)
  // console.log(<CousinComp do/>)
  // console.log(<ParentCom do/>)

  const info=[
    {
      brand:"toyota",
      price:200

    },
    {
      brand:"hundai",
      price:300

    },
    {
      brand:"hundai",
      price:300

    }

  ]
  const [count, setCount]=useState(0)
  const [orderInfo, setOrderInfo]=useState([])
  const [time, setTime]=useState(new Date().toLocaleTimeString())
  
  //?console.log(orderInfo)

  setInterval(()=>{setTime(new Date().toLocaleTimeString())},1000)

  const handleCount=()=>{
    
    
    setCount(count+1)
    // setCount((count, propss)=>{
    //   return count+2
    // })
  }


  //! testing effect useEffect(()=>{
  ////   alert('okay')
  //// },[])

  
  const handleOrder=async()=>{
//! /* ##### Depricated way but tested okay--1
//     const cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
//     const purchasedInfo=JSON.parse(sessionStorage.getItem('purchasedInfo'))
//     console.log(cartInfo[0])
//     const cartData={
//     email:'nazmulustc09@yahoo.com',
//     cart:cartInfo,
//     purchasedInfo:purchasedInfo
//     cart: [{price:cartInfo[0].price,quantity:cartInfo[0].quantity},
//     {price:cartInfo[1].price,quantity:cartInfo[2].imageUrl}
//     ]
//     }
//     console.log(cartData)

//     const orderFood= async()=>{
//       try{
//           const response=await axios.post("http://localhost:5000/api/order/orderdetail", cartData) 
//           setOrderInfo(response.data.data)
//           console.log(response)
//        }catch(e){
//          console.log(`add Order error ${e}`)
//         } ;
//     }  
//     orderFood() */

//! ##### Depricated way but tested okay--2
    //// const info=async()=>{
    //// const resInfoOrder=await orderedData()
    ////  setOrderInfo(resInfoOrder)
    //// }
    //// info()
//* ##### Active way--3
const email="ustciiucbracbank@gmail.com";
    const resInfoOrder=await orderedData(email)
      setOrderInfo(resInfoOrder)
  }
  
  // const title=["dhaka",'ctg','cumilla']
  // const title='dhaka'

  const title=useMemo(()=>{
    return ["dhaka",'ctg','cumilla']
  },[])



  useEffect(()=>{
    fetchData('todos/1')
  },[])
  
 return (
  
  
  <PracticeProvider
  color={{color:"red"}}
  >

  <h1>bye {MyCity()}</h1>
  <h1>hi <MyCity/></h1>

    <ClassComPrac
      greet={'Welcome Bangladesh'}
      localeTime={"bn-BD"}
    />
    <ParentCom/>
    <h1 style={{color:'red'}}>{time}</h1>
    <Button variant="outlined" color="secondary" onClick={handleOrder}>Order Details</Button>
    <CousinComp/>
    <h1>just just just just</h1> 
    {ele}
    {dist ? <h2>Header 2</h2> : <p>Paragaraph</p>}
    <button onClick={()=>setDist(!dist)}>dist</button>
    {/* {info()} */}

    {
    info.map((item,i)=><h3 key={i}>{item.brand} & {item.price}</h3>)
    }
    {
      orderInfo.ordered_Data &&  orderInfo.ordered_Data.map(item=> <img key={item._id} src={item.imageUrl} alt="" width="20%"/> )
    }
    <h3>{orderInfo.email && orderInfo.email}</h3>
    <h1>{orderInfo.purchasedInfo && orderInfo.purchasedInfo.payment_by}</h1>
    <button onClick={handleCount}>click={count}</button>

    <PracMemo value={"rending okay"} title={title} fetchData={fetchData}/>
  </PracticeProvider>
  

 );
};

export default PracticeComp;