import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Pill buttons matching the UK page (.btn-gold / .btn-ghost / .btn-light / .btn-outline-light)
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-transparent font-display font-semibold transition-[transform,box-shadow,background-color,color,border-color] duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-primary/40",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-gold hover:bg-primary-hover hover:shadow-gold-lg",
        ghost: "bg-transparent text-charcoal border-charcoal/25 hover:border-charcoal",
        light: "bg-white text-charcoal hover:shadow-lift",
        "outline-light": "bg-transparent text-white border-white/55 hover:border-white hover:bg-white/10",
        outline: "bg-transparent text-charcoal border-charcoal/25 hover:border-charcoal",
        link: "text-gold-deep underline-offset-4 hover:underline hover:translate-y-0",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        secondary: "bg-surface text-charcoal hover:bg-border",
      },
      size: {
        default: "h-12 px-7 text-[0.98rem]",
        sm: "h-10 px-5 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "size-12",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
