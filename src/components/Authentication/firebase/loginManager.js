import firebase from "firebase/app";
// import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
// import { firebaseConfig } from "./firebase.config";
// import { FacebookAuthProvider } from "firebase/auth";

// import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";


export const initializeLoginFramework=() => {

//  if(firebase.apps.length===0){
//    firebase.initializeApp(firebaseConfig)
//  }

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}else{
  firebase.app() //if already initialized, use that one
}
 
};


//!PROVIDER

const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
// var provider = new firebase.auth.FacebookAuthProvider();

//! GOOGLE SIGN IN

export const handleGoogleSignIn=()=>{
//  const provider = new firebase.auth.GoogleAuthProvider();

 return firebase.auth().signInWithPopup(googleProvider).then((result)=>{
 
 const {displayName,email}=result.user

 const user={
  name:displayName,
  email,
  isSignIn:true
 }
  
 return user
  
 }).catch((error)=>{
  // //console.log(error)
  alert(error.message);
  //suggession by stack overflow on https://stackoverflow.com/questions/65746300/google-firebase-auth-failed-on-netlify-but-work-on-local-server
 
 });

}


//! FACEBOOK SIGNIN



// const fbProvider = new FacebookAuthProvider();

export const handleFacebookSignIn=()=>{
//  const fbProvider = new firebase.auth.FacebookAuthProvider();



 firebase
 .auth()
 .signInWithPopup(fbProvider)
 .then((result) => {
   
   var credential = result.credential;

 
   var user = result.user;

  
   var accessToken = credential.accessToken;

  //console.log('FACE BOOK =>' , user)
  // return user
 })
 .catch((error) => {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // The email of the user's account used.
   var email = error.email;
   // The firebase.auth.AuthCredential type that was used.
   var credential = error.credential;

   //console.log(errorCode,errorMessage,email,credential)
   // return (errorCode,errorMessage,email,credential)
 });



}