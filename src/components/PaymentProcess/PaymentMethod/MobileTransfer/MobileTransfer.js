import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import PurchaseDone from '../../PurchaseDone/PurchaseDone';
import MoneyTrfCom from './MoneyTrfCom';

const MobileTransfer = ({handleDialog,purchaseDone,purchaseNotify}) => {

    const [orderInfo]=useContext(UserContext)

 const moneyTrfCo=[
  {
   coName:"Bkash",
   img:"https://i.pinimg.com/originals/2b/aa/64/2baa641d6e8d6eeddcea95d2877064f0.png",
  },
  {
   coName:"Nagad",
   img:"https://play-lh.googleusercontent.com/EQC9NtbtRvsNcU1r_5Dr8pWm3hPfN3OjGjzkOqzCEPDJvqBGKyfU9-a2ajNtcrIg1rs",
  },
  {
   coName:"Rocket",
   img:"https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png",
  },
  {
   coName:"Ok Wallet",
   img:"https://mir-s3-cdn-cf.behance.net/projects/404/a037ae86277471.Y3JvcCwxMDcwLDgzNyw0MjMsMTI5.png",
  },
  {
   coName:"Mcash",
   img:"https://greenwatchbd.com/wp-content/uploads/2020/09/IBBL-mCash-700x420.png",
  },
 ]
 return (
     <>
     {
        !purchaseNotify ?

        <Grid >
            <h3 
                style={{
                    textAlign: 'center',
                    textShadow: '5px 4px 11px rgba(0, 0, 0, 0.26)',
                    color:'#AB47BC'}}>Pay Bill by Mobile Money Transfer</h3>
            <Grid container className="Form">
            {
                moneyTrfCo.map(info=><MoneyTrfCom info={info} key={info.coName}
                    handleDialog={handleDialog} purchaseDone={purchaseDone}
                    
                /> )
            }
            </Grid>
            </Grid>
            
            : <PurchaseDone
                successInfo={{
                    paymentIdInfo:`You have Paid ${orderInfo.delivery_Info.totalPrice} Taka on ${orderInfo.payment_by}`,
                    successMsg:`Thanks for purchase from Newaz Kitchen, your puchase ID is `,

         
      }}

            />

        
     }

</>
 );
};

export default MobileTransfer;