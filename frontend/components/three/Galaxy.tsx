'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface GalaxyProps {
  count?:        number
  radius?:       number
  branches?:     number
  spin?:         number
  randomness?:   number
  randomnessPower?: number
  insideColor?:  string
  outsideColor?: string
}

export function Galaxy({
  count          = 2000,
  radius         = 5,
  branches       = 3,
  spin           = 1,
  randomness     = 0.5,
  randomnessPower = 3,
  insideColor    = '#7c3aed',
  outsideColor   = '#3b82f6',
}: GalaxyProps) {
  const pointsRef = useRef<THREE.Points>(null)

  /*
    We generate a galaxy shape using math.
    Each star is placed on a spiral arm.
    Stars closer to center = purple (insideColor)
    Stars far from center  = blue (outsideColor)
  */
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors    = new Float32Array(count * 3)

    const colorInside  = new THREE.Color(insideColor)
    const colorOutside = new THREE.Color(outsideColor)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      // Position on spiral arm
      const r          = Math.random() * radius
      const spinAngle  = r * spin
      const branchAngle = ((i % branches) / branches) * Math.PI * 2

      // Random offset for natural look
      const rx = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r
      const ry = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r
      const rz = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * r

      positions[i3]     = Math.cos(branchAngle + spinAngle) * r + rx
      positions[i3 + 1] = ry
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + rz

      // Color — lerp from inside to outside color
      const mixedColor = colorInside.clone()
      mixedColor.lerp(colorOutside, r / radius)

      colors[i3]     = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
    }

    return { positions, colors }
  }, [count, radius, branches, spin, randomness, randomnessPower, insideColor, outsideColor])

  // Slowly rotate the galaxy
  useFrame((_, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.05
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.8}
      />
    </points>
  )
}
