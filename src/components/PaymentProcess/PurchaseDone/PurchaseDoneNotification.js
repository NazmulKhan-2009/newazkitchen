import { Grid } from '@material-ui/core';
import React from 'react';


const PurchaseDoneNotification = ({successInfo,orderInfo}) => {
 
 return (
  <Grid item container md={12} sm={10} xs={10}  justify="center">
    <div className="Result">
      <div className="ResultTitle" role="alert">
        {successInfo.successMsg} {orderInfo.orderId}
      </div>
      <div className="ResultMessage">
        {successInfo.paymentIdInfo} 
      </div>
      {/* <ResetButton onClick={reset} /> */}
    </div>
</Grid> 
 );
};

export default PurchaseDoneNotification;