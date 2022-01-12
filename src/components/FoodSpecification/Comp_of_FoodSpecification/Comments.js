import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import CommentPass from './CommentPass';
import '../specifyFood.css'



const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  list: {
    marginBottom: theme.spacing(2),
    
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  margin: {
    margin: theme.spacing(1),
    
  },
   button: {
    margin: theme.spacing(1),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginTop: "16px",
  },
  active_avatar:{
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginTop: "16px",
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  }
}));

export default function Comments({comment,handleRating}) {

  const classes = useStyles();
  const [comments, setComments]=useState({})

  return (
    <div>
      <Paper square className="cont_comments">
        <Typography className={classes.text} variant="h5" gutterBottom>
          Comments
        </Typography>

      {
        comment?.length>0 ? 
        <List className={classes.list}>
          {comment?.reverse().filter(item=>item.comment!==null?item.comment:null).map((item,ind)=>(
          <div key={Math.random()}>
            <em style={{color:'whitesmoke',fontSize:"10px",padding:'20px'}}>{item.date}</em>
            <ListItem button>
              <ListItemAvatar>
                <Avatar src={item.email!==null?item.email[0]:"https://images.clipartlogo.com/files/istock/previews/9420/94202953-male-unknown-user-social-icon-isolated-vector-image.jpg"} alt={item.email!==null && item.email[0]} />
                {/* <Avatar src={item.email[0]}  /> */}
              </ListItemAvatar>
              <ListItemText  primary={item.comment} secondary={item.email} />
            </ListItem>
            {/* {console.log('render')} */}
          </div>
        ))}     
      </List>
      :
      <span style={{color:'tomato',padding:'20px'}}>please comment bellow</span> 
      }     
      </Paper>
     <CommentPass handleRating={handleRating}/>


    </div>
  );
}
