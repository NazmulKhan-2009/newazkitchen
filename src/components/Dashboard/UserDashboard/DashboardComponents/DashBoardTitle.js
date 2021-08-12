import React from 'react'

const DashBoardTitle=({dashTitle})=>{
 return (
  
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white contract_stroke" >{dashTitle}</h1>
                <h1 className="position-absolute text-uppercase text-primary">{dashTitle}</h1>
            </div>
 )
        
}

export default DashBoardTitle

