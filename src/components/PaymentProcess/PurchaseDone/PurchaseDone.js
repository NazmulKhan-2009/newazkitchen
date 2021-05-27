import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { UserContext } from '../../../App';
import OrderDetailsDB from '../OrderDetailsDB/OrderDetailsDB';
import PurchaseDoneNotification from './PurchaseDoneNotification';
const PurchaseDone = ({successInfo}) => {

const {orderInfo}=useContext(UserContext)
  // console.log(orderInfo.orderId)
 const history = useHistory();
 return (
  <>
   {orderInfo ? <>  
    <PurchaseDoneNotification
      orderInfo={orderInfo}
      successInfo={successInfo}
    />    
   
    <OrderDetailsDB
      orderInfo={orderInfo}
    />


    <Grid 
      container 
      justify="center" 
      style={{marginTop:"3rem"}}>
        <Button 
          variant="outlined" 
          color="primary" 
          className="MuiButton-outlinedSizeSmall" 
          // onClick={()=>history.push("/dashboard/purchasehistory")}
          onClick={()=>history.push("/purchasehistory")}
        >  
          Go to Purchase History
        </Button>
    </Grid>     
  </>
  : 
  
  <h1>Not Uploaded</h1> }
  </>
 );
};

export default PurchaseDone;