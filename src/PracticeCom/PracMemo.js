import React from 'react';

// const PracMemo =  React.memo(props => {
// const [value, setValue]=useState(props.value)
//  //console.log('PracMemo Rendering')

//  const handleClick=()=>{
//    setValue('dhkka')
//  }

//  return (
//   <div>
//    <h4>That is memo rerender page {value}</h4>
//    <button onClick={handleClick}>Click</button>
//   </div>
//  );
// });

// export default PracMemo;



// const PracMemo = (props) => {
//  //console.log('PracMemo Rendering')
//  return (
//   <div>
//     <h4>That is memo rerender page {props.value}</h4>
//   </div>
//  );
// };

// export default PracMemo;

const PracMemo = (props) => {
 


 
 //console.log('PracMemo Rendering')
 return (
  <div>
    <h4>That is memo rerender page {props.value}</h4>
    <button onClick={()=>props.fetchData('users')}>Click</button>
  </div>
 );
};

export default React.memo(PracMemo);
// export default PracMemo;