import React from 'react'
import { FaPlay, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import feedback from '../../alldata/photos/feedback.jpg'
import team2 from '../../alldata/photos/Team/02.jpg'
import team6 from '../../alldata/photos/Team/06.jpg'

const teamMember = [
    {
        id: 1,
        name: 'Oliver Beddows',
        exper: 'UX designer',
        image: team2
    },
    {
        id: 2,
        name: 'Madley Pondor',
        exper: 'UX designer',
        image: team6
    }
]


const StudentFback = () => {
    return (
        <section className="student-feedback-section shape-image mt-5 relative">
            <div className="container student-feedback-center !py-20">
                <div className="student-feedback-header">
                    <h6>LOVED BY 200,000+ STUDENTS</h6>
                    <h2>Students Community Feedback</h2>
                </div>
                <div className="student-feedback-body lg:flex items-center justify-between lg:py-5">
                    <div className="about-smart-video sfl-thumb relative z-10 top-0 w-full">
                        <a href="#">
                            <img src={feedback} alt="" />
                            <span className='text-[25px] bg-white p-5 absolute top-[43%] right-[45%] rounded-full z-10 text-[#f16126] hover:text-black'><FaPlay /></span>
                            <span className='play-btn-animate'></span>
                        </a>
                    </div>
                    <div className="sfr-details w-full lg:pl-8 space-y-5">
                        {
                            teamMember.map((team) => {
                                const { id, name, exper, image } = team
                                return <div key={id} className="sfr-right p-5 bg-white">
                                    <div className="sfr-box flex justify-between">
                                        <div className="sfr-inner flex items-center space-x-3">
                                            <img className='w-[60px] h-[60px]' src={image} alt="" />
                                            <div>
                                                <h4 className='font-semibold text-black'><Link to={`/team-single`}>{name}</Link></h4>
                                                <p>{exper}</p>
                                            </div>
                                        </div>
                                        <div className="reviews flex items-center justify-center">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <hr className='my-4' />
                                    <p>Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze</p>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentFback
