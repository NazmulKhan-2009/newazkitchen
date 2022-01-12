import React from 'react';
import gal1 from '../../../../images/cuisine/4.jpg';
import gal2 from  '../../../../images/cuisine/4.jpg';
import gal3 from  '../../../../images/cuisine/4.jpg';
import gal4 from  '../../../../images/cuisine/4.jpg';
import gal5 from '../../../../images/cuisine/4.jpg';
import gal6 from  '../../../../images/cuisine/4.jpg';
import './photoGallery.css';

export default function Gallery() {

  const images=[gal1,gal2,gal3,gal4,gal5,gal6,gal4,gal5,gal6]

return (  
    <div className="cotainer">
      <div className="row px-2">
        {
          images.map(img=>
            <div key={img} className="col-4 py-2"><img src={img} alt="" className="img-fluid"/></div>
          )
        }
      </div>
    </div>  
  );
}

