import React from 'react';
import { Link as SmoothLink } from 'react-scroll';
import './HeaderSection.css'
export default function HeaderSection1() {
 return (
  <div className="qt-box qt-background" id='home'>
    <div className="container">
      <div className="row header_about">
        <div className="col-md-7 col-sm-6 mr-auto ">        
          <h1>The finest <br/>flavors explored....</h1>
          <p>Take it easy this Thanksgiving with our Cooking! It has everything you need to whip up a feast, right in your own dining!</p>        
          <button type="button" className="btn btn-outline-info text-white" data-toggle="tooltip" data-placement="bottom" title="Click for order">  <SmoothLink  to="order" smooth={true} duration={800}>Let's Order</SmoothLink></button>      
          <p className="py-5 order_call">Call <span> 0171-298-53-80 </span> for your order Details</p>
        </div>       
      </div>
    </div>
    {/* <img src="https://raw.githubusercontent.com/JaznanOfficial/e-learning/main/wave1.png" alt="" /> */}
    
</div>
 )
}
