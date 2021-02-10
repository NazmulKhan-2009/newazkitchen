import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Fab, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Alert from '@material-ui/lab/Alert';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import "./FormForUpload.css"
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      minWidth: '40ch',
    },
    formControl: {
      margin: theme.spacing(10),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(10),
    },
  },
}));

const FormForUpload=()=> {
  const classes = useStyles();
  const [deliveryInfo,SetDeliveryInfo]=useState({})
  const[file,setFile]= useState("")
  
  
  
 

  const handleSubmit=(e)=>{
     e.preventDefault()
    console.log(deliveryInfo)
    console.log(file)
    sessionStorage.setItem("deliveryInfo", JSON.stringify(deliveryInfo))
    // localStorage.removeItem('cartInfo')
    SetDeliveryInfo({})
  }

  const handleInput=e=>{   
    SetDeliveryInfo({...deliveryInfo,[e.target.name]:e.target.value})
  }

  const handleFileUpload=(e)=>{
    setFile(e.target.files[0])
  }    


  return (
    <Grid item md={4} xs={10}>
      <Grid container justify="center">
        <h3
          style={{
            textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
            color:"#fd5c63",
            // marginBottom:"3rem",
            
            }}
        > Add Food</h3>
        <form  className={classes.root} autoComplete="on" onSubmit={handleSubmit}>
          
          <TextField 
            required={true}
            id="emailInput" 
            label="Your Email" 
            variant="outlined" 
            name="email" 
            type="email"           
            onChange={handleInput}           
            value={deliveryInfo.email ||""}
          />
          <TextField 
            id="cellInput" 
            label="Your Cell" 
            inputProps={{ minLength: 11,maxLength: 11 }}
            variant="outlined" 
            name="cell" 
            type="text" 
            onChange={handleInput} 
            required={true}
            value={deliveryInfo.cell ||""} 
            
          />
          <TextField
            id="addressInput"
            label="Your Address" 
            variant="outlined" 
            name="address" 
            type="text" 
            onChange={handleInput} 
            required={true}
            value={deliveryInfo.address ||""}  
          />
          <TextField
            id="insInput"
            label="Additional Instruction" 
            variant="outlined" 
            name="instruction"
            type="text" 
            onChange={handleInput} 
            value={deliveryInfo.instruction ||""} 
          />
      
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Food Type</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleInput}
              label="Food Type"
              name="foodType"
              required={true}
              value={deliveryInfo.foodType ||""}
              
            >
              <MenuItem value="">
                <em>Others</em>
              </MenuItem>
              <MenuItem value={"Baking"}>Baking</MenuItem>
              <MenuItem value={"Frozen"}>Frozen</MenuItem>
              <MenuItem value={"Deshi"}>Deshi</MenuItem>
              <MenuItem value={"Chineese"}>Chineese</MenuItem>
            </Select>
          </FormControl>

          <Grid className="upload_Button">
            <label htmlFor="fileInput">
            <PhotoCamera  style={{position:"absolute",width:"35px",height:"30px",cursor:'pointer',paddingTop:"5px"}} color="secondary"/>
            </label>
              <input
                id="fileInput" 
                name="photo"
                type="file" 
                required={true}
                onChange={handleFileUpload}   
                style={{opacity:0,cursor:'pointer',width:"400px",height:"50px"}}
              />
          </Grid>  

          {/* <div className={classes.root}> 
            <input accept="image/*" id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </div> */}
          
            <Button variant="outlined" color="secondary" type="submit" style={{marginLeft:"20px"}}>
              Add Food
            </Button> 
                  
        </form>      
    </Grid>
    </Grid>
  );
}

export default FormForUpload;