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


        return(
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

        // return (
        //         <FullCalendar
        //           plugins={[dayGridPlugin]}
        //           initialView="dayGridMonth"
        //           events={events}
        //         />
        //     );
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


// const handleClientLoad = () => {
//         window.gapi.load("client:auth2", initClient);
//       };


// const openSignInPopup = () => {
//         window.gapi.auth2.authorize(
//                    { client_id: CLIENT_ID, scope: SCOPES },
//                    (res) => {
//                      if (res) {
//                        if (res.access_token)
//                          localStorage.setItem("access_token", res.access_token);
     
//                        // Load calendar events after authentication
//                        window.gapi.client.load("calendar", "v3", listUpcomingEvents);
//                      }
//                    }
//                  );
//      }  
     
//      const initClient = () => {
//          if (!localStorage.getItem("access_token")) {
//            openSignInPopup();
//          } else {
//            // Get events if access token is found without sign in popup
//            fetch(
//           `https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${API_KEY}&orderBy=startTime&singleEvents=true`,
//              {
//                headers: {
//                  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//                },
//              }
//            )
//              .then((res) => {
//                // Check if unauthorized status code is return open sign in popup
//                if (res.status !== 401) {
//                  return res.json();
//                } else {
//                  localStorage.removeItem("access_token");
     
//                  openSignInPopup();
//                }
//              })
//              .then((data) => {
//                if (data?.items) {
//                  setEvents(formatEvents(data.items));
//                }
//              });
//          }
//        };

//        const listUpcomingEvents = () => {
//         window.gapi.client.calendar.events
//           .list({
//             // Fetch events from user's primary calendar
//             calendarId: "primary",
//             showDeleted: true,
//             singleEvents: true,
//           })
//           .then(function (response) {
//             let events = response.result.items;
    
//             if (events.length > 0) {
//               setEvents(formatEvents(events));
//             }
//           });
//       };

//       const formatEvents = (list) => {
//         return list.map((item) => ({
//           title: item.summary,
//           start: item.start.dateTime || item.start.date,
//           end: item.end.dateTime || item.end.date,
//         }));
//       };
     

export {Events}