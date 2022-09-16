import { useState } from "react"
import { ItemAnswer } from './ItemAnswer'

export const ButtonsAnswer = ({ answer, setKeyItem, keyItem }) => {
  
        const onChange = (key) => {
                setKeyItem(key)
        }
        return (
                <div className="button_answers">
                        {
                                answer.map(item => (
                                        <ItemAnswer {...{item, onChange, keyItem}} />
                                ))
                        }
                </div>
        )
}