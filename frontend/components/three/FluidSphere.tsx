'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

export function FluidSphere() {
  const meshRef    = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()

    // Breathe in and out
    meshRef.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.05)

    // Slowly rotate
    meshRef.current.rotation.x = t * 0.1
    meshRef.current.rotation.y = t * 0.15

    // Animate distortion
    if (materialRef.current) {
      materialRef.current.distort = 0.3 + Math.sin(t * 0.5) * 0.2
    }
  })

  return (
    <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#7c3aed"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.15}
        wireframe={false}
      />
    </Sphere>
  )
}

export function FluidSphereWireframe() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.rotation.x = t * 0.05
    meshRef.current.rotation.y = t * 0.08
    meshRef.current.rotation.z = t * 0.03
  })

  return (
    <Sphere ref={meshRef} args={[1.6, 32, 32]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.2}
        speed={1.5}
        roughness={0}
        metalness={1}
        transparent
        opacity={0.06}
        wireframe={true}
      />
    </Sphere>
  )
}
