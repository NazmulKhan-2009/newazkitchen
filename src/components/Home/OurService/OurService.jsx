import React from 'react'
import DetailsIcon from '@material-ui/icons/Details';
import './ourservice.css'
import { serviceData } from './ourService_data';
import { NavLink } from 'react-router-dom';


export default function OurService() {


return (
  <div className="container-fluid py-5" id="service">
    <div className="container-fluid"> 
      <div className="position-relative d-flex align-items-center justify-content-center">
        <h1 className="display-1 text-uppercase text-white contract_stroke custom_stroke" >Newaz Kitchen</h1>
        <h1 className="position-absolute text-uppercase text-primary">Our Service</h1>
      </div>     
      <div className="row position-relative d-flex align-items-center justify-content-center pb-3 col-lg-10 mx-auto">
          {serviceData.map((elem)=>            
          <div key={elem.serviceName} className='col-lg-4 col-md-4 my-3'>  
            <div className={elem.styleClassWrapper}>
              <div className={elem.styleClassTitle}>
                <h2>{elem.serviceName}</h2>
              </div>

              <div className="service_details collapse " id={elem.handleCollapse}>
                <p className="d-flex align-items-center">{elem.details} <span><NavLink className="check_in" to={elem.link}>Check In</NavLink></span></p>
              </div>

              <div className="service_card_bottom d-flex align-items-center">
                <img src={elem.imgBottom} alt=""/>
              </div>

              <span 
                className='see_moreBtn' 
                data-toggle="collapse" 
                data-target={`#${elem.handleCollapse}`} 
                aria-expanded="false" 
                aria-controls={elem.handleCollapse}
                text-warning='true'
              >
                <div className="animated infinite tada"><DetailsIcon/>Details</div>
              </span>
            </div>
        </div>
        )}
      </div>  
  </div>
</div> 
 )
}




