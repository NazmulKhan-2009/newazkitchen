import axios from "axios";
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import DashboardRoot from './UserDashboard/DashboardComponents/DashboardRoot/DashboardRoot';
// import { CountUp } from 'use-count-up'
import Sidebar from "./UserDashboard/DashboardComponents/Sidebar/Sidebar";
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const Dashboard = () => {
  const {loginInfo, setLoginInfo,setIsAdmin,orderHistoryData}=useContext(UserContext)
  //console.log(loginInfo.data?.order)
  const history=useHistory()

const handleSignOut=()=>{
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('userInfo')
  setIsAdmin(false)
  sessionStorage.removeItem('isAdmin',false)
  
  setLoginInfo({user_name:''})
  history.push('/')

}


const handlePurchase=()=>{
  
  const userInfo=JSON.parse(sessionStorage.getItem('userInfo')) 
  const token=sessionStorage.getItem('token')
  //console.log(userInfo)

  const orderData=async()=>{


    // const data=await axios({
    //   method: 'get',
    //   url: `http://localhost:5000/api/order/orderhistory/${userInfo.userEmail}`,
    //   // data: {
    //   //   firstName: 'Fred',
    //   //   lastName: 'Flintstone'
    //   // },
    //   headers: {'Authorization': 'Bearer '+ token}
    // });
    // //console.log(data)

    // try{
    //   const data=await axios({
    //     method: 'get',
    //     url: `http://localhost:5000/api/order/orderhistory/${userInfo.userEmail}`,
    //     // url: "http://localhost:5000/api/order/previousorders",
    //     // data: {
    //     //   firstName: 'Fred',
    //     //   lastName: 'Flintstone'
    //     // },
    //     headers: {'Authorization': 'Bearer '+ token}
    //   });
    //   // //console.log(data.data.session)
    //   // const data=await axios.get("http://localhost:5000/api/order/previousorders")
    //   // //console.log(data)
      
    //   if(data.data.session){
    //     //console.log(data)  
    //   }else{
    //     sessionStorage.removeItem('token')
    //     sessionStorage.removeItem('userInfo')
    //     setLoginInfo({user_name:''})
    //     history.push('/login')
    //   }
    // }catch(e){
    //   //console.log(`error here ${e}`)
    //  } ;

    //! try with populate relation data base
    try{
        // const data=await axios.get('http://localhost:5000/api/order/orderdetail')
        // //console.log(data)

        const data=await axios({
          method:'get',
          url:'http://localhost:5000/api/order/orderdetail',
          headers: {'Authorization': 'Bearer '+ token}

        })

        //console.log(data)

        history.push('/PurchaseHistory')

     }catch(e){
       
      } ;
  }

 
  
orderData()

}

const {userName,accessAs}=JSON.parse(sessionStorage.getItem('userInfo'))

// const dashboardData=[
//   {icon:<AddShoppingCartIcon/>,
//    boxTitle:'Total Order', 
//    count:200,
//    color:'#34495E'
//   },
//   {icon:<AddShoppingCartIcon/>,
//     boxTitle:'Delivered Order', 
//     count:100,
//     color:'#16A085',
//    },
//    {icon:<AddShoppingCartIcon/>,
//     boxTitle:'Pending Order', 
//     count:150,
//     color:'#F39C12',
//    },
//    {icon:<AddShoppingCartIcon/>,
//     boxTitle:'Cancel Order', 
//     count:300,
//     color:'#2980B9'
//    },
//    {icon:<AddShoppingCartIcon/>,
//     boxTitle:'Ongoing Order', 
//     count:50,
//     color:'#E74C3C',
//    },
//    {icon:<AddShoppingCartIcon/>,
//     boxTitle:'Total Favorites', 
//     count:120,
//     color:'#8E44AD',
//    }
   
// ]

// useEffect(()=>{
//   (async()=>{
//     const response=await axios('')
//   })()

// },[])

 return (

  

     <Sidebar>
     
       {/* <h2 style={{textAlign:'center',padding:"20px"}}>Welcome to dashboard <span style={{color:'tomato', }}>{userName}</span> </h2>
       <Grid style={{display:'flex',flexWrap: "wrap",justifyContent:'space-around',padding:'40px'}}>
         {
          dashboardData.map((item,index)=>
          <Grid key={item.boxTitle} item xs={10} md={6} lg={3} style={{display:'flex',flexDirection:'column' ,background:item.color,padding:'30px',margin:'10px',position:'relative',marginTop:"30px",borderRadius:'20px',textAlign:'center',color:'whitesmoke'}}>
          <div style={{position:'absolute',top:'-20px',left:'42%',background:'black',padding:'5px',borderRadius:'20%',border:'3px solid white'}}>{item.icon}</div>
          <h2>{item.boxTitle}</h2>
          <h2 ><CountUp isCounting end={item.count} duration={5.2} /></h2>
          </Grid>

          )
         }
          </Grid> */}

          <DashboardRoot />
       
     </Sidebar>
  
   
  
 );
};

export default Dashboard;


{/* <Grid md={10} item container justify="center">
      <Grid> 
        <p>Welcome <span style={{color:'indigo',fontWeight:"bold"}}>{userName} </span> <span style={{color:'tomato',cursor:"pointer"}} onClick={handleSignOut}>Sign out</span></p>
      {accessAs==="success" &&
        <Button variant="contained" color='primary' onClick={handlePurchase}>user Purchase History</Button>}

        {accessAs==="admin" && <Button variant="contained" color='primary' onClick={handlePurchase}>admin Purchase History</Button>}
        <Grid style={{fontSize:"40px",color:"whitesmoke",background:'black'}}>
          <CountUp isCounting end={320} duration={5.2} />
         
        </Grid>
       
        

      </Grid>
     
</Grid>      */}