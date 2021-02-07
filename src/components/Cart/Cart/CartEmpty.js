import React from 'react';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
 margin: {
   margin: theme.spacing(8),
 },
 extendedIcon: {
   marginRight: theme.spacing(2),
   color:'red'
 },
}));

const CartEmpty = () => {
 const classes = useStyles();
 return (
  <Grid container item={true} direction="column">
  
  <img src="https://www.thokvikreta.com/img/nakup-kos.gif"
    
  style={{
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
  }}
  alt="" />
  {/* Back to Home */}

 <Link to='/' style={{textDecoration: 'none',margin:'auto'}}>
    <Fab
      variant="extended"
      size="medium"
      color="primary"
      aria-label="add"
      className={classes.margin}
    >
      <HomeIcon className={classes.extendedIcon} />
       Back to Home
    </Fab>
 </Link> 
         
</Grid>
 );
};

export default CartEmpty;