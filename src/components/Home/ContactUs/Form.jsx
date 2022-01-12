import React, { useEffect, useState } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import "./ContactUsNew.css"


export default function Form() {

    const [formValue, setFormValue]=useState({})


    const [inputValue, setInputValue] = useState("");

    const [messageSend,setMessageSend]=useState(false)

   




const handleSubmit=(e)=>{

 e.preventDefault()
 console.log({...formValue,phone:inputValue})
}

const handleChange=(e)=> {
 setFormValue({...formValue,[e.target.name]:e.target.value})
   
 }

 return (
       <div>              
        <form  onSubmit={handleSubmit} id="contactForm" name="sentMessage">
          <div className="form-group" >
              <input className="form-control"                                
              onChange={handleChange} 
              name="name"
              type="text" 
              placeholder="Your Name *"    
              value={formValue.name || ""}                          
              required 
              />    
          </div>          
           <div className="row">
              <div className="form-group col-md-6" >
                  <input  
                  className="form-control" 
                  id="email" 
                  type="email" 
                  name="email"
                  placeholder="Your Email *" 
                  onChange={handleChange}
                  value={formValue.email || ""}
                  required="required"                               
                />                     
              </div>
              <div className="form-group col-md-6" >
                  <input  
                  className="form-control" 
                  id="phone" 
                  type="number" 
                  name="phone"
                  placeholder="Your Phone *" 
                  onChange={handleChange}
                  value={formValue.email || ""}
                  required="required"                               
                />                     
              </div>
            </div>
            <div  
              data-aos="fade-down" 
              className="form-group form-group-textarea mb-md-5">
              <textarea 
                onChange={handleChange}
                className="form-control" 
                name="message" 
                id="message" 
                placeholder="Your Message *" 
                value={formValue.message || ""}
                required >                               
              </textarea>
                <p className="help-block text-danger"></p>
            </div>
            <div className="text-center">      
                       
                  <button  type="submit" className="send_msg" style={{outline:"none"}}><MailOutlineIcon className="icon"/>Send Message</button>               
                  
            
            </div>
      </form>
      </div>  
        

 )
}
