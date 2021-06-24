import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import { useState } from 'react';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { ratingReview } from '../../DataManagement';
import { useParams } from 'react-router-dom';
const CommentPass = ({handleRating}) => {
 const foodId=useParams()
 console.log(foodId)
 
 const [comments, setComments]=useState({})

 const handleInput=(e)=>{
  setComments({...comments,[e.target.name]:e.target.value})
}

const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))

const submitComment=(e)=>{
  e.preventDefault()
 if(userInfo){
     console.log({...comments,email:userInfo.userEmail})
 }else{
   // ratingReview({foodId:foodId.id,...comments})
   handleRating({foodId:foodId.id,...comments})
 }
 // console.log(comments)
 setComments({})
}

 return (
  <div >
            <Grid  container spacing={2} alignItems="center" flexwrap="nowrap" >
              <Grid item lg={1} xs={1} >
                {/* <AccountCircle className="comment_icon"/> */}
                {/* <Avatar alt="Profile Picture" className={userInfo?.userEmail? classes.active_avatar:classes.small} src={userInfo?.photo} >{userInfo?.userEmail[0]}</Avatar> */}
              </Grid>

             <form onSubmit={submitComment}>
              <Grid item className="inp" lg={12} xs={12}>

                {!userInfo?.userEmail && 
                 <Grid className="textfield_icon" >
                   <AlternateEmailIcon color="primary" className="field_icon"/>

                   <TextField  
                       id="input-with-icon-grid" 
                       label="Your email" 
                       type="email" 
                       name="rating_email" 
                       required 
                       onChange={handleInput}
                       value={comments.rating_email|| ""}
                   /> 
                 </Grid>
                 }
                 <Grid className="textfield_icon">
                   <AddCommentIcon color="primary" className="field_icon"/>

                   <TextField
                     id="input-with-icon-grid"
                     label="Write your comment" 
                     type="text" 
                     name="comment" 
                     required 
                     onChange={handleInput} 
                     autoComplete="off" 
                     value={comments.comment|| ""}
                   />  
                   <button 
                     type="submit" 
                     className="comment_icon"
                   >
                     <SendIcon color="secondary" className="field_icon"/>
                   </button> 
                 </Grid>
              </Grid>

              <Grid item lg={1} xs={1}  className="comment_icon">
               
              </Grid>

             </form>
              
            </Grid>
        </div>
 );
};

export default CommentPass;