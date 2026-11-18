'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

// Thin gold reading-progress bar pinned to the top of every page.
export function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
    const reduce = useReducedMotion()
    if (reduce) return null
    return (
        <motion.div
            aria-hidden="true"
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-primary"
        />
    )
}

// Background layer that drifts slower than the page, for photo bands.
// Children should fill the layer (an <Image fill /> plus scrims).
export function ParallaxLayer({ children, strength = 12, className }: { children: ReactNode; strength?: number; className?: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const reduce = useReducedMotion()
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])

    return (
        <div ref={ref} className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
            <motion.div
                style={reduce ? undefined : { y }}
                className="absolute inset-x-0 -top-[15%] h-[130%]">
                {children}
            </motion.div>
        </div>
    )
}

// Hero copy drifts up and fades as the visitor scrolls past, so the reel reads as depth.
export function HeroScrollFade({ children, className }: { children: ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const reduce = useReducedMotion()
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [0, -120])
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

    return (
        <div ref={ref} className={className}>
            <motion.div style={reduce ? undefined : { y, opacity }}>{children}</motion.div>
        </div>
    )
}
