import {
        General,
        About,
        Meeting
} from 'components/main'

const Main = () => {

        return(
                <div className="main_container">
                        <General />
                        <About />
                        <Meeting />
                </div>
        )
}

export { Main }