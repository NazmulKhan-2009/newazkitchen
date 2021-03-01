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

const MoneyTrfCom=({info,handleDialog,purchaseDone})=>{
  const classes = useStyles();

  // const inputField=(
  // <form>
  //   <input type="text"/>
  //   <input type="text"/>
  //   <button>send</button>
  // </form>
  // )

  const handleMobileTrf=(mobileTrfTitle)=>{
    handleDialog(true,{
      title:`You are going to payment by ${mobileTrfTitle}` ,
      content:'Please Provide ',
      // payment:totalPrice,
      contentEnd:'and send us Transaction ID & Amount. ',
      
      btnYes:"Confirm",
      btnNo:"Change Mind",
      inputOption:'do',
      purchaseDone:purchaseDone
      // inputField
    })

  }

  return (
    <div className={classes.root} onClick={()=>handleMobileTrf(info.coName)} >
      <Avatar variant="square" src={info.img} className={classes.imgStyle}/>
    </div>
  );
}

export default MoneyTrfCom;