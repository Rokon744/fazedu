import React from 'react'
import call1 from '../../alldata/photos/Index-6/contact/01.png'
import massage from '../../alldata/photos/Index-6/contact/02.png'

const ContactInfo = () => {
    return (
        <section className="contact-info lg:py-28 py-16">
            <div className="container">
                <div className="contact-info-header">
                    <h2>Need Any <span>Help?</span></h2>
                    <p>You can contact with us for anykinds of informations and help. We are ready to help you.</p>
                </div>
                <div className="contact-info-inner sm:flex justify-between items-center xl:w-[50%] lg:w-[70%] m-auto">
                    <div className="call-box text-center">
                        <div className="call-img w-full">
                            <img className='m-auto' src={call1} alt="" />
                        </div>
                        <div className="ca-name">
                            <p>Make a Call:</p>
                        </div>
                        <h4>+880 1234 567890</h4>
                    </div>
                    <div className="or-box text-center flex justify-center items-center">
                        <span className='font-semibold'>Or</span>
                    </div>
                    <div className="massage text-center">
                        <div className="call-img w-full">
                            <img className='m-auto' src={massage} alt="" />
                        </div>
                        <div className="ca-name">
                            <p>Send Us Messege at:</p>
                        </div>
                        <h4>contact@yourmail.com</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
