import React from 'react'
import CarouselCrs from './CarouselCrs'

const CourseCarousel = ({style5}) => {
  return (
    <section className="course-carousel">
        <div className="container">
            <div className="course-carousel-header">
                <h6>DON’T MISS</h6>
                <h2>Lincon’s Courses</h2>
            </div>
            <CarouselCrs style5={style5} />
        </div>
    </section>
  )
}

export default CourseCarousel
