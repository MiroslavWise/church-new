import {ScrollInfoBottom} from 'assets/func'

import placeholder from 'assets/svg/placeholder.svg'
import phone from 'assets/svg/phone.svg'
import email from 'assets/svg/email.svg'
import clock from 'assets/svg/clock.svg'

const itemsMeeting = [
        {
                title: 'Домашние группы', 
                description:'Домашние группы - это собрания верующих на неделе по домам, где мы имеем возможность делиться нашей жизнью, говорить о применении Писания, наставлять и ободрять друг друга. Именно благодаря этому времени мы можем лучше узнать других христиан, которых Бог посылает в нашу жизнь для взаимной поддержки и служения. Используйте эту данную Богом возможность для вас.',
        },
        {
                title: 'Братские встречи', 
                description: 'Братские встречи предназначеы для мужчин всех возрастов. Братья вместе обсуждают текущие вопросы церкви, изучают различные темы в свете Библии, молятся друг за друга и т.д. Встречи проходят каждый понедельник в 19:00.'
        },
        {
                title: 'Сестринские группы', 
                description: 'Женщины разных возрастов имеют возможность встречаться на неделе для того, чтобы вместе молиться, ободрять и поддерживать друг друга, читать и обсуждать вместе христианские книги. Такие встречи помогают женщинам углублять свою веру и дают возможность строить близкие отношения для совместного служения Богу в церкви.',
        },
        {
                title: 'Молодежный клуб', 
                description: 'Наши молодежные встречи – это уникальное время, где подростки могут узнать о Божьем Слове и Его Авторе, пообщаться непринужденно за чаепитием, построить ценные отношения со сверстниками и просто хорошо провести время. Каждую субботу в здании церкви мы ждём всех желающих на 18.59.',
        },
        {
                title: 'Воскресная школа', 
                description: 'Мы заботимся о библейском воспитании детей, начиная с дошкольного возраста. Мы проводим с детьми воскресные встречи, во время которых дети находятся под присмотром учителей и учатся расти в отношениях с Богом.  Они вместе читают Библию, поют, молятся и играют. Воскресная школа проходит в разное время для разных возрастных групп: до воскресного служения (в 9:00) для детей 7 -12 лет и во время воскресного служения (в 11:00) для детей 3-7 лет. Урок длится около часа. Это приятное и полезное время для детей.',
        },
        {
                title: 'Лагеря', 
                description: 'Христианские лагеря – это эффективный способ донести Евангелие до подростков и детей. Летом мы проводим детский лагерь на базе церкви и лагерь для подростков с выездом. Каждый год мы создаем уникальную программу, которая на доступном языке рассказывает детям и подросткам Евангелие. Вместе мы прославляем Бога, дети знакомятся с новыми друзьями, играют в спортивные игры и участвуют в мастер-классах. Это хорошее время для знакомства с христианством и церковью.',
        },
]

const questions = [
        // {
        //         title: 'Является ли церковь "Слово жизни" христианской церковью? ',
        //         description: 'Да, наша церковь является христианской общиной и действует в рамках Закона Республики Беларусь О свободе совести и религиозных организациях от 17 декабря 1992 г.'
        // },
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
                description: 'Конечно, вы можете присутствовать на богослужении вместе с ними. Но также во время собрания для детей (от 3 до 7 лет) мы организовываем занятия в соответствующих возрастных группах. Они там играют, узнают библейские истории и учаться применять Божье Слово. Ваши дети могут присоединится к данным группам. Для детей старшего возраста (от 7 до 12 лет) есть воскресная школа на 9:00.'
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
                text: 'church.stolin@gmail.com', 
                logo: email,
        },
        {
                text: <span>Собрания: <br/>воскресение в 10:00 и 17:00</span>, 
                logo: clock,
        }
]

export {itemsMeeting, questions, contacts}