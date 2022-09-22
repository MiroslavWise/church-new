import moment from 'moment';
import 'moment/min/locales'

import {ItemEvent} from './ItemEvent'

const EventList = ({ date, events }) => {

    moment.locale('ru');

    const dateDetail = moment(date).format('D MMMM').split(' ');

    return (
        <div className={`cal-calendar-events-side cal-clear`}>
            <div>
                <h6 class="cal-table-side-title">
                    События дня: <span class="cal-table-side-day">{ dateDetail[0] }</span> 
                    {` ${ dateDetail[1] }`}
                </h6>
                {
                    events.map(({summary, start, end, location}, i)=> (
                        <ItemEvent {...{summary, start, end, location}} />
                    ))
                }
            </div>
        </div>
    )
}

export {EventList}