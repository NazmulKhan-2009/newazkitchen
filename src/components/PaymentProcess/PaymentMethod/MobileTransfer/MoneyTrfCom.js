import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
  root: {  
     padding:'6px',
     borderRadius:'10px',
     cursor:'pointer',
    '& > *': {
     margin: theme.spacing(1),
      },
  },
 imgStyle: {
  width: theme.spacing(8),
  height: theme.spacing(8),
  
 }
}));

const MoneyTrfCom=({info})=>{
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Avatar variant="square" src={info.img} className={classes.imgStyle}/>
    </div>
  );
}

export default MoneyTrfCom;