import React from 'react'

const WorkShopJoin = () => {
  return (
    <div className="workshop-join -mt-[68px] mb-12 md:mb-20">
        <div className="container">
            <div className="workshop-join-center rounded-md overflow-hidden">
                <div className="join-header py-2 px-4">
                    <h4>Just Create Your Free Account Now & Join the Workshop</h4>
                </div>
                <form action="#" method='get' className='py-6 px-5 lg:flex justify-around'>
                    <input className='border p-3 w-full outline-none' type="text" name="" id="" placeholder='UserName' />
                    <input className='border p-3 w-full outline-none' type="text" name="" id="" placeholder='Email' />
                    <input className='border p-3 w-full outline-none' type="text" name="" id="" placeholder='Phone' />
                    <button className='border p-3 m-auto w-[40%]' type='submit'>Join Now</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default WorkShopJoin
