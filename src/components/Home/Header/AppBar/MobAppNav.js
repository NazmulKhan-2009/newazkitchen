import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ListItem from '@material-ui/core/ListItem';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import { Link as SmoothLink } from 'react-scroll';
import { Avatar, Badge, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles({
  list: {
    width: 250,
    background: "linear-gradient(248deg, rgba(119,108,113,1) 0%, rgba(31,24,24,1) 62%)",
    color:'whitesmoke',
    height:'auto',
    
  },
  fullList: {
    width: 'auto',
  },
});

export default function MobAppNav({otherThanHome}) {
  const classes = useStyles();
  const [draw, setDraw] = React.useState(false);
  const history= useHistory()
  const {cartItem, setCartItem,loginInfo, setLoginInfo,isAdmin,darkMode,screenMode,current_screen_mode,cartOpen, setCartOpen,setUserData}=useContext(UserContext)

  const privateAccess=(routeAccess)=>{
    routeAccess==="login" ? history.push('/login') : history.push('/dashboard')
  }

  const toggleDrawer = (open) => (event) => {
    setDraw(open);
  };

  const handleLogout=()=>{
    setLoginInfo({})
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('image')
    sessionStorage.removeItem('userInfo')
    sessionStorage.removeItem('isAdmin')
    history.push('/')
    setUserData({})
  }

const isLogin=!loginInfo.data && sessionStorage.getItem('token')===null;
const userImage=sessionStorage.getItem('image')
const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
  const list = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]:  'top'
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
          
      
      <List>  
        <span style={{padding:'10px 20px'}}>{userInfo ? `Hello, ${userInfo.userName}` : ""} </span>
        <ListItem>
          <Link to="/" className='link_style'>
            Home
          </Link>
        </ListItem>  
        <ListItem>
          <Link to="/dashboard" className='link_style'>
            Dashboard
          </Link>
        </ListItem>
        {otherThanHome && ['order', 'service', 'blog','contact'].map((path, index) => (
        <ListItem>
          <SmoothLink className='link_style' to={path} smooth={true} duration={800}>{path}</SmoothLink>       
        </ListItem>        
        ))}

                 
      </List> 
      <div style={{display:"flex",alignItems:'center',padding:"20px 40px",justifyContent: "space-between"}}>
        <Avatar alt="Remy Sharp" src={userImage} className={classes.small} />
        <Badge badgeContent={cartItem && cartItem.length} color="secondary"  >
          <Link to="/cart"> <ShoppingBasketIcon   style={{ color:"crimson",fontSize:'30px'}}/></Link>
        </Badge>                 
        <Badge badgeContent={2} color="secondary" ><NotificationsIcon color="secondary"/></Badge> 
        <Button onClick={isLogin ? ()=>privateAccess("login") : handleLogout} color="secondary">{isLogin?<ExitToAppIcon/>: <AssignmentReturnIcon/>}{isLogin?"Log In" : "Log out"}</Button> 
      </div>  
    </div>
  );

  return (
    <div className="deviceMenu brand" id='upper1'>     
        <React.Fragment>        
          {/* <span>Newaz Kitchen</span>       */}
          <Button color="secondary" onClick={toggleDrawer(!draw)}><DehazeIcon/></Button>          
          <Drawer anchor="top" open={draw} onClose={toggleDrawer(false)}>
            {list('top')}
          </Drawer>
        </React.Fragment>     
    </div>
  );
}
