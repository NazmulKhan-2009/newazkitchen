import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#282828',
    textAlign: 'center',
    margin:'auto'
    ,
  },
}));

export default function CategoryList() {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <TwitterIcon />        
        </ListItemAvatar>  
        <ListItemText 
          primary="Lorem ipsum dolor sit amet" 
          secondary= {<a href="http://google.com"  target="_blank" rel="noopener noreferrer">click here</a>} 
          />
      </ListItem>
      <ListItem>
        <ListItemAvatar>          
          <PinterestIcon />    
        </ListItemAvatar>
        <ListItemText 
          primary="Lorem ipsum dolor " secondary={<a href="http://google.com"   target="_blank" rel="noopener noreferrer">click here</a>}            
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>     
          <InstagramIcon />      
        </ListItemAvatar>
        <ListItemText 
          primary="Lorem ipsum dolor sit amet" secondary={<a href="http://google.com"   target="_blank" rel="noopener noreferrer">click here</a>} />
      </ListItem>
    </List>
  );
}

