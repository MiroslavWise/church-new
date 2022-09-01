import {
        Greeting,
        About,
        Meeting
} from 'components/main'


const Main = () => {

        return(
                <>
                        <div className="main_container">
                                <Greeting />
                                <About />
                                <Meeting />
                        </div>
                </>
                
        )
}

export { Main }