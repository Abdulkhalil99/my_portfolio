'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ShapeProps {
  position:      [number, number, number]
  color?:        string
  speed?:        number
  rotationSpeed?: number
  scale?:        number
}

export function FloatingBox({
  position,
  color = '#7c3aed',
  speed = 1,
  rotationSpeed = 0.5,
  scale = 1,
}: ShapeProps) {
  const ref    = useRef<THREE.Mesh>(null)
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.3
    ref.current.rotation.x += 0.003 * rotationSpeed
    ref.current.rotation.y += 0.005 * rotationSpeed
    ref.current.rotation.z += 0.002 * rotationSpeed
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.15}
        roughness={0.1}
        metalness={0.9}
        wireframe={false}
      />
    </mesh>
  )
}

export function FloatingTorus({
  position,
  color = '#3b82f6',
  speed = 0.8,
  rotationSpeed = 0.4,
  scale = 1,
}: ShapeProps) {
  const ref    = useRef<THREE.Mesh>(null)
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.4
    ref.current.rotation.x += 0.004 * rotationSpeed
    ref.current.rotation.z += 0.003 * rotationSpeed
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusGeometry args={[0.5, 0.15, 16, 50]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.2}
        roughness={0.05}
        metalness={1}
      />
    </mesh>
  )
}

export function FloatingOctahedron({
  position,
  color = '#06b6d4',
  speed = 1.2,
  rotationSpeed = 0.6,
  scale = 1,
}: ShapeProps) {
  const ref    = useRef<THREE.Mesh>(null)
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.35
    ref.current.rotation.y += 0.008 * rotationSpeed
    ref.current.rotation.x += 0.003 * rotationSpeed
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[0.4]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.25}
        roughness={0.05}
        metalness={1}
      />
    </mesh>
  )
}

export function FloatingIcosahedron({
  position,
  color = '#7c3aed',
  speed = 0.9,
  rotationSpeed = 0.3,
  scale = 1,
}: ShapeProps) {
  const ref    = useRef<THREE.Mesh>(null)
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.3
    ref.current.rotation.y += 0.005 * rotationSpeed
    ref.current.rotation.z += 0.004 * rotationSpeed
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[0.4, 0]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.2}
        roughness={0.1}
        metalness={0.9}
        wireframe={false}
      />
    </mesh>
  )
}

export function WireframeSphere({
  position,
  color = '#7c3aed',
  speed = 0.4,
  scale = 1,
}: ShapeProps) {
  const ref    = useRef<THREE.Mesh>(null)
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.2
    ref.current.rotation.y += 0.002
    ref.current.rotation.z += 0.001
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[0.8, 16, 16]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.08}
        wireframe={true}
      />
    </mesh>
  )
}

export function ParticleField({
  count = 100,
  color = '#7c3aed',
}: {
  count?: number
  color?: string
}) {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.getElapsedTime() * 0.01
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.04}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}
