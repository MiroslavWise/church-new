import {questions} from './ArrayBlocks'

const Accordion = () => {


        return(
                <div className='questions-block-accordion w-100 m-t-4 m-l-4'>
                        {
                                questions.map(({title, description}, i) => (
                                        <div>
                                                <input id={`toggle${i}`} type="checkbox" name="toggle" key={i}></input>
                                                <label for={`toggle${i}`} key={i} id={`label${i}`}>{title}</label>
                                                <section id={`content${i}`} key={i}>{description}</section>
                                        </div>
                                ))
                        }
                </div>
        )
}

export { Accordion }