import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { UserContext } from '../../../../App';
import OrderedInfo from '../OrderedInfo/OrderedInfo';
import Style from './DataUpdateForm.module.css';



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

const CreateFood=({formTitle,adminForm,cancel,handleDialog,closeDialog,userForm,newUser,handleSignUp})=> {
  // const db='https://quiet-cove-17146.herokuapp.com'
  const db='http://localhost:5000'
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
  const {foodSync, setFoodSync}=useContext(UserContext)  //! not in previous


  //!changing Oreder status 
  const handleOrderStatus=(status)=>{
    setChangedOrderStatus(status)
  }

 
  const handleSubmit=(e)=>{
     e.preventDefault()

  if(formTitle ==="create_Food"){
    if(file===null){
      alert("Plaese select an Image")
     }

     const {foodTitle, foodType,description,price}=foodInfo     
     const formData=new FormData()

    formData.append('foodTitle',foodTitle)
    formData.append('foodType',foodType)
    formData.append('description',description)
    formData.append('price',price)
    formData.append('imageUrl', file); //file base64
   
    const addFood= async()=>{
      try{
          // const response=await axios.post("https://quiet-cove-17146.herokuapp.com/api/food/fooddetail",formData) 
          const response=await axios.post(`${db}/api/food/fooddetail`,formData) 
          setFoodsInfo(response.data.data)
          if(response.data.data){
            setFoodInfo({})
            alert("Food successfully added")
            setFoodSync(Math.random())
          }
       }catch(e){
         //console.log(`add Food error ${e}`)
        } ;
    }    
    addFood()
    setFile(null)
    

  }else if(formTitle ==="delete_Food"){
    //console.log('submitted '+foodInfo.foodId)
    const deleteFood= async()=>{
      try{
          const response=await axios.delete(
            // `https://quiet-cove-17146.herokuapp.com/api/food/${foodInfo.foodId}`
            `${db}/api/food/${foodInfo.foodId}`
             ) 
        
       }catch(e){
         //console.log(`add Food error ${e}`)
        } ;
    } 

    deleteFood()
  }
    //patching
    else if(formTitle ==="update_Food"){
      const updateFood= async()=>{
      const {foodTitle, foodType,description,price}=foodInfo     
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

      try{
          const response=await axios.patch(
            // `https://quiet-cove-17146.herokuapp.com/api/food/${foodInfo.foodId}`,
            `${db}/api/food/${foodInfo.foodId}`,
            formData) 
         
          if(response.data.success){
            setSearchFood({})
            setFoodInfo({foodId:""})
            alert("Successfully updated")
          }
       }catch(e){
         //console.log(`add Food error ${e}`)
        } ;
    } 

    updateFood()

  }else if(formTitle==='orderControl'){
    
    const updateOrderStatus=async()=>{

      try{
        const response=await axios.patch(`${db}/api/order/${foodInfo.orderId}`,{order_status:changedOrderStatus})
      }catch(e){
          //console.log(`error in pathcing order status ${e}`)
      }   
    }
       updateOrderStatus()
  }

  //START ADMIN MANAGEMENT

  //START CRAETE ADMIN
  else if(formTitle ==="create_Admin"){
    if(file===null){
      alert("Plaese select an Image")
     }
      const {admin_email,admin_name,admin_mobile,admin_password,confirm_password}=foodInfo
   
    if(admin_password!==confirm_password){
      alert("password mismatch")
    }else{
      const formData=new FormData()
      formData.append('admin_name',admin_name)
      formData.append('admin_email',admin_email)
      formData.append('admin_mobile',admin_mobile)
      formData.append('admin_imageUrl', file); //file base64
      formData.append('admin_password',admin_password)
  
    const createAdmin= async()=>{
      try{
          // const res=await axios.post("https://quiet-cove-17146.herokuapp.com/api/admin/createadmin",formData) 
          const res=await axios.post(`${db}/api/admin/createadmin`,formData) 
          alert(res.data.response)
       }catch(e){
         //console.log(`Admin Create error ${e}`)
        } ;
    }    
        createAdmin()
        setFile(null)
}  
}
  //END CREATE ADMIN
  //END ADMIN MANAGEMENT
  }
  
  const handleInput=e=>{   
    setFoodInfo({...foodInfo,[e.target.name]:e.target.value})
    setSearchBtn(true)
  }
  const handleFindFood=(e)=>{
   setFoodInfo({...foodInfo,[e.target.name]:e.target.value}) 
   handleSearch(e.target.value)
   setFoodInfo({...foodInfo,[e.target.name]:e.target.value})
  }
  const handleSearch=(formType)=>{
    if(formType==="update_Food"){
    const searchFood=async()=>{
      try{
        // const response=await axios.get(`https://quiet-cove-17146.herokuapp.com/api/food/${foodInfo.foodId}`)
        const response=await axios.get(`${db}/api/food/${foodInfo.foodId}`)
        setSearchFood(response.data.data)
        if(response.data.data){
          setEditBtn(true)
        }
        setDisplayed(false)
       }catch(e){
        alert("Nothing Found ")
        } ;
    }
      searchFood()
    }else if(formType==="orderControl"){
      const getOrderedItem=async()=>{
        try{
          // const response=await axios.get(`https://quiet-cove-17146.herokuapp.com/api/order/${foodInfo.orderId}`)
          const response=await axios.get(`${db}/api/order/${foodInfo.orderId}`)
          setSearchFood(response.data.data)
          if(response.data.data){
            setEditBtn(true)
          }
          setOrderedInfo(true)
         }catch(e){
          alert("Nothing Found ")
          } ;
      }
      getOrderedItem()  
    }
  }

    const handleRefresh=()=>{
      setSearchFood({});
      setEditBtn(false)
      setFoodInfo({foodId:""})
      setSearchBtn(false)
      setFieldEnable({foodTitleField:true,descriptionField:true,priceField:true})
      setEditBtn(false)
      setOrderedInfo(false)
    }

    const handleCancel=()=>{ 
      setSearchFood({});
      setFoodInfo({foodId:""})
      handleDialog(false)
      setSearchBtn(false)
      setFieldEnable({foodTitleField:true,descriptionField:true,priceField:true}) 
      setEditBtn(false)
    }
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
        // const response=await axios.delete(`https://quiet-cove-17146.herokuapp.com/api/food/${foodInfo.foodId}`) 
        const response=await axios.delete(`${db}/api/food/${foodInfo.foodId}`) 
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
       //console.log(`add Food error ${e}`)
      } ;
  } 
  deleteFood()
}


  return (
      <Grid item md={formTitle==="Log In" ? 6:10} xs={10} sm={10}>  
        <h3
          style={{
            textShadow: "5px 4px 11px rgba(0, 0, 0, 0.26)",
            color:"#fd5c63",           
            }}
        > </h3>
        {foodsInfo.imageUrl &&
          <img src={foodsInfo.imageUrl} alt="" width="30%"/>
        }
        <form  className={classes.root} autoComplete="on" onSubmit={handleSubmit}>
        {      
          formTitle ==="delete_Food" | formTitle ==="search_Food" | formTitle ==="update_Food" | formTitle==="update_Admin" | formTitle==="orderControl" ?     
          <>
          
            <TextField
            id={adminForm.field0.id}
            label={adminForm.field0.label} 
            variant={adminForm.field0.variant}
            name={adminForm.field0.name} 
            type="text" 
            onChange={handleInput} 
            required={true}
            value={foodInfo.foodId || foodInfo.orderId || foodInfo.adminId ||""}
            
          /> 
        
        {formTitle ==="update_Food" | formTitle==="orderControl" && searchBtn && <span style={{cursor:"pointer"}} onClick={()=>handleSearch(formTitle)}><YoutubeSearchedForIcon/></span>
        }        
          </>        
          :""        
          }
         {orderInfo && <OrderedInfo searchFood={searchFood} handleOrderStatus={handleOrderStatus}/>}

        {adminForm &&
          formTitle ==="create_Food" | formTitle=== "create_Admin" | formTitle ==="update_Food" | formTitle==="update_Admin" | formTitle==="Log In" ?
        <>
         <TextField
            id={adminForm.field1.id}
            label={adminForm.field1.label}
            variant={adminForm.field1.variant} 
            name={adminForm.field1.name}  
            type="text" 
            inputProps={{ minLength: 2,maxLength: 50 }}
            onChange={handleInput} 
            required={true}
            disabled={formTitle ==="update_Food" && fieldEnable.foodTitleField}
            value={foodInfo.foodTitle || searchFood.foodTitle|| foodInfo.admin_name||""}  
        />
          
          {formTitle ==="update_Food" && editBtn && <span style={{cursor:"pointer"}} onClick={()=>editFoodInfo('foodTitle')}><EditIcon/></span>} 
          {formTitle ==="create_Food" | changeType ? 
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
          
          {/* Food Description */}
          <TextField            
            id={adminForm.field2.id}           
            label={adminForm.field2.label} 
            variant={adminForm.field2.variant}           
            name={adminForm.field2.name}         
            type={formTitle=== "create_Admin" ? "email" : "text"}
            inputProps={{ minLength: 3,maxLength: 200 }}
            onChange={handleInput} 
            required={true}
            disabled={formTitle ==="update_Food" && fieldEnable.descriptionField}
            value={foodInfo.description ||  searchFood.description|| foodInfo.admin_email ||""} 
          />
          {formTitle ==="update_Food" && editBtn && <span style={{cursor:"pointer"}} onClick={()=>editFoodInfo('descriptionField')}><EditIcon/></span>}

          

          {/* Price */}
         <TextField           
            id={adminForm.field3.id}           
            label={adminForm.field3.label}  
            variant={adminForm.field3.variant}             
            name={adminForm.field3.name}  
            type={formTitle==="create_Admin"?"text":"number"} 
            inputProps={formTitle==="create_Admin" ?{minLength:11,maxLength:11}: { minLength: 2,maxLength: 4 }}
            onChange={handleInput} 
            required={true}
            disabled={formTitle ==="update_Food" && fieldEnable.priceField}
            value={foodInfo.price ||searchFood.price || foodInfo.admin_mobile ||""}  
          /> 
         
          {formTitle ==="update_Food" && editBtn && <span style={{cursor:"pointer"}} onClick={()=>editFoodInfo('priceField')}><EditIcon/></span>}
          </>:""
          }

      
         
          
           {/* Password field */}
          {/* <TextField
            // id="priceInput"
            id={adminForm.field4.id}
            // label="Price" 
            label={adminForm.field4.label}  
            variant={adminForm.field4.variant}  
            // name="price" 
            name={adminForm.field4.name}  
            type="number" 
            inputProps={{ minLength: 2,maxLength: 4 }}
            onChange={handleInput} 
            required={true}
            disabled={formTitle ==="update_Food" && fieldEnable.priceField}
            // value={foodInfo.price ||searchFood.price || foodInfo.admin_mobile ||""}  
          />  */}

          {/* reset Password field */}
         {/* <TextField
          
            // id="priceInput"
            id={adminForm.field5.id}
            // label="Price" 
            label={adminForm.field5.label}  
            variant={adminForm.field5.variant}  
            // name="price" 
            name={adminForm.field5.name}  
            type="number" 
            inputProps={{ minLength: 2,maxLength: 4 }}
            onChange={handleInput} 
            required={true}
            disabled={formTitle ==="update_Food" && fieldEnable.priceField}
            // value={foodInfo.price ||searchFood.price || foodInfo.admin_mobile ||""}  
          /> */}
                  
          {/* ADMIN PASSWORD */}
          {formTitle==="create_Admin" &&
          <>
            <TextField            
            id="admin_pass"           
            label="Password"  
            variant={adminForm.field3.variant}             
            name="admin_password" 
            type="password"           
            onChange={handleInput} 
            required={true}            
          /> 

          <TextField            
            id="confirm_pass"           
            label="Confirm Password"  
            variant={adminForm.field3.variant}              
            name="confirm_password" 
            type="password"            
            onChange={handleInput} 
            required={true}             
          /> 
          </>
          }
          
            {/* Upload Food Photo */}
          {/* <Grid className="upload_Button file_base"> */}
          {formTitle === "create_Food" | formTitle=== "create_Admin" |formTitle==="userForm"   ? <Grid className={`${Style.file_base} ${Style.upload_Button}`}>
            <label htmlFor="fileInput">
            <PhotoCamera  style={{position:"absolute",width:"35px",height:"30px",cursor:'pointer',paddingTop:"5px"}} color="secondary"/>
            </label>

            {/* <FileBase64 multiple={false} onDone={image => //console.log(typeof image.base64)}/> 
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