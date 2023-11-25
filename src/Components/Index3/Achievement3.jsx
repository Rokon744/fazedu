import React from 'react'
import { HiUsers } from 'react-icons/hi';
import { achievement3 } from '../../alldata/index-3';

const Achievement3 = () => {
    return (
        <section className="achievement-style-3">
            <div className="container">
                <div className="achievement-center grid lg:grid-cols-4 md:grid-cols-2">
                    {
                        achievement3.map((item) => {
                            const { id, count, detail, Icon, bgColor } = item
                            return <div key={id} className="achieve-box text-center p-10">
                                <div style={{ background: bgColor }} className="achieve-icon flex justify-center items-center m-auto mb-30">
                                    <Icon />
                                </div>
                                <h2>{count}</h2>
                                <p>{detail}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Achievement3
