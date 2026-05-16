'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

export function Globe() {
  const meshRef = useRef<THREE.Mesh>(null)
  const pointsRef = useRef<THREE.Points>(null)

  const dotPositions = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      const phi = Math.acos(-1 + (2 * i) / 2000)
      const theta = Math.sqrt(2000 * Math.PI) * phi
      const r = 2.05
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.cos(phi)
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    if (meshRef.current) meshRef.current.rotation.y = clock.getElapsedTime() * 0.1
    if (pointsRef.current) pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color="#0f0f23" transparent opacity={0.9} wireframe={false} roughness={0.8} metalness={0.2} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#7c3aed" transparent opacity={0.05} wireframe />
      </mesh>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dotPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#7c3aed" size={0.03} sizeAttenuation transparent opacity={0.8} />
      </points>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[2.3, 0.01, 8, 100]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.3} />
      </mesh>
      <mesh>
        <torusGeometry args={[2.3, 0.01, 8, 100]} />
        <meshStandardMaterial color="#7c3aed" transparent opacity={0.3} />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </group>
  )
}
