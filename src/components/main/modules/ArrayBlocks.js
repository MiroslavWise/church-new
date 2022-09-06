import {ScrollInfoBottom} from 'assets/func'

import placeholder from 'assets/svg/placeholder.svg'
import phone from 'assets/svg/phone.svg'
import email from 'assets/svg/email.svg'
import clock from 'assets/svg/clock.svg'

const itemsMeeting = [
        {
                title: 'Домашние группы', 
                description:'Мы практикуем близкие отношения в малых группах, где мы молимся, читаем Библию и - многими другими способами - поддерживаем друг друга в следовании за Христом в нашей повседневной жизни. Малые группы - это безопасное и гостеприимное место для каждого.',
        },
        {
                title: 'Сестринские группы', 
                description: '',
        },
        {
                title: 'Молодежный клуб', 
                description: 'Собрания молодежной группы - это уникальное пространство, где подростки могут узнать о Божьем Слове и Его Авторе, ободрить друг друга, построить ценные отношения со сверстниками и провести время за разнообразными занятиями. Воодушевлен? Приглашаем всех возрастов 13-20 лет присоединиться к нам в церковном здании каждую субботу в 6.59 вечера.',
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
                title: 'Gslskfglkj ',
                description: 'Tak, jesteśmy wspólnotą chrześcijańską działającą w ramach Kościoła Chrystusowego w RP (www.chrystusowi.pl). Działamy w ramach obowiązującego w Polsce prawa – ustawy z dnia 17 maja 1989 r. o gwarancjach wolności sumienia i wyznania (Dz. U. z 2005 r. Nr 231, poz. 1965 z późn.zm.). Zasady naszej działalności są określone w Statucie.'
        },
        {
                title: 'Nie wszystko jasne? ',
                description: 'Tak, jesteśmy wspólnotą chrześcijańską działającą w ramach Kościoła Chrystusowego w RP (www.chrystusowi.pl). Działamy w ramach obowiązującego w Polsce prawa – ustawy z dnia 17 maja 1989 r. o gwarancjach wolności sumienia i wyznania (Dz. U. z 2005 r. Nr 231, poz. 1965 z późn.zm.). Zasady naszej działalności są określone w Statucie.'
        },
        {
                title: '',
                description: ''
        },
        {
                title: '',
                description: ''
        },
        {
                title: '',
                description: ''
        },
        {
                title: '',
                description: ''
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