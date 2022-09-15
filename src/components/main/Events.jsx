import { Title } from 'components'
import { useState, useCallback, useEffect } from 'react'
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
import { gapi } from "gapi-script";
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';

const API_KEY = 'AIzaSyDktjq1a-FP0eQPcC2vXGbKs6SAiIg-qY0';
const CALENDAR_ID = 'alsheuskivictor@gmail.com';
const SCOPES =
  "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar";



const Events = () => {

        const [value, setValue] = useState(new Date());
        const onChange = (nextValue) => { 
                console.log('onChange : nextValue', nextValue)
                // setValue(nextValue);
              }
        // const [events, setEvents] = useState(null);

        // useEffect(() => {
        //   const script = document.createElement("script");
        //   script.async = true;
        //   script.defer = true;
        //   script.src = "https://apis.google.com/js/api.js";
      
        //   document.body.appendChild(script);
      
        //   script.addEventListener("load", () => {
        //     if (window.gapi) handleClientLoad();
        //   });
        // }, []);

        // getEvents(CALENDAR_ID, API_KEY);


        return (
                <div className="w-100 events b-d-f-c" id='main-events'>
                        <div className="block w-100">
                                <div className="block-content">
                                        <Title
                                                name={'events'}
                                                darkMode
                                        />
                                        <div className="mec-calendar">
                                                <div className="mec-calendar-topsec">
                                                        <div className="mec-calendar-side mec-clear">
                                                                <div>
                                                                        <Calendar
                                                                                onChange={onChange}
                                                                                value={value}
                                                                                onClick={onClick}
                                                                                // tileContent={tileContent}
                                                                                tileClassName={tileClassName}
                                                                        />
                                                                </div>
                                                        </div>
                                                        <div className="mec-calendar-events-side mec-clear">

                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )

}

const onClick = (value) => { 
        console.log('New date is: ', value)
}

const tileContent = ({ date, view }) => {
        console.log('tileContent: date', date);
        console.log('tileContent: view', view)
        return view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null
}

const tileClassName = ({ date, view }) => {
        return 'calendar-tile mec-has-event';//view === 'month' && date.getDay() === 3 ? 'saturday' : null; 
}
const getEvents = (calendarID, apiKey) => {
    
        function initiate() {
          gapi.client
            .init({
              apiKey: apiKey,
            })
      
            .then(function () {
              return gapi.client.request({
                path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
              });
            })
      
            .then(
              (response) => {
                let events = response.result.items;
                console.log('events',events);
                return events;
              },
              function (err) {
                return [false, err];
              }
            );
        }
      
        gapi.load("client", initiate);
      
      };

     

export {Events}