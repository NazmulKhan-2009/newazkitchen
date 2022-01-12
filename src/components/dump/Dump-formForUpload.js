import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import React, { useEffect, useState } from 'react';
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
  const [info,setInfo]=useState({})
  const [infoFile, setInfoFile]=useState({})
  const[file,setFile]= useState(null) //for file base64
  // const[file,setFile]= useState("")
  const [image,setImage]=useState({})
  const [image2,setImage2]=useState([])
  

  //console.log(image2.img)
  //console.log(image)
  // //console.log(foodInfo)
  //console.log(infoFile)
  // const handleInput=e=>{   
  //   setFoodInfo({...foodInfo,[e.target.name]:e.target.value})
  // }
 //console.log(file)
  // //console.log(foodInfo)
  const handleSubmit=(e)=>{
     e.preventDefault()
    const formData=new FormData()
   
    formData.append('file',file);
    // formData.append('image_link', file); //file base64
       
      fetch("https://quiet-cove-17146.herokuapp.com/foods",{
        method: 'POST',
        body:formData
        // headers:{"content-type":"application/json"},
        // body:JSON.stringify(formData)
      })
      .then(res=>res.json())
      .then(infos=>setImage(infos.data))
      .catch(err=>console.error(err))
    //console.log(file)

    // if(typeof image.foodImg==="string"){
    //   alert(image.foodImg)
    // }
    
    // //console.log(file)
    // sessionStorage.setItem("deliveryInfo", JSON.stringify(deliveryInfo))
    // localStorage.removeItem('cartInfo')
    // setFoodInfo({})
  }
  
  

  const handleFileUpload=(e)=>{
    setFile(e.target.files[0])
  }    


  useEffect(()=>{
    fetch("https://quiet-cove-17146.herokuapp.com/foods")
    .then(res=>res.json())
    .then(info=>setImage2(info.data.foods[104].img))
  },[])


  return (
    <Grid item md={4} xs={10}>
      <Grid container justify="center">
     {typeof image.foodImg==="string" && alert(image.foodImg)}
        <h3
          style={{
            textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
            color:"#fd5c63",
            // marginBottom:"3rem",
            
            }}
        > </h3>
        <p></p>
        {/* <img src={`https://quiet-cove-17146.herokuapp.com/${image.img}`} alt="img" width="20%" className="img-fluid"/> */}
        
        {/* <img src={`https://quiet-cove-17146.herokuapp.com/${image2.img}`} alt="img" width="20%" className="img-fluid"/> */}

        {/* <img  src={`data:image/png; base64, ${image2.img}`} alt=''/> */}

        {/* <img src={`https://quiet-cove-17146.herokuapp.com/${image2.img}`} alt=""/>  */}

        <form  className={classes.root} autoComplete="on" onSubmit={handleSubmit}>
            {/* {
              image2.slice(95,100).map(img=> <img src={img.img} alt=""  style={{minWidth:"100px",height:"150px"}}/>)
            } */}
        
          
          {/* <TextField 
            required={true}
            id="emailInput" 
            label="Your Email" 
            variant="outlined" 
            name="email" 
            type="email"           
            onChange={handleInput}           
            value={deliveryInfo.email ||""}
          /> */}
          {/* <TextField 
            id="cellInput" 
            label="Your Cell" 
            inputProps={{ minLength: 11,maxLength: 11 }}
            variant="outlined" 
            name="cell" 
            type="text" 
            onChange={handleInput} 
            required={true}
            value={deliveryInfo.cell ||""} 
            
          /> */}
          {/* <TextField
            id="addressInput"
            label="Your Address" 
            variant="outlined" 
            name="address" 
            type="text" 
            onChange={handleInput} 
            required={true}
            value={deliveryInfo.address ||""}  
          /> */}
          {/* <TextField
            id="insInput"
            label="Additional Instruction" 
            variant="outlined" 
            name="instruction"
            type="text" 
            onChange={handleInput} 
            value={deliveryInfo.instruction ||""} 
          /> */}
      
          {/* <FormControl variant="outlined" className={classes.formControl}>
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
          </FormControl> */}

          <Grid className="upload_Button file_base">
            <label htmlFor="fileInput">
            <PhotoCamera  style={{position:"absolute",width:"35px",height:"30px",cursor:'pointer',paddingTop:"5px"}} color="secondary"/>
            </label>

            {/* <FileBase64 multiple={false} onDone={image =>  setFile(image.base64)}  /> */}
            {/* <FileBase64 multiple={false} onDone={image => //console.log(image.type.slice(0,6))}/> */}
              <input
                id="fileInput" 
                name="img"
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

          {/* Testing Mongoose start */}
          {/* <TextField
            id="addressInput"
            label="Food Title" 
            variant="outlined" 
            name="foodTitle" 
            type="text" 
            onChange={handleInput} 
            required={true}
            // value={foodInfo.address ||""}  
          />

          <TextField
            id="addressInput"
            label="Price" 
            variant="outlined" 
            name="price" 
            type="number" 
            onChange={handleInput} 
            required={true}
            // value={foodInfo.address ||""}  
          /> */}

          {/* Testing Mongoose end */}
          
            <Button variant="outlined" color="secondary" type="submit" style={{marginLeft:"20px"}}>
              Add Food
            </Button> 
                  
        </form>  

    </Grid>
    </Grid>
  );
}

export default FormForUpload;