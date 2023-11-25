import React, { useState } from 'react'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { BsSquareFill, BsPlayCircle } from 'react-icons/bs';
import { videoCat, videoSubCat } from '../../alldata/course';


const CourseAccorion = () => {
    const [openAccordion, setOpenAccordion] = useState(NaN)
    const toggleBtn = (i) => {
        if (openAccordion == i) {
            return setOpenAccordion(null)
        }
        setOpenAccordion(i)
    }
    return (
        <div className="accordion h-[670px] overflow-y-auto">
            {
                videoCat.map((item, index) => {
                    const { id, title } = item
                    return <div key={id} className="single-accordion mb-2 bg-[#ffff]">
                        <div onClick={() => toggleBtn(index)} className="accor-head flex items-center justify-between px-5 py-3 border">
                            <div>
                                <h5>{title}: Introduction</h5>
                                <p>Videos : 13 | 26:00 min</p>
                            </div>
                            {openAccordion=== index? <span><SlArrowUp/></span>: <span><SlArrowDown /></span>}
                        </div>
                        <div className={`h-0 overflow-hidden transition-all ease-in duration-300 ${openAccordion===index ? 'h-[400px]' : ''}`}>
                            <ul>
                                {
                                    videoSubCat.map((subCat) => {
                                        return <li key={subCat.id} className='border p-2'>
                                            <div className='flex items-center'>
                                                <span className='mr-2'><BsSquareFill /></span>
                                                <h5>{subCat.subCat}</h5>
                                            </div>
                                            <div className="s-box flex items-center ml-6">
                                                <span className='mr-2'><BsPlayCircle /></span>
                                                6:00 Min
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default CourseAccorion
