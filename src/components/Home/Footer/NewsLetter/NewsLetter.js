import React from 'react'
import './NewsLetter.css'
export default function NewsLetter() {
 return (

    <div className="newsletter footer-widget pl-lg-8">
       <h4>Newsletter</h4>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        <form id="newsletter">
          <div className="form-group px-3">
           <input type="email" className="form-control" id="emailNewsletter" aria-describedby="emailNewsletter" placeholder="Enter email"/>
          </div>
          <button  type="submit" className="my-2 btn submit w-50">Submit</button>
        </form>
    </div>    		

 )
}
