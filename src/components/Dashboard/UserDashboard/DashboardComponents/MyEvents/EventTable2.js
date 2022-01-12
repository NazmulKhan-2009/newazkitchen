import React from 'react'
import EventCancelDialog from './EventCancelDialog';
import './EventInfo.css'



export default function EventTable2({event}) {
 const [open, setOpen] = React.useState(false);
 const [eventData, setEventData] = React.useState('');
 const dialogOpen = (open,eventId) => {
  setOpen(open);
  setEventData(eventId)
};

const dialogClose = (close) => {
  setOpen(close);
};
 
 return (
  <div className="event_history">
    <div className="row">
     
      {event?.map(item=>
       <div key={Math.random()} className="sm-10 md-6 p-3 m-auto">
       <div className="d-flex">
        <span className="pr-2 font-weight-bold"> Event entry: </span>
        <p>{item.created_at.slice(0,10)}</p>   
       </div>
       <div className="d-flex">
        <span className="pr-2 font-weight-bold"> Event Type: </span>
        <p>{item.eventType}</p>   
       </div>
       <div className="d-flex">
        <span className="pr-2 font-weight-bold"> Event Held on: </span>
        <p>{item.eventTime} </p>   
       </div>
       <div className="d-flex">
        <span className="pr-2 font-weight-bold"> Details: </span>
        <p style={{width:'200px'}}>{item.message}</p>   
       </div>
       <div className="d-flex">
        <span className="pr-2 font-weight-bold"> Event status: </span>
        <button style={{
         color:'white',
         border:'none',
         padding:'0 5px',
         borderRadius:"10px",
         width:'100px',
         cursor:'default',
         background:item.status==="received" && '#14539A' || item.status==="cancel" && 'crimson' ||item.status==="pending" && 'blue' || item.status==="pending" && 'crimson'
        }}>{item.status==="received" | item.status==="pending"|item.status==="closed"|item.status==="cancel" && item.status}</button> 

        {item.status==="cancel" ?"":
        <button onClick={()=>dialogOpen(true,item._id)} style={{background:'crimson',border:'none',color:'white',margin:"0 5px",padding:'0 5px',borderRadius:'10px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
       </svg>  
        </button>}
       </div>
       
       <div>
       
       
       </div>
       <hr/>
      </div>
      ) }
     
    </div>
    <EventCancelDialog open={open} dialogClose={dialogClose} eventData={eventData}/>
  </div>
 )
}
