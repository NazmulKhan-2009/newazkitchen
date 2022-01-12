import React from 'react';
import chiliImg from '../../../images/cuisine/1.jpg';
import berriesImg from  '../../../images/cuisine/2.jpg';
import dietImg from  '../../../images/cuisine/3.jpg';
import DashBoardTitle from '../../Dashboard/UserDashboard/DashboardComponents/DashBoardTitle';
import { handleGoogleSignIn, initializeLoginFramework } from '../../Authentication/firebase/loginManager';
import { useState } from 'react';
import './blogResponsive.css';
import './blog.css';
export default function Blog() {
  const [writterEmail,setWritterEmail]=useState('')

			initializeLoginFramework()
 	//GOOGLE AUTH
  const handlegooglesignIn=()=>{
   handleGoogleSignIn().then(res=>{setWritterEmail(res)})}


	 return (
  
 		<div id='blog'>
  		<div>
					</div>
  				<div>	
							<div className="blog">
  	 				<DashBoardTitle dashTitle="OUR BLOG"/>
									<div className="featured">
										<ul>
											<li>
												<img src={chiliImg} alt=""/>
												<div>
														<h1>Chilly Chicken</h1>
														<span>By Admin on November 28, 2023</span>
														<p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.</p>							
														<span  
																data-toggle="collapse" 
																data-target='#read_blog_1'
																aria-expanded="false" 
																aria-controls='read_blog_1'
																text-warning='true'
																>Read More...
														</span>
												</div>
											</li>
											<li>
													<img src={berriesImg} alt=""/>
													<div>
														<h1>Onion Mashroom</h1>
														<span>By Admin on November 28, 2023</span>
														<p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.</p>								<span  
																data-toggle="collapse" 
																data-target='#read_blog_2'
																aria-expanded="false" 
																aria-controls='read_blog_2'
																text-warning='true'>Read More...
														</span>
													</div>
											</li>
										</ul>
										<div className='d-flex justify-content-center text-decoration-none blog_btn'>
												<button className="submit">Submit</button>
												<button 
														className="submit"
														data-toggle="collapse" 
															data-target='#write_blog'
															aria-expanded="false" 
															aria-controls='write_blog'
															text-warning='true'
												>
														Write blog
												</button>									
										</div>    
								</div>   
				<div className="sidebar">
    		<div className="collapse" id="read_blog_1">
								<h1>Recent Posts</h1>
								<img src={chiliImg} alt=""/>
								<h2>Chilly Chicken</h2>
								<span>By Admin on November 28, 2023</span>
								<p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.</p>
								<button className="more">Read More</button>
    	</div>

					<div className="collapse" id="read_blog_2">
								<h1>Recent Posts</h1>
								<img src={berriesImg} alt=""/>
								<h2>Onion Mashroom</h2>
								<span>By Admin on November 28, 2023</span>
								<p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.</p>
								<button className="more">Read More</button>						
					</div>

    <div className="collapse write_blog" id="write_blog" >		
							<div className="blog_form">
							<h2>Write Blog</h2>
							<form >
										<div className="form-row">
														<div className="control-group col-sm-6">
																		<input 
																				style={{backgroundColor:'transparent',color:'whitesmoke'}} 
																				type="text" 		 	 
																				className="form-control p-4" 
																				id="name" 
																				placeholder="Your Phone"
																				required data-validation-required-message="Please enter your phone" 
																				name="phone"/>
																		<p className="help-block text-danger"></p>
														</div>
														<div className="control-group col-sm-6">
																		<input 
																				onClick={handlegooglesignIn} 
																				type="email" 
																				className="form-control p-4" 
																				id="email" 
																				placeholder="Your Email" 
																				value={writterEmail?.email||""}
																				required="required" 
																				data-validation-required-message="Please enter your email" 
																				name="email"/>
																		<p className="help-block text-danger"></p>
														</div>
										</div>
										
										<div className="control-group">
														<textarea 
																className="form-control py-3 px-4" 
																rows="5" 
																id="message" 
																placeholder="Message"
																required="required" 
																data-validation-required-message="Please enter your message" 
																name="message"/>														
														<p className="help-block text-danger"></p>
										</div>
										<div>
													<button className="btn btn-outline-primary" type="submit" id="sendMessageButton">
															Post Blog
													</button>														
										</div>
								</form>
						</div>				
    </div>
							<div  style={{marginTop:'60px'}}>    
									<h1>Welcome to Newaz Kitchen Blog</h1>
									<img src={dietImg} alt=""/>
									<h2>ON THE DIET</h2>
									<span>By Admin on November 28, 2023</span>
									<p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
									<a href="singlepost.html" className="more">Read More</a>
							</div>    
						</div>  
					</div>
				</div>
			<div id="footer">
		</div>
	</div>
 )
}
