"use client"

import React, { useState, useEffect } from "react"
import { FileCode, Folder, Database, Terminal, Eye, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { LiquidCtaButton } from "@/components/buttons/liquid-cta-button"
import { Button } from "@/components/ui/button"
import { TaskProgressCard } from "@/components/ui/task-progress-card"
import { HeroLoading } from "@/components/ui/hero-loading"
import { HeroTitle } from "@/components/ui/hero-title"

const fullText = "یه اپ تسک منیجر برام بساز. رابط کاربریش به شدت لوکس و Glassmorphism باشه، دارک مودِ خفن با سایه‌های نئونی بنفش داشته باشه و انیمیشن‌هاش دقیقا مناسب نسل زد باشه. دیتابیسش هم یکپارچه کن."

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [phase, setPhase] = useState<'idle' | 'typing' | 'contextLoaded' | 'splitting' | 'materialized' | 'resetting'>('idle')

  useEffect(() => {
    // Wait for fonts or just a smooth timeout
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setTimeout(() => setIsLoaded(true), 400)
      })
    } else {
      setTimeout(() => setIsLoaded(true), 600)
    }
  }, [])

  useEffect(() => {
    if (!isLoaded) return;
    
    if (phase === 'idle') {
      const t = setTimeout(() => setPhase('typing'), 800)
      return () => clearTimeout(t)
    }
    
    if (phase === 'typing') {
      let currentIndex = 0
      let skipTicks = 0
      setDisplayedText("")

      const interval = setInterval(() => {
        if (skipTicks > 0) {
          skipTicks--
          return
        }

        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.substring(0, currentIndex + 1))
          currentIndex++
          
          skipTicks = 2
          if (fullText[currentIndex - 1] === " ") skipTicks += 1
        } else {
          setPhase('contextLoaded')
          clearInterval(interval)
        }
      }, 15)

      return () => clearInterval(interval)
    }

    if (phase === 'contextLoaded') {
      const timer = setTimeout(() => setPhase('splitting'), 600)
      return () => clearTimeout(timer)
    }
    
    if (phase === 'splitting') {
      const timer = setTimeout(() => setPhase('materialized'), 800)
      return () => clearTimeout(timer)
    }

    if (phase === 'materialized') {
      const t = setTimeout(() => setPhase('resetting'), 4000)
      return () => clearTimeout(t)
    }
    
    if (phase === 'resetting') {
      const t = setTimeout(() => { 
        setDisplayedText(''); 
        setPhase('idle') 
      }, 600)
      return () => clearTimeout(t)
    }
  }, [phase, isLoaded])

  return (
    <AnimatePresence mode="wait">
      {!isLoaded ? (
        <HeroLoading key="loading" />
      ) : (
        <motion.section 
          key="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-950 min-h-screen relative flex flex-col lg:grid lg:grid-cols-[40%_60%] p-4 lg:p-0 pt-20 sm:pt-24 md:pt-28 lg:pt-0 pb-20 lg:pb-0 overflow-x-hidden min-w-0" 
          dir="rtl"
        >
          
          {/* The Void Backdrop */}
          <div className="hidden lg:block absolute top-0 bottom-0 right-[40%] w-px bg-transparent shadow-[0_0_80px_40px_rgba(139,92,246,0.15)] z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          </div>

          {/* Background ambient glow for mobile */}
          <div className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

          {/* Anchor (40% On Desktop) */}
      <div className="flex flex-col justify-center gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-6 lg:px-0 lg:pr-10 relative z-20 mb-10 sm:mb-14 lg:mb-0 items-center lg:items-start text-center lg:text-right min-w-0">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300"
        >
          <span className="flex h-2 w-2 rounded-full bg-purple-500"></span>
          نسخه آزمایشی کدیار منتشر شد
        </motion.div>
        
        {/* Headline */}
        <HeroTitle text="وایب کدینگ اینبار فرق میکنه!" className="mt-1 sm:mt-2" />
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl px-2 lg:px-0"
        >
          چند بار تا حالا سعی کردید پروژتون رو با هوش مصنوعی بسازید؟ یا در لوپ می‌افته یا بخاطر طولانی شدن کار، اطلاعات اصلی و اولیه را فراموش، و کد را خراب می‌کند. اما کد یار طوری ساخته شده که بسیار آسان و سریع پروژه شما را انجام می‌دهد، بدون اینکه در لوپ ارور ها بیفتد.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center lg:justify-start gap-4 mt-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <LiquidCtaButton onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              استارت خلق ایده 🚀
            </LiquidCtaButton>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Button variant="outline" className="gap-2 px-6 h-12 rounded-full border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-200" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              <Eye className="w-4 h-4" />
              مشاهده نمونه خروجی‌ها
            </Button>
          </motion.div>
        </div>
        
        {/* Social proof */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
            <div className="flex -space-x-3 -space-x-reverse">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-zinc-950 hover:-translate-y-1 transition object-cover z-[1]"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-zinc-950 hover:-translate-y-1 transition object-cover z-[2]"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-zinc-950 hover:-translate-y-1 transition object-cover z-[3]"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-zinc-950 hover:-translate-y-1 transition object-cover z-[4]"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-zinc-950 hover:-translate-y-1 transition object-cover z-[5]"
              />
            </div>
            <div className="h-px w-32 sm:h-8 sm:w-px bg-zinc-800" />
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FACC15"
                    stroke="#FACC15"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                ))}
                <span className="text-zinc-400 font-medium ms-1 text-sm">۵٫۰</span>
              </div>
              <p className="text-sm text-zinc-500">
                همراه با <span className="text-zinc-300 font-medium">جامعه‌ی پویای</span> وایب‌کدرهای ایرانی
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* The Reality Warp (60% On Desktop) */}
      <div className="flex flex-col items-center justify-start lg:justify-center relative z-10 w-full lg:h-full min-w-0 mt-8 sm:mt-12 lg:mt-0">
        {/* IDE Mockup */}
        <div className="w-[550px] min-[375px]:w-[600px] sm:w-[700px] md:w-[800px] lg:w-full lg:max-w-[97%] xl:max-w-[95%] 
                        scale-[0.55] min-[375px]:scale-[0.6] sm:scale-[0.75] md:scale-[0.85] lg:scale-[0.9] origin-top 
                        -mb-[260px] min-[375px]:-mb-[230px] sm:-mb-[145px] md:-mb-[85px] lg:mb-0
                        h-[580px] flex flex-col backdrop-blur-xl bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative z-10 mx-auto shrink-0">
        
        {/* Title Bar */}
        <div className="h-12 border-b border-zinc-800 bg-zinc-950/50 px-4 flex items-center relative">
          {/* Mac OS Window Controls - ltr dir to keep them red, yellow, green in correct order left-to-right */}
          <div className="flex items-center gap-2 absolute left-4" dir="ltr">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          
          {/* Title */}
          <div className="flex-1 text-center font-mono text-sm tracking-widest text-zinc-400">
            codeyar — vibe-coder.tsx
          </div>
        </div>

        {/* IDE Body */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Sidebar */}
          <div className="w-64 border-l border-zinc-800 bg-zinc-950/40 p-4 flex flex-col gap-1 overflow-y-auto hidden lg:flex">
            <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-3 px-2">Explorer</div>
            
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-md transition-colors cursor-default">
              <FileCode className="w-4 h-4 text-blue-400" />
              <span className="font-mono">app/page.tsx</span>
            </div>
            
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-md transition-colors cursor-default">
              <Folder className="w-4 h-4 text-zinc-400" />
              <span className="font-mono">components/ui/</span>
            </div>
            
            <div className="flex flex-col px-2 py-1.5 text-sm text-purple-200 bg-purple-500/10 border border-purple-500/20 rounded-md transition-colors cursor-default mt-1 relative">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-purple-400" />
                <span className="font-medium font-mono border-b border-dashed border-purple-500/30 pb-0.5 flex-1">lib/context_memory/</span>
              </div>
              {phase !== 'idle' && phase !== 'typing' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase === 'resetting' ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 mt-1 mb-1 justify-start w-full" 
                  dir="ltr"
                >
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1, boxShadow: ['0 0 4px #4ade80', '0 0 12px #4ade80', '0 0 4px #4ade80'] }}
                    transition={{ 
                      scale: { duration: 0.2 },
                      boxShadow: { repeat: Infinity, duration: 1.5 } 
                    }}
                    className="w-2 h-2 rounded-full bg-green-400"
                  />
                  <motion.span 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.3 }}
                    className="text-[10px] text-green-400 font-mono tracking-wider"
                  >
                    Context Loaded
                  </motion.span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Main Content Area / Split View */}
          <AnimatePresence mode="wait">
            {(phase === 'idle' || phase === 'typing' || phase === 'contextLoaded') ? (
              <motion.div
                key="prompt-panel"
                exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col items-center justify-center p-6 relative bg-zinc-900/20"
              >
                
                <div className="w-full max-w-2xl flex flex-col relative">
                  
                  {/* Status indicator */}
                  <div className="text-zinc-500 text-xs font-mono mb-3 flex items-center gap-2 px-1">
                    <Terminal className="w-4 h-4" />
                    <span>
                      {phase === 'idle' ? 'waiting_for_input...' : 
                       phase === 'typing' ? 'receiving_prompt...' : 
                       'context_loaded'}
                    </span>
                    {(phase === 'typing' || phase === 'idle') && (
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse ml-1"></span>
                    )}
                    {phase === 'contextLoaded' && (
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 ml-1"></span>
                    )}
                  </div>
                  
                  {/* Textarea Mockup */}
                  <div className="relative group">
                    {/* Glow ring */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-md transition-opacity duration-1000 ${phase === 'contextLoaded' ? 'opacity-100' : 'opacity-40'}`}></div>
                    
                    {/* Textarea container */}
                    <div className="relative bg-[#09090b] border border-zinc-800 rounded-xl p-6 min-h-[180px] flex flex-col shadow-inner">
                      <div className="text-zinc-200 text-lg md:text-xl leading-relaxed font-sans mt-2">
                        {displayedText}
                        {phase === 'typing' && (
                          <span className="inline-block w-2.5 h-5 bg-purple-500 mx-1 translate-y-1 animate-pulse"></span>
                        )}
                        {phase === 'idle' && (
                          <span className="inline-block w-2.5 h-5 bg-zinc-600 mx-1 translate-y-1 animate-pulse"></span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* IDE Pulse Effect */}
                  {phase === 'contextLoaded' && (
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border border-green-400/20 pointer-events-none"
                      style={{ x: "-50%", y: "-50%" }}
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 8, opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  )}

                </div>
              </motion.div>
            ) : (
              <motion.div
                key="split-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex overflow-hidden"
              >
                {/* Live Preview Panel (RTL: First child is Right) */}
                <div className="flex-1 border-l border-zinc-800 bg-zinc-900/10 relative flex items-center justify-center p-6 overflow-hidden">
                  <AnimatePresence>
                    {(phase === 'materialized' || phase === 'resetting') && (
                      <motion.div 
                        initial={{ scale: 0.5, opacity: 0, y: 30 }}
                        animate={{ 
                          scale: phase === 'resetting' ? 0.95 : 1, 
                          opacity: phase === 'resetting' ? 0 : 1, 
                          y: phase === 'resetting' ? 10 : 0 
                        }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        className="w-full max-w-sm"
                      >
                        <TaskProgressCard />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Code Stream Panel (RTL: Second child is Left) */}
                <div className="w-[45%] bg-zinc-950/90 p-4 pt-6 overflow-hidden relative" dir="ltr">
                  <motion.div
                    animate={{ opacity: phase === 'resetting' ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-zinc-950/90 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950/90 to-transparent z-10 pointer-events-none"></div>
                    <motion.div 
                      animate={{ y: [0, "-50%"] }} 
                      transition={{ repeat: Infinity, duration: 8, ease: 'linear', repeatType: 'loop' }}
                      className="font-mono text-[11px] md:text-xs text-zinc-500 flex flex-col gap-1.5 opacity-60"
                    >
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="whitespace-pre">
                          <span className="text-pink-500/80">import</span> <span className="text-blue-400/80">&#123; motion &#125;</span> <span className="text-pink-500/80">from</span> <span className="text-green-400/80">"framer-motion"</span>;<br/>
                          <span className="text-zinc-600">{"// Code Stream AI Generation"}</span><br/>
                          <span className="text-pink-500/80">export default function</span> <span className="text-yellow-200/80">Component</span>() &#123;<br/>
                          &nbsp;&nbsp;<span className="text-pink-500/80">return</span> (<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400/80">motion.div</span> <span className="text-blue-200/80">initial</span>=&#123;&#123; <span className="text-blue-200/80">opacity</span>: <span className="text-purple-400/80">0</span> &#125;&#125;&gt;<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400/80">TaskManager</span> /&gt;<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400/80">motion.div</span>&gt;<br/>
                          &nbsp;&nbsp;);<br/>
                          &#125;<br/><br/>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
        </div>
      </div>
    </motion.section>
    )}
  </AnimatePresence>
  )
}
