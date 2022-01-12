import React from 'react';
import { useHistory } from 'react-router-dom';
import AppNav from '../../Home/Header/AppBar/AppNav';
import MobAppNav from '../../Home/Header/AppBar/MobAppNav';
import Dialogs from '../Dialog/Dialogs';
import CartOrder from './CartOrder';

const Cart = () => {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const totalPrice=JSON.parse(sessionStorage.getItem('totalPrice'));

  const handleDialog=(bool)=>{
   setOpen(bool)
  }

  const handleAgree=(bool)=>{
   setOpen(bool)
  }

  const handleDisagree=(bool)=>{
   if(!bool){
    history.push("/")
   }
  }

 return (
  <div style={{height:"100vh",overflow:"scroll"}}>
  <AppNav otherThanHome={false}/>
  <MobAppNav otherThanHome={false}/>
   <CartOrder handleDialog={handleDialog}/>
   <Dialogs 
    dial={open} 
    handleAgree={handleAgree}
    handleDisagree={handleDisagree}
    dialogInfo={{
      title:'Payment Process....',
      content:'Before Next level of payment please be informed you have to Pay by Bkash as 50% of your total price about ',
      payment:totalPrice*.5,
      contentEnd:'and rest of price will be collected on delivery. ',
      btnYes:"Agree",
      btnNo:"Disagree"
      }}
   />
  </div>
 );
};


export default Cart;