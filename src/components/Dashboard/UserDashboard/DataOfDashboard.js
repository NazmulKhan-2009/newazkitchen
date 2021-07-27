import React , { useContext } from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { UserContext } from '../../../App';

// export  const dashboardData=[
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



export default function DataOfDashboard(){

  const {loginInfo, setLoginInfo,setIsAdmin,orderHistoryData,setOrderHistoryData}=useContext(UserContext)


  const dashboardData=[
    {icon:<AddShoppingCartIcon/>,
     boxTitle:'Total Order', 
     count:orderHistoryData?.length,
     color:'#34495E'
    },
    {icon:<AddShoppingCartIcon/>,
      boxTitle:'Delivered Order', 
      count:orderHistoryData?.filter((item)=>item.order_status==='delivered').length,
      color:'#16A085',
     },
     {icon:<AddShoppingCartIcon/>,
      boxTitle:'Pending Order', 
      count:orderHistoryData?.filter((item)=>item.order_status==='processing').length,
      color:'#F39C12',
     },
     {icon:<AddShoppingCartIcon/>,
      boxTitle:'Ongoing Order', 
      count:orderHistoryData?.filter((item)=>item.order_status==='shipping').length,
      color:'#E74C3C',
     },
     {icon:<AddShoppingCartIcon/>,
      boxTitle:'Cancel Order', 
      count:300,
      color:'#2980B9'
     },
     
     {icon:<AddShoppingCartIcon/>,
      boxTitle:'Total Favorites', 
      count:120,
      color:'#8E44AD',
     }
     
  ]

  return dashboardData
    
  
}

