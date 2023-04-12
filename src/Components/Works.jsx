import React, { useState } from 'react'

import { Development } from './3D Models/Development'
import { Illuistration } from './3D Models/Illuistration'
import { ProductDesign } from './3D Models/ProductDesign'
import { SocialMedia } from './3D Models/SocialMedia'
import { WebDesign } from './3D Models/WebDesign'

export const Works = () => {

  const workData = [
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Social Media"
  ]

  const [work, setWork] = useState("web design")

  return (
    <section>
        <div className="row">

          <div className="col1">
              
              <ul className='work-list'>
                {workData.map((item, ind) => {
                  return <li key={ind} className='work-list-item' data-aos="fade-down" onClick={() => {setWork(item)}}>{item}</li>
                })}
              </ul>

          </div>

          <div className="col2">
            {/* <img src={heroImg} alt="" className='hero-image'/>    
            {work === "Web Design" ? (<WebDesign/>) : work === "Development" ? (<Development/>) : work === "Illustration" ? (<Illuistration/>) : work === "Product Design" ? (<ProductDesign/>) : (<SocialMedia/>)} */}

          </div>
          
        </div>
    </section>
  )
}
