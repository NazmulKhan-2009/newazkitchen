import React from 'react'
import { Grid } from '@material-ui/core';
import AdminNav from './AdminNav/AdminNav';



export default ()=> {
 return (


<Grid container item md={10} style={{margin:'auto'}}>

  <Grid item md={5} xs={10}>
    <h3>Admin Information</h3>
    <p>Nazmul Hossain</p>
    <p>Admin Id:2565874</p>
    <figure>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRKsYbGNKnFH2Sy75wHrEHld8bLAOkIAacQ&usqp=CAU" alt=""/>
    </figure>

  </Grid>

  <Grid item md={7} xs={10}>
    <AdminNav/>
  </Grid>


  
</Grid>


 )
}
