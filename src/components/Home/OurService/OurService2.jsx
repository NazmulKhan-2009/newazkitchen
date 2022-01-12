import React from 'react'
import img1 from "../../../images/our_service/service_2.png";
import wedding_service from "../../../images/our_service/wedding.jpg";
import order from "../../../images/our_service/event.jpg";
import './ourservice.css'
import { ServiceDataOne, ServiceDataTwo } from './Service_data';

export default function OurService2() {

  const serviceDataOne=[
    {
      title:"Get to know us",
      des:"Whether you own a full-time catering business or operate a simple café, having a brochure to share your expertise in creating for large-scale events may come in handy. Open your services to interested parties by sharing your brand’s story."
    },
    {
      title:"Our Packages",
      des:"Whether you own a full-time catering business or operate a simple café, having a brochure to share your expertise in creating for large-scale events may come in handy. Open your services to interested parties by sharing your brand’s story."
    }
  ]

  const serviceDataTwo=[
      {
        title:"Wedding Dinner", 
        image:wedding_service ,
        des:"Apart from listing down options, you need to share a description about each package you offer. It helps interested parties better understand if each option is fit for their event. Keep it short for easy reading."
      },
      {
        title:"Order Online", 
        image:order,
        des:"Apart from listing down options, you need to shar a description about each package you offer. It helps interested parties better understand if each option is fit for their event. Keep it short for easy reading"
      }
  ]

  
 return (
  
  <div className="container pt-5" >
    <div className="container-fluid" id="service">  
      <div  className="position-relative d-flex align-items-center justify-content-center py-3">
        <h1 className="display-1 text-uppercase text-white contract_stroke custom_stroke" >Newaz Kitchen</h1>
        <h1 className="position-absolute text-uppercase text-primary">Our Service</h1>
      </div> 
    <div className="row service_wrapper">
      <div className="col-md-8 col">
        <div className="row service_section_wrapper">       
          {
            serviceDataOne.map(service=><ServiceDataOne key={service.title} service={service}/>)
          }
        </div>
        <div className="py-2 service_img">
          <img src={img1} alt="" className="img-fluid" />        
        </div>
      </div>
     <div className="col-md-4">
      <div className="row service_aside ">
        {serviceDataTwo.map(service=> <ServiceDataTwo key={service.title} service={service}/>)}
       </div>
     </div>
    </div>   
  </div>
 </div> 
 )
}
