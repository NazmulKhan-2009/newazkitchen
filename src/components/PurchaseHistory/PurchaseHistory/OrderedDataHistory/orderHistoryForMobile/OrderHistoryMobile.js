import React from 'react'
import './orderHisMob.css'
export default function OrderHistoryMobile({orderHistoryData}) {

 console.log(orderHistoryData)
 return (
  <div className="container p-5 order_his_mob order_his_cont" >
    <div className="row ">
     <div className="sm-10 ">
     <h4>{orderHistoryData.length}</h4>
      {orderHistoryData.slice(0).reverse().map(item=>
       <div key={item._id}>
       <div className="d-flex">
        <span className="pr-2 font-weight-bold"> Order Id: </span>
        <p>{item.orderId}</p>   
       </div>
       <div className="d-flex">
        <span className="pr-2 font-weight-bold"> Total Price: </span>
        <p>{item.delivery_Info.totalPrice}</p>   
       </div>
       <div className="d-flex">
        <span className="pr-2 font-weight-bold"> Payment Method: </span>
        <p>{item.payment_by}</p>   
       </div>
       <div className="d-flex">
        <span className="pr-2 font-weight-bold"> Date: </span>
        <p>{item.order_Time}</p>   
       </div>
       <div className="d-flex">
        <span className="pr-2 font-weight-bold"> Status: </span>
        <p>{item.order_status}</p>   
       </div>
       <div>
       <span style={{background:item.paymentCondition==="unverified" ? 'crimson':'blue',color:'white',padding:"5px",borderRadius:"10px"}}>{item.paymentCondition}</span> 
       </div>
       <hr/>
      </div>
      ) }
     </div>
    </div>
  </div>
 )
}
