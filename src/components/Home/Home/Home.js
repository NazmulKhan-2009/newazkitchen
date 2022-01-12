import React, { useEffect } from 'react';
import Food from '../FoodCard/Food/Food';
import AppNav from '../Header/AppBar/AppNav';
import Header from '../Header/Header';
import { Link as SmoothLink } from 'react-scroll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ContactUsNew from '../ContactUs/ContactUsNew';
import Footer from '../Footer/Footer';
import MobAppNav from '../Header/AppBar/MobAppNav';
import OurService2 from '../OurService/OurService2';

const Home = () => {

 return (
   <>
     <AppNav otherThanHome={true}/>
     <MobAppNav otherThanHome={true}/>
     <Header/>
     <Food/>
     <OurService2/>
     <ContactUsNew/>
     <Footer/>

     <SmoothLink className='link_style desk_menu' to="home" smooth={true} duration={800}><ArrowUpwardIcon className="back-to-top"/></SmoothLink> 
     <a className='link_style deviceMenu' href="#home" smooth={true} duration={800}><ArrowUpwardIcon className="back-to-top"/></a>
  </>
 );
};

export default Home;
