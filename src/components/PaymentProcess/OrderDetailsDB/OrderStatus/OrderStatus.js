import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import WaitingOrder from '../../../Cart/Cart/WaitingOrder';
import { orderHandleImg } from '../../../CommonFunction';

const OrderStatus = () => {
  const {orderInfo}=useContext(UserContext)  
  return (
    <WaitingOrder
      info={{width:'100%',text:"Waiting for Verification",img:orderHandleImg(orderInfo.order_status)}}
    />
  );
};

export default OrderStatus;