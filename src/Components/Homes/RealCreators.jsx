import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { teamMember } from '../../alldata/data'
import AchievePart from './AchievePart'
import TeamMem from './TeamMem'

const RealCreators = ({teama}) => {
  const [team, setTeam] = useState(teamMember.slice(0,4))

  useEffect(()=>{
    if(teama){
      setTeam(teamMember)
    }
  },[])
  return (
    <section className="real-creators py-20 bg-[#fff9f1]">
        <div className="world-class-instructors container">
            {!teama && <div className="instructors-title">
                <h6>WORLD-CLASS INSTRUCTORS</h6>
                <h2>Classes Taught By Real Creators</h2>
            </div>}
            <div className="team-cart grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
              {
                team.map((member)=>{
                  return <TeamMem key={member.id} {...member} />
                })
              }
            </div>
            {!teama && <p className='text-center mt-3'>Want to help people learn, grow and achieve more in life?<Link className='text-[#F16126] font-semibold' to={`/team`}>Become an instructor</Link></p>}
        </div>
    </section>
  )
}

export default RealCreators
