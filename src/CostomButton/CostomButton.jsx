import React from 'react'
import { useState } from 'react'
import '../CostomButton/CostomButton.css'
const CostomButton = () => {
    const [isShown, setIsShown] = useState(false);
    const [warnMessage, setwarnMessage] = useState(false)
    const onClickBtn = (e) => {
        if (warnMessage === true) {
            e.target.style.backgroundColor = 'blue'
            setwarnMessage(false)
        }
        else {
            setwarnMessage(true)
            e.target.style.backgroundColor = 'red'
        }
    }
    const btnMouseEnter=(e)=>{
        e.target.classList.add('active')
        setIsShown(true)
    }
    const btnMouseLeave=(e)=>{
        setIsShown(false)
        e.target.classList.add('passiv')
    }
    return (
        <div>
            <button className='btnCls' onMouseEnter={btnMouseEnter} onMouseLeave={btnMouseLeave} onClick={onClickBtn}>Button element</button>
            {isShown && (
                <p>
                    Hint
                </p>
            )}
            {warnMessage &&
                <p>Warn Message</p>
            }

        </div>
    )
}

export default CostomButton
