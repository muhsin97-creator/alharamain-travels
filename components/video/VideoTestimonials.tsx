'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import type { VideoTestimonial } from '@/lib/data'

// Portrait video testimonials. Each card shows its poster and pull quote until tapped,
// then plays inline with sound and native controls. Starting one pauses the others.
export function VideoTestimonials({ videos }: { videos: VideoTestimonial[] }) {
    const [active, setActive] = useState<string | null>(null)
    const refs = useRef<Record<string, HTMLVideoElement | null>>({})

    const play = (id: string) => {
        Object.entries(refs.current).forEach(([key, el]) => {
            if (key !== id && el && !el.paused) el.pause()
        })
        setActive(id)
    }

    return (
        <div className="no-scrollbar -mx-6 mb-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
            {videos.map((v, i) => (
                <Reveal
                    key={v.id}
                    delay={i * 0.08}
                    className="w-[78vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none">
                    <figure className="lift group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-charcoal">
                        {active === v.id ? (
                            <video
                                ref={(el) => {
                                    refs.current[v.id] = el
                                }}
                                src={v.src}
                                poster={v.poster}
                                controls
                                autoPlay
                                playsInline
                                preload="auto"
                                onPlay={() => play(v.id)}
                                className="absolute inset-0 h-full w-full bg-charcoal object-cover"
                            />
                        ) : (
                            <button
                                type="button"
                                onClick={() => play(v.id)}
                                aria-label={`Play video testimonial from ${v.name} (${v.duration})`}
                                className="absolute inset-0 block h-full w-full text-left">
                                <Image
                                    src={v.poster}
                                    alt={`${v.name}, ${v.role}`}
                                    fill
                                    sizes="(max-width: 768px) 78vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                />
                                <span className="scrim-b absolute inset-0" />
                                <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                                    {v.duration}
                                </span>
                                <span className="absolute left-1/2 top-[42%] grid size-[68px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-white shadow-gold transition-transform duration-300 group-hover:scale-110">
                                    <Play className="ml-1 size-7 fill-current" />
                                </span>
                                <span className="absolute inset-x-0 bottom-0 block p-6 text-white">
                                    <span className="block font-display text-[1.08rem] font-semibold leading-snug">
                                        &ldquo;{v.quote}&rdquo;
                                    </span>
                                    <span className="mt-3 block font-display text-[0.95rem] font-semibold">
                                        {v.name}
                                        <span className="block font-sans text-[0.85rem] font-normal text-white/80">
                                            {v.role}
                                        </span>
                                    </span>
                                </span>
                            </button>
                        )}
                    </figure>
                </Reveal>
            ))}
        </div>
    )
}
