import { Title, ButtonMore } from 'components'

const About = () => {

        return(
                <div 
                        className="block about-block"
                        id="main-about"
                >

                        <div className="block-content">
    
                                <Title className="about-title"
                                        name={'О нас'}
                                        darkMode={true}
                                />
                                <h4 className='p-t-2 m-b-3'>Мы рады, что вы с нами!</h4>
                                <div className='text-p m-b-5'>
                                        <p>
                                                Церковь «Слово Жизни» в Столине – это евангельская христианская 
                                                община, открытая для всех и для многих поколений. Евангельские 
                                                церкви, такие как наша, принадлежат к большей семье протестантских 
                                                деноминаций, которые, наряду с католицизмом и православием, составляют 
                                                основные ветви христианства. В настоящее время в мире насчитывается около 
                                                800 миллионов христиан-протестантов. Если вы хотите узнать больше о том, кто 
                                                мы, во что мы верим и какова наша история, нажмите ниже.
                                        </p>
                                </div>
                                <div className="button-more-wrapper">
                                        <ButtonMore
                                                className='button-n-hover'
                                                title={'Подробнее'}
                                        />
                                </div>

                        </div>

                </div>
        )
}

export {About}