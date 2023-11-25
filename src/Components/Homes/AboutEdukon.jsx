import React from 'react'
import { aboutEdukon } from '../../alldata/data'

const AboutEdukon = () => {
    return (
        <div className="second-box w-[100%] !text-start">
            <div className="second-box-title">
                <h6>ABOUT OUR EDUKON</h6>
                <h2>Good Qualification Services And Better Skills</h2>
                <p>Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.</p>
            </div>
            <ul className='my-8'>
                {aboutEdukon.map((item) => {
                    const { id, image, title, detail } = item
                    return <li key={id} className='flex items-center space-x-3 space-y-6'>
                        <div className="sr-left">
                            <img src={image} alt="" />
                        </div>
                        <div className="sr-right">
                            <h5>{title}</h5>
                            <p>{detail}</p>
                        </div>
                    </li>
                })}

            </ul>
        </div>
    )
}

export default AboutEdukon
