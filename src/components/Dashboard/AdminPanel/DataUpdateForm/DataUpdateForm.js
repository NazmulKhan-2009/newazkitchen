import React, {useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Fab, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Alert from '@material-ui/lab/Alert';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
//! import "./FormForUpload.css"
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import ListIcon from '@material-ui/icons/List';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Style from './DataUpdateForm.module.css'
import OrderedInfo from '../OrderedInfo/OrderedInfo';



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

const CreateFood=({formTitle,adminForm,cancel,handleDialog,closeDialog})=> {
//!console.log(adminForm)
// const {field1, field2, field3}=adminForm
//!console.log(field2,field3)
  //!console.log("create food rendered")
  const classes = useStyles();
  const [foodInfo,setFoodInfo]=useState({})
  const[file,setFile]= useState(null) //for file base64
  const[foodsInfo,setFoodsInfo]= useState({}) 
  const[searchFood,setSearchFood]= useState({}) 
  const[editBtn,setEditBtn]= useState(false) 
  const[displayed,setDisplayed]= useState(false) 
  const[changeType,setChangeType]= useState(false) 
  const[searchBtn,setSearchBtn]= useState(false) 
  const[orderInfo,setOrderedInfo]= useState(false) 
  const[fieldEnable,setFieldEnable]= useState({foodTitleField:true,descriptionField:true,priceField:true}) 
  const [changedOrderStatus,  setChangedOrderStatus]=useState('')


  //!changing Oreder status 
  console.log(changedOrderStatus)
  const handleOrderStatus=(status)=>{
    setChangedOrderStatus(status)
  }

  
  // #### CONSOLE ZONE START POINT ####

  console.log(foodInfo)
  // console.log(file)
  // console.log(foodsInfo.imageUrl)
  
 // #### CONSOLE ZONE END POINT ####

 
  const handleSubmit=(e)=>{
     e.preventDefault()

  if(formTitle ==="create_Food"){if(file===null){
      alert("Plaese select an Image")
     }

     const {foodTitle, foodType,description,price}=foodInfo
      console.log(foodInfo.foodId)
    //  New Form Constructor
    const formData=new FormData()

    formData.append('foodTitle',foodTitle)
    formData.append('foodType',foodType)
    formData.append('description',description)
    formData.append('price',price)
    formData.append('imageUrl', file); //file base64
   
     //****AXIOS ASYNC AWAIT WAY XXXX ASTAGFIRULLAH XXXXXX
    const addFood= async()=>{
      try{
          const response=await axios.post("http://localhost:5000/api/food/fooddetail",formData) 
          setFoodsInfo(response.data.data)
          if(response.data.data){
            setFoodInfo({})
            alert("Food successfully added")
          }
       }catch(e){
         console.log(`add Food error ${e}`)
        } ;
    }    
    addFood()
    setFile(null)
    

  }else if(formTitle ==="delete_Food"){
    console.log('submitted '+foodInfo.foodId)
    const deleteFood= async()=>{
      try{
          const response=await axios.delete(
            `http://localhost:5000/api/food/${foodInfo.foodId}`

            //// { params: { id: foodInfo.foodId } }

             ) 
          console.log(response.data.success)
       }catch(e){
         console.log(`add Food error ${e}`)
        } ;
    } 

    deleteFood()
  }
    //patching
else if(formTitle ==="update_Food"){
    const updateFood= async()=>{


      const {foodTitle, foodType,description,price}=foodInfo
      console.log(foodInfo.foodId)
    //  New Form Constructor
    const formData=new FormData()

    if(foodTitle!==undefined){
      formData.append('foodTitle',foodTitle)
    }if(foodType!==undefined){
      formData.append('foodType',foodType)
    }if(description!==undefined){
      formData.append('description',description)
    }if(price!==undefined){
      formData.append('price',price)
    }

    // formData.append('foodTitle',foodTitle)
    // formData.append('foodType',foodType)
    // formData.append('description',description)
    // formData.append('price',price)
    // formData.append('imageUrl', file);

      try{
          const response=await axios.patch(
            `http://localhost:5000/api/food/${foodInfo.foodId}`,
            
            formData) 
          console.log(response.data.success)
          if(response.data.success){
            setSearchFood({})
            setFoodInfo({foodId:""})

            alert("Successfully updated")
          }
       }catch(e){
         console.log(`add Food error ${e}`)
        } ;
    } 

    updateFood()

  }else if(formTitle==='orderControl'){
    
    const updateOrderStatus=async()=>{

      try{
        const response=await axios.patch(`http://localhost:5000/api/order/${foodInfo.orderId}`,{order_status:changedOrderStatus})
        console.log(response.data.sms)

      }catch(e){
          console.log(`error in pathcing order status ${e}`)
      }

        
    }

    updateOrderStatus()

  }
 
  }
  
  const handleInput=e=>{   
    setFoodInfo({...foodInfo,[e.target.name]:e.target.value})
   
    setSearchBtn(true)
  //// formTitle ==="update_Food"? handleSearch() : null
  }

  const handleFindFood=(e)=>{
   setFoodInfo({...foodInfo,[e.target.name]:e.target.value}) 
   handleSearch(e.target.value)
   setFoodInfo({...foodInfo,[e.target.name]:e.target.value})
    
    
  }

  const handleSearch=(formType)=>{

    if(formType==="update_Food"){

      console.log('search done')

    const searchFood=async()=>{

      try{
        const response=await axios.get(`http://localhost:5000/api/food/${foodInfo.foodId}`)
        //!console.log(response.data.data)
        setSearchFood(response.data.data)
        if(response.data.data){
          setEditBtn(true)
        }
        // setEditBtn(true)
        setDisplayed(false)
       }catch(e){
        // console.log(`search Food error ${e}`)
        alert("Nothing Found ")
        } ;
        

    }
      searchFood()

    }else if(formType==="orderControl"){
      const getOrderedItem=async()=>{

        try{
          const response=await axios.get(`http://localhost:5000/api/order/${foodInfo.orderId}`)
          //!console.log(response.data.data)
          setSearchFood(response.data.data)
          console.log(response.data.data)
          if(response.data.data){
            setEditBtn(true)
          }
          // setEditBtn(true)
          // setDisplayed(false)
          setOrderedInfo(true)
         }catch(e){
          // console.log(`search Food error ${e}`)
          alert("Nothing Found ")
          } ;
          
  
      }
      getOrderedItem()

// api/order/orderStatusX

      
    }

    
  }
console.log(searchFood)

const handleRefresh=()=>{
  setSearchFood({});
 
  setEditBtn(false)

  setFoodInfo({foodId:""})
  setSearchBtn(false)
  setFieldEnable({foodTitleField:true,descriptionField:true,priceField:true})
  setEditBtn(false)
  setOrderedInfo(false)
  // setFoodInfo({})
  // window.location.reload()
}

const handleCancel=()=>{
  
  setSearchFood({});
  setFoodInfo({foodId:""})
  handleDialog(false)
  setSearchBtn(false)
  setFieldEnable({foodTitleField:true,descriptionField:true,priceField:true}) 
  setEditBtn(false)
  
}

// const handleEdit=()=>{
//   // {formTitle ==="update_Food" && editBtn===true && <span style={{cursor:"pointer"}} onClick={()=>{setSearchFood({...searchFood,foodTitle:""}); setEditBtn(false);setDisplayed(true)}}>edit</span>}

  
//     // setSearchFood({...searchFood,[fieldName]:""});
//     // setEditBtn(false);
//     // setDisplayed(true)

//     handleSearch()
  
  
// }
const editFoodInfo=(field)=>{
  
  if(field==="foodTitle"){
    setSearchFood({...searchFood,foodTitle:""});
    setFieldEnable({...fieldEnable,foodTitleField:false})
  }
  if(field==="descriptionField"){
    setSearchFood({...searchFood,description:""});
    setFieldEnable({...fieldEnable,descriptionField:false})
  }
  if(field==="priceField"){
    setSearchFood({...searchFood,price:""});
    setFieldEnable({...fieldEnable,priceField:false})
  }

}


const handleDel=()=>{
  const deleteFood= async()=>{
    try{
        const response=await axios.delete(`http://localhost:5000/api/food/${foodInfo.foodId}`) 
        console.log(response.data.success)
        if(response.data.success){
          setSearchFood({});
          setEditBtn(false)
          setFoodInfo({foodId:""})
          setSearchBtn(false)
          setFieldEnable({foodTitleField:true,descriptionField:true,priceField:true})
          setEditBtn(false)
          alert(response.data.success)
        }
       
     }catch(e){
       console.log(`add Food error ${e}`)
      } ;
  } 

  deleteFood()
}


  return (
    <Grid item md={10} xs={10} >
     
     
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

        { 
            
          formTitle ==="delete_Food" | formTitle ==="search_Food" | formTitle ==="update_Food" | formTitle==="update_Admin" | formTitle==="orderControl"? 
            
            
          <>
            <TextField
            // id={formTitle}
            // label={formTitle ==="update_Food"? "Food Id":"Admin Id"} 
            // variant="outlined" 
            // name={formTitle ==="update_Food"? "foodId":"adminId"} 
            // type="text" 
            // // inputProps={{ minLength: 2,maxLength: 4 }}
            // onChange={handleInput} 
            // // onBlur={handleInput}
            // // onBlur={handleFindFood}
            // required={true}
            // value={foodInfo.foodId} 

            id={adminForm.field0.id}
            label={adminForm.field0.label} 
            variant={adminForm.field0.variant}
            name={adminForm.field0.name} 
            type="text" 
            // inputProps={{ minLength: 2,maxLength: 4 }}
            onChange={handleInput} 
            // onBlur={handleInput}
            // onBlur={handleFindFood}
            required={true}
            value={foodInfo.foodId || foodInfo.orderId || ""} 
          /> 

{formTitle ==="update_Food" | formTitle==="orderControl" && searchBtn && <span style={{cursor:"pointer"}} onClick={()=>handleSearch(formTitle)}><YoutubeSearchedForIcon/></span>}
          
          </>
          
          :""
          
          }
{/*//! ======-------->Order Status Check and edit<---------====== */}
         {orderInfo && <OrderedInfo searchFood={searchFood} handleOrderStatus={handleOrderStatus}/>}

        {adminForm &&
          formTitle ==="create_Food" | formTitle=== "create_Admin" | formTitle ==="update_Food" | formTitle==="update_Admin" ?
        <>
           {/* Food Title */}
          <TextField
            // id="food-title"
            id={adminForm.field1.id}
            // label="Food Title" 
            label={adminForm.field1.label}
            variant={adminForm.field1.variant} 
            // name="foodTitle"
            name={adminForm.field1.name}  
            type="text" 
            inputProps={{ minLength: 2,maxLength: 50 }}
            onChange={handleInput} 
            required={true}
           
            // disabled={formTitle ==="update_Food" && !displayed}
            disabled={formTitle ==="update_Food" && fieldEnable.foodTitleField}
            value={foodInfo.foodTitle || searchFood.foodTitle||""}  
            
            
          />
          {formTitle ==="update_Food" && editBtn && <span style={{cursor:"pointer"}} onClick={()=>editFoodInfo('foodTitle')}><EditIcon/></span>}
          


          {/* Food Type */}

          
            {
              formTitle ==="create_Food" | changeType ? 
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label"> Food Type</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleInput}
              label= "Food Type"               
              name="foodType"
              required={true}
              // value={foodInfo.foodType}
              value={foodInfo.foodType}      
            >
              <MenuItem value="">
                <em style={{color:'red'}}> "Select Food Type"</em>
              </MenuItem>
              <MenuItem value={"Baking"}>Baking</MenuItem>
              <MenuItem value={"Frozen"} >Frozen</MenuItem>
              <MenuItem value={"Deshi"} >Deshi</MenuItem>
              <MenuItem value={"Chineese"}>Chineese</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </Select>
          </FormControl>:''
          }
          
        {/* {formTitle ==="update_Food" && <span style={{cursor:"pointer"}} onClick={()=>{setChangeType(!changeType)}}><ListIcon/></span>} */}
         

          {/* Food Description */}
          <TextField
            // id="insInput"
            id={adminForm.field2.id}
            // label="Food Description" 
            label={adminForm.field2.label} 
            variant={adminForm.field2.variant} 
            // name="description"
            name={adminForm.field2.name}
            type="text" 
            inputProps={{ minLength: 3,maxLength: 200 }}
            onChange={handleInput} 
            required={true}
            disabled={formTitle ==="update_Food" && fieldEnable.descriptionField}
            value={foodInfo.description ||  searchFood.description||""} 
          />
          {formTitle ==="update_Food" && editBtn && <span style={{cursor:"pointer"}} onClick={()=>editFoodInfo('descriptionField')}><EditIcon/></span>}

          {/* {formTitle ==="update_Food" && editBtn && <span style={{cursor:"pointer"}} onClick={()=>{setSearchFood({...searchFood,description:""});setEditBtn(false);
    setDisplayed(true)}}><EditIcon/></span>} */}

          {/* Price */}
          <TextField
            // id="priceInput"
            id={adminForm.field3.id}
            // label="Price" 
            label={adminForm.field3.label}  
            variant={adminForm.field3.variant}  
            // name="price" 
            name={adminForm.field3.name}  
            type="number" 
            inputProps={{ minLength: 2,maxLength: 4 }}
            onChange={handleInput} 
            required={true}
            disabled={formTitle ==="update_Food" && fieldEnable.priceField}
            value={foodInfo.price ||searchFood.price ||""}  
          /> 

{formTitle ==="update_Food" && editBtn && <span style={{cursor:"pointer"}} onClick={()=>editFoodInfo('priceField')}><EditIcon/></span>}
          {/* {formTitle ==="update_Food" && editBtn && <span style={{cursor:"pointer"}} onClick={()=>{setSearchFood({...searchFood,description:""});setEditBtn(false);
    setDisplayed(true)}}><EditIcon/></span>} */}
          </>:""
          }

      
          
      
          
          
            {/* Upload Food Photo */}
          {/* <Grid className="upload_Button file_base"> */}
          {formTitle === "create_Food" | formTitle=== "create_Admin"  ? <Grid className={`${Style.file_base} ${Style.upload_Button}`}>
            <label htmlFor="fileInput">
            <PhotoCamera  style={{position:"absolute",width:"35px",height:"30px",cursor:'pointer',paddingTop:"5px"}} color="secondary"/>
            </label>

            {/* <FileBase64 multiple={false} onDone={image => console.log(typeof image.base64)}/> 
                                   */}
            {/* && image.size<"5000 kB"  */}
            <FileBase64 required={true} multiple={false} onDone={image =>image.type.slice(0,5)==="image" ? setFile(image.base64) : alert("Please Upload an Image within 5MB")}/>                       
          </Grid>:""  }
            
            {
              file!==null &&
              <div
              style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}
              >
                <img src={file} alt="" width="25%"/>
                <small style={{textTransform:'capitalize'}}>{foodInfo.foodTitle}</small>
              </div>
            }
            <Grid>
            {
              formTitle ==="update_Food" && <Button variant="outlined" color="primary"  onClick={()=>{setChangeType(!changeType)}}> Change Food Type</Button>
            
            }
          <Button variant="outlined" color="secondary" type="submit" style={{margin:"5px"}}>
            {/* {formTitle.replace('_'," ")} */}
            {formTitle}
          </Button> 

          <Button variant="outlined" color="primary" style={{marginRight:"5px"}}  onClick={handleRefresh}>
            
            Refreash
          </Button> 

          
          
          

          <Button variant="outlined" color="secondary"   onClick={handleCancel}>            
            <CancelIcon/>
          </Button> 

          
        {formTitle ==="update_Food" && <Button variant="outlined" color="secondary"   onClick={handleDel}>            
          <DeleteForeverIcon/>Delete Food
        </Button>} 
          
          </Grid>   
        </form>  

    
    </Grid>
  );
}

export default CreateFood;