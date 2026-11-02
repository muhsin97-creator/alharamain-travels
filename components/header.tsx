'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { Button } from '@/components/ui/button'
import { navigationLinks } from '@/lib/data'
import { cn } from '@/lib/utils'

// Transparent over the photo hero, cream once scrolled (UK header behaviour).
export const HeroHeader = () => {
    const [open, setOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const pathname = usePathname()
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname.startsWith(href)
    }

    React.useEffect(() => {
        setOpen(false)
    }, [pathname])

    // Links read white on the hero and charcoal on cream
    const linkTone = scrolled ? 'text-charcoal hover:text-primary' : 'text-white/90 hover:text-primary'

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,padding] duration-300',
                scrolled
                    ? 'bg-background/95 py-2 shadow-[0_1px_0_var(--border)] backdrop-blur-md'
                    : 'bg-transparent py-3'
            )}>
            <div className="container-x flex items-center justify-between">
                <Link href="/" aria-label="Al-Haramain Travels home" className="relative z-50 flex shrink-0 items-center">
                    <Image
                        src={scrolled || open ? '/logo-color.svg' : '/logo-white.svg'}
                        alt="Al-Haramain Travels"
                        width={300}
                        height={150}
                        priority
                        className={cn(
                            'w-auto transition-[height] duration-300',
                            scrolled ? 'h-16 lg:h-[4.5rem]' : 'h-20 lg:h-24'
                        )}
                    />
                </Link>

                <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
                    {navigationLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'font-display text-[0.95rem] font-medium transition-colors duration-200',
                                linkTone,
                                isActive(item.href) && 'text-primary'
                            )}>
                            {item.label}
                        </Link>
                    ))}
                    <Button asChild>
                        <Link href="/contact">Enquire now</Link>
                    </Button>
                </nav>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    className={cn(
                        'relative z-50 -mr-2 flex size-11 items-center justify-center rounded-full lg:hidden',
                        open ? 'text-white' : scrolled ? 'text-charcoal' : 'text-white'
                    )}>
                    {open ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </div>

            {/* Mobile: charcoal panel sliding in from the right (UK .nav-links.open) */}
            <div
                id="mobile-menu"
                className={cn(
                    'fixed inset-y-0 right-0 z-40 flex w-[min(82vw,330px)] flex-col justify-center gap-6 bg-charcoal px-10 transition-transform duration-300 ease-out lg:hidden',
                    open ? 'translate-x-0' : 'translate-x-full'
                )}>
                {navigationLinks.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                            'font-display text-lg font-medium text-white transition-colors hover:text-primary',
                            isActive(item.href) && 'text-primary'
                        )}>
                        {item.label}
                    </Link>
                ))}
                <Button asChild className="mt-2 w-fit">
                    <Link href="/contact" onClick={() => setOpen(false)}>
                        Enquire now
                    </Link>
                </Button>
            </div>
            {open && (
                <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-30 bg-black/40 lg:hidden"
                />
            )}
        </header>
    )
}
