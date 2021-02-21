import { Grid } from '@material-ui/core';
import React from 'react';

const WaitingOrder = ({confirmCart,paymentMethod,text,info}) => {
// console.log(paymentMethod)
  

 return (
   <Grid  item={true} xs={10} md={confirmCart? 4:8} >
   
     {/* <h3
      style={{
        textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
        color:"#fd5c63",
        marginBottom:"1rem"     
        }}
     > {confirmCart ?`Waiting for Delivery Address`: `Waiting for Confirm Cart`}</h3>
     <img 
       style={{
        margin: '0 50%',       
        display: 'block',
        maxWidth: '50%',
        maxHeight: '70%',
       
      }}
    
     
     src="https://media1.giphy.com/media/LVd5BbSMsgKLEjKpqL/source.gif" alt=""/> */}

     
     <>
      <h3
      style={{
        textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
        color:"#fd5c63",
        marginBottom:"1rem"     
        }}
     > {info.text}</h3>
     <img 
       style={{
        margin: '0 50%',       
        display: 'block',
        maxWidth: '50%',
        maxHeight: '70%',
       
      }}
    
     
     src={info.img} alt=""/>
     </>
     

   </Grid>
 );
};

export default WaitingOrder;