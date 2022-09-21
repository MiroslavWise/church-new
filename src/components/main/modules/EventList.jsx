import moment from 'moment';
import 'moment/min/locales'

const EventList = ({date, events}) => {

    moment.locale('ru');
    const dateDetail = moment(date).format('D MMMM').split(' ');
        return(
                <div>
                    <h6 class="cal-table-side-title">
                        События дня: <span class="cal-table-side-day">{dateDetail[0]}</span> 
                        {` ${dateDetail[1]}`}
                    </h6>
                    {
                                
                                events.map(({summary, start, end, location}, i)=> (
                                    <div className="cal-event-article">
                                        <div className="cal-event-time">
                                            <span className="cal-sl-clock-o"></span> 
                                            {`${moment(start.dateTime).format('HH:MM')} - ${moment(end.dateTime).format('HH:MM')}`}
                                        </div>
                                        <div className="cal-event-title"> {summary} </div>
                                        <div className="cal-event-detail"> {location ? location : 'В церкви'}</div>
                                    </div>
                                ))
                        }
                </div>
        )
}

export {EventList}