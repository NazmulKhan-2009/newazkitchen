import React from 'react'
import DashBoardTitle from '../../Dashboard/UserDashboard/DashboardComponents/DashBoardTitle';
import './ContactUs.css'
export default function ContactUs() {
 return (

<>
<DashBoardTitle dashTitle="Contact Us"/>

  <div id="contact_custom">
    
         

         <div className="contact_row">

            <div className="eight columns">

               
               <form>
					<fieldset>

                  <div>
						   <label for="contactName">Name <span className="required">*</span></label>
						   <input type="text"  size="35" id="contactName" name="contactName"/>
                  </div>

                  <div>
						   <label for="contactEmail">Email <span className="required">*</span></label>
						   <input type="email"  size="35" id="contactEmail" name="contactEmail"/>
                  </div>

                  <div>
						   <label for="contactSubject">Subject</label>
						   <input type="text" size="35" id="contactSubject" name="contactSubject"/>
                  </div>

                  <div>
                     <label for="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" contact_rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif"/>
                     </span>
                  </div>

					</fieldset>
				   </form>

               
               <div id="message-warning"> Error boy</div>
               
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br/>
				   </div>

            </div>


           

      </div>

   </div>
  </> 
 )
}
