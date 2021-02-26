import React from 'react';
import { useHistory } from 'react-router-dom';

const PurchaseDone = () => {
 const history = useHistory();
 return (
  <div>
   <h4>Thank you for purchase from newaz kitchen</h4>
   <button onClick={()=>history.push("/dashboard/purchaseHistory")}>History</button>
  </div>
 );
};

export default PurchaseDone;