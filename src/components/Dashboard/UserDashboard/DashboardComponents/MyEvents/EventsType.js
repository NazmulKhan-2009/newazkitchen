
import React from 'react';
import Select from 'react-select';
// import TextareaAutosize from 'react-autosize-textarea';



const options = [
 { value: 'Marriage', label: 'Marriage' },
 { value: 'Birth Day', label: 'Birth Day' },
 { value: 'Corporate Events', label: 'Corporate Events' },
 { value: 'Award Celebration', label: 'Award Celebration' },
 { value: 'Reunion', label: 'Reunion' },
 { value: 'Other', label: 'Other' },
];

const EventsType=({handleChange,item})=>{
// const [item, setItem]=useState(null)
//!xx //console.log(item?.selectedOption.value);
// //console.log(item)


// const handleChange = selectedOption => {

//  // setItem({ selectedOption });
//  setItem(selectedOption.value);

 
// };



 return(
  
  <>
    <Select
        value={item}
        onChange={handleChange}
        options={options}
        placeholder={item ? item : 'select you event'}
        isSearchable
      />
  </>

  
 )
}



export default EventsType