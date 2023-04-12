import React from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Cube } from './Cube'

export const About = () => {
  return (
    <section>
        <div className="row">

        <div className="col1">
          <div className="cube">

        <Canvas camera={{fov: 25, position:[5,5,5]}} style={{height: "800px"}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            
            <Cube/>

        </Canvas>
          </div>

        </div>

        <div className="col2">
            
            <h1 className='heading'>Think outside the <br /> square space</h1>
            <h4 className='subheading'>who we are</h4>
            <p className='para'>a creative group of designers and developers with apassion for the arts</p>
            <button className='btn'>See our works</button>
        </div>
        </div>
    </section>
  )
}
