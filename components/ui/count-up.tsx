'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

interface CountUpProps {
  /** Display value, e.g. "1000+", "4.9", "10+". Digits animate, prefix/suffix stay. */
  value: string
  className?: string
}

// Counts a stat up from zero the first time it scrolls into view.
export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/)
    if (!match || reduce || !inView) {
      setDisplay(value)
      return
    }
    const [, prefix, numStr, suffix] = match
    const target = parseFloat(numStr.replace(/,/g, ''))
    const decimals = (numStr.split('.')[1] ?? '').length
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const n = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-AU')
        setDisplay(`${prefix}${n}${suffix}`)
      },
    })
    return () => controls.stop()
  }, [inView, reduce, value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
