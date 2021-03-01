import { Grid } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const PurchaseDone = ({successInfo}) => {
 const history = useHistory();
 return (
  <Grid style={{textAlign: 'center'}}>
    <div className="Result">
      <div className="ResultTitle" role="alert">
        {successInfo.successMsg}
      </div>
      <div className="ResultMessage">
        {successInfo.paymentIdInfo}
      </div>
      {/* <ResetButton onClick={reset} /> */}
    </div>
   {/* <button onClick={()=>history.push("/dashboard/purchaseHistory")}>History</button> */}

   <Button variant="outlined" color="primary" className="MuiButton-outlinedSizeSmall" onClick={()=>history.push("/dashboard/purchaseHistory")}>
        Go to Purchase History
   </Button>
  
  </Grid>
 );
};

export default PurchaseDone;