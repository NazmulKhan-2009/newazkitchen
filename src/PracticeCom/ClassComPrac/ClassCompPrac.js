import React, { Component } from 'react';



class ClassComPrac extends Component {

 cityDis='cumilla'
constructor(props){
 
 super(props);
 this.city='ctg';
 this.state={date:new Date()};
 
}

componentDidMount(){
this.timer= setInterval(()=>this.tick(),1000)
// this.timer= setInterval(()=>{
//  this.setState({date:new Date()})
// },1000)
}

tick(){

 this.setState({date:new Date()})
 
}

componentWillUnmount(){
 clearInterval(this.timer)
}

dhaka(){
 return "Dhaka is Capital of BANGLADESH"
}






 render() {
  // //console.log('class com prac rendering ')
   return (
    <>
   <h1>{this.cityDis} Hello, {this.props.greet} & {this.dhaka()} & {this.city}</h1>
   <h3>{this.state.date.toLocaleTimeString(this.props.localeTime)}</h3>
   </>
   )
 }
}

export default ClassComPrac;




