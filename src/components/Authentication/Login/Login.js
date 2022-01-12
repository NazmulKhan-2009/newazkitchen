import HomeIcon from '@material-ui/icons/Home';
import Alert from '@material-ui/lab/Alert';
import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from '../../../App';
import { CustomizeLoader } from '../../../components/Utility';
import { resetUserPassword, userSignIn, userSignUp } from '../../DataManagement';
import AppNav from '../../Home/Header/AppBar/AppNav';
import MobAppNav from '../../Home/Header/AppBar/MobAppNav';
import { handleFacebookSignIn, handleGoogleSignIn, initializeLoginFramework } from '../firebase/loginManager';
import "./login.css";

const Login = () => {
    const {loginInfo,setLoginInfo,setIsAdmin,setProfileSync,setUserData}=useContext(UserContext)  
    const [signUpFlip, setSignUpFlip]=useState(false)
    const [userInfo, setUserInfo]=useState({})
    const [notify, setNotify]=useState(false)
    const [isSignIn, setIsSignIn]=useState(false)
    const [isSignOut, setIsSignOut]=useState(true)
    const [signOutNotify, setSignOutNotify]=useState(true)
    const [loading, setLoading]=useState({loginZone:'',loader_disp:'none'})
    const [googleInfo,setGoogleInfo]=useState({})
    const [resetForm,setResetForm]=useState(false)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };





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
        alert(`${res.data.response}`)
        setSignUpFlip(false)
        setUserInfo({})   
        }) 
        :
        alert("Password differ")
     }

//sign in function

const successSign=(loginData,token,loginByName,loginByEmail,photo,who,img,bool)=>{
    setLoginInfo(loginData)
    sessionStorage.setItem('token',token)
    bool ? sessionStorage.setItem('isAdmin',bool):sessionStorage.setItem(null,null)
    sessionStorage.setItem('userInfo',JSON.stringify({userName:loginByName,userEmail:loginByEmail,accessAs:who}))
    sessionStorage.setItem('image',photo)
    setIsAdmin(bool)
    setIsSignIn(true);
    

    // who==='admin' ? history.replace('/adminpanel') : history.replace(from)
    history.replace(from)
}


const handleSignIn=(e)=>{
     e.preventDefault()
     setLoading({loginZone:"none",loader_disp:'block'})
     userSignIn(userInfo)
     .then(res=>{ 
        if(res.data.status[0]==='success'){ 
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
            successSign(res.data,
                res.data.token,
                res.data.data.admin_name,
                res.data.data.admin_email,
                res.data.data.admin_imageUrl,
                res.data.status[0],
                res.data.data.admin_imageUrl,
                true
                )
        }else if(res.data.status[0]==='error'){
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

    const resetPassword=()=>{
        setResetForm(true)
        setUserInfo({           
        })
    }


    const loginBack=()=>{
        setResetForm(false)
        setUserInfo({       
        })
    }


    const handlePasswordReset=(e)=>{
    e.preventDefault()
    if(userInfo.user_password===userInfo.retype_password){
        console.log(userInfo)
        const data={
            user_email:userInfo.user_email,
            user_password:userInfo.user_password
        }
        resetUserPassword(data)
        .then(res=>console.log(res))


    }else{
        alert('password is not matching')
    }

    }



 return (
    <>
        <AppNav otherThanHome={false}/>
        <MobAppNav otherThanHome={false}/>
        <div className="login_style" style={{display:loading.loginZone}}>    
            <div className={signUpFlip && "active "}>
                <div className={signUpFlip ? "login_container active ": "login_container" }>
                    <div className="user signinBx">    
                        <div className="imgBx">
                            {!isSignOut && signOutNotify && <Alert severity="warning">Succesfully loged out</Alert>}   
                            
                            <img src="http://irtrd.com/wp-content/uploads/2018/08/login.gif" alt=""/>          
                        </div>

                        <div className="formBx">           
                        {
                            !resetForm ?  
                            <form onSubmit={handleSignIn}>               
                                <h2>Sign In</h2>     
                                <input value={userInfo.user_name||""} type="text" name="user_name" placeholder="Username" onChange={handleInput} required />
                                <input value={userInfo.user_email || ""} type="email" name="user_email" placeholder="email" onChange={handleInput} required/>
                                <input value={userInfo.user_password || ""} type="password" name="user_password" placeholder="Password" onChange={handleInput}/>
                                <input type="submit" name="" value="Login"/>
                                <span style={{margin:"10px",cursor:'pointer'}} onClick={resetPassword}>Reset Password</span>
                                <p className="signup">dont have an account  <span style={{cursor:"pointer",color:'tomato'}} onClick={handlegooglesignIn}>Sign up google</span></p>
                            </form> 
                            :   
                            <form onSubmit={handlePasswordReset}>  
                                <h2>Reset Password</h2>
                                <input value={userInfo.user_email || ''} type="email" name="user_email" placeholder="email" onChange={handleInput} required/>
                                <input value={userInfo.user_password || ''} type="password" name="user_password" placeholder="Password" onChange={handleInput}/>
                                <input value={userInfo.retype_password ||''} type="password" name="retype_password" placeholder="Retype Password" onChange={handleInput}/>
                                {/* admin access through email */}
                                <input type="submit" name="" value="Reset"/>
                                <span style={{margin:"10px",cursor:'pointer'}} onClick={loginBack}>Login back</span>   
                                <p className="signup">dont have an account <span style={{cursor:"pointer",color:'tomato'}} onClick={handlegooglesignIn}>Sign up google</span></p>
                            </form> 
                        }               
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
                                <input required type="text" name="user_name" placeholder="Username"   value={ googleInfo.name|| ""}/>
                                <input required type="email" name="user_email" placeholder="Email Address"  value={googleInfo.email || ""}/>
                                <input required type="text" name="user_phone" placeholder="Phone No" onChange={handleInput} value={userInfo.user_phone || ""}/>
                                <input required type="password" name="user_password" placeholder="Create Password" onChange={handleInput} value={userInfo.user_password || ""}/>
                                <input required type="password" name="confirm_password" placeholder="Confirm Password" onChange={handleInput} value={userInfo.confirm_password || ""}/>
                                <input type="submit" name="" value="Sign up"/>
                                <p className="signup">Already have an account? <span onClick={handleOfFlip}>Sign in.</span></p>                    
                            </form>
                        </div>
                        <div className="imgBx">
                            <img src='https://st.depositphotos.com/1092019/4610/i/600/depositphotos_46103085-stock-photo-sing-up-on-red-keyboard.jpg' alt=""/>
                        </div>
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