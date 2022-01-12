import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import React, { useContext, useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { UserContext } from '../../../../../App';
import { imageUpload } from '../../../../DataManagement';
import cus_style from './YourProfile.module.css';



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


export default function YourProfile({path}) {
  const {upload_Button,file_base,img_conrol}=cus_style
  const userData=JSON.parse(sessionStorage.getItem('userInfo'))
  const [userInfo, setUserInfo]=useState(userData)
  const {profilePhoto, setProfilePhoto}= useContext(UserContext)

  useEffect(() => {
    imageUpload(userInfo.userEmail,"getProfile")
    .then(res=>setProfilePhoto(res?.data.userImage))  
  }, [])
  const classes = useStyles();
 

const handleUpload=(image)=>{
  // image.type.slice(0,5)==="image" ? setFile(image.base64) : alert("Please Upload an Image within 5MB")
  
  if(image.type.slice(0,5)==="image"){
      imageUpload({userImage:image.base64,email:userInfo.userEmail},'profilePhoto')
      .then(res=>{
        setProfilePhoto(res.data.userImage)     
      })
  }else{
    alert("Please Upload an Image within 5MB")
  }
  
}

const accessInfo=JSON.parse(sessionStorage.getItem('userInfo'))

 return (
  <div className={classes.root}>
    <div className={img_conrol}>
      <Avatar alt="Remy Sharp" src={profilePhoto} className={classes.large} />
      {/* //! image upload */}
      <Grid className={`${upload_Button} ${file_base}`}>    
            <label htmlFor="fileInput">
            <PhotoCamera  style={{position:"absolute",width:"35px",height:"30px",cursor:'pointer',paddingTop:"5px"}} color="secondary"/>
            </label>
      
            {/* <FileBase64 multiple={false} onDone={image => //console.log(typeof image.base64)}/> 
                                   */}
            {/* && image.size<"5000 kB"  */}
            {/* <FileBase64 required={true} multiple={false} onDone={image =>image.type.slice(0,5)==="image" ? setFile(image.base64) : alert("Please Upload an Image within 5MB")}/>     */}
            <FileBase64 required={true} multiple={false} onDone={(image)=>handleUpload(image)}/>                   
      </Grid>
    </div>    
      <h5 style={{color:'whitesmoke'}}>{userInfo?.accessAs==='admin' && "Admin-"}{userInfo?.userName}</h5>
    </div>
 )
}
