import React, { createContext, useState } from 'react';
import ChildrenComp from './ChildrenComp/ChildrenComp';
import CousinComp,{info} from './CousinComp/CousinComp';
import ParentCom from './ParentCom/ParentCom';
import { PracticeProvider } from './PracticePro';



const PracticeComp = () => {
 
  // const[dist,setDist]=useState(<h2>Canada Usa</h2>)
  const[dist,setDist]=useState(false)
  const ele=<h1 key="2" style={{color:'red'}} className="do" >Welcome Cumilla</h1>
  console.log(ele)
  console.log(<PracticeProvider/>)
  console.log(<CousinComp do/>)
  console.log(<ParentCom do/>)
  
 return (
  
  
  <PracticeProvider
  color={{color:"red"}}
  >
    <ParentCom/>
    <CousinComp/>
    <h1>just just just just</h1> 
    {ele}
    {dist ? <h2>Header 2</h2> : <p>Paragaraph</p>}
    <button onClick={()=>setDist(!dist)}>dist</button>
    {info()}
  </PracticeProvider>

 );
};

export default PracticeComp;