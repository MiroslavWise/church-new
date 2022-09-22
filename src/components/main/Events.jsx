import { Title } from 'components'
import { useState, useEffect } from 'react'
import { gapi } from "gapi-script";
import { EventList } from './modules/EventList'
import Calendar from 'react-calendar'
import moment from 'moment';
import 'moment/min/locales'

const API_KEY = 'AIzaSyDktjq1a-FP0eQPcC2vXGbKs6SAiIg-qY0';
const CALENDAR_ID = 'alsheuskivictor@gmail.com';
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';


const Events = () => {
        const [currentState, setCurrentState] = useState(getCurrentDateState(moment()._d,true));
        const [gapiLoaded, setGapiLoaded] = useState(false);
        const [monthToEvents, setMonthToEvents] = useState({});
        const [events, setEvents] = useState([]);

        useEffect(() => {
                loadGapi();
        }, []);

        moment.locale('ru');

        useEffect(() => {
                if (gapiLoaded) {
                        const {start, end} = getMonthRangeForDate(currentState.selectedDate);
                        loadEvents(start, end)
                                .then(() => {
                                        setCurrentState(getCurrentDateState(currentState.selectedDate));
                                });
                }
        }, [gapiLoaded]);

        async function intializeGapiClient() {
                await gapi.client.init({
                        apiKey: API_KEY,
                        discoveryDocs: [DISCOVERY_DOC],
                });
                setGapiLoaded(true);
        }
        
        const loadGapi = () => {
                gapi.load('client', intializeGapiClient);
        }

        const onClickDay = (date, event) => { 
                setCurrentState(getCurrentDateState(date, true));

                const events = monthToEvents[formMonthKey(date)] || [];
                setEvents(events.filter((event) => { 
                        return event?.start?.dateTime && moment(event.start.dateTime).format('DD') === moment(date).format('DD')
                }));
        }

        const onActiveStartDateChange = ({ activeStartDate }) => {
                const {start, end} = getMonthRangeForDate(activeStartDate);
                loadEvents(start, end)
                        .then(() => {
                                setCurrentState(getCurrentDateState(activeStartDate));
                        });
        }

        const tileClassName = ({ date }) => {
                const tileClasses = ['calendar-tile'];
                date.getTime() === currentState.selectedDate.getTime() && tileClasses.push('cal-selected');
                const monthKey = formMonthKey(date);
                if (monthToEvents[monthKey]) {
                        const events = monthToEvents[monthKey];
                        events.some((event) => moment(event.start.dateTime).format('DD') === moment(date).format('DD')) 
                                && tileClasses.push('cal-has-event');
                }

                return tileClasses.join(' ');
        } 

        const loadEvents = (startDate, endDate) => {
                const key = formMonthKey(startDate);
                if (!monthToEvents[key]) {
                        const request = {
                                'calendarId': CALENDAR_ID,
                                'timeMin': startDate.toISOString(),
                                'timeMax':endDate.toISOString(),
                                'showDeleted': false,
                                'singleEvents': true,
                                'orderBy': 'startTime'
                        };
                        return gapi.client.calendar.events.list(request)
                                .then(response =>  {
                                        setMonthToEvents(monthToEvents => {
                                                monthToEvents[key] = [...response.result.items];
                                                return monthToEvents;
                                        });
                                })
                                .catch(err => console.error(err));
                }
                return Promise.resolve();
        
        }

        return (
                <div className="w-100 events b-d-f-c" id='main-events'>
                        <div className="block w-100">
                                <div className="block-content">
                                        <Title
                                                name={'events'}
                                                darkMode
                                        />
                                        <div className="cal-calendar">
                                                <div className="cal-calendar-topsec">
                                                        <div className="cal-calendar-side cal-clear">
                                                                <div>
                                                                        <Calendar
                                                                                onActiveStartDateChange={ onActiveStartDateChange }
                                                                                onClickDay={ onClickDay }
                                                                                tileClassName={ tileClassName }
                                                                                locale="ru-RU"
                                                                                showNeighboringMonth={ false }
                                                                                prevLabel={ currentState.prevMonthName }
                                                                                nextLabel={ currentState.nextMonthName }
                                                                                formatMonthYear={ formatMonthYear }
                                                                                view="month"
                                                                        />
                                                                </div>
                                                        </div>
                                                        <EventList
                                                                date={ currentState.selectedDate }
                                                                events = { events }
                                                        />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )

}

const getCurrentDateState = (changedDate, isSelected) => {
        return {
                prevMonthName: `  ${moment(changedDate).subtract(1, "month").format('MMMM')}`,
                nextMonthName: `${moment(changedDate).subtract(-1, "month").format('MMMM')}  `,
                selectedDate: isSelected ? changedDate : getNDayOfMonth(changedDate.getFullYear(),changedDate.getMonth(),15)
        }
}

const getNDayOfMonth = (year, month, nday) => {
        return new Date(year, month, nday);
}

const formatMonthYear = (locale, date) => {
        return moment(date).format('MMMM YYYY');
}

const getMonthRangeForDate = (date) => {
        const start = new Date(date.getFullYear(), date.getMonth(), 1);
        const end = new Date(date.getFullYear(), date.getMonth() + 1, 1);

        return { start, end };
}

const formMonthKey = (date) => {
        return `${date.getYear()}-${date.getMonth()}`;
}



export {Events}