'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { CheckCircle2, Building2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { stats } from '@/lib/data'

const trust = [
    { Icon: CheckCircle2, label: `${stats[0].number} pilgrims guided` },
    { Icon: Building2, label: 'Hotels steps from the Haram' },
    { Icon: Star, label: 'Guided by experienced Shaykhs' },
]

const ease = [0.16, 1, 0.3, 1] as const

// Full-bleed photo hero mirroring the UK landing page, with a staggered entrance.
export function Hero() {
    const reduce = useReducedMotion()
    const item = {
        hidden: reduce ? {} : { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-charcoal text-white">
            <motion.div
                className="absolute inset-0 -z-10"
                initial={reduce ? false : { scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease }}>
                <Image
                    src="/gallery/kaaba.jpg"
                    alt="The Holy Kaaba in Masjid al-Haram, Makkah"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="scrim-hero absolute inset-0" />
            </motion.div>

            <motion.div
                className="container-x max-w-none"
                initial="hidden"
                animate="show"
                transition={{ staggerChildren: 0.09, delayChildren: 0.15 }}>
                <div className="max-w-[720px] pb-24 pt-40 md:pb-28 md:pt-44">
                    <motion.p variants={item} transition={{ duration: 0.7, ease }} className="eyebrow text-primary">
                        Umrah, from Australia
                    </motion.p>
                    <motion.h1
                        variants={item}
                        transition={{ duration: 0.7, ease }}
                        className="mb-5 mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.08] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.25)]">
                        The journey of a lifetime,{' '}
                        <span className="text-primary">handled with care.</span>
                    </motion.h1>
                    <motion.p
                        variants={item}
                        transition={{ duration: 0.7, ease }}
                        className="mb-8 max-w-[600px] text-[clamp(1.05rem,1.6vw,1.28rem)] leading-relaxed text-white/95">
                        For so many of us, the Kaaba lives in our du&rsquo;a long before it lives in our eyes.
                        We look after the flights, visas, hotels and guidance on the ground, so your heart
                        is free to do what it came to do.
                    </motion.p>
                    <motion.div variants={item} transition={{ duration: 0.7, ease }} className="flex flex-wrap gap-3.5">
                        <Button asChild size="lg">
                            <Link href="/services/umrah">View Umrah trips</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline-light">
                            <a href="#enquire">Enquire now</a>
                        </Button>
                    </motion.div>
                    <motion.ul
                        variants={item}
                        transition={{ duration: 0.7, ease }}
                        className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
                        {trust.map(({ Icon, label }) => (
                            <li key={label} className="flex items-center gap-2.5 text-[0.92rem] font-medium text-white/90">
                                <Icon className="size-[22px] text-primary" />
                                {label}
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </motion.div>
        </section>
    )
}
