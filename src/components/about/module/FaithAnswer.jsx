import { useState, useEffect } from 'react'
import { ButtonsAnswer } from './ButtonsAnswer'
import { DescriptionAnswer } from './DescriptionAnswer'

const answer = [
        {
                title: 'TRÓJCA',
                description: 'Wierzymy,odwrócą się od niego i zaufają Jezusowi Chrystuod potępienia, a ich przeznaczeniem jest życie wieczne.',
                key: "1",
        },
        {
                title: 'BÓG OJCIEC',
                description: 'Wierzymy,odwrócą się od niego i zaufają Jezusowi Chrystuod potępienia, a ich przeznaczeniem jest życie wieczne.',
                key: "2",
        },
        {
                title: 'JEZUS CHRYSTUS',
                description: 'Wierzymy,odwrócą się od niego i zaufają Jezusowi Chrystuod potępienia, a ich przeznaczeniem jest życie wieczne.',
                key: "3",
        },
        {
                title: 'Ducha Świętego',
                description: 'Wierzymy,odwrócą się od niego i zaufają Jezusowi Chrystuod potępienia, a ich przeznaczeniem jest życie wieczne.',
                key: "4",
        },
        {
                title: 'Wierzymy',
                description: 'Wierzymy,odwrócą się od niego i zaufają Jezusowi Chrystuod potępienia, a ich przeznaczeniem jest życie wieczne.',
                key: "5",
        },
        {
                title: 'KOŚCIÓŁ',
                description: 'Wierzymy,odwrócą się od niego i zaufają Jezusowi Chrystuod potępienia, a ich przeznaczeniem jest życie wieczne.',
                key: "6",
        },
]

export const FaithAnswer = () => {
        const [active, setActive] = useState(false)

        const onChange = () => {
                
        }

        return (
                <div className="faith_items">
                        <ButtonsAnswer {...{answer, onChange}} />
                        <DescriptionAnswer /> 
                </div>
        )
}