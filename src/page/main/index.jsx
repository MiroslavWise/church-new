import {
        Greeting,
        About,
        Meeting,
        Stream,
        QA,
        Events,
        // PastorBlog,
        // Support,
        Maps,
        Contact
} from 'components/main'


const Main = () => {

        return(
                <div className="main_container">
                        <Greeting />
                        <About />
                        <Meeting />
                        <Stream />
                        <QA />
                        <Events />
                        {/* <PastorBlog />
                        <Support /> */}
                        <Contact />
                        <Maps />
                </div>
        )
}

export { Main }

