import React from 'react'
import ClntCarousel from './ClntCarousel'

const Clients = ({style5}) => {
  return (
    <section className={`clients-section py-10 md:py-20 ${style5}`}>
        <div className="container">
            <div className="client-section-center">
                <div className="client-header">
                    <h6>{style5? 'TESTIMONIALS':'DON’T MISS THE DAY'}</h6>
                    <h2>{style5? 'What People Say':'The People Says About Us'}</h2>
                </div>
                <div className="client-inner">
                    <ClntCarousel style5={style5} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Clients
