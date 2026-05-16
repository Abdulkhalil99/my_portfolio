'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { DNAHelix } from './DNAHelix'
import { ParticleField } from './FloatingShapes'
import { MorphingBlob } from './MorphingBlob'

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 8]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#7c3aed" />
      <pointLight position={[-3, 2, 2]} intensity={0.4} color="#3b82f6" />
      <DNAHelix />
      <MorphingBlob position={[-5, 0, -3]} color="#7c3aed" size={1.5} opacity={0.08} distort={0.4} />
      <MorphingBlob position={[5, 0, -3]} color="#3b82f6" size={1.2} opacity={0.08} distort={0.3} />
      <ParticleField count={80} color="#7c3aed" />
    </>
  )
}

export function AboutScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <Suspense fallback={null}><Scene /></Suspense>
      </Canvas>
    </div>
  )
}
