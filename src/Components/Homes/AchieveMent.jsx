import React from 'react'
import { achieveGoals } from '../../alldata/data'
import AchievePart from './AchievePart'

const AchieveMent = ({about, team}) => {
    return (
        <section className="section-achievement py-20">
            <div className="container">
               {!team && <div className="achievement-header">
                    <h6>START TO SUCCESS</h6>
                    <h2>Achieve Your Goals With Edukon</h2>
                </div>}
                {!team && <div className="achieve-goals grid md:grid-cols-2 lg:grid-cols-4 mt-16 mb-12">
                    {
                        achieveGoals.map((goal) => {
                            const { id, count, info } = goal
                            return <div key={id} className="goal-box p-4">
                                <h2>{count}</h2>
                                <p>{info}</p>
                            </div>
                        })
                    }
                </div>}
                {!about && <AchievePart />}
            </div>
        </section>
    )
}

export default AchieveMent
