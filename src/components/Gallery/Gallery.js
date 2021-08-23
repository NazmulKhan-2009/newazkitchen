import React from 'react';
import { useState } from 'react';
import './Gallery.css'
const Gallery = () => {

const [galStyle, setGalStyle]=useState('gallery_con')

 return (
  <div className='custom_card' style={{ width: '21rem'}}>
                    <img src='https://i.ibb.co/TTZrsLJ/iamge1.png' alt=''/>
                    <div className='card_Body'>
                        <div className='d-flex align-items-center'>
                            <img  src="https://i.ibb.co/48jGMhK/Group-204.png" alt=""/>
                            <h5 className='mb-0 ml-2'>Fast Delivery</h5>
                        </div>
                        <div className='card_b_text'>
                            <div className='card_p'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            <p className="collapse" id="collapseExample1">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </p>
                            </div>
                            <span className='see_moreBtn' data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">See more</span>
                       </div>
                    </div>
                </div>
 );
};

export default Gallery;