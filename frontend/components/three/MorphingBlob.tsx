'use client'
import { type ElementRef, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface Props {
  position?: [number, number, number]
  color?: string
  size?: number
  opacity?: number
  speed?: number
  distort?: number
}

export function MorphingBlob({
  position = [0, 0, 0],
  color = '#7c3aed',
  size = 1.5,
  opacity = 0.15,
  speed = 2,
  distort = 0.5,
}: Props) {
  const ref = useRef<THREE.Mesh>(null)
  const matRef = useRef<ElementRef<typeof MeshDistortMaterial>>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return

    const t = clock.getElapsedTime()
    ref.current.rotation.x = t * 0.1
    ref.current.rotation.y = t * 0.15
    ref.current.scale.setScalar(size + Math.sin(t * 0.5) * 0.05)
    if (matRef.current) {
      matRef.current.distort = distort + Math.sin(t * 0.5) * 0.15
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[1, 128, 128]} />
      <MeshDistortMaterial ref={matRef} color={color} transparent opacity={opacity} roughness={0.1} metalness={0.8} distort={distort} speed={speed} />
    </mesh>
  )
}

export function MorphingBlobWire({
  position = [0, 0, 0],
  color = '#3b82f6',
  size = 2,
}: Props) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (!ref.current) return

    const t = clock.getElapsedTime()
    ref.current.rotation.x = t * 0.05
    ref.current.rotation.z = t * 0.07
    ref.current.scale.setScalar(size + Math.sin(t * 0.3) * 0.08)
  })
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial color={color} transparent opacity={0.06} wireframe distort={0.2} speed={1.5} />
    </mesh>
  )
}
