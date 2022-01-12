import { Grid } from '@material-ui/core';
import React from 'react'


import './footer.css'
import CategoryList from './CategoryList';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import Gallery from './footerGallery/Gallery';
import SocialLink from './socilaLink/SocialLink';
import NewsLetter from './NewsLetter/NewsLetter';

export default function Footer() {

 return (
  <footer>
   <Grid item md={12} className="wrapper" >
     <Grid  className="upperFooter">
        <Grid container className="content footer_item">
          <Grid xs={12} sm={6} md={3}  >
            <h6>Address</h6>
            <span>Shayamoli R/A,<br/> Agrabad, Chittagong<br/><PhoneIcon/> +8801712985380 <br/><EmailIcon/> nazmulustc09@gmail.com</span>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14761.896914054685!2d91.80259469999999!3d22.335715750000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1629819593299!5m2!1sen!2sbd" width="300" height="120" style={{borderRadius:'10px'}} allowfullscreen="" loading="lazy" title="ok">
            </iframe>          
          </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <h6>Recent Post</h6>
            <CategoryList/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h6>Photo Gallery</h6>
            <Gallery/>
          </Grid>
          <Grid item xs={12} sm={6} md={3} >       
            <h6>Follow us</h6> 
            <SocialLink/>
            <NewsLetter/>
          </Grid>
       </Grid> 
    </Grid> 
    <Grid container className="bottomFooter" > 
       <Grid xs={12} sm={12} md={12}>
          <p>Copy right ©{new Date().getFullYear()} all right reserved  by <span style={{color:"crimson"}}>Newaz kitchen</span>  </p>
        </Grid>        
    </Grid>
   </Grid>
  </footer>
 )
}
