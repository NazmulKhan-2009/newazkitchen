import React from 'react';
import WaitingOrder from '../../../Cart/Cart/WaitingOrder';
import PurchaseDone from '../../PurchaseDone/PurchaseDone';


const CashOnDelivery = ({purchaseNotify}) => {

 
 return (
    <>
    {
      !purchaseNotify ?
      <div className="Form">
      <WaitingOrder
         info={{
          text:"Waiting For Payment Option",
          img:' https://media.tenor.com/images/f877ce050749a1ab7db5cad6997658f3/tenor.gif'}}
             />
      
     </div>
     :
     <PurchaseDone
       successInfo={{
         paymentIdInfo:'You will Pay 2222 Taka once you received the Food',
         successMsg:`Thanks for purchase from Newaz Kitchen, your puchase ID is  ${'NK-'+Date.now()+Math.floor(Math.random())}`,

         
      }}

     />
    }
  </>
 );
};

export default CashOnDelivery;