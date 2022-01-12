import React, { useContext } from 'react';
import { CountUp } from 'use-count-up';
import { UserContext } from '../../../../../App';
import DataOfDashboard from '../../DataOfDashboard';
import DashBoardTitle from '../DashBoardTitle';
import classes from './Dashboard.module.css';


export default function DashboardRoot() {
//  const {loginInfo, setLoginInfo,setIsAdmin,orderHistoryData,setOrderHistoryData}=useContext(UserContext)
//  const {userName,accessAs,userEmail}=JSON.parse(sessionStorage.getItem('userInfo'))

 return (
    <div>
      <DashBoardTitle dashTitle="Dashboard"/>
        <div className={classes.box_container_cus}>
          {
            DataOfDashboard().map((item,index)=>
            <div key={item.boxTitle}  style={{ background:item.color }} className={classes.dash_box_cus}>
            {/* <div className={classes.icon_custom}>{item.icon}</div> */}
            <img className={classes.icon_custom} src={item.icon} alt="" width="20%"/>
            <h5>{item.boxTitle}</h5>
            <h5><CountUp isCounting end={item.count} duration={5.2} /></h5>     
            </div>             
            )
          }    
      </div>
   
    </div>
 )
}
