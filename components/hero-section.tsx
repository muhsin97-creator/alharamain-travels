'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ChevronRight, ChevronDown, Plane, MapPin, Users, Calendar } from 'lucide-react'
import { heroSlides, partners, stats } from '@/lib/data'

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, [])

    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(nextSlide, 6000)
        return () => clearInterval(interval)
    }, [isAutoPlaying, nextSlide])

    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative min-h-screen bg-[#1a1a1a] flex items-center">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=1920&q=80"
                            alt="Kaaba"
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-[#1a1a1a]/50" />
                    </div>

                    {/* Geometric Decorations */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        {/* Gold accent line - top */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent" />
                        
                        {/* Diagonal lines */}
                        <div className="absolute top-20 right-0 w-96 h-px bg-gradient-to-l from-primary/40 to-transparent transform rotate-[-30deg] origin-right" />
                        <div className="absolute top-40 right-0 w-64 h-px bg-gradient-to-l from-primary/20 to-transparent transform rotate-[-30deg] origin-right" />
                        
                        {/* Corner accent */}
                        <div className="absolute bottom-0 left-0 w-32 h-32">
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
                            <div className="absolute bottom-0 left-0 w-1 h-full bg-primary" />
                        </div>
                        
                        {/* Floating geometric shapes */}
                        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/10 rotate-45 animate-pulse" style={{ animationDuration: '4s' }} />
                        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 border border-primary/5 rotate-12" />
                        
                        {/* Dot grid pattern */}
                        <div className="absolute top-1/2 right-8 grid grid-cols-3 gap-4 opacity-30">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 w-full pt-32 pb-20">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Content */}
                                <div>
                                    {/* Animated Badge */}
                                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
                                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                        <span className="text-primary text-sm font-medium tracking-wide uppercase">
                                            {heroSlides[currentSlide]?.subtitle || "Umrah 2026"}
                                        </span>
                                    </div>

                                    {/* Title with slide transition */}
                                    <div className="relative min-h-[200px] md:min-h-[240px] mb-8">
                                        {heroSlides.map((slide, index) => (
                                            <div
                                                key={index}
                                                className={`absolute inset-0 transition-all duration-700 ${
                                                    index === currentSlide
                                                        ? 'opacity-100 translate-y-0'
                                                        : 'opacity-0 translate-y-8 pointer-events-none'
                                                }`}>
                                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                                                    {slide.title.split(' ').map((word, i) => (
                                                        <span key={i} className={i === slide.title.split(' ').length - 1 ? "block text-gradient" : ""}>
                                                            {word}{' '}
                                                        </span>
                                                    ))}
                                                </h1>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <p className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                                        {heroSlides[currentSlide]?.description.slice(0, 150)}...
                                    </p>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold group">
                                            <Link href={heroSlides[currentSlide]?.link || "/services/umrah"}>
                                                Book This Trip
                                                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="border-white/20 text-black hover:bg-white/10 px-8 py-6 text-base font-semibold">
                                            <Link href="/services/umrah">
                                                View All Trips
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Slide Indicators */}
                                    <div className="flex items-center gap-3">
                                        {heroSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    setIsAutoPlaying(false)
                                                    setCurrentSlide(index)
                                                }}
                                                className={`h-1 rounded-full transition-all duration-500 ${
                                                    index === currentSlide
                                                        ? 'bg-primary w-12'
                                                        : 'bg-white/20 w-6 hover:bg-white/40'
                                                }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                        <span className="text-white/40 text-sm ml-4">
                                            {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Side - Stats Card */}
                                <div className="hidden lg:block">
                                    <div className="relative">
                                        {/* Decorative frame */}
                                        <div className="absolute -inset-4 border border-primary/20 -rotate-3" />
                                        <div className="absolute -inset-8 border border-primary/10 rotate-2" />
                                        
                                        {/* Stats Card */}
                                        <div className="relative bg-[#2D2D2D]/80 backdrop-blur-xl p-8 border border-white/10">
                                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary" />
                                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary" />
                                            
                                            <h3 className="text-white text-xl font-semibold mb-6">Why Choose Us</h3>
                                            
                                            <div className="grid grid-cols-2 gap-6">
                                                {stats.map((stat, i) => (
                                                    <div key={i} className="text-center p-4 bg-white/5 rounded-lg">
                                                        <div className="text-3xl font-bold text-gradient mb-1">{stat.number}</div>
                                                        <div className="text-white/50 text-sm">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-white/10">
                                                <div className="flex items-center gap-4 text-white/60 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Plane className="h-4 w-4 text-primary" />
                                                        <span>Premium Flights</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="h-4 w-4 text-primary" />
                                                        <span>5-Star Hotels</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <ChevronDown className="h-5 w-5" />
                    </div> */}

                    {/* Bottom Gradient Transition */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
                </section>

                {/* Partners Section - Updated to flow better */}
                <section className="bg-white py-12 md:py-16 relative">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary" />
                    
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:border-border md:pr-6">
                                <p className="text-center md:text-end text-sm font-medium text-muted-foreground">
                                    Our Partners
                                </p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider speedOnHover={20} speed={40} gap={60}>
                                    {partners.map((partner, index) => (
                                        <div key={index} className="flex items-center justify-center px-4">
                                            {partner.logo ? (
                                                <Image
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    width={250}
                                                    height={110}
                                                    className="h-22 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                                                />
                                            ) : (
                                                <span className="text-lg font-semibold text-muted-foreground/60 whitespace-nowrap">
                                                    {partner.name}
                                                </span>
                                            )}
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
