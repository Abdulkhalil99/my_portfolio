'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Galaxy } from './Galaxy'
import { FluidSphere, FluidSphereWireframe } from './FluidSphere'
import {
  FloatingBox,
  FloatingTorus,
  FloatingOctahedron,
  FloatingIcosahedron,
  WireframeSphere,
  ParticleField,
} from './FloatingShapes'
import { CameraRig } from './CameraRig'

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />

      {/* Lights */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]}   intensity={0.6} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.2} color="#7c3aed" />
      <pointLight      position={[2, 3, 2]}     intensity={0.4} color="#3b82f6" />
      <pointLight      position={[-2, -3, -2]}   intensity={0.3} color="#7c3aed" />

      {/* Galaxy particle system — the main background */}
      <Galaxy
        count={2000}
        radius={8}
        branches={4}
        spin={1.2}
        randomness={0.4}
        randomnessPower={3}
        insideColor="#7c3aed"
        outsideColor="#3b82f6"
      />

      {/* Fluid abstract sphere — center */}
      <FluidSphere />
      <FluidSphereWireframe />

      {/* Large wireframe spheres — background depth */}
      <WireframeSphere position={[-4, 0, -3]}   scale={2.5} color="#7c3aed" speed={0.2} />
      <WireframeSphere position={[4, 0, -3]}    scale={2}   color="#3b82f6" speed={0.3} />
      <WireframeSphere position={[0, -3, -5]}   scale={3}   color="#06b6d4" speed={0.1} />

      {/* Floating shapes — left side */}
      <FloatingBox         position={[-3.5, 1.5, -1]}  color="#7c3aed" speed={0.8} rotationSpeed={0.6} />
      <FloatingTorus       position={[-2.5, -1.5, -2]} color="#3b82f6" speed={0.6} rotationSpeed={0.4} />
      <FloatingOctahedron  position={[-4,   -0.5, -1]} color="#06b6d4" speed={1.0} scale={1.2} />
      <FloatingIcosahedron position={[-1.5, 2.5, -2]}  color="#7c3aed" speed={1.1} scale={0.8} />

      {/* Floating shapes — right side */}
      <FloatingBox         position={[3.5, -1, -1]}   color="#3b82f6" speed={1.2} rotationSpeed={0.8} />
      <FloatingTorus       position={[2.5, 1.5, -2]}  color="#7c3aed" speed={0.9} rotationSpeed={0.5} />
      <FloatingOctahedron  position={[4,   0.5, -0.5]} color="#7c3aed" speed={0.7} scale={1.4} />
      <FloatingIcosahedron position={[1.5, -2.5, -1.5]} color="#06b6d4" speed={0.8} scale={1.0} />

      {/* Small accent shapes */}
      <FloatingBox position={[0.8,  3, -2]}   color="#06b6d4" speed={1.5} scale={0.4} />
      <FloatingBox position={[-0.8, -3, -1.5]} color="#7c3aed" speed={1.3} scale={0.3} />

      {/* Particle field */}
      <ParticleField count={150} color="#7c3aed" />

      {/* Mouse parallax camera */}
      <CameraRig />
    </>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        gl={{
          antialias:       true,
          alpha:           true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
