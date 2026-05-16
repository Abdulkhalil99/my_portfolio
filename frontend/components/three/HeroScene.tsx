'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Galaxy } from './Galaxy'
import { MorphingBlob, MorphingBlobWire } from './MorphingBlob'
import { FloatingBox, FloatingTorus, FloatingOctahedron, ParticleField } from './FloatingShapes'
import { CameraRig } from './CameraRig'

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.2} color="#7c3aed" />
      <pointLight position={[2, 3, 2]} intensity={0.4} color="#3b82f6" />
      <Galaxy count={5000} radius={10} branches={4} />
      <MorphingBlob position={[0, 0, 0]} color="#7c3aed" size={1.5} opacity={0.15} distort={0.5} />
      <MorphingBlobWire position={[0, 0, 0]} color="#3b82f6" size={2.2} />
      <FloatingBox position={[-3.5, 1.5, -1]} color="#7c3aed" speed={0.8} />
      <FloatingBox position={[3.5, -1, -1]} color="#3b82f6" speed={1.2} />
      <FloatingTorus position={[-2.5, -1.5, -2]} color="#3b82f6" speed={0.6} />
      <FloatingTorus position={[2.5, 1.5, -2]} color="#7c3aed" speed={0.9} />
      <FloatingOctahedron position={[-4, -0.5, -1]} color="#06b6d4" speed={1} />
      <FloatingOctahedron position={[4, 0.5, -0.5]} color="#7c3aed" speed={0.7} />
      <ParticleField count={150} color="#7c3aed" />
      <CameraRig />
    </>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }} dpr={[1, 1.5]}>
        <Suspense fallback={null}><Scene /></Suspense>
      </Canvas>
    </div>
  )
}
