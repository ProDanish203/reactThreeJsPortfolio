import React from 'react'
import { Navbar } from './Navbar'
import heroImg from "../img/moon.png"

import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export const Hero = () => {
    return (
        
     <section>
         <Navbar />

        <div className="row">

            <div className="col1">
                <h1 className='heading'>Think. Make. <br /> Solve.</h1>
                <h4 className='subheading'>what we do</h4>
                <p className='para'>we enjoy creating delightful, human-centered digital experiences</p>
                <button className='btn'>Learn more</button>
            </div>

            <div className="col2">
                <Canvas style={{height: "800px"}}>

                    <OrbitControls enableZoom={false} autoRotate/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[2,1,3]}/>
                    
                    <Sphere args={[1, 150, 250]} scale={1}>

                        <MeshDistortMaterial 
                        color="#461769"
                        attach="material"
                        distort={0.5}
                        speed={2}/>

                    </Sphere>
            </Canvas>

                <img src={heroImg} alt="" className='hero-image'/>

            </div>
        </div>

     </section>

    )
}
