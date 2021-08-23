import React from 'react'
import './blog.css'
import bloglogo from '../../../images/blogimg/logo.png';
import chiliImg from '../../../images/blogimg/new-chills.png';
import berriesImg from '../../../images/blogimg/berries.png';
import dietImg from '../../../images/blogimg/on-diet.png';
import DashBoardTitle from '../../Dashboard/UserDashboard/DashboardComponents/DashBoardTitle';
import { Button } from '@material-ui/core';
import { handleGoogleSignIn, initializeLoginFramework } from '../../Authentication/firebase/loginManager';
import { useState } from 'react';
export default function Blog() {

 const [writterEmail,setWritterEmail]=useState('')


 initializeLoginFramework()
 //GOOGLE AUTH
  const handlegooglesignIn=()=>{
   handleGoogleSignIn().then(
       res=>{
           console.log(res)
         // setGoogleInfo(res)
         // setSignUpFlip(true)
         setWritterEmail(res)
       }
       )
 }


 return (
  // <div id="page">
		// <div id="header">
 <div>
  <div>
			{/* <div>
				<a href="index.html" class="logo"><img src={bloglogo} alt=""/></a>
				<ul id="navigation">
					<li>
						<a href="index.html">Home</a>
					</li>
					<li class="menu">
						<a href="about.html">About</a>
						<ul class="primary">
							<li class="">
								<a href="product.html">Product</a>
							</li>
						</ul>
					</li>
					<li class="menu selected">
						<a href="blog.html">Blog</a>
						<ul class="secondary">
							<li>
								<a href="singlepost.html">Single post</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="contact.html">Contact</a>
					</li>
				</ul>
			</div> */}
		</div>
		{/* <div id="body"> */}
  <div>
			{/* <div class="header">
				<div>
					<h1>Blog</h1>
				</div>
			</div> */}
			<div class="blog">
   <DashBoardTitle dashTitle="OUR BLOG"/>
				<div class="featured">
					<ul>
						<li>
							<img src={chiliImg} alt=""/>
							<div>
								<h1>NEW CHILLS FOR SUMMER</h1>
								<span>By Admin on November 28, 2023</span>
								<p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.</p>
								{/* <a href="singlepost.html" class="more">Read More</a> */}
        <span  data-toggle="collapse" 
                data-target='#read_blog_1'
                aria-expanded="false" 
                aria-controls='read_blog_1'
                text-warning='true'
                >Read More...</span>
							</div>
						</li>
						<li>
							<img src={berriesImg} alt=""/>
							<div>
								<h1>BERRIES ON THE GROVE</h1>
								<span>By Admin on November 28, 2023</span>
								<p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.</p>
								{/* <a href="singlepost.html" class="more">Read More</a> */}
        <span  data-toggle="collapse" 
                data-target='#read_blog_2'
                aria-expanded="false" 
                aria-controls='read_blog_2'
                text-warning='true'>Read More...</span>
							</div>
						</li>
					</ul>
     <div className='d-flex text-decoration-none'>
     <a href="blog.html" class="load">Load More</a>
					<a href="blog.html" class="load"
               data-toggle="collapse" 
                data-target='#write_blog'
                aria-expanded="false" 
                aria-controls='write_blog'
                text-warning='true'
     >Write Blog</a>
     </div>
				
     
				</div>
    
    
				<div class="sidebar">
    <div className="collapse" id="read_blog_1">
					<h1>Recent Posts</h1>
					<img src={chiliImg} alt=""/>
					<h2>NEW CHILLS FOR SUMMER</h2>
					<span>By Admin on November 28, 2023</span>
					<p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.</p>
					<a href="singlepost.html" class="more">Read More</a>
					{/* <span className="service_details collapse " id='read_blog_1'>Read More</span> */}
  
    </div>

    <div className="collapse" id="read_blog_2">
					<h1>Recent Posts</h1>
					<img src={berriesImg} alt=""/>
					<h2>BERRIES ON THE GROVE</h2>
					<span>By Admin on November 28, 2023</span>
					<p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.</p>
					{/* <a href="singlepost.html" class="more">Read More</a> */}
					{/* <span className="service_details collapse " id='read_blog_1'>Read More</span> */}
    </div>

    <div className="collapse" id="write_blog">
					<h1> your Posts</h1>
					{/* <img src={berriesImg} alt=""/> */}
					<h2>Write Blog</h2>
     <form  style={{padding:'20px',marginTop:"50px"}}>
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <input style={{backgroundColor:'transparent',color:'whitesmoke'}} type="text" className="form-control p-4" id="name" placeholder="Your Phone"
                                        required data-validation-required-message="Please enter your phone" name="phone" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group col-sm-6">
                                    <input onClick={handlegooglesignIn} type="email" className="form-control p-4" id="email" placeholder="Your Email" value={writterEmail?.email||""}
                                        required="required" data-validation-required-message="Please enter your email" name="email"  />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            {/* <div className="control-group">
                                <input type="text" className="form-control p-4" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div> */}
                            <div className="control-group">
                                <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                    required="required" 
                                    data-validation-required-message="Please enter your message" name="message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Post Blog
                                    </button>
                                    
                            </div>
                        </form>
					{/* <a href="singlepost.html" class="more">Read More</a> */}
					{/* <span className="service_details collapse " id='read_blog_1'>Read More</span> */}
    </div>

     <div  style={{marginTop:'60px'}}>
     {/* <h1>Recent Posts</h1> */}
     <h1>Welcome to Newaz Kitchen Blog</h1>
					<img src={dietImg} alt=""/>
					<h2>ON THE DIET</h2>
					<span>By Admin on November 28, 2023</span>
					<p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
					<a href="singlepost.html" class="more">Read More</a>
     </div>
     
    </div>
    
			</div>
		</div>
		<div id="footer">
			{/* <div>
				<div class="connect">
					<a href="http://freewebsitetemplates.com/go/facebook/" class="facebook">facebook</a>
					<a href="http://freewebsitetemplates.com/go/twitter/" class="twitter">twitter</a>
					<a href="http://freewebsitetemplates.com/go/googleplus/" class="googleplus">googleplus</a>
					<a href="http://pinterest.com/fwtemplates/" class="pinterest">pinterest</a>
				</div>
				<p>&copy; 2023 Freeeze. All Rights Reserved.</p>
			</div> */}
		</div>
	</div>
 )
}
