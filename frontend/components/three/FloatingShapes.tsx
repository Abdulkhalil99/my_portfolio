'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Props {
  position: [number, number, number]
  color?: string
  speed?: number
  scale?: number
}

export function FloatingBox({ position, color = '#7c3aed', speed = 1, scale = 1 }: Props) {
  const ref = useRef<THREE.Mesh>(null)
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])
  useFrame(({ clock }) => {
    if (!ref.current) return

    const t = clock.getElapsedTime()
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.3
    ref.current.rotation.x += 0.003
    ref.current.rotation.y += 0.005
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={color} transparent opacity={0.15} roughness={0.1} metalness={0.9} />
    </mesh>
  )
}

export function FloatingTorus({ position, color = '#3b82f6', speed = 0.8, scale = 1 }: Props) {
  const ref = useRef<THREE.Mesh>(null)
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])
  useFrame(({ clock }) => {
    if (!ref.current) return

    const t = clock.getElapsedTime()
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.4
    ref.current.rotation.x += 0.004
    ref.current.rotation.z += 0.003
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusGeometry args={[0.4, 0.12, 16, 50]} />
      <meshStandardMaterial color={color} transparent opacity={0.2} roughness={0.05} metalness={1} />
    </mesh>
  )
}

export function FloatingOctahedron({ position, color = '#06b6d4', speed = 1.2, scale = 1 }: Props) {
  const ref = useRef<THREE.Mesh>(null)
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])
  useFrame(({ clock }) => {
    if (!ref.current) return

    const t = clock.getElapsedTime()
    ref.current.position.y = position[1] + Math.sin(t * speed + offset) * 0.35
    ref.current.rotation.y += 0.008
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[0.35]} />
      <meshStandardMaterial color={color} transparent opacity={0.25} roughness={0.05} metalness={1} />
    </mesh>
  )
}

export function ParticleField({ count = 120, color = '#7c3aed' }: { count?: number; color?: string }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [count])
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.01
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.04} transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}
