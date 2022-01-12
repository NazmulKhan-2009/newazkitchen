
// import { Grid } from '@material-ui/core';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import EventInfo from './EventInfo';

export default function MyEvents() {
 
  //!Cookies Practice
  // Cookies.set('isOkay', 'true', { expires: "7m" })
  // var date = new Date();
  // date.setTime(date.getTime() + (60 * 1000));
  // Cookies.set('isOkay','runCokies',{expires:date})
  // //console.log(Cookies.get('isOkay'));
//! jwt practice
  // const toka=jwt.sign({demo:'toka'},"khan20",{ expiresIn: '20000ms'})
  // sessionStorage.setItem('toka',toka)
  // const toko=sessionStorage.getItem('toka')
  // //console.log(jwt.verify(toko,"khan20"))

  return (
    <Sidebar>
      <EventInfo/>
    </Sidebar>   
  );
}




    // npm i @material-ui/pickers@3.2.8 @date-io/date-fns@1.3.13 date-fns@2.8.1