import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider
} from '@material-ui/pickers';
import 'date-fns';
import React from 'react';
import "./EventInfo.css";


export default function EventsTime({handleDateChange,selectedDate}) {

  // The first commit of Material-UI
  // const [selectedDate, setSelectedDate] = React.useState(new Date());
  // //console.log(selectedDate)

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

 return (
  
  <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justifyContent="space-around" >
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Select Event date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        {/* <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Select tentative time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
    
 )
}
