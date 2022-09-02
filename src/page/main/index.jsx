import {
        Greeting,
        About,
        Meeting,
        Teaching,
        QA,
        Events,
        PastorBlog,
        Support,
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
                                <Events />
                                <PastorBlog />
                                <Support />
                        </div>
                </>
                
        )
}

export { Main }