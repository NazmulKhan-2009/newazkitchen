import React, { useContext, useState } from 'react';
import { myContext } from '../PracticePro';

const ChildrenComp = (props) => {
const priceInfo=useContext(myContext)


 return (
  <div>
   {`props as attribute property ${props.value}`}
   {props.children}
   <h3 onClick={()=>priceInfo.setCost(priceInfo.price(50))}>That is children property{priceInfo.cost}</h3>
  </div>
 );
};

export default ChildrenComp;