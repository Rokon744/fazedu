import React from 'react'
import { exper2 } from '../../alldata/index-2'

const Expert2 = () => {
  return (
    <section className="about-style-2">`
        <div className="container grid md:grid-cols-2 lg:grid-cols-3">
            {exper2.map((item)=>{
                const {id, title, detail, image} = item
                return <div key={id} className="flex items-center justify-between my-3 space-x-3 m-auto w-full">
                    <img src={image} alt="" />
                    <div className="detail">
                        <h4>{title}</h4>
                        <p>{detail}</p>
                    </div>
                </div>
            })}
        </div>
    </section>
  )
}

export default Expert2
