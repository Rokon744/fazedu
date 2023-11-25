import React from 'react'

const Register4 = () => {
    return (
        <section className="register-style4 md:pt-[70px] pt-10">
            <div className="container md:flex justify-between items-center">
                <div className="register-left w-full">
                    <h6>SAVE THE DAY</h6>
                    <h3>Join on Day Long Free Workshop for</h3>
                    <h2>Advance <span>PHP</span> Language</h2>
                    <p>Limited Time Offer! Hurry Up</p>
                </div>
                <div className="register-right md:w-[60%] pt-16">
                    <div className="form">
                        <form action="#" method='get' className='p-8 w-full relative z-10 space-y-4 text-black'>
                            <h4>Register Now</h4>
                            <input className='border' type="text" placeholder='Username' />
                            <input className='border' type="email" placeholder='Email' />
                            <input className='border' type="text" placeholder='Phone' />
                            <button>Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register4
