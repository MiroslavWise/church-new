import { Title } from 'components'
import { MeetingBoxes } from './modules/MeetingBoxes'

const Meeting = () => {
        

        return(
                <div 
                        className="w-100 meeting"
                        id="main-meeting"
                >
                        <dir className="block">
                                <dir className="block-content">
                                        <Title 
                                                name={'meetings'}
                                                darkMode={false}
                                        />
                                        <div className="meeting-flex">
                                                <div class="sunday-service c-p">
                                                        <div className="centered">Воскресные собрания</div>
                                                </div>
                                                <MeetingBoxes />
                                        </div>
                                </dir>
                        </dir>
                </div>
        )
}

export {Meeting}