import { Grid } from '@material-ui/core';
import React from 'react';
import sectionImage from "../../../../images/headersectionphoto.png"
import './HeaderSection.css'
const HeaderSection = () => {
  return (
    
    <Grid container item={true}  xs={10} md={10}  style={{margin:"auto",paddingTop:"2rem"}} className="device__view custom_header_style">
        <Grid item={true} xs={12} md={7} >
          <h2>Welcome to <span className="greeting">Newaz Kitchen</span> </h2>
          <p>The venture of Perfect Cooking, tasty and delightful cuisine on behalf of healthy and time consuming also focusing on test to see customer happiness </p>

        </Grid>

        <Grid item={true} xs={12} md={5}>
        <img src={sectionImage} alt="" width="100%"/>
        </Grid>
    </Grid>    


    
  );
};

export default HeaderSection;