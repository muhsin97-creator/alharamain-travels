'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides, partners } from '@/lib/data'

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    }, [])

    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [isAutoPlaying, nextSlide])

    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="relative bg-[#2D2D2D]">
                    {/* Decorative elements */}
                    <div className="absolute top-1/4 left-8 flex flex-col gap-2 opacity-40 z-10">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-primary rotate-45" />
                        ))}
                    </div>
                    <div className="absolute bottom-1/4 right-8 flex flex-col gap-2 opacity-40 z-10">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary"
                            />
                        ))}
                    </div>
                    <div className="absolute top-1/3 right-1/4 w-20 h-[1px] bg-primary opacity-40" />
                    <div className="absolute bottom-1/3 left-1/4 w-20 h-[1px] bg-primary opacity-40" />

                    <div className="pb-24 pt-32 md:pb-32 lg:pb-40 lg:pt-44">
                        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:w-1/2 lg:text-left">
                                {/* Logo Mark */}
                                <div className="mb-6 flex justify-center lg:justify-start">
                                    <Image
                                        src="/logo-mark.png"
                                        alt="Al-Haramain"
                                        width={80}
                                        height={80}
                                        className="animate-float"
                                    />
                                </div>

                                {/* Slide Content */}
                                <div className="relative min-h-[480px] sm:min-h-[440px] md:min-h-[400px] lg:min-h-[380px]">
                                    {heroSlides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                                index === currentSlide
                                                    ? 'opacity-100'
                                                    : 'opacity-0 pointer-events-none'
                                            }`}>
                                            {/* Subtitle */}
                                            <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                                                {slide.subtitle}
                                            </span>

                                            <h1 className="text-balance text-4xl font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                                                {slide.title}
                                            </h1>
                                            <p className="mt-6 max-w-xl text-pretty text-base text-white/70 md:text-lg leading-relaxed">
                                                {slide.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA and Navigation */}
                                <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row lg:items-start lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 px-8 text-base font-semibold">
                                        <Link href="#umrah">
                                            <span className="text-nowrap">Book your trip</span>
                                        </Link>
                                    </Button>

                                    {/* Slide Navigation */}
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => {
                                                setIsAutoPlaying(false)
                                                prevSlide()
                                            }}
                                            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                                            aria-label="Previous slide">
                                            <ChevronLeft className="h-5 w-5" />
                                        </button>

                                        <div className="flex gap-2">
                                            {heroSlides.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        setIsAutoPlaying(false)
                                                        setCurrentSlide(index)
                                                    }}
                                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                                        index === currentSlide
                                                            ? 'bg-primary w-8'
                                                            : 'bg-white/30 w-2.5 hover:bg-white/50'
                                                    }`}
                                                    aria-label={`Go to slide ${index + 1}`}
                                                />
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => {
                                                setIsAutoPlaying(false)
                                                nextSlide()
                                            }}
                                            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                                            aria-label="Next slide">
                                            <ChevronRight className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right side image/decoration */}
                            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20">
                            <Image
                                        src="/logo-mark.png"
                                        alt=""
                                        width={500}
                                        height={500}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="bg-background py-12 md:py-16">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-center md:text-end text-sm font-medium text-muted-foreground">
                                    Our Partners
                                </p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider speedOnHover={20} speed={40} gap={80}>
                                    {partners.map((partner, index) => (
                                        <div key={index} className="flex items-center justify-center px-4">
                                            <span className="text-lg font-semibold text-muted-foreground/60 whitespace-nowrap">
                                                {partner.name}
                                            </span>
                                    </div>
                                    ))}
                                </InfiniteSlider>

                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
