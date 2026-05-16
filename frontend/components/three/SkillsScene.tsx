'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { FloatingBox, FloatingTorus, FloatingOctahedron, ParticleField } from './FloatingShapes'
import { MorphingBlob } from './MorphingBlob'

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 6]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-3, 3, 3]} intensity={0.4} color="#7c3aed" />
      <MorphingBlob position={[-5, 2, -4]} color="#7c3aed" size={2} opacity={0.08} distort={0.6} />
      <MorphingBlob position={[5, -2, -4]} color="#3b82f6" size={1.8} opacity={0.08} distort={0.4} />
      <FloatingBox position={[-4, 2, -2]} color="#7c3aed" speed={0.7} scale={1.2} />
      <FloatingBox position={[4, -1, -2]} color="#3b82f6" speed={1.1} scale={0.9} />
      <FloatingBox position={[0, 3, -3]} color="#06b6d4" speed={0.9} scale={0.7} />
      <FloatingTorus position={[-3, -2, -2]} color="#7c3aed" speed={0.6} />
      <FloatingTorus position={[3, 2, -3]} color="#3b82f6" speed={0.8} />
      <FloatingOctahedron position={[-2, 3, -2]} color="#06b6d4" speed={1} />
      <FloatingOctahedron position={[2, -3, -2]} color="#7c3aed" speed={0.7} />
      <ParticleField count={100} color="#7c3aed" />
    </>
  )
}

export function SkillsScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-50">
      <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
        <Suspense fallback={null}><Scene /></Suspense>
      </Canvas>
    </div>
  )
}
