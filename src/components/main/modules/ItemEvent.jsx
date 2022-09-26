import { useState, useEffect } from 'react'
import moment from 'moment';

const ItemEvent = ({ summary, end, start, location }) => {
        const [hoisting, setHoisting] = useState(false)

        useEffect(() => {
                setHoisting(true)
        }, [])

        return (
                <div className={`cal-event-article cal-event ${ hoisting && '_visible' }`}>
                        <div className="cal-event-time">
                                <span className="cal-sl-clock-o"></span> 
                                {`${moment(start.dateTime).format('HH:mm')} - ${moment(end.dateTime).format('HH:mm')}`}
                        </div>
                        <div className="cal-event-title"> { summary } </div>
                        <div className="cal-event-detail"> { location || 'В церкви' }</div>
                </div>
        )
}

export {ItemEvent}