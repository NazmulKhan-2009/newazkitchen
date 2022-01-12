import React , { useContext } from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { UserContext } from '../../../App';
import totalOrder from '../../../images/dashboard/icon/total_order.png'
import deliveredOrder from '../../../images/dashboard/icon/done_order.png'
import pendingOrder from '../../../images/dashboard/icon/pending_order.png'
import ongoingOrder from '../../../images/dashboard/icon/processing_order.png'
import cancelOrder from '../../../images/dashboard/icon/cancel-order.png'
import fav_order from '../../../images/dashboard/icon/fav_order.png'


export default function DataOfDashboard(){

  const {orderHistoryData}=useContext(UserContext)


  const dashboardData=[
    {icon:totalOrder,
     boxTitle:'Total Order', 
     count:orderHistoryData?.length,
     color:'#34495E'
    },
    {icon:deliveredOrder,
      boxTitle:'Delivered Order', 
      count:orderHistoryData?.filter((item)=>item.order_status==='delivered').length,
      color:'#16A085',
     },
     {icon:pendingOrder,
      boxTitle:'Pending Order', 
      count:orderHistoryData?.filter((item)=>item.order_status==='processing').length,
      color:'#F39C12',
     },
     {icon:ongoingOrder,
      boxTitle:'Ongoing Order', 
      count:orderHistoryData?.filter((item)=>item.order_status==='shipping').length,
      color:'#E74C3C',
     },
     {icon:cancelOrder,
      boxTitle:'Cancel Order', 
      count:300,
      color:'#2980B9'
     },
     
     {icon:fav_order,
      boxTitle:'Total Favorites', 
      count:120,
      color:'#8E44AD',
     }
     
  ]

  return dashboardData
    
  
}

