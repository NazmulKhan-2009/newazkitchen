import React from 'react'
import {contactMethod} from '../ContactUs/contactUsData';
import Form from './Form';
import DashBoardTitle from '../../Dashboard/UserDashboard/DashboardComponents/DashBoardTitle';
import "./ContactUsNew.css";
export default function ContactUsNew() {
 return (
   <>
     <DashBoardTitle dashTitle="Contact Us"/>
     <div className="container-fluid contact_us_wrapper" id="contact">
       <div className="row pt-5">
         <div className="col-md-10 mx-auto">
           <div className="row display-flex align-items-center">
             <div className="col-md-6">
               {contactMethod.map(contact=>
                <div key={contact.icon} className="contact_method ">
                <contact.icon className="icon"/>
                <span>{contact.det}</span>
               </div>)}   
             </div>   
             <div className="col-md-6">
                <Form/>
             </div>
         </div> 
        </div>  
       </div> 
     </div> 
   </> 

 )
}
