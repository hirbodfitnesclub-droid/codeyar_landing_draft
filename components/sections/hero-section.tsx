"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useScroll, useTransform } from "motion/react"
import { PerspectiveGrid } from "@/components/ui/perspective-grid"
import { GlassTerminal } from "@/components/ui/glass-terminal"
import { KineticText } from "@/components/ui/kinetic-text"
import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"
import Link from "next/link"

export function HeroSection() {
  // Event tracking values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Scroll triggering for the "Zoom-through" effect
  const { scrollY } = useScroll()
  
  // Transforms for the perspective zoom flight
  const scale = useTransform(scrollY, [0, 700], [1, 15])
  const opacity = useTransform(scrollY, [0, 400, 600], [1, 1, 0])
  const blur = useTransform(scrollY, [0, 500], [0, 10])
  const gridOpacity = useTransform(scrollY, [0, 600], [0.25, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div 
      id="hero-scroll-scene" 
      className="h-[250vh] relative bg-black"
    >
      <section 
        id="hero-root"
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {/* Background Layer: Void Grid with Parallax and Scroll Fade */}
        <motion.div style={{ opacity: gridOpacity }} className="absolute inset-0">
          <PerspectiveGrid mouseX={mouseX} mouseY={mouseY} />
        </motion.div>
        
        {/* Main Content: Terminal & Typography with Scroll Zoom */}
        <motion.div 
          id="hero-content-anchor"
          style={{ 
            scale, 
            opacity,
            filter: `blur(${blur}px)`,
          }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center transform-gpu will-change-transform"
        >
          <GlassTerminal mouseX={mouseX} mouseY={mouseY}>
            <div className="flex flex-col items-center max-w-2xl">
              {/* Main Animated Title */}
              <KineticText 
                text="کدیار؛ جایی که هوش مصنوعی پروژه‌ات را می‌فهمد."
                className="text-3xl md:text-5xl font-bold font-display text-white leading-tight mb-6"
                delay={0.8}
              />

              {/* Fading Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 1 }}
                className="text-zinc-400 text-lg md:text-xl mb-12 font-sans max-w-xl text-center"
              >
                محیط توسعه‌ای که تمام فایل‌ها و کانتکست پروژه را در حافظه‌ی یکپارچه خود نگه می‌دارد تا توهم مدل‌های زبانی به حداقل برسد.
              </motion.p>

              {/* Call to Actions */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <Link href="#pricing">
                  <LiquidCtaButton>شروع کدنویسی رایگان</LiquidCtaButton>
                </Link>
                <Link 
                  href="#features"
                  className="text-sm font-medium text-white/40 hover:text-white transition-colors tracking-wide"
                >
                  مشاهده ویژگی‌ها
                </Link>
              </motion.div>
            </div>
          </GlassTerminal>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
          <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        </motion.div>
      </section>
    </div>
  )
}
