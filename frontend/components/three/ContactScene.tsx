'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { MorphingBlob, MorphingBlobWire } from './MorphingBlob'
import { ParticleField } from './FloatingShapes'
import { Galaxy } from './Galaxy'

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 6]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#7c3aed" />
      <pointLight position={[-3, 3, 2]} intensity={0.4} color="#3b82f6" />
      <Galaxy count={2000} radius={8} branches={3} />
      <MorphingBlob position={[3, 1, -2]} color="#7c3aed" size={1.8} opacity={0.1} distort={0.6} speed={1.5} />
      <MorphingBlob position={[-3, -1, -2]} color="#3b82f6" size={1.5} opacity={0.1} distort={0.4} speed={2} />
      <MorphingBlobWire position={[0, 0, -3]} color="#06b6d4" size={3} />
      <ParticleField count={80} color="#7c3aed" />
    </>
  )
}

export function ContactScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <Suspense fallback={null}><Scene /></Suspense>
      </Canvas>
    </div>
  )
}
