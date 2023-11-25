import React from 'react'

const ContactForm = () => {
  return (
    <section className="contact-form py-10 md:py-20">
        <div className="container">
            <div className="contact-from-header lg:w-[65%] m-auto">
                <h6>GET IN TOUCH WITH CONTACT US</h6>
                <h2>Fill The Form Below So We Can Get To Know You And Your Needs Better.</h2>
            </div>
            <div className="contact-from-inner lg:w-[65%] m-auto">
                <form action="#" method='get'>
                    <div className="first-box sm:flex items-center">
                        <input type="text" placeholder='Your Name *' />
                        <input type="text" placeholder='Your Email *' />
                    </div>
                    <div className="first-box sm:flex items-center">
                        <input type="text" placeholder='Mobile Number *' />
                        <input type="text" placeholder='Your Subject *' />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Massage'></textarea>
                    <button className='flex justify-center items-center m-auto mt-10'>Send Our Massage</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactForm
