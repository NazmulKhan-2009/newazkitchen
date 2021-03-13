import React, { useContext } from 'react';
import ChildrenComp from '../ChildrenComp/ChildrenComp';
import { myContext } from '../PracticePro';


const ParentCom = () => {
  const {info, setInfo} =useContext(myContext)
  // console.log('Parent comp rendering')

 return (
  <div>
   
   <ChildrenComp
    value="BMW">

    <h3>That is property{info}</h3>
    </ChildrenComp> 
    <button onClick={()=>setInfo(' TOYOTA')}>Click</button>
   
  </div>
 );
};

export default ParentCom;