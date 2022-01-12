import React from 'react'
import { Link } from 'react-router-dom';
import './socialLink.css'
export default function socialLink() {
 return (

  <div className="socialLink">
   
 
  <div class="frame">
         {/* <!-- add social icons--> */}
         <a href="#" className="btn">
             <i class="fa fa-facebook" style={{color: "#3b5998"}}></i>
         </a>
         {/* <!-- twitter--> */}
         <a className="btn">
            <i class="fa fa-twitter" style={{color:"#00ecee"}}></i>
        </a>
        {/* <!-- dribbble--> */}
        <a href="https://reactapp.newazkitchenbdapi.com"  target='_blank' rel="noopener noreferrer" className="btn">
            <i class="fa fa-instagram" style={{color:"#ea4c89"}}></i>
        </a>
        {/* <!--linkedin--> */}
        <a href="" className="btn">
            <i class="fa fa-linkedin" style={{color:"#0e76a8"}}></i>
        </a>
        {/* <!--pocket--> */}
        <a href="" className="btn">
            <i class="fa fa-pinterest" style={{color:"#ee4056"}}></i>
        </a>
        {/* <!-- envelope--> */}
        <a href="" className="btn">
            <i class="fa fa-envelope" style={{color:"#65d838"}}></i>
        </a>
     </div>
   </div>  
 )
}
