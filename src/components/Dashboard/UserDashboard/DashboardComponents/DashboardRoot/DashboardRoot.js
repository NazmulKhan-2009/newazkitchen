import React, { useContext } from 'react';
import { CountUp } from 'use-count-up';
import { UserContext } from '../../../../../App';
import DataOfDashboard from '../../DataOfDashboard';
import DashBoardTitle from '../DashBoardTitle';
import classes from './Dashboard.module.css';


export default function DashboardRoot() {
 // const {dash_box_cus, icon_custom , box_container_cus}=classes
 const {loginInfo, setLoginInfo,setIsAdmin,orderHistoryData,setOrderHistoryData}=useContext(UserContext)

// const [tempData, setTempData]=useState([])

 //console.log(loginInfo.data?.order)


 const {userName,accessAs,userEmail}=JSON.parse(sessionStorage.getItem('userInfo'))
//  const token=sessionStorage.getItem('token')

 //console.log(orderHistoryData?.length)
 //console.log(loginInfo)
//console.log(userName)
// //console.log(tempData)

// useEffect(()=>{
//   const orderDataHistory =async()=>{
//     const data=await orderHistory(userEmail,token)
//     setTempData(data)
//     //console.log(data)
    
//    }
//     orderDataHistory()
// },[])


// const dataOrd=orderHistoryData?.map((item)=>item.order_status)
// //console.log(orderHistoryData?.filter((item)=>item.order_status==='shipping').length)


 return (
  <div>
  {/* <h2 style={{textAlign:'center',padding:"20px"}}>Welcome to dashboard <span style={{color:'tomato' }}>{userName}</span> </h2> */}
      <DashBoardTitle dashTitle="Dashboard"/>

       <div className={classes.box_container_cus}>
         {
          DataOfDashboard().map((item,index)=>
          <div key={item.boxTitle}  style={{ background:item.color }} className={classes.dash_box_cus}>
          <div className={classes.icon_custom}>{item.icon}</div>
          <h2>{item.boxTitle}</h2>
          {/* <h2><CountUp isCounting end={item.count} duration={5.2} /></h2> */}
          <h2><CountUp isCounting end={item.count} duration={5.2} /></h2>
           
          
          </div>
            
          )
         }
         {/* <p className={`${font} ${para} ${border}`}>Perfect</p> */}
          </div>
   
  </div>
 )
}
