import React from 'react'
import { achievementPart } from '../../alldata/data'


const AchievePart = () => {
    return (
        <div className="achievement-part lg:flex items-center justify-between">
            {
                achievementPart.map((part) => {
                    const { id, image, title, btn, bgColor, textColor } = part
                    return <div key={id} className="part-box overflow-hidden p-5 flex items-center justify-between">
                        <div className='w-[60%]'>
                            <h4 className='lg:text-[1.5rem]'>{title}</h4>
                            <p>Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica</p>
                            <button style={{ background: bgColor, color: textColor }}>{btn}</button>
                        </div>
                        <div className="img-box w-[65%]">
                            <img className='w-full' src={image} alt="" />
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default AchievePart
