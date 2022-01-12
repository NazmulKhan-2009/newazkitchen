import React from 'react'

export function ServiceDataOne({service}) {
 return (
    <div className="col-md-6 py-3 px-5 text-center service_style_one">
      <h3 className="py-3">{service.title}</h3>
      <span>{service.des}</span>
    </div>
 )
}

export const ServiceDataTwo=({service})=>{
  return(      
    <div className="col-md-12 py-2 service_style_two">
      <h4>{service.title}</h4>
      <div className="row">
        <div className="col-md-12">
          <img src={service.image} alt="" className="img-fluid"/>
        </div>
        <div className="col-md-12">
          <span>{service.des}</span>
        </div>
      </div>          
    </div>
  )

}
