
//! original Home components
import React from 'react';
// import { handleFacebookSignIn, initializeLoginFramework } from '../../Authentication/firebase/loginManager';
import ContactUs from '../../ContactUs/ContactUs';
import Food from '../FoodCard/Food/Food';
import AppNav from '../Header/AppBar/AppNav';
import Header from '../Header/Header';
import OurService from '../OurService/OurService';


const Home = () => {

//  initializeLoginFramework()
//  const faceBookSignIn=()=>{
//   handleFacebookSignIn()
// }

 return (
  <>
  <AppNav/>
  {/* <button onClick={faceBookSignIn}>face book</button> */}
  <Header/>
  <Food/>
  <OurService/>
  <ContactUs/>
  
 
  </>
 );
};

export default Home;


//!------- start------Home Added cart drawer children props-----------------------

// import React from 'react';
// import ContactUs from '../../ContactUs/ContactUs';
// import Food from '../FoodCard/Food/Food';
// import Header from '../Header/Header';
// import OurService from '../OurService/OurService';
// import CartDrawer from '../../Cart/Cart/CartDrawer/CartDrawer'
// import AppNav from '../Header/AppBar/AppNav';

// const Home = () => {
//  return (
  
//   <CartDrawer>
//   <AppNav/>
//   <Header/>
//   <Food/>
//   <OurService/>
//   <ContactUs/>
//   </CartDrawer>
  
 
  
//  );
// };

// export default Home;

//!------- end------Home Added cart drawer -----------------------



//!------- start------Home Added cart drawer together home component and cart drawer-----------------------
// import React, { useContext } from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import ContactUs from '../../ContactUs/ContactUs';
// import Food from '../FoodCard/Food/Food';
// import Header from '../Header/Header';
// import OurService from '../OurService/OurService';
// import { UserContext } from '../../../App';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
    
//   },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], 
//     {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
      
//     }),
   
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   // menuButton: {
//   //   marginRight: theme.spacing(2),
//   // },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: -100,
//   },
// }));

// export default function Home() {
//  const {cartOpen, setCartOpen}=useContext(UserContext)
//   const classes = useStyles();
//   const theme = useTheme();
//   // const [open, setOpen] = React.useState(false);

//   // const handleDrawerOpen = () => {
//   //   setOpen(true);
//   // };


//   const cartInfo=JSON.parse(localStorage.getItem("cartInfo"))
//   //console.log(cartInfo)

//   const handleDrawerClose = () => {
//    setCartOpen(false);
//   };

//   return (
//     <div className={classes.root}>
     
      
       
//           {/* <IconButton
//             color="secondary"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
            
//           >
//             <MenuIcon />
//           </IconButton> */}
         
        
      
//       <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={cartOpen}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <div className={classes.drawerHeader}>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </div>
//         <Divider />
//         <List>
//           {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))} */}
//           {cartInfo.map((item, index) => (
//             <ListItem button key={index}>
//             <img src={item.imageUrl} alt="" width="100"/>
              
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <main
//         className={clsx(classes.content, {
//           [classes.contentShift]: cartOpen,
//         })}
//       >
//         <div className={classes.drawerHeader} />
//         <Header/>
//         <Food/>
//         <OurService/>
//         <ContactUs/>
        
//       </main>
//     </div>
//   );
// }
