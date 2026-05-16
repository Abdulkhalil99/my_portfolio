'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedNumberProps {
  value:    string    // e.g. "20+" or "99%"
  duration?: number  // animation duration in ms
}

/*
  Extracts the number from strings like "20+" or "99%"
  Animates from 0 to that number when scrolled into view
  Then adds back the suffix (+, %, etc.)
*/
export function AnimatedNumber({
  value,
  duration = 2000,
}: AnimatedNumberProps) {
  const ref       = useRef<HTMLSpanElement>(null)
  const isInView  = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return

    // Extract number and suffix from value string
    const match  = value.match(/^(\d+)(.*)$/)
    if (!match) {
      setDisplay(value)
      return
    }

    const target  = parseInt(match[1])
    const suffix  = match[2]   // "+", "%", etc.
    const start   = Date.now()

    const tick = () => {
      const elapsed  = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic — slows down at the end
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)

      setDisplay(`${current}${suffix}`)

      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, value, duration])

  return <span ref={ref}>{display}</span>
}
