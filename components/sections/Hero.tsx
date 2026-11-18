import Link from 'next/link'
import type { CSSProperties } from 'react'
import { CheckCircle2, Building2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroVideo } from '@/components/video/HeroVideo'
import { HeroScrollFade } from '@/components/ui/motion-extras'
import { stats } from '@/lib/data'

const trust = [
    { Icon: CheckCircle2, label: `${stats[0].number} pilgrims guided` },
    { Icon: Building2, label: 'Hotels steps from the Haram' },
    { Icon: Star, label: 'Guided by experienced Shaykhs' },
]

// Stagger for the CSS entrance (see .hero-rise in globals.css). CSS, not JS, so the
// headline is never left invisible on a slow or throttled device.
const rise = (i: number): CSSProperties => ({ animationDelay: `${0.15 + i * 0.09}s` })

// Full-bleed hero mirroring the UK landing page, over a muted reel of our trips.
export function Hero() {
    return (
        <section className="relative isolate flex min-h-[100dvh] items-center overflow-hidden bg-charcoal text-white">
            <div className="hero-settle absolute inset-0 -z-10">
                <HeroVideo />
                <div className="scrim-hero absolute inset-0" />
                <div className="absolute inset-0 bg-[#1c1c1c]/45 md:bg-[#1c1c1c]/15" />
            </div>

            <HeroScrollFade className="container-x max-w-none">
                <div className="max-w-[720px] pb-24 pt-40 md:pb-28 md:pt-44">
                    <p className="hero-rise eyebrow text-primary" style={rise(0)}>
                        Umrah, from Australia
                    </p>
                    <h1
                        className="hero-rise mb-5 mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.08] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.35)]"
                        style={rise(1)}>
                        The journey of a lifetime,{' '}
                        <span className="text-primary">handled with care.</span>
                    </h1>
                    <p
                        className="hero-rise mb-8 max-w-[600px] text-[clamp(1.05rem,1.6vw,1.28rem)] leading-relaxed text-white/95 [text-shadow:0_1px_16px_rgba(0,0,0,0.4)]"
                        style={rise(2)}>
                        For so many of us, the Kaaba lives in our du&rsquo;a long before it lives in our eyes.
                        We look after the flights, visas, hotels and guidance on the ground, so your heart
                        is free to do what it came to do.
                    </p>
                    <div className="hero-rise flex flex-wrap gap-3.5" style={rise(3)}>
                        <Button asChild size="lg">
                            <Link href="/services/umrah">View Umrah trips</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline-light">
                            <a href="#enquire">Enquire now</a>
                        </Button>
                    </div>
                    <ul className="hero-rise mt-10 flex flex-wrap items-center gap-x-10 gap-y-5" style={rise(4)}>
                        {trust.map(({ Icon, label }) => (
                            <li key={label} className="flex items-center gap-2.5 text-[0.92rem] font-medium text-white/90">
                                <Icon className="size-[22px] text-primary" />
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            </HeroScrollFade>
        </section>
    )
}
