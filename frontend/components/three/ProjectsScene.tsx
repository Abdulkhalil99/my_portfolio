'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Globe } from './Globe'
import { ParticleField } from './FloatingShapes'

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault fov={60} position={[0, 0, 7]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-3, 3, 3]} intensity={0.5} color="#7c3aed" />
      <pointLight position={[3, -3, 3]} intensity={0.3} color="#3b82f6" />
      <Globe />
      <ParticleField count={60} color="#3b82f6" />
    </>
  )
}

export function ProjectsScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-50">
      <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <Suspense fallback={null}><Scene /></Suspense>
      </Canvas>
    </div>
  )
}
