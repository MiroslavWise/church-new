import {
        Greeting,
        About,
        Meeting,
        Stream,
        QA,
        Events,
        Maps,
        Contact
} from 'components/main'


const Main = () => (
        <div className="main_container">
                <Greeting />
                <About />
                <Meeting />
                <Stream />
                <QA />
                <Events />
                <Contact />
                <Maps />
        </div>
)

export { Main }

