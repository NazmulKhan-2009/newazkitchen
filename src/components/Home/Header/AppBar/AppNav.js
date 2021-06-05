import { Fab } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Alert from '@material-ui/lab/Alert';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './AppNav.css';
import logo2 from '../../../../images/logo/logo-2.png'
import { Link as SmoothLink} from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
      
    }
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    border:"1px solid gray",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  
    
  },
  imgStyle:{
    // borderRadius:'50%'
  }
  
}));



const AppNav=({admin})=>{
  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [notify,setNotify]=useState(false)
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // const [cartInfo, setCartInfo]=useState(0)
  const {cartItem, setCartItem,loginInfo, setLoginInfo,isAdmin}=useContext(UserContext)
  // const cartInfo=JSON.parse(localStorage.getItem('cartInfo'))
  // const [adminAccess, setAdminAccess]=useState(false)
 

  // let accessBy='user'
  const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
  console.log(userInfo)


  // if(!userInfo===null){
  //   if(userInfo.accessAs==='admin'){
  //     accessBy=userInfo.accessAs
  //   }

  // }
  

  console.log(loginInfo)
  // let isAdmin=false

  // if(userInfo===null){
  //   isAdmin=false
  // }else if(userInfo.accessAs==='admin'){
  //   isAdmin=true
  // }else{
  //   isAdmin=false
  // }

  // useEffect(()=>{
  //   // setAdminAccess(true)
  // },[userInfo])
  // useEffect(()=>{
    
  //   setCartInfo(cartGet.length)
  // },cartInfo)
console.log(admin)
 

  const handleLogout=()=>{
    setLoginInfo({})
    sessionStorage.removeItem('token')
    // sessionStorage.removeItem('userName')
    sessionStorage.removeItem('userInfo')
    sessionStorage.removeItem('isAdmin')

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
    console.log('Its Dashboard In')
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><DashboardIcon/> DashBoard</MenuItem>
      <MenuItem onClick={handleMenuClose}><AssignmentIndIcon/> Log In</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>


      <MenuItem>
      <IconButton aria-label="show 11 new notifications" color="inherit">
      <Link to="/cart" style={{textDecoration:"none"}}>
      <Badge badgeContent={cartItem && cartItem.length} color="secondary">
          <ShoppingBasketIcon color="primary"/> <span style={{fontSize:'1rem',padding:"5px 5px"}}>Your Cart</span> 
      </Badge>
      </Link>    
        </IconButton>
        
      </MenuItem>


      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      
    </Menu>
  );

  setTimeout(()=>{
      setNotify(false)
  },5000)
  

  return (
    <div>
    {notify && 
    <Alert severity="success" style={{position:"absolute",left:"30%"}}>The Feature under Construction!</Alert>}
      <AppBar position="static" className="null" color='transparent'  elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            {/* <MenuIcon /> */}
          </IconButton>

       
              {/* <Typography className={classes.title} variant="h4">
                Newaz Kitchen
              </Typography> */}
             
                {/* <img src="https://images.news18.com/ibnlive/uploads/2020/04/Tips-on-Cooking-If-Youre-at-Home-F5.jpg" alt="" width="7%" className={classes.imgStyle}  /> */}
              
                <img src={logo2} alt="" width="5%" className={classes.imgStyle}  />
          

          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
            autoFocus={true}
              tabIndex="1"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            
          </div>
           <p>{loginInfo.data && loginInfo.data.user_name || !loginInfo.data && sessionStorage.getItem('userName')}</p>
          <div className={classes.grow} />
         
          
          
            
          

            <Typography className={classes.root} >

            
              {/* <Link to="/uploadfoods" style={{textDecoration:"none",fontWeight:'bold',color:'red'}}>
                Add FOOD
              </Link> */}
              {/*//! BELLOW TRANSMISSION FROM NEXT */}
              {/* {admin==="admin" ?
              <Link to="/adminpanel" style={{textDecoration:"none",fontWeight:'bold',color:'red'}}>
                Admin
              </Link>:""
              } */}
              {
                isAdmin || sessionStorage.getItem('isAdmin')?
                    <Link to="/adminpanel" style={{textDecoration:"none",fontWeight:'bold',color:'red'}}>
                      {userInfo && `Admin-${userInfo.userName}`}
                    </Link>:
                    <Link to="/profile" style={{textDecoration:"none",fontWeight:'bold',color:'red'}}>
                      {userInfo && `${userInfo.userName}`}
                    </Link>
              }
              

              <Link to="/practicecomp" style={{textDecoration:"none",fontWeight:'bold'}}>
                Practice
              </Link>
              <Link to="/" style={{textDecoration:"none"}}>
                Home
              </Link>
              <Link to="/gallery" style={{textDecoration:"none"}}>
                Gallery
              </Link>
              
              <SmoothLink  to="contact" smooth={true} duration={800}>Contact</SmoothLink>
              
              <Link to="/dashboard" style={{textDecoration:"none"}}>
                Dashboard
              </Link>

              { !loginInfo.data && sessionStorage.getItem('token')===null ? <Link to="/login" style={{textDecoration:"none"}}>
                Login
              </Link>
              :
              <span style={{textDecoration:"none"}} onClick={handleLogout}>
                Log Out
              </span>
              
              }


            </Typography>
              
           

    <div className={classes.sectionDesktop}>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
            {/* Shopping cart */}
          {cartItem && cartItem.length>0 && userInfo?.accessAs!=='admin' &&
            
           <IconButton
          
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={null}
              color="inherit"   
              size="medium"              
              style={{position:'fixed',bottom:"10px",right:'20px',background:'gray',width:'60px',border:"2px solid black"}}         
            >
            <Badge badgeContent={cartItem && cartItem.length} color="secondary" >

            <Link to="/cart"> <ShoppingBasketIcon   style={{color:"blue"}}/></Link>
            </Badge>
              
            </IconButton>
          }

          {/* {isAdmin || sessionStorage.getItem('isAdmin')?
            "":
          {cartItem && cartItem.length>0 && <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={null}
            color="inherit"   
            size="medium"              
            style={{position:'fixed',bottom:"10px",right:'20px',background:'gray',width:'60px',border:"2px solid black"}}         
          >
          <Badge badgeContent={cartItem && cartItem.length} color="secondary" >

          <Link to="/cart"> <ShoppingBasketIcon   style={{color:"blue"}}/></Link>
          </Badge>
            
          </IconButton>}
           } */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
           

          

         
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default AppNav;