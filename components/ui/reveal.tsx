'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Pixels to rise from. */
  y?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

// Scroll-reveal for content entering the viewport. Degrades to static under reduced motion.
export function Reveal({ children, className, delay = 0, y = 24, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()
  const Comp = motion[as]

  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  )
}
