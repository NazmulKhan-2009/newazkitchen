import React, { createContext, useState } from 'react';
import ChildrenComp from './ChildrenComp/ChildrenComp';
import CousinComp from './CousinComp/CousinComp';
import ParentCom from './ParentCom/ParentCom';
import { PracticeProvider } from './PracticePro';






const PracticeComp = () => {
 
 return (
  
  
  <PracticeProvider>
   <ParentCom/>
   <CousinComp/>
  </PracticeProvider>

 );
};

export default PracticeComp;