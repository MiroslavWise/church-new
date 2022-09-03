import {questions} from './ArrayBlocks'

const Accordion = () => {
        

        return(
                <div className='questions-block-accordion w-100 m-t-4'>
                        {
                                questions.map(({title, description}, i) => (
                                        <>
                                                <input id={`toggle${i}`} type="checkbox" name="toggle" key={i}/>
                                                <label for={`toggle${i}`} key={i}>{title}</label>
                                                <section id={`content${i}`} key={i}><p  className='color-w-g'>{description}</p></section>
                                        </>
                                ))
                        }
                </div>
        )
}

export { Accordion }