'use client'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export function CameraRig() {
  const { camera, mouse } = useThree()
  const target = useRef(new THREE.Vector3())
  useFrame(() => {
    target.current.set(mouse.x * 0.4, mouse.y * 0.3, 5)
    camera.position.lerp(target.current, 0.05)
    camera.lookAt(0, 0, 0)
  })
  return null
}
