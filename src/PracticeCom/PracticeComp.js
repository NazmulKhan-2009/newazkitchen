import React, { createContext, useState } from 'react';
import ChildrenComp from './ChildrenComp/ChildrenComp';
import CousinComp from './CousinComp/CousinComp';
import ParentCom from './ParentCom/ParentCom';
import { PracticeProvider } from './PracticePro';


const PracticeComp = () => {
 
 return (
  
  
  <PracticeProvider
  color={{color:"red"}}
  >
    <ParentCom/>
    <CousinComp/>
    <h1>just just just just</h1> 
  </PracticeProvider>

 );
};

export default PracticeComp;