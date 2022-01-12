import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ViewListIcon from '@material-ui/icons/ViewList';
import PropTypes from 'prop-types';
import React, { useContext,useState,useEffect  } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../../../App';
import YourProfile from '../YourProfile/YourProfile';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    
  },
}));

const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
console.log(userInfo?.accessAs)


// const dashboardNav=[
//   {linkName:'Home',linkTo:'/',icon:<HomeIcon/>}, 
//   {linkName:'Dashboard',linkTo:'/dashboard',icon:<DashboardIcon/>},
//   {linkName:'My Order',linkTo:'dashboard-purchasehistory',icon:<ViewListIcon/>},{linkName:'Favorites',linkTo:'dashboard-myfavorites',icon:<FavoriteBorderIcon/>},{linkName:'My Events',linkTo:'dashboard-myevents',icon:<EventIcon/>},
// ]






export default function Sidebar(props) {
const {isAdmin,loginInfo}=useContext(UserContext)
console.log(isAdmin,loginInfo)


  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {setLoginInfo}=useContext(UserContext)
  const history=useHistory()
   //! log out expression
   const logOut=()=>{
    setLoginInfo({})
    sessionStorage.removeItem('token')
    // sessionStorage.removeItem('userName')
    sessionStorage.removeItem('userInfo')
    sessionStorage.removeItem('isAdmin')
    history.push('/')
  } 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const dashboardNav=()=>{
  //   if(userInfo?.accessAs==="admin"){
  //     return [{linkName:'Home',linkTo:'/',icon:<HomeIcon/>}, 
  //       {linkName:'Dashboard',linkTo:'/dashboard',icon:<DashboardIcon/>},
  //       {linkName:'Order',linkTo:'dashboard-order',icon:<ViewListIcon/>},
  //       {linkName:'Event',linkTo:'dashboard-event',icon:<FavoriteBorderIcon/>},
  //       {linkName:'Maintenence',linkTo:'dashboard-maintenence',icon:<EventIcon/>},
      
  //     ]
  //   }
  //   if(userInfo?.accessAs==="success"){
  //     return [
  //       {linkName:'Home',linkTo:'/',icon:<HomeIcon/>}, 
  //       {linkName:'Dashboard',linkTo:'/dashboard',icon:<DashboardIcon/>},
  //       {linkName:'My Order',linkTo:'dashboard-purchasehistory',icon:<ViewListIcon/>},
  //       {linkName:'Favorites',linkTo:'dashboard-myfavorites',icon:<FavoriteBorderIcon/>},
  //       {linkName:'My Events',linkTo:'dashboard-myevents',icon:<EventIcon/>},
      
  //     ]
  //   }
  // }
  


  const [defaultUser, setDefaultUser]=useState([
    {linkName:'Home',linkTo:'/',icon:<HomeIcon/>}, 
    {linkName:'Dashboard',linkTo:'/dashboard',icon:<DashboardIcon/>},
    {linkName:'My Order',linkTo:'dashboard-purchasehistory',icon:<ViewListIcon/>},
    {linkName:'Favorites',linkTo:'dashboard-myfavorites',icon:<FavoriteBorderIcon/>},
    {linkName:'My Events',linkTo:'dashboard-myevents',icon:<EventIcon/>},
  
  ])

  useEffect(()=>{
    if(userInfo?.accessAs==="admin"){
      setDefaultUser( [{linkName:'Home',linkTo:'/',icon:<HomeIcon/>}, 
        {linkName:'Dashboard',linkTo:'/dashboard',icon:<DashboardIcon/>},
        {linkName:'Order',linkTo:'dashboard-purchasehistory',icon:<ViewListIcon/>},
        {linkName:'Event',linkTo:'dashboard-event',icon:<FavoriteBorderIcon/>},
        {linkName:'Maintenence',linkTo:'dashboard-maintenence',icon:<EventIcon/>},
      
      ])
    }

  },[])


  const drawer = (
    <div style={{background:'url(https://i.ibb.co/M504yp3/background-cart.png)',backgroundRepeat:"repeat", height:'100vh'}}>
      <div className={classes.toolbar} />
      <YourProfile path={"/dashboard"}/>
      <Divider/>
      <List>
        {defaultUser.map((item, index) => (
          <ListItem button key={item.linkName}>
            <Link to={item.linkName==='Home'| item.linkName==='Dashboard' ? item.linkTo :`/${item.linkTo}`} replace  style={{textDecoration:'none',display:'flex',alignItems:'center',color:'tomato'}}><ListItemIcon style={{color:'tomato'}}>{item.icon}</ListItemIcon> {item.linkName}</Link>
          </ListItem>
        ))}
         <Divider/>
         <ListItem  button onClick={logOut} >
           <ListItemIcon><ExitToAppIcon style={{color:'white'}}/></ListItemIcon>
            <ListItemText primary="Log Out" style={{color:'white'}} />          
          </ListItem>
        <Divider/>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    <div className={classes.root}>
        <MenuIcon onClick={handleDrawerToggle} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        {props.children}
      </main>
      
    </div>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// export default ResponsiveDrawer;
