import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const Cube = () => {

    const textRef = useRef();
    useFrame(state => {
        // console.log(state)
        (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 1.6)
      })
    
  return (
    <>
    <mesh>

        <boxGeometry/>

        <meshStandardMaterial>
            <RenderTexture attach="map">

            <PerspectiveCamera makeDefault position={[0,0,5]}/>

            <color attach="background" args={["pink"]}/>
            <Text 
            ref={textRef}
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
