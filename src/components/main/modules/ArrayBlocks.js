import {ScrollInfoBottom} from 'assets/func'

import placeholder from 'assets/svg/placeholder.svg'
import phone from 'assets/svg/phone.svg'
import email from 'assets/svg/email.svg'
import clock from 'assets/svg/clock.svg'

const itemsMeeting = [
        {
                title: 'Домашние группы', 
                description:'В нашей церкви также, кроме центральных служений по воскресеньям, проходят служения среди недели по домам. Главная цель домашних групп - общение друг с другом и служения людям, которые рядом с нами. На домашних группах мы молимся, читаем Библию, служим друг другу советами, наставлениями и разными другими способами поддерживаем друг друга в следовании за Христом в нашей повседневной жизни.',
        },
        {
                title: 'Сестринские группы', 
                description: 'Сестры встречаются на неделе для того, чтобы вместе молиться, ободрять и поддерживать друг друга, читать и обсуждать вместе христианские книги. Такие встречи помогают женщинам углублять свою веру и дают возможность строить близкие отношения для совместного служения Богу в церкви.',
        },
        {
                title: 'Молодежный клуб', 
                description: 'Наши молодежные встречи – это уникальное время, где подростки могут узнать о Божьем Слове и Его Авторе, пообщаться непринужденно за чаепитием, построить ценные отношения со сверстниками и просто хорошо провести время. Каждую субботу в здании церкви мы ждём всех желающих на 18.59.',
        },
        {
                title: 'Воскресная школа', 
                description: '',
        },
        {
                title: 'Лагеря', 
                description: '',
        },
        {
                title: 'Другие встречи', 
                description: <div>
                        <h3>Баня у Васи</h3>
                        <h3>Встреча у Саши Рыбака</h3>
                </div>,
        },
]

const questions = [
        {
                title: 'Является ли церковь "Слово жизни" христианской церковью? ',
                description: 'Да, наша церковь является христианской общиной и действует в рамках Закона Республики Беларусь О свободе совести и религиозных организациях от 17 декабря 1992 г.'
        },
        {
                title: 'Должен ли я быть членом вашей церкви, чтобы посетить ваши служения? ',
                description: 'Не должен. Добро пожаловать, независимо от того, откуда вы или кто вы. Мы открыты для всех, и у любого человека есть возможность познакомиться с нами и посетить наши служения.'
        },
        {
                title: 'Сколько времени длится воскресное служение?',
                description: ' Служение обычно занимает 1,5 - 2 часа. Вы можете остаться до конца или уйти раньше в любое время.'
        },
        {
                title: 'Есть ли какое-то определенное поведение и нужна ли какая-то специальная форма одежды для того, чтобы посетить ваше служение?',
                description: 'Во время служения мы слушаем Слово Божье, поём, молимся и иногда разговариваем. Вы можете быть только наблюдателем того, что мы делаем. Приходите как есть, у нас нет особого воскресного дресс-кода.'
        },
        {
                title: 'Могу ли я прийти к вам на служение вместе с детьми?',
                description: 'Конечно! Если у вас совсем маленькие дети, вы можете присутствовать на богослужении вместе с ними. Для детей постарше (от 3 до 7 лет) мы организовываем занятия в соответствующих возрастных группах. Они там играют, узнают библейские истории и учаться применять Божье Слово. Для детей старшего возраста (от 7 до 12 лет) есть воскресная школа на 9:00.'
        },
        {
                title: 'Должен ли я жертвовать вам деньги?',
                description: 'Вы не обязаны это делать. Во время служения мы собираем добровольные пожертвования, которые являются выражением нашей благодарности Богу за то, что мы получаем от Него. Мы выделяем их на функционирование и развитие нашей церкви, но никто из пришедших не обязан давать пожертвования.'
        },
]

const contacts = [
        {
                text: <ScrollInfoBottom str={<span>г. Столин, <br/>ул. Советская 94Б</span>} link='map' />, 
                logo: placeholder,
        },
        {
                text: '+375(29) 201 62 38', 
                logo: phone,
        },
        {
                text: 'slovostolin@yandex.by', 
                logo: email,
        },
        {
                text: <span>Собрания: <br/>каждое воскресение в 10:00 и 17:00</span>, 
                logo: clock,
        }
]

export {itemsMeeting, questions, contacts}