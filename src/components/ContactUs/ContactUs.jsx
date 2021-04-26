import React from 'react'
import { Link } from 'react-router-dom';
import "./contactUs.css"
import location from "../../images/icon/location.png"
import mail from "../../images/icon/mail.png"
import call from "../../images/icon/call.png"
import facebook from "../../images/icon/1.png" 
import twitter from  "../../images/icon/2.png" 
import instagram from "../../images/icon/3.png" 
import pinterest from "../../images/icon/4.png" 
import linkedIn from  "../../images/icon/5.png" 


export default function ContactUs() {
 return (

  <section id="contact">
			<div className="container">
				<div className="contactInfo">
					<div>
						<h2>Contact Info</h2>
						<ul className="info">
							<li>
      
								<span><img src={location} alt=""/></span>

								<span>2912  Meadowbrook Road
									Los Angeles, CA 
									90017
        </span>
         
							</li>

							<li>
								<span><img src={mail} alt=""/></span>
								<span>lorem@ipsum.com</span>
							</li>

							<li>
								<span><img src={call} alt=""/></span>
								<span>310-386-1623</span>
							</li>
       
						</ul>
					</div>
					<ul className="sci">
						<li><Link><img src={facebook} alt=""/></Link></li>
						<li><Link><img src={twitter} alt=""/></Link></li>
						<li><Link><img src={instagram} alt="" /></Link></li>
						<li><Link><img src={pinterest} alt="" /></Link></li>
						<li><Link><img src={linkedIn} alt="" /></Link></li>
					</ul>
				</div>
				<div className="contactForm">
					<h2>Send a Message</h2>
    <form>
					<div className="formBox">
						<div className="inputBox w50">
							<input type="text" name="" required />
							<span>First Name</span>
						</div>
						<div className="inputBox w50">
							<input type="text" name="" required />
							<span>Last Name</span>
						</div>
						<div className="inputBox w50">
							<input type="text" name="" required />
							<span>Email Address</span>
						</div>
						<div className="inputBox w50">
							<input type="text" name="" required />
							<span>Mobile Number</span>
						</div>
						<div className="inputBox w100 ">
							<textarea name="" required></textarea>
							<span className="message_area">Write your message here...</span>
						</div>
						<div className="inputBox w100">
							<input type="submit" value="Send" />
						</div>
					</div>
    </form>
				</div>
			</div>
		</section>
		
 )
}
