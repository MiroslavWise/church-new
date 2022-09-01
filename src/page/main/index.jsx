import {
        Greeting,
        About,
        Meeting,
        Teaching,
        QA,
} from 'components/main'


const Main = () => {

        return(
                <>
                        <div className="main_container">
                                <Greeting />
                                <About />
                                <Meeting />
                                <Teaching />
                                <QA />
                        </div>
                </>
                
        )
}

export { Main }