'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Props {
  count?: number
  radius?: number
  branches?: number
}

export function Galaxy({ count = 5000, radius = 8, branches = 4 }: Props) {
  const ref = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const inside = new THREE.Color('#7c3aed')
    const outside = new THREE.Color('#3b82f6')

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const r = Math.pow(Math.random(), 1.5) * radius
      const spin = r * 1.5
      const branch = ((i % branches) / branches) * Math.PI * 2
      const rx = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.4 * r
      const ry = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.4 * r
      const rz = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.4 * r
      positions[i3] = Math.cos(branch + spin) * r + rx
      positions[i3 + 1] = ry
      positions[i3 + 2] = Math.sin(branch + spin) * r + rz
      const mixed = inside.clone().lerp(outside, r / radius)
      colors[i3] = mixed.r
      colors[i3 + 1] = mixed.g
      colors[i3 + 2] = mixed.b
    }
    return { positions, colors }
  }, [count, radius, branches])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.015} sizeAttenuation vertexColors depthWrite={false} blending={THREE.AdditiveBlending} transparent opacity={0.9} />
    </points>
  )
}
