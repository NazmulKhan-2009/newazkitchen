import React, { useState } from 'react';
import DashBoardTitle from '../DashBoardTitle';
import './EventInfo.css';
import EventsTime from './EventsTime';
import EventsType from './EventsType';
import {addEvents} from '../../../../../components/DataManagement'
import { useContext } from 'react';
import { UserContext } from '../../../../../App';
import EventTable from './EventTable';
import EventTable2 from './EventTable2';
// style="-webkit-text-stroke: 1px #dee2e6;"
export default function EventInfo() {
    const {userData,setProfileSync}=useContext(UserContext)
    console.log(userData.event)
    const [eventData,setEventData]=useState({})
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [newEvent,setNewEvent]=useState('none')
    const [checkEvent,setCheckEvent]=useState('block')
    const [item, setItem]=useState(null)
   
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
    // console.log(userInfo)
    

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

    if(item!==null){
        if(new Date()<new Date(selectedDate)){

            addEvents(eventDatas)
            setProfileSync(Math.random())
            setNewEvent('none')
            setEventData({phone:'',email:'',message:''})
            setCheckEvent('block')
        }else{
            alert('You could not select previous date')
        }
        
    }else{
        alert('you have to fill the * field')
    }   
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
                            Check Events
                        </button>
                    </div>
                </div>
            </div>
            <div style={{display:checkEvent}}>
                <button className="btn btn-outline-primary" id="sendMessageButton" onClick={newEventOpen} style={{display:checkEvent}}>Add Event</button>
              {/* <EventTable event={userData.event}/> */}  
              <EventTable2 event={userData.event}/>               
            </div>
        </div>
    </div>
 )
}
