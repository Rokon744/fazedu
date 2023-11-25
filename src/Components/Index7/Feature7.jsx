import React, { useState } from 'react'
import feat1 from '../../alldata/photos/Index-7/10.png'
import { learningObject } from '../../alldata/index-5'

const Feature7 = () => {
  const [object, setObject] = useState(learningObject.slice(0, 3))
  const [secondObject, setSecondObject] = useState(learningObject.slice(3,6))

  return (
    <section className="feature-style7">
      <div className="container !pb-0">
        <div className="feature-header">
          <h6>CHOOSE ANY ONE COURSE</h6>
          <h2>Learn Everything with Professor</h2>
        </div>
        <div className="feature-inner grid lg:grid-cols-3 max-lg:grid-cols-2">
          <div className="feature-left lg:text-right w-full my-auto">
            {object.map((item) => {
              const { id, Icon, head, para } = item
              return <div key={id} className="feature-cart xl:flex lg:flex-row-reverse max-lg:flex max-sm:flex-col my-10">
                <div className="con-box xl:mr-4 max-lg:mr-4">
                  <div className="feture-icon flex justify-center items-center max-sm:m-auto lg:m-auto lg:ml-4">
                    <span><Icon /></span>
                  </div>
                </div>
                <div className="feature-detail w-full max-sm:text-center">
                  <h4>{head}</h4>
                  <p>{para}</p>
                </div>
              </div>
            })}
          </div>
          <div className="feature-middle w-full max-lg:hidden">
            <div className="middle-image-box">
              <img src={feat1} alt="" />
            </div>
          </div>
          <div className="feature-right w-full my-auto">
            {secondObject.map((item) => {
              const { id, Icon, head, para } = item
              return <div key={id} className="feature-cart xl:flex max-lg:flex max-sm:flex-col my-10">
                <div className="con-box xl:mr-4 max-lg:mr-4">
                  <div className="feture-icon flex justify-center items-center max-sm:m-auto lg:m-auto">
                    <span><Icon /></span>
                  </div>
                </div>
                <div className="feature-detail w-full max-sm:text-center">
                  <h4>{head}</h4>
                  <p>{para}</p>
                </div>
              </div>
            })}
          </div>
        </div>
          <div className="feature-middle w-full lg:hidden">
            <div className="middle-image-box flex justify-center items-center">
              <img src={feat1} alt="" />
            </div>
          </div>
      </div>
    </section>
  )
}

export default Feature7
