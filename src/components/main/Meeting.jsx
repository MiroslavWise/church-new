import { Title } from 'components'

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

                                        <div className="meeting-grid">
                                                <div class="sunday-service">
                                                        <div className="centered">Воскресные собрания</div>
                                                </div>
                                                <div className="box2">Домашние группы</div>
                                                <div className="box3">Сестринские группы</div>
                                                <div className="box4">Молодежный клуб</div>
                                                <div className="box5">Воскресная школа</div>
                                                <div className="box6">Лагеря</div>
                                                <div className="box7">Другие встречи</div>

                                        </div>
    

                                </dir>
                        </dir>
                </div>
        )
}

export {Meeting}