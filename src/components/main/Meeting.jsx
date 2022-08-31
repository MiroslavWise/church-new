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
                                                name={'Встречи'}
                                        />

                                        {/* <div class="grid-container">
                                                <div class="sunday-service">Header</div>
                                                <div class="small-group">Menu</div>
                                                <div class="pray-service">Main</div>  
                                                <div class="youth-meeting">Right</div>
                                                <div class="sunday-school">Footer</div>
                                                <div class="campl">camp</div>
                                                <div class="other">camp</div>
                                        </div> */}
                                </dir>
                        </dir>
                </div>
        )
}

export {Meeting}