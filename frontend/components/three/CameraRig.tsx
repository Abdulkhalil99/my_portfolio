'use client'

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/*
  CameraRig makes the camera follow the mouse slightly.
  This gives a parallax depth effect — very premium looking.

  When mouse moves right → camera shifts slightly right
  When mouse moves up   → camera shifts slightly up
  The scene appears to have real depth.
*/

export function CameraRig() {
  const { camera, mouse } = useThree()
  const targetRef = useRef(new THREE.Vector3())

  useFrame(() => {
    // Where we want the camera to be
    targetRef.current.set(
      mouse.x * 0.3,   // follow mouse X (subtle)
      mouse.y * 0.2,   // follow mouse Y (subtle)
      5,               // always 5 units away from center
    )

    // Lerp = smooth interpolation
    // Camera moves toward target slowly — not instantly
    // 0.05 = 5% closer each frame = very smooth
    camera.position.lerp(targetRef.current, 0.05)
    camera.lookAt(0, 0, 0)
  })

  return null
}
