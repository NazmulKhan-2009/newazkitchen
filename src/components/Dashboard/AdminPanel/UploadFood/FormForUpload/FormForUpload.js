import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import axios from 'axios';
import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import "./FormForUpload.css";


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
  const [foodInfo,setFoodInfo]=useState({})
  const[file,setFile]= useState(null) //for file base64
  const[foodsInfo,setFoodsInfo]= useState({}) 

  
  // #### CONSOLE ZONE START POINT ####

  // //console.log(foodInfo)
  // //console.log(file)
  // //console.log(foodsInfo.imageUrl)
  
 // #### CONSOLE ZONE END POINT ####

 
  const handleSubmit=(e)=>{
     e.preventDefault()

     if(file===null){
      alert("Plaese select an Image")
     }

     const {foodTitle, foodType,description,price}=foodInfo
      
    //  New Form Constructor
    const formData=new FormData()

    formData.append('foodTitle',foodTitle)
    formData.append('foodType',foodType)
    formData.append('description',description)
    formData.append('price',price)
    formData.append('imageUrl', file); //file base64
   
    //*****FETCH WAY XXXX ASTAGFIRULLAH XXXXX
    // fetch("http://localhost:5000/fooddetail",{
    //       method: 'POST',
    //       body:formData      
    //     })
    //     .then(res=>res.json())
    //     .then(data=>setFoodsInfo(data.data))
    //     .catch(err=>console.error(err))

    // *****AXIOS WAY

    //AXIOS THEN CATCH WAY XXXX ASTAGFIRULLAH XXXX
    // axios.post("http://localhost:5000/fooddetail",formData)    
    //     .then(data=>setFoodsInfo(data.data.data))
    //     .catch(err=>console.error(err))


     //****AXIOS ASYNC AWAIT WAY XXXX ASTAGFIRULLAH XXXXXX
    const addFood= async()=>{
      try{
          const response=await axios.post("http://localhost:5000/api/food/fooddetail",formData) 
          setFoodsInfo(response.data.data)
       }catch(e){
         //console.log(`add Food error ${e}`)
        } ;
    }    
    addFood()

    
// NO NEED BELLOW CODE XXXX ASTAGFIRULLAH XXXXX
    // formData.append('file',file);
    // // formData.append('image_link', file); //file base64
       
    //   fetch("http://localhost:5000/FoodDetail",{
    //     method: 'POST',
    //     body:formData      
    //   })
    //   .then(res=>res.json())
    //   .then(response=>setImage(infos.data))
    //   .catch(err=>console.error(err))
    setFile(null)
    setFoodInfo({})
  }
  
  const handleInput=e=>{   
    setFoodInfo({...foodInfo,[e.target.name]:e.target.value})
  }

  // const handleFileUpload=(e)=>{
  //   setFile(e.target.files[0])
  // }    


  


  return (
    <Grid item md={4} xs={10}>
      <Grid container justify="center">
     
        <h3
          style={{
            textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
            color:"#fd5c63",
            // marginBottom:"3rem",
            
            }}
        > </h3>
        
        {/* <img src={`http://localhost:5000/${foodsInfo.imageUrl}`}  alt="" /> */}

        {foodsInfo.imageUrl &&
          <img src={foodsInfo.imageUrl} alt="" width="30%"/>
        }
       
       

        <form  className={classes.root} autoComplete="on" onSubmit={handleSubmit}>
           
           {/* Food Title */}
          <TextField
            id="food-title"
            label="Food Title" 
            variant="outlined" 
            name="foodTitle" 
            type="text" 
            inputProps={{ minLength: 3,maxLength: 50 }}
            onChange={handleInput} 
            required={true}
            value={foodInfo.foodTitle ||""}  
          />

          {/* Food Type */}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Food Type</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleInput}
              label="Food Type"
              name="foodType"
              required={true}
              value={foodInfo.foodType ||""}
              
            >
              <MenuItem value="">
                <em style={{color:'red'}}>Select Food Type</em>
              </MenuItem>
              <MenuItem value={"Baking"}>Baking</MenuItem>
              <MenuItem value={"Frozen"}>Frozen</MenuItem>
              <MenuItem value={"Deshi"}>Deshi</MenuItem>
              <MenuItem value={"Chineese"}>Chineese</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </Select>
          </FormControl>
          
         

          {/* Food Description */}
          <TextField
            id="insInput"
            label="Food Description" 
            variant="outlined" 
            name="description"
            type="text" 
            inputProps={{ minLength: 3,maxLength: 200 }}
            onChange={handleInput} 
            required={true}
            value={foodInfo.description ||""} 
          />

          {/* Price */}
          <TextField
            id="addressInput"
            label="Price" 
            variant="outlined" 
            name="price" 
            type="number" 
            inputProps={{ minLength: 2,maxLength: 4 }}
            onChange={handleInput} 
            required={true}
            value={foodInfo.price ||""}  
          />
      
          
          
            {/* Upload Food Photo */}
          <Grid className="upload_Button file_base">
            <label htmlFor="fileInput">
            <PhotoCamera  style={{position:"absolute",width:"35px",height:"30px",cursor:'pointer',paddingTop:"5px"}} color="secondary"/>
            </label>

            {/* <FileBase64 multiple={false} onDone={image => //console.log(typeof image.base64)}/> 
                                   */}
            {/* && image.size<"5000 kB"  */}
            <FileBase64 required={true} multiple={false} onDone={image =>image.type.slice(0,5)==="image" ? setFile(image.base64) : alert("Please Upload an Image within 5MB")}/>                       
          </Grid>  
            
            {
              file!==null &&
              <div
              style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}
              >
                <img src={file} alt="" width="25%"/>
                <small style={{textTransform:'capitalize'}}>{foodInfo.foodTitle}</small>
              </div>
            }
            
          <Button variant="outlined" color="secondary" type="submit" style={{marginLeft:"20px"}}>
            Add Food
          </Button> 
                  
        </form>  

    </Grid>
    </Grid>
  );
}

export default FormForUpload;