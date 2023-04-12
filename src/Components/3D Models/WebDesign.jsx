import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import Shoe from "../3D Models/Shoe"

export const WebDesign = () => {
  return (
    <>
    <Canvas>
      <Shoe/>
      <OrbitControls enableZoom={false}/>

    </Canvas>
    </>
  )
}
