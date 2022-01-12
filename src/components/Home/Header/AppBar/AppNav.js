import { Avatar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Switchh from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Link as SmoothLink } from 'react-scroll';
import { UserContext } from '../../../../App';
import logo from '../../../../images/logo/logo-2.png';
import { withStyles } from '@material-ui/core/styles';
import './AppNav.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),      
    }
  }, 
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 25,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 0px',
  },
}))(Badge);

const AppNav=({admin,otherThanHome})=>{ 

  const classes = useStyles();
  //Context API
  const {cartItem,loginInfo, setLoginInfo,isAdmin,darkMode,screenMode,cartOpen, setCartOpen,setUserData,profilePhoto}=useContext(UserContext);
  //Local States
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [notify,setNotify]=useState(false);

  const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
  const isAdminAccess=sessionStorage.getItem('isAdmin')
  const userImage=sessionStorage.getItem('image')
  const history= useHistory(); 
  const privateAccess=(routeAccess)=>{
    routeAccess==="login" ? history.push('/login') : history.push('/dashboard')
  }

  console.log(isAdmin)
  const isMenuOpen = Boolean(anchorEl);

  const handleLogout=()=>{
    setLoginInfo({})
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userInfo')
    sessionStorage.removeItem('isAdmin')
    sessionStorage.removeItem('image')
    // ['token','userInfo','isAdmin','image'].map(each=>sessionStorage.removeItem(each))
    history.push('/')
    setUserData({})
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setNotify(true)
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };


  const menuId = 'primary-search-account-menu';
  const isLogin=!loginInfo.data && sessionStorage.getItem('token')===null
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{zIndex:999999}}
    >
      
      <MenuItem  color="secondary"> <AssignmentIndIcon />  {userInfo ? ` ${userInfo.userName}` : "Unknown"}</MenuItem>
      <MenuItem onClick={()=>privateAccess("dashboard")}><DashboardIcon/>DashBoard</MenuItem>
      <MenuItem>      
      <StyledBadge badgeContent={2} color="secondary"><NotificationsIcon /></StyledBadge>Notifications
      </MenuItem>
      <MenuItem onClick={isLogin ? ()=>privateAccess("login") : handleLogout}>{isLogin?<ExitToAppIcon/>: <AssignmentReturnIcon/>}{isLogin?"Log In" : "Log out"}</MenuItem>
    </Menu>
  );

 
  return (
  <>
     <div id='upper' className="desk_menu scrolling-navbar "  >
      <AppBar position="static" className="null" color='transparent'  elevation={0}>
        <Toolbar >      
          <img src={logo} alt="" width="5%" className={classes.imgStyle}  />
          <div className="brand">
            <span>Newaz Kitchen</span>
          </div>        
          {/* <div className={classes.grow} /> */}
          <div className="nav_item">
           <Typography className={classes.root} >              
              {isAdminAccess &&
                <Link to="/adminpanel" className='link_style'>
                  {`Admin-${userInfo.userName}`}           
                </Link>
              } 
              <Link to="/" className='link_style'>Home</Link>              
              {otherThanHome && ['order', 'service', 'blog','contact'].map((path, index) => (       
              <SmoothLink className='link_style' to={path} smooth={true} duration={800}>{path}</SmoothLink>                     
              ))}
              <Link to="/dashboard" className='link_style'>Dashboard</Link>
              <Switchh checked={darkMode} onChange={()=>screenMode(!darkMode)}></Switchh>
           </Typography>             
          <div className={classes.sectionDesktop} >           
            <IconButton onClick={()=>setCartOpen(!cartOpen)} color="inherit">
              <Badge badgeContent={cartItem && cartItem.length} color="secondary" >
                <Link to="/cart"><ShoppingCartIcon  color={cartItem && cartItem.length ? "secondary" : "primary"} /></Link>
              </Badge>
            </IconButton>                   
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt="Remy Sharp" src={userImage} className={classes.large} />
            </IconButton>          
          </div>  
        </div>        
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  </>
  );
}

export default AppNav;