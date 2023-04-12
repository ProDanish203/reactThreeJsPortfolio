import React from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const Sphere = () => {
  return (
    <>
    <mesh>

        <boxGeometry args={[15, 32,16]}/>

        <meshStandardMaterial>
            <RenderTexture attach="map">

            <PerspectiveCamera makeDefault position={[0,0,5]}/>

            <color attach="background" args={["pink"]}/>
            <Text 
            fontSize={1}
            color="#555">
                My Bitch!
            </Text>
            </RenderTexture>
        </meshStandardMaterial>

    </mesh>
    
    </>
  )
}
