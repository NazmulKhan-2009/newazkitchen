// import { Grid } from '@material-ui/core';
// import React, { useState } from 'react'
// import WaitingOrder from '../../Cart/Cart/WaitingOrder';
// import { AdminForm } from '../../Dashboard/AdminPanel/commonClass/CommonClass';
// import ControlDialog from "../../Dashboard/AdminPanel/ControlDialog/ControlDialog";

// import DataUpdateForm from "../../Dashboard/AdminPanel/DataUpdateForm/DataUpdateForm"



// export default function Login() {
//   const [signUp, setSignUp]=useState(false)

//   const handleSignUp=(isSignUp)=>{
//     setSignUp(isSignUp)
//   }
  
//   // let dialCall=true
  
//   // const [dial, setDial]=useState(dialCall)
 



//   // const handleDialog=(isClose)=>{
//   //   setDial(isClose)
//   //   dialCall=false
//   //  }

   

//   // const userForm={
//   //   field0:new UserForm("userId","User Id","outlined","userId"),
//   //   field1:new UserForm("userName","User Name","outlined","user_name"),
//   //   field2:new UserForm("userEmail","email","outlined","email"),
//   //   field3:new UserForm("phone","Phone","outline","user_phone"),
    
//   // }

//   const adminForm={
//     field0:new AdminForm("userId","User Id","outlined","userId"),
//     field1:new AdminForm("userName","User Name","outlined","user_name"),
//     field2:new AdminForm("userEmail","email","outlined","email"),
//     field3:new AdminForm("phoneNumber","User Phone","outlined","user_phone"),
//     field4:new AdminForm("password","Password","outlined","password"),
//     field5:new AdminForm("resetPassword","Reset Password","outlined","reset_password"),
//   }

//   // const existingUser={
//   //   field2:new AdminForm("userEmail","email","outlined","email"),
//   //   field4:new AdminForm("password","Password","outlined","password"),
//   // }


//   return (
//     <Grid container >
    

//       {!signUp && 
      
//       <Grid item md={5} xs={10} container style={{margin:"auto"}}>

      
        
//         <WaitingOrder
//         info={{text:"User Login",img:"https://lh3.googleusercontent.com/proxy/9QTbRN7oNo_XP0An816YPcLfwww1VkkO1aA-vej4UuVcPWGfMP2dHwU82RDAlgLYj10OGhurwqEsvKpPAMmowyNN02TAQ3Rf"}}
//       />



//         <DataUpdateForm
//           formTitle={"Log In"}
//           newUser={signUp}
//           adminForm={adminForm}
//           handleSignUp={handleSignUp}
//       // // handleDialog={handleDialog}
//         /> 
       
//       </Grid>
      
//       }

//       {signUp && 
//       <Grid container item md={5} xs={10} justify="center">
         

//         <DataUpdateForm
//           formTitle={"Log In"}
//           adminForm={adminForm}
//           newUser={true}
//       // // handleDialog={handleDialog}
//         /> 
//       </Grid>
//       }
    
  
//    </Grid>
//   )
// }



// <------------------==========slider login ==========--------------->
import HomeIcon from '@material-ui/icons/Home';
import Alert from '@material-ui/lab/Alert';
import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from '../../../App';
import { CustomizeLoader } from '../../../components/Utility';
import { userSignIn, userSignUp } from '../../DataManagement';
import { handleFacebookSignIn, handleGoogleSignIn, initializeLoginFramework } from '../firebase/loginManager';
// import img1 from '../../../img/img1.jpg'
// import img2 from '../../../img/img2.jpg'
import "./login.css";
const Login = () => {

const {loginInfo,setLoginInfo,setIsAdmin,setProfileSync,setUserData}=useContext(UserContext)  

// //console.log(loginInfo)

const [signUpFlip, setSignUpFlip]=useState(false)
const [userInfo, setUserInfo]=useState({})
const [notify, setNotify]=useState(false)
const [isSignIn, setIsSignIn]=useState(false)
const [isSignOut, setIsSignOut]=useState(true)
const [signOutNotify, setSignOutNotify]=useState(true)
const [loading, setLoading]=useState({loginZone:'',loader_disp:'none'})
const [googleInfo,setGoogleInfo]=useState({})
// const [loading, setLoading]=useState('block')

const history = useHistory();
 const location = useLocation();
 const { from } = location.state || { from: { pathname: "/" } };
// //console.log(signIn)
// const [file, setFile]=useState('')
// const [userData, setUserData]=useState({})

// //console.log(userInfo)

//!GOOGLE AUTH START

//SEND TO LOGIN ROUTE
initializeLoginFramework()
//GOOGLE AUTH
 const handlegooglesignIn=()=>{
  handleGoogleSignIn().then(
      res=>{
          console.log(res)
        setGoogleInfo(res)
        setSignUpFlip(true)}
      )
}


//!GOOGLE AUTH END

//! FACE BOOK START

const faceBookSignIn=()=>{
    handleFacebookSignIn()
}


//! FACE BOOK END



const handleOfFlip=()=>{
    setSignUpFlip(!signUpFlip)
    setUserInfo({})
    
}

//input field of data
const handleInput=e=>{   
    setUserInfo({...userInfo,[e.target.name]:e.target.value})
  }

//submit form
const handleSubmit=(e)=>{
     e.preventDefault()
     userInfo.user_password===userInfo.confirm_password ? 
     userSignUp({...userInfo,user_name:googleInfo.name,user_email:googleInfo.email})
     .then(res=>{
        // //console.log(res)
        alert(`${res.data.response}`)
        
        // //console.log(res)
        setSignUpFlip(false)
        setUserInfo({})
        
        }) :
        alert("Password differ")
     
    // userSignUp(userInfo)

    //! bellow code require if any kind of file added like image file
    // const {user_name, user_password,user_phone,user_email,user_res_pass}=userInfo
    // const formData=new FormData()

    // formData.append('user_name',user_name)
    // formData.append('user_email',user_email)
    // formData.append('user_phone',user_phone)
    // formData.append('user_password',user_password)
    // formData.append('user_res_pass',user_res_pass)
    // formData.append('imageUrl', file);


     //console.log(userInfo)
     
     
}

//sign in function

const successSign=(loginData,token,loginByName,loginByEmail,photo,who,img,bool)=>{
    setLoginInfo(loginData)
    sessionStorage.setItem('token',token)
    bool ? sessionStorage.setItem('isAdmin',bool):sessionStorage.setItem(null,null)
    sessionStorage.setItem('userInfo',JSON.stringify({userName:loginByName,userEmail:loginByEmail,accessAs:who}))
    sessionStorage.setItem('image',img)

    setIsAdmin(bool)
    setIsSignIn(true);

    who==='admin' ? history.replace('/adminpanel') : history.replace(from)
    // history.replace(from)
}


const handleSignIn=(e)=>{
     e.preventDefault()
     setLoading({loginZone:"none",loader_disp:'block'})
     userSignIn(userInfo)
     .then(res=>{
        //  //console.log(res)
        
        if(res.data.status[0]==='success'){
            // setLoginInfo(res.data)
            // sessionStorage.setItem('token',res.data.token)
            // sessionStorage.setItem('userInfo',JSON.stringify({userName:res.data.data.user_name,userEmail:res.data.data.user_email}))
             
            //  setIsSignIn(true)
            //  history.replace(from)
            successSign(res.data,
                        res.data.token,
                        res.data.data.user_name,
                        res.data.data.user_email,
                        res.data.data.userImage,
                        res.data.status[0],
                        null
                        
                        
                        )

                        setProfileSync(Math.random())
             
        

        }else if(res.data.status[0]==='admin'){
            // alert(res.data.status[1])
            successSign(res.data,
                res.data.token,
                res.data.data.admin_name,
                res.data.data.admin_email,
                res.data.data.admin_imageUrl,
                res.data.status[0],
                res.data.data.admin_imageUrl,
                true
                )
        }
        else if(res.data.status[0]==='error'){
            setLoginInfo(res.data)
            setLoading({loginZone:"",loader_disp:'none'})
            setNotify(true)
        }
       
    
    
         
     })
    


}

setTimeout(()=>{
    setNotify(false)
    setSignOutNotify(false)
},10000)


const handleSignOut=()=>{
    setIsSignIn(false)
    setIsSignOut(false)
    setSignOutNotify(true)
}

 return (
     <>
 <div className="login_style" style={{display:loading.loginZone}}>    
  <div className={signUpFlip && "active "}>
     <div className={signUpFlip ? "login_container active ": "login_container" }>

        <div className="user signinBx">
        
            <div className="imgBx">
                {/* {isSignIn && <p style={{textAlign:"center"}}> welcome {loginInfo.data.data.user_name} <span style={{color:'red'}} onClick={handleSignOut}>Sign out</span> </p>
                } */}

                {!isSignOut && signOutNotify && <Alert severity="warning">Succesfully loged out</Alert>}

                
               <Link to='/'><HomeIcon color="primary"/></Link> 
                

                <img src="http://irtrd.com/wp-content/uploads/2018/08/login.gif" alt=""/>
               
                
                
            </div>

            <div className="formBx">
            
                <form onSubmit={handleSignIn}>
               
                    <h2>Sign In</h2>
                    
                    <input type="text" name="user_name" placeholder="Username" onChange={handleInput} required/>
                    <input type="email" name="user_email" placeholder="email" onChange={handleInput} required/>
                    <input type="password" name="user_password" placeholder="Password" onChange={handleInput}/>

                    {/* admin access through email */}
                

                    <input type="submit" name="" value="Login"/>
                    
                    {/* <p className="signup">don't have an account? <span onClick={handleOfFlip}>Sign up.</span></p> */}
                    <p className="signup">don't have an account? <span style={{cursor:"pointer"}} onClick={handlegooglesignIn}>Sign up google</span></p>
                </form>
    {/* //!SOCIAL LOGiN */}
                                
                <div className="google-btn">
                    <img onClick={handlegooglesignIn} src="https://i.imgur.com/P9ZVhek.png" alt="" width="40" />
                    <span style={{fontSize:"20px"}}>Continue</span>
                    {/* <img src="https://i.imgur.com/oozxCkP.png" alt="" width="40"/> */}
                    <img onClick={faceBookSignIn} src="https://i.imgur.com/oozxCkP.png" alt="" width="40" />
                </div>
    {/* //! // TOASTIFY */}
                {notify && 
                    <Alert severity={loginInfo.status[0]}>{loginInfo.status[1]}</Alert>
                }
            </div>
        </div>

        <div className="user signupBx">
         <div className="formBx">
            <form onSubmit={handleSubmit}>
                <h2>Create an account</h2>
                {/* <input required type="text" name="user_name" placeholder="Username"  onChange={handleInput} value={userInfo.user_name || ""}/>
                <input required type="email" name="user_email" placeholder="Email Address" onChange={handleInput} value={userInfo.user_email || ""}/> */}

                <input required type="text" name="user_name" placeholder="Username"   value={ googleInfo.name|| ""}/>
                <input required type="email" name="user_email" placeholder="Email Address"  value={googleInfo.email || ""}/>
                <input required type="text" name="user_phone" placeholder="Phone No" onChange={handleInput} value={userInfo.user_phone || ""}/>
                <input required type="password" name="user_password" placeholder="Create Password" onChange={handleInput} value={userInfo.user_password || ""}/>
                <input required type="password" name="confirm_password" placeholder="Confirm Password" onChange={handleInput} value={userInfo.confirm_password || ""}/>


                    {/* filebase-64 start of coding */}

                 {/* <div className="upload_Button file_base">
                    <label htmlFor="fileInput">
                    <PhotoCamera  style={{position:"absolute",width:"35px",height:"30px",cursor:'pointer',paddingTop:"5px"}} color="secondary"/>
                    </label>

                    
                    <FileBase64 required={true} multiple={false} onDone={image =>image.type.slice(0,5)==="image" ? setFile(image.base64) : alert("Please Upload an Image within 5MB")}
                    />                       
                 </div>   */}
                    {/* filebase-64 end  of coding */}


                <input type="submit" name="" value="Sign up"/>

                                <p className="signup">Already have an account? <span onClick={handleOfFlip}>Sign in.</span></p>


                            
            </form>
        </div>

        <div className="imgBx">
            <img src='https://st.depositphotos.com/1092019/4610/i/600/depositphotos_46103085-stock-photo-sing-up-on-red-keyboard.jpg' alt=""/></div>
        </div>
        
    </div>
    
  </div>


  
</div>

<div
style={{maxWidth:'100px',margin:"0 auto",display:loading.loader_disp,top:"0"}}
>
<CustomizeLoader/>
</div>
</>

 );
};

export default Login;