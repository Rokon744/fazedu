import React from 'react'
import CarsCarousel from './CarsCarousel'

const CarsEvent = () => {
  return (
    <section className="cars-event">
        <div className="container">
            <div className="cars-inner">
                <div className="cars-header">
                    <h6>DON’T MISS THE DAY</h6>
                    <h2>Upcomming Events</h2>
                </div>
                <CarsCarousel />
            </div>
        </div>
    </section>
  )
}

export default CarsEvent
