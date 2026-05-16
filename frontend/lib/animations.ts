import { Variants } from 'framer-motion'

// ========================
// FADE ANIMATIONS
// ========================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

// ========================
// SCALE ANIMATIONS
// ========================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const },
  },
}

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
}

// ========================
// CONTAINER — staggers children
// ========================

export const staggerContainer = (
  staggerTime = 0.1,
  delayStart  = 0,
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerTime,
      delayChildren:   delayStart,
    },
  },
})

export const staggerContainerFast = (
  staggerTime = 0.06,
  delayStart  = 0,
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerTime,
      delayChildren:   delayStart,
    },
  },
})

// ========================
// SLIDE ANIMATIONS
// ========================

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 80, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -80, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 80, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

// ========================
// CARD ANIMATIONS
// ========================

export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
}

// ========================
// TEXT ANIMATIONS
// ========================

export const textReveal: Variants = {
  hidden: { opacity: 0, y: '100%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

// ========================
// LINE DRAW ANIMATION
// ========================

export const drawLine: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: 'easeOut' as const, delay: 0.3 },
  },
}

// ========================
// VIEWPORT HELPER
// ========================

export const viewportOnce = {
  once:   true,
  margin: '-100px',
}
