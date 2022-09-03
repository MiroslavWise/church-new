import {
        Greeting,
        About,
        Meeting,
        Teaching,
        QA,
        Events,
        PastorBlog,
        Support,
        Maps,
        Contact
} from 'components/main'


const Main = () => {
        return(
                <div className="main_container">
                        <Greeting />
                        <About />
                        <Meeting />
                        <Teaching />
                        <QA />
                        <Events />
                        <PastorBlog />
                        <Support />
                        <Contact />
                        <Maps />
                </div>
        )
}

export { Main }