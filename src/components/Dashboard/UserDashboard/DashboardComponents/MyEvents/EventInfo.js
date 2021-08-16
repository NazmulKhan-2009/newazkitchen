import React, { useState } from 'react';
import DashBoardTitle from '../DashBoardTitle';
import './EventInfo.css';
import EventsTime from './EventsTime';
import EventsType from './EventsType';
import {addEvents} from '../../../../../components/DataManagement'
import { useContext } from 'react';
import { UserContext } from '../../../../../App';
import EventTable from './EventTable';
// style="-webkit-text-stroke: 1px #dee2e6;"
export default function EventInfo() {

    const {userData,setProfileSync}=useContext(UserContext)
    console.log(userData.event)

    const [eventData,setEventData]=useState({})
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [newEvent,setNewEvent]=useState('none')
    const [checkEvent,setCheckEvent]=useState('block')

    // console.log(new Date('april 12,2020 00:00:00'))
    console.log(new Date(selectedDate))
  console.log(selectedDate)
  console.log(new Date()<new Date(selectedDate))

  const [item, setItem]=useState(null)
console.log(item)

//! EVENT TIME
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

//! EVENT TYPE
  const handleChange = selectedOption => {

    // setItem({ selectedOption });
    setItem(selectedOption.value);
   
    
   };

   const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
console.log(userInfo)
    

const inputData=(e)=>{
    setEventData({...eventData,[e.target.name]:e.target.value})
}



const submitForm=(e)=>{
 e.preventDefault()
    const eventDatas={
        ...eventData,
        email:userInfo.userEmail,
        eventTime:selectedDate.toLocaleString(),
         eventType:item
    }

    // var evenDate=new Date('april 12,2020 00:00:00')
    // const date=new Date()
    // const futureDate=date.setTime(date.getTime() + (60 * 1000));
    // Date.now()+1000*60*60*24<Date.now(selectedDate)

    if(item!==null){
        if(new Date()<new Date(selectedDate)){

            addEvents(eventDatas)
            setProfileSync(Math.random())
            setNewEvent('none')
            setEventData({phone:'',email:'',message:''})
            setCheckEvent('block')

            // console.log(eventDatas)
        }else{
            alert('You could not select previous date')
        }
        
    }else{
        alert('you have to fill the * field')
    }

    console.log(selectedDate.getDate())
  console.log(new Date().getDate())

    

}

const handleEvent = () =>{
    setCheckEvent('block')
    setNewEvent('none')
}

const newEventOpen=()=>{
    setNewEvent('block')
    setCheckEvent('none')
}


 return (
  <div className="container-fluid " id="contact">
        <div className="container-fluid">
            {/* <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white contract_stroke" >My Events</h1>
                <h1 className="position-absolute text-uppercase text-primary">Add Your Event</h1>
            </div> */}

            <DashBoardTitle dashTitle="Add Events"/>
            <div className="row position-relative d-flex align-items-center justify-content-center pb-3 col-lg-10 mx-auto" >
             <div className="col-lg-8 " style={{display:newEvent}}>
              <EventsTime handleDateChange={handleDateChange} selectedDate={selectedDate}/>
             </div>
             <div className="col-lg-4" style={{display:newEvent}}>
             <EventsType handleChange={handleChange} item={item}/>
             </div>
            </div>

            <div className="row justify-content-center" style={{display:newEvent}}>
                <div className="col-lg-8">
                    <div className="contact-form text-center">
                        <div id="success"></div>

                        
                        <form  onSubmit={submitForm}>
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <input type="text" className="form-control p-4" id="name" placeholder="Your Phone"
                                        required data-validation-required-message="Please enter your phone" name="phone" value={eventData.phone} onChange={inputData}/>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="email" className="form-control p-4" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" name="email"  value={userInfo.userEmail}/>
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
                                    required="required" value={eventData.message} onChange={inputData}
                                    data-validation-required-message="Please enter your message" name="message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Record Event
                                    </button>
                                    
                            </div>
                        </form>
                        <button className="btn btn-outline-primary" onClick={handleEvent}>
                                    Check Events</button>
                    </div>
                </div>
            </div>

            <div style={{display:checkEvent}}>
                <button className="btn btn-outline-primary" id="sendMessageButton" onClick={newEventOpen} style={{display:checkEvent}}>Add Event</button>


            {/* {
                userData.event?.map(item=>
                <div key={Math.random()}>
                    <h3>{item.eventType}</h3>
                    <p>{item.eventTime}</p>
                    <p>{item.status}</p>
                </div>  
                )
            } */}
              <EventTable event={userData.event}/>
                   
            </div>

        </div>
    </div>
 )
}
