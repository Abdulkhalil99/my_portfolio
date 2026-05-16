'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { STATS } from '@/lib/constants'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'

export function Stats() {
  const ref      = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">

      {/* Top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, ease: 'easeOut' as const }}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--violet)/0.5)] to-transparent"
      />

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, ease: 'easeOut' as const, delay: 0.2 }}
        style={{ originX: 1 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--blue)/0.5)] to-transparent"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex flex-col items-center text-center gap-2"
            >
              <span className={cn(
                'text-4xl sm:text-5xl font-bold',
                'text-gradient',
              )}>
                <AnimatedNumber value={stat.value} />
              </span>
              <span className="text-sm text-[hsl(var(--text-muted))] font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
