import { Grid } from '@material-ui/core';
import React from 'react';
import CommonTitle from '../../common_comps/CommonTitle';

const WaitingOrder = ({confirmCart,paymentMethod,text,info}) => {

 return (
   <Grid  item={true} xs={10} md={confirmCart? 4:10} style={{margin:"auto"}}>  
     <Grid >
      {/* <h3
      style={{
        textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
        color:"#fd5c63",
        marginTop:"1rem",
        textAlign:'center'     
        }}
     > {info.text}</h3> */}
     <CommonTitle title={info.text}/>
     <img 
       style={{
        margin: '0 auto',       
        display: 'block',
        maxWidth: info.width || '50%',
        maxHeight: '70%',   
      }}
      src={info.img} alt=""/>
     </Grid>
   </Grid>
 );
};


export default WaitingOrder;