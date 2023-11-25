import React from 'react'
import { BsCreditCardFill } from 'react-icons/bs';
import { learningObject } from '../../alldata/index-5';

const Features = () => {
    return (
        <section className="feature-style5 pt-10 md:pt-20">
            <div className="container">
                <div className="feature5-header">
                    <h6>WHAT CAN YOU LEARN</h6>
                    <h2>Learning Objectives</h2>
                </div>
                <div className="feature5-body grid sm:grid-cols-2 lg:grid-cols-3 lg:text-center xl:text-left my-16">
                    {learningObject.map((item) => {
                        const { id, Icon, head, para } = item
                        return <div key={id} className="feature-cart xl:flex max-lg:flex max-sm:flex-col my-10">
                            <div className="con-box xl:mr-4 max-lg:mr-4">
                                <div className="feture-icon flex justify-center items-center max-sm:m-auto lg:m-auto">
                                    <span><Icon /></span>
                                </div>
                            </div>
                            <div className="feature-detail w-full max-sm:text-center">
                                <h4>{head}</h4>
                                <p>{para}</p>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </section>
    )
}

export default Features
