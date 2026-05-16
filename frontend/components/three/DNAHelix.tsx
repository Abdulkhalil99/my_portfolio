'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null)

  const { strand1, strand2, rungs } = useMemo(() => {
    const strand1: [number, number, number][] = []
    const strand2: [number, number, number][] = []
    const rungs: { p1: [number, number, number]; p2: [number, number, number] }[] = []
    const count = 40
    const height = 12
    const radius = 1.2

    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 6
      const y = (i / count) * height - height / 2
      strand1.push([Math.cos(t) * radius, y, Math.sin(t) * radius])
      strand2.push([Math.cos(t + Math.PI) * radius, y, Math.sin(t + Math.PI) * radius])
      if (i % 4 === 0) {
        rungs.push({
          p1: [Math.cos(t) * radius, y, Math.sin(t) * radius],
          p2: [Math.cos(t + Math.PI) * radius, y, Math.sin(t + Math.PI) * radius],
        })
      }
    }
    return { strand1, strand2, rungs }
  }, [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {strand1.map((pos, i) => (
        <mesh key={'s1-' + i} position={pos}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#7c3aed" transparent opacity={0.8} metalness={0.8} roughness={0.1} />
        </mesh>
      ))}
      {strand2.map((pos, i) => (
        <mesh key={'s2-' + i} position={pos}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.8} metalness={0.8} roughness={0.1} />
        </mesh>
      ))}
      {rungs.map((rung, i) => {
        const mid: [number, number, number] = [
          (rung.p1[0] + rung.p2[0]) / 2,
          (rung.p1[1] + rung.p2[1]) / 2,
          (rung.p1[2] + rung.p2[2]) / 2,
        ]
        const dx = rung.p2[0] - rung.p1[0]
        const dz = rung.p2[2] - rung.p1[2]
        const length = Math.sqrt(dx * dx + dz * dz)
        return (
          <mesh key={'r-' + i} position={mid} rotation={[0, Math.atan2(dx, dz), Math.PI / 2]}>
            <cylinderGeometry args={[0.03, 0.03, length, 6]} />
            <meshStandardMaterial color="#06b6d4" transparent opacity={0.5} metalness={0.9} roughness={0.1} />
          </mesh>
        )
      })}
    </group>
  )
}
