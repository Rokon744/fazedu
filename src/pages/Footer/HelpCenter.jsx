import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import './footer.scss'
import { BiSearchAlt } from 'react-icons/bi';
import { IoMdHelpBuoy } from 'react-icons/io';
import { footerDetails } from '../../alldata/footer';
import Footer from '../../Components/Homes/Footer';

const HelpCenter = () => {
    return (
        <>
            <Navbar />
            <section className='help-center py-28 md:py-40'>
                <div className="container">
                    <div className="help-header">
                        <h2>How Can We Help?</h2>
                    </div>
                    <div className="help-center-inner sm:w-[520px] m-auto my-7">
                        <form action="#" method='get'>
                            <div className="input-box flex">
                                <input type="text" />
                                <button><BiSearchAlt /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="help-details">
                <div className="container">
                    <div className="details-header">
                        <h6 className='mb-5'>NEED HELP?</h6>
                        <h2>What do you need help With?</h2>
                    </div>
                    <div className="details-inner my-16">
                        <div className="details-cart grid lg:grid-cols-4 md:grid-cols-2">
                            {footerDetails.map((item) => {
                                const { id, Icon, head, title1, title2, title3 } = item
                                return <div key={id} className="single-cart p-7 text-center mx-2 my-5">
                                    <div className="icon flex justify-center items-center">
                                        <Icon className='text-[60px]' />
                                    </div>
                                    <h4 className='my-5'>{head}</h4>
                                    <ul>
                                        <li>{title1}</li>
                                        <li>{title2}</li>
                                        <li>{title3}</li>
                                    </ul>
                                </div>
                            })}

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default HelpCenter
