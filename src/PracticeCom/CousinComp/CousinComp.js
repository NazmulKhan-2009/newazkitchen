import React, { useContext } from 'react';
import { myContext } from '../PracticePro';

export const info=()=>{
 return "dhk-ctg"
}

const CousinComp = () => {
 // const {info, setInfo}=useContext(myContext)
 const {info, setInfo,cost} =useContext(myContext)
 return (
  <div>
   <h1 onClick={() =>setInfo(' Hundai')}>That is Cousin Component{info}  {`which is ${cost}`}</h1>
  </div>
 );
};

export default CousinComp;