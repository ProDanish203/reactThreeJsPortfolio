import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { Cube } from './Cube'
import { Sphere } from './Sphere'

export const Test = () => {

  return (
    <>
    <section>
        {/* <Canvas style={{width: "100%", height: "100%"}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>

            <Cube/>

        </Canvas> */}

        <Canvas style={{width: "100%", height: "100%"}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>

            <Sphere/>

        </Canvas>
    </section>
    </>
  )
}
