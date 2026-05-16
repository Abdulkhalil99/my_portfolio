'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <div>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass border-b border-[hsl(var(--border-default))] shadow-lg shadow-black/20'
            : 'bg-transparent',
        )}
      >
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            <Link href="/" className="flex items-center gap-2 group z-50 relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-lg',
                  'bg-[hsl(var(--violet)/0.1)] border border-[hsl(var(--violet)/0.3)]',
                  'transition-all duration-300',
                  'group-hover:bg-[hsl(var(--violet)/0.2)]',
                  'group-hover:shadow-[0_0_15px_hsl(var(--violet)/0.4)]',
                )}
              >
                <Code2 className="h-4 w-4 text-[hsl(var(--violet))]" />
              </motion.div>
              <span className="font-mono text-sm font-bold">
                <span className="text-[hsl(var(--violet))]">&lt;</span>
                <span className="text-[hsl(var(--text-primary))]">{SITE_CONFIG.name}</span>
                <span className="text-[hsl(var(--violet))]">/&gt;</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      isActive
                        ? 'text-[hsl(var(--violet))]'
                        : 'text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))]',
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-lg bg-[hsl(var(--violet)/0.1)] border border-[hsl(var(--violet)/0.2)]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                )
              })}
              <div className="ml-2">
                <ThemeToggle />
              </div>
              <motion.a
                href={`mailto:${SITE_CONFIG.email}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  'ml-2 px-4 py-2 text-sm font-medium rounded-lg',
                  'bg-[hsl(var(--violet))] text-white',
                  'hover:bg-[hsl(var(--violet-dim))]',
                  'transition-all duration-200',
                  'shadow-[0_0_15px_hsl(var(--violet)/0.3)]',
                  'hover:shadow-[0_0_25px_hsl(var(--violet)/0.5)]',
                )}
              >
                Hire Me
              </motion.a>
            </div>

            <div className="md:hidden flex items-center gap-3 z-50 relative">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsOpen(function(p) { return !p })}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  'relative flex flex-col items-center justify-center',
                  'h-10 w-10 rounded-xl transition-all duration-300',
                  isOpen
                    ? 'bg-[hsl(var(--violet)/0.15)] border border-[hsl(var(--violet)/0.3)]'
                    : 'bg-[hsl(var(--bg-overlay))] border border-[hsl(var(--border-default))]',
                )}
                aria-label="Toggle menu"
              >
                <span className={cn(
                  'absolute block h-0.5 rounded-full transition-all duration-300',
                  isOpen
                    ? 'w-5 rotate-45 translate-y-0 bg-[hsl(var(--violet))]'
                    : 'w-5 -translate-y-1.5 bg-[hsl(var(--text-primary))]',
                )} />
                <span className={cn(
                  'absolute block h-0.5 rounded-full transition-all duration-300',
                  isOpen
                    ? 'w-0 opacity-0 bg-[hsl(var(--violet))]'
                    : 'w-3.5 bg-[hsl(var(--text-primary))]',
                )} />
                <span className={cn(
                  'absolute block h-0.5 rounded-full transition-all duration-300',
                  isOpen
                    ? 'w-5 -rotate-45 translate-y-0 bg-[hsl(var(--violet))]'
                    : 'w-5 translate-y-1.5 bg-[hsl(var(--text-primary))]',
                )} />
              </motion.button>
            </div>

          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={cn(
                'fixed top-0 right-0 bottom-0 z-40 md:hidden',
                'w-[75vw] max-w-[320px]',
                'flex flex-col',
                'bg-[hsl(var(--bg-elevated))]',
                'border-l border-[hsl(var(--border-default))]',
                'shadow-2xl shadow-black/50',
              )}
            >
              <div className={cn(
                'flex items-center justify-between',
                'px-6 pt-20 pb-6',
                'border-b border-[hsl(var(--border-subtle))]',
              )}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--violet))]">
                    Navigation
                  </p>
                  <p className="text-xs text-[hsl(var(--text-muted))] mt-0.5">
                    {SITE_CONFIG.name}
                  </p>
                </div>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3, ease: 'easeOut' as const }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center justify-between',
                          'px-4 py-3.5 rounded-xl',
                          'text-sm font-medium',
                          'transition-all duration-200',
                          isActive
                            ? 'bg-[hsl(var(--violet)/0.12)] text-[hsl(var(--violet))] border border-[hsl(var(--violet)/0.25)] shadow-[0_0_15px_hsl(var(--violet)/0.1)]'
                            : 'text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] hover:bg-[hsl(var(--bg-overlay))] border border-transparent',
                        )}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--violet))]" />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="px-4 py-6 border-t border-[hsl(var(--border-subtle))] space-y-3"
              >
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className={cn(
                    'flex items-center justify-center',
                    'w-full px-4 py-3.5 rounded-xl',
                    'bg-[hsl(var(--violet))] text-white',
                    'text-sm font-semibold',
                    'transition-all duration-200',
                    'hover:bg-[hsl(var(--violet-dim))]',
                    'shadow-[0_0_20px_hsl(var(--violet)/0.3)]',
                  )}
                >
                  Hire Me
                </a>

                <div className="flex items-center justify-center gap-3 pt-2">
                  {[
                    { label: 'GitHub',   href: SITE_CONFIG.github   },
                    { label: 'LinkedIn', href: SITE_CONFIG.linkedin  },
                    { label: 'Twitter',  href: SITE_CONFIG.twitter   },
                  ].map(function(social) {
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'px-3 py-1.5 rounded-lg text-xs font-medium',
                          'glass border border-[hsl(var(--border-default))]',
                          'text-[hsl(var(--text-secondary))]',
                          'hover:text-[hsl(var(--violet))]',
                          'hover:border-[hsl(var(--violet)/0.3)]',
                          'transition-all duration-200',
                        )}
                      >
                        {social.label}
                      </a>
                    )
                  })}
                </div>

                <p className="text-center text-[10px] text-[hsl(var(--text-muted))] pt-1">
                  {SITE_CONFIG.title}
                </p>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
