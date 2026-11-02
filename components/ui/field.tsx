import * as React from "react"
import { cn } from "@/lib/utils"

// Form primitives matching the UK form card: cream fill, hairline border, gold focus ring.

const controlClass =
  "w-full rounded-[11px] border-[1.5px] border-border bg-input px-4 py-3 text-[0.97rem] text-charcoal placeholder:text-muted-foreground/70 transition-[border-color,box-shadow,background-color] focus:border-primary focus:bg-white focus:outline-none focus:ring-[3px] focus:ring-primary/20 disabled:opacity-50"

interface FieldProps {
  label: string
  htmlFor: string
  required?: boolean
  hint?: string
  error?: string
  children: React.ReactNode
  className?: string
}

export function Field({ label, htmlFor, required, hint, error, children, className }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="font-display text-[0.85rem] font-medium text-charcoal">
        {label}
        {required && <span className="text-gold-deep"> *</span>}
      </label>
      {children}
      {error ? (
        <p className="text-sm text-destructive">{error}</p>
      ) : hint ? (
        <p className="text-sm text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  )
}

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(controlClass, className)} {...props} />
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea className={cn(controlClass, "min-h-28 resize-y", className)} {...props} />
}

export function Select({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        controlClass,
        "appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10 [background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236f6a63' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>\")]",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
}
