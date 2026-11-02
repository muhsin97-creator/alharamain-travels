"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// UK-style FAQ list: white bordered items, plus/minus toggle, one item open at a time.

const AccordionContext = React.createContext<{
  openId: string | null
  setOpenId: (id: string | null) => void
} | null>(null)

interface AccordionProps {
  children: React.ReactNode
  className?: string
}

export function Accordion({ children, className }: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(null)
  return (
    <AccordionContext.Provider value={{ openId, setOpenId }}>
      <div className={cn("grid gap-3.5", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const id = React.useId()
  const ctx = React.useContext(AccordionContext)
  const [localOpen, setLocalOpen] = React.useState(defaultOpen)

  React.useEffect(() => {
    if (defaultOpen && ctx && ctx.openId === null) ctx.setOpenId(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isOpen = ctx ? ctx.openId === id : localOpen
  const toggle = () => {
    if (ctx) ctx.setOpenId(isOpen ? null : id)
    else setLocalOpen((v) => !v)
  }

  return (
    <div className="overflow-hidden rounded-[14px] border border-border bg-card">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-[1.05rem] font-semibold text-ink"
      >
        <span>{title}</span>
        <span
          aria-hidden="true"
          className="relative size-6 shrink-0 transition-transform duration-300"
        >
          <span className="absolute left-1/2 top-1/2 h-[2.5px] w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-gold-deep" />
          <span
            className={cn(
              "absolute left-1/2 top-1/2 h-3.5 w-[2.5px] -translate-x-1/2 -translate-y-1/2 rounded-sm bg-gold-deep transition-opacity duration-300",
              isOpen && "opacity-0"
            )}
          />
        </span>
      </button>
      <div
        id={`${id}-panel`}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-[0.98rem] leading-relaxed text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
