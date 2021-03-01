import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// import PAYMENT_API from '../../../../../../secretAPI';
import CardForm from '../CardForm/CardForm';

// const stripePromise = loadStripe(PAYMENT_API);
// const stripePromise = loadStripe('pk_test_51HZmpeBrQZkVZj93ptIXAlr0QfKpz53Jmi58FsGsE2DpgVLXGWkTAyU69KDD0oIvhiBFk0qyHkPIHtwy8jRiRzOr00RFgzPi1v');

const CardPayment = ({setPaymentData,purchaseDone,dbOrderedInfo}) => {
    

 return (
  <div>
   <h3 
    style={{
        textAlign: 'center',
        textShadow: '5px 4px 11px rgba(0, 0, 0, 0.26)',
        color:'#AB47BC'}}>Pay Bill by Debit/Credit Card</h3>
   {/* <Elements stripe={stripePromise}>
                        <CardForm setPaymentData={setPaymentData}/>
                    </Elements> */}

                    <CardForm setPaymentData={setPaymentData} purchaseDone={purchaseDone} dbOrderedInfo={dbOrderedInfo}/>
  </div>
 );
};

export default CardPayment;

// purchase data issue start from here