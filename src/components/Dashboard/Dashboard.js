import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Dashboard = () => {
  const [loginInfo]=useContext(UserContext)
  console.log(loginInfo)
 return (
  
   <h1>{`welcome ${loginInfo.data.data.user_name}`}  That is DashBoard Route</h1>
   
  
 );
};

export default Dashboard;