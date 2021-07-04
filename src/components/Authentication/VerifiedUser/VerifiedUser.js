import React from 'react'
import { useParams } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';

export default function VerifiedUser() {

 const {user}=useParams()
 const userInfo=jwt.verify(user,'mynameiskhan')
 console.log(userInfo)
 console.log(user)
 return (
  <div>
   <h3>Hello {userInfo.user_name} Welcome to Newaz Kitchen </h3>
   <Link to='/login'> Click to Login</Link>
  </div>
 )
}

