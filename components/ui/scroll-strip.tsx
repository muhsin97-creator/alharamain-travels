'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ScrollStripProps {
  children: React.ReactNode
  className?: string
  /** Accessible label for the strip. */
  label: string
}

// Horizontal scroll-snap strip with arrow controls for pointer users.
export function ScrollStrip({ children, className, label }: ScrollStripProps) {
  const ref = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={cn(
          'no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2',
          className
        )}>
        {children}
      </div>
      <div className="container-x mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Scroll left"
          className="grid size-11 place-items-center rounded-full border-[1.5px] border-charcoal/25 text-charcoal transition-[border-color,transform] hover:-translate-y-0.5 hover:border-charcoal">
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Scroll right"
          className="grid size-11 place-items-center rounded-full border-[1.5px] border-charcoal/25 text-charcoal transition-[border-color,transform] hover:-translate-y-0.5 hover:border-charcoal">
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}
