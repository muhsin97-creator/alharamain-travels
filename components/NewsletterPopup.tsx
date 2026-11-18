'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import React from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const WEB3FORMS_KEY = 'b4583fd3-9c0f-4055-9958-459889bef193'
const STORAGE_KEY = 'aht-newsletter'
const SNOOZE_DAYS = 14
const EASE = [0.16, 1, 0.3, 1] as const

// Pages where the card would get in the way of the enquiry itself.
const HIDDEN_ON = ['/contact', '/privacy', '/terms', '/refund-policy']

function readState(): string | null {
    try {
        return window.localStorage.getItem(STORAGE_KEY)
    } catch {
        return null
    }
}

function writeState(value: string) {
    try {
        window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
        /* private mode: the card simply shows again next visit */
    }
}

function shouldOffer(): boolean {
    const v = readState()
    if (!v) return true
    if (v === 'subscribed') return false
    const until = Number(v)
    return !Number.isFinite(until) || Date.now() > until
}

// Slides in once the visitor has scrolled a little: weekly newsletter, blog and Umrah updates.
export function NewsletterPopup() {
    const pathname = usePathname()
    const reduce = useReducedMotion()
    const [open, setOpen] = React.useState(false)
    const [status, setStatus] = React.useState<'idle' | 'sending' | 'done' | 'error'>('idle')
    const offered = React.useRef(false)

    React.useEffect(() => {
        if (offered.current || HIDDEN_ON.some((p) => pathname.startsWith(p)) || !shouldOffer()) return
        const start = performance.now()
        const onScroll = () => {
            const threshold = Math.min(600, window.innerHeight * 0.6)
            // a little scrolling, and at least a few seconds on the page
            if (window.scrollY > threshold && performance.now() - start > 4000) {
                offered.current = true
                setOpen(true)
                window.removeEventListener('scroll', onScroll)
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [pathname])

    const dismiss = React.useCallback(() => {
        setOpen(false)
        if (status !== 'done') writeState(String(Date.now() + SNOOZE_DAYS * 86400000))
    }, [status])

    React.useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && dismiss()
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [open, dismiss])

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        if (form.get('botcheck')) return
        setStatus('sending')
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: 'New newsletter subscriber (Australia site)',
                    from_name: 'Al-Haramain Travels Website',
                    form: 'Newsletter: weekly newsletter, blogs and Umrah updates',
                    name: form.get('name') || '',
                    email: form.get('email'),
                    page: pathname,
                }),
            })
            const json = await res.json()
            if (!json.success) throw new Error(json.message)
            setStatus('done')
            writeState('subscribed')
            window.setTimeout(() => setOpen(false), 4500)
        } catch {
            setStatus('error')
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.aside
                    role="dialog"
                    aria-modal="false"
                    aria-labelledby="newsletter-title"
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="fixed inset-x-3 bottom-3 z-50 overflow-hidden rounded-[22px] border border-border bg-card shadow-[0_24px_70px_rgba(28,28,28,0.28)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[380px]"
                >
                    <div className="relative h-[72px] sm:h-36">
                        <Image
                            src="/gallery/masjid-nabawi-green-dome.jpg"
                            alt=""
                            fill
                            sizes="380px"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/75 via-[#1c1c1c]/20 to-transparent" />
                        <p className="absolute bottom-3 left-5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary">
                            Every week from Al-Haramain
                        </p>
                        <button
                            type="button"
                            onClick={dismiss}
                            aria-label="Close"
                            className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
                        >
                            <X className="size-[18px]" />
                        </button>
                    </div>

                    <div className="px-[18px] pb-3 pt-3.5 sm:p-6">
                        {status === 'done' ? (
                            <div className="py-2 text-center">
                                <h2 id="newsletter-title" className="font-display text-[1.3rem] font-semibold text-ink">
                                    JazakAllahu khair!
                                </h2>
                                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                                    You are on the list. Look out for our next email, in sha Allah.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h2 id="newsletter-title" className="font-display text-[1.12rem] font-semibold leading-snug text-ink sm:text-[1.3rem]">
                                    Umrah updates, straight to your inbox
                                </h2>
                                <p className="mt-1.5 text-[0.86rem] leading-normal text-muted-foreground sm:text-[0.92rem] sm:leading-relaxed">
                                    Hear first when trip dates and prices are released, plus our weekly newsletter and new
                                    Umrah guides from the blog.
                                </p>
                                <form onSubmit={onSubmit} className="mt-3 grid gap-2 sm:mt-4 sm:gap-2.5">
                                    <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                                    <label className="sr-only" htmlFor="nl-name">First name</label>
                                    <input
                                        id="nl-name"
                                        name="name"
                                        autoComplete="given-name"
                                        placeholder="First name"
                                        className="h-11 rounded-xl border border-border bg-background px-4 text-[0.95rem] outline-none transition-colors focus:border-primary"
                                    />
                                    <label className="sr-only" htmlFor="nl-email">Email address</label>
                                    <input
                                        id="nl-email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        placeholder="Email address"
                                        className="h-11 rounded-xl border border-border bg-background px-4 text-[0.95rem] outline-none transition-colors focus:border-primary"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="btn-shine mt-1 h-11 rounded-full bg-primary font-display text-[0.98rem] font-semibold text-white shadow-gold transition-[background-color,box-shadow] hover:bg-primary-hover hover:shadow-gold-lg disabled:opacity-70"
                                    >
                                        {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
                                    </button>
                                    {status === 'error' && (
                                        <p role="alert" className="text-[0.85rem] text-red-700">
                                            That did not go through. Please try again.
                                        </p>
                                    )}
                                    <p className="text-center text-[0.78rem] text-muted-foreground">
                                        Unsubscribe any time.{' '}
                                        <Link href="/privacy" className="underline underline-offset-2 hover:text-ink">
                                            Privacy
                                        </Link>
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    )
}
