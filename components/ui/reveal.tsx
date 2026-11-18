'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Pixels to rise from. */
  y?: number
  as?: 'div' | 'section' | 'li' | 'article'
  /**
   * rise: fade and lift (text, cards).
   * mask: photo wipes open from the bottom while settling from a slight zoom (image tiles).
   */
  variant?: 'rise' | 'mask'
}

// Scroll-reveal for content entering the viewport. Degrades to static under reduced motion.
export function Reveal({ children, className, delay = 0, y = 24, as = 'div', variant = 'rise' }: RevealProps) {
  const reduce = useReducedMotion()
  const Comp = motion[as]

  if (variant === 'mask') {
    // The clip sits on an inner layer: a fully clipped element never counts as "in view",
    // so the outer wrapper is what the observer watches.
    return (
      <Comp
        className={className}
        initial={reduce ? false : 'hidden'}
        whileInView="shown"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="absolute inset-0"
          variants={{
            hidden: { clipPath: 'inset(100% 0% 0% 0% round 18px)', scale: 1.06 },
            shown: { clipPath: 'inset(0% 0% 0% 0% round 18px)', scale: 1 },
          }}
          transition={{ duration: 1.1, delay, ease: EASE }}
        >
          {children}
        </motion.div>
      </Comp>
    )
  }

  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </Comp>
  )
}
