import {
        Greeting,
        About,
        Meeting,
        Teaching,
        QA,
        Events,
        PastorBlog,
        Support,
        Maps
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
                                <Maps />
                        </div>
                </>
                
        )
}

export { Main }