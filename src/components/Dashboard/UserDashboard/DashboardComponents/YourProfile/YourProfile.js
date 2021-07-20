import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FileBase64 from 'react-file-base64';
// import './YourProfile.css'
import cus_style from './YourProfile.module.css'
import { imageUpload } from '../../../../DataManagement';
import { useEffect } from 'react';
// import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
 root: {
   display: 'flex',
   flexDirection:'column',
   alignItems: 'center',
   '& > *': {
     margin: theme.spacing(1),
   },
 },
 
 large: {
   width: theme.spacing(11),
   height: theme.spacing(11),
   
 },
}));


export default function YourProfile() {
  const {upload_Button,file_base,img_conrol}=cus_style

  // const[file,setFile]= useState(null) //for file base64

  const userData=JSON.parse(sessionStorage.getItem('userInfo'))
  // const [userInfo, setUserInfo]=useState(userData)
  const [userInfo, setUserInfo]=useState(userData)
  // const [dataLoad, setDataLoad]=useState(false)
  const [profilePhoto, setProfilePhoto]=useState('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png')


  useEffect(() => {
    // setUserInfo(JSON.parse(sessionStorage.getItem('userInfo')))
    imageUpload(userInfo.userEmail,"getProfile")
    .then(res=>setProfilePhoto(res?.data.userImage))
  }, [])
  

  
  // console.log(file)
 const classes = useStyles();
 

const handleUpload=(image)=>{
  // image.type.slice(0,5)==="image" ? setFile(image.base64) : alert("Please Upload an Image within 5MB")
  
  if(image.type.slice(0,5)==="image"){
      imageUpload({userImage:image.base64,email:userInfo.userEmail},'profilePhoto')
      .then(res=>{
        setProfilePhoto(res.data.userImage)
        // if(res){
        //   sessionStorage.setItem('userInfo',JSON.stringify({...userData,photo:res.data.userImage}));
        //   setDataLoad(!dataLoad)
        // }
        // console.log(res)
        
      
      
      })
  }else{
    alert("Please Upload an Image within 5MB")
  }
  
}
// ...userData,photo:res.data.userImage

 return (
  <div className={classes.root}>
    <div className={img_conrol}>
      <Avatar alt="Remy Sharp" src={profilePhoto} className={classes.large} />

      {/* //! image upload */}

      <Grid className={`${upload_Button} ${file_base}`}>
      
            <label htmlFor="fileInput">
            <PhotoCamera  style={{position:"absolute",width:"35px",height:"30px",cursor:'pointer',paddingTop:"5px"}} color="secondary"/>
            </label>
      
            {/* <FileBase64 multiple={false} onDone={image => console.log(typeof image.base64)}/> 
                                   */}
            {/* && image.size<"5000 kB"  */}
            {/* <FileBase64 required={true} multiple={false} onDone={image =>image.type.slice(0,5)==="image" ? setFile(image.base64) : alert("Please Upload an Image within 5MB")}/>     */}

            <FileBase64 required={true} multiple={false} onDone={(image)=>handleUpload(image)}/>                   
      </Grid>
    </div> 
     
      <h3>{userInfo?.userName}</h3>
    </div>
 )
}
