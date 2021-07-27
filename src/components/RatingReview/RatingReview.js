import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { StarRated } from '../Utility';
import { ratingReview } from '../DataManagement';
import { UserContext } from '../../App';

export default function RatingReview({display,handleClose,rating,foodId,rateChange,handleRating}) {
  // const [open, setOpen] = useState(false);
  const [inputValue, setInputValue]=useState({})
  const {setRating,dispRating, setDispRating,setFoodSync}=useContext(UserContext)//!trying with context 
 

  
console.log(rating, foodId)

const handleInput=(e)=>{
setInputValue({...inputValue,[e.target.name]:e.target.value})

}

const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))

const handleSubmit=(e)=>{
 e.preventDefault()

const rateInfo={
  foodId:foodId.id,
  rating,
  rating_email:userInfo?.userEmail||inputValue?.rating_email ||"",
  comment:inputValue.comment
}

// ratingReview(rateInfo).then(res=>console.log(res))

//  console.log(rateInfo)
handleRating(rateInfo)
  
 handleClose(false,1)
//  rateChange(1)
//  window.location.reload()
setFoodSync(Math.random())

}
  

  return (
    <div>
     
      <Dialog open={display}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">You have rated <span style={{color:"red"}}>{rating}</span><br/> <StarRated rating={rating}/></DialogTitle>
        <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Hi <span style={{color:'indigo',fontWeight:'bold'}}>{userInfo?.userName || ''},</span>   Pls submit your rating 
          </DialogContentText>
         
         
          <TextField
            autoComplete="on"
            autoFocus
            name="rating_email"
            required={true}
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            onInput={handleInput}
            value={userInfo?.userEmail||inputValue?.rating_email}
            fullWidth
            disabled={userInfo?.userEmail? true:false}
          />
           <TextField
            name="comment"
            margin="dense"
            id="comment"
            label="Your comments/Suggestion(optional)"          
            type="text"
            onChange={handleInput}
            fullWidth
          />
          
          
        </DialogContent>

        <DialogActions>
          <Button onClick={()=>handleClose(false)} color="primary">
            Cancel
          </Button>
          <Button type="submit"  color="primary">
            Rate
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
