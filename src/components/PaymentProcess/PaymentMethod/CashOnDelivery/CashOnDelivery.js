import React from 'react';
import WaitingOrder from '../../../Cart/Cart/WaitingOrder';


const CashOnDelivery = () => {

 
 return (
  <div className="Form">
   <WaitingOrder
      info={{
       text:"Waiting For Payment Option",
       img:' https://media.tenor.com/images/f877ce050749a1ab7db5cad6997658f3/tenor.gif'}}
          />
   
  </div>
 );
};

export default CashOnDelivery;