import React, { createContext, useState } from 'react';


let Context = null
const {Provider,Consumer}=Context=createContext()
const PracticeProvider = (props) => {
 const [info, setInfo]=useState()
 const [cost, setCost]=useState('')
 const price=(cost)=>{return 2*`${cost}`}

 return (
  <Provider
  value={{
   info,
   setInfo,
   price,
   cost,
   setCost
   
  }}
  >
{props.children}
  </Provider>
 );
};

export {PracticeProvider,Consumer as myConsumer, Context as myContext}