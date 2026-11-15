'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// Muted, looping trip reel behind the hero. The poster paints first (LCP); the right
// video for the viewport fades in once it can play. Skipped under reduced motion.
export function HeroVideo() {
    const [src, setSrc] = useState<string | null>(null)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        const mobile = window.matchMedia('(max-width: 767px)').matches
        setSrc(mobile ? '/videos/hero-mobile.mp4' : '/videos/hero-desktop.mp4')
    }, [])

    return (
        <>
            <Image
                src="/videos/hero-desktop-poster.jpg"
                alt="Moments from our Umrah trips in Makkah and Madinah"
                fill
                priority
                sizes="100vw"
                className="hidden object-cover md:block"
            />
            <Image
                src="/videos/hero-mobile-poster.jpg"
                alt="Moments from our Umrah trips in Makkah and Madinah"
                fill
                priority
                sizes="100vw"
                className="object-cover md:hidden"
            />
            {src && (
                <video
                    key={src}
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    tabIndex={-1}
                    onCanPlay={() => setReady(true)}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}
                />
            )}
        </>
    )
}
