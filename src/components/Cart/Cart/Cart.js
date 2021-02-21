import React from 'react';
import Dialogs from '../Dialog/Dialogs';
import CartOrder from './CartOrder';

const Cart = () => {

 const [open, setOpen] = React.useState(false);
const handleDialog=(bool)=>{
 setOpen(bool)
}

const handleAgree=(bool)=>{
 setOpen(bool)
}

 return (
  <div>
   <CartOrder handleDialog={handleDialog}/>
   <Dialogs dial={open} handleAgree={handleAgree}/>
  </div>
 );
};

export default Cart;