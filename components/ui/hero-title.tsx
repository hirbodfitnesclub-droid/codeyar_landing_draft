"use client"

import React from "react"
import { motion } from "framer-motion"

interface HeroTitleProps {
  text: string
  className?: string
}

export function HeroTitle({ text, className = "" }: HeroTitleProps) {
  return (
    <div className={`relative flex flex-col items-center lg:items-start select-none w-full max-w-full overflow-visible ${className}`}>
      <div className="relative isolate inline-flex max-w-full justify-center lg:justify-start">
        {/* Soft, premium ambient glow behind the text */}
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
          className="absolute inset-x-0 -top-4 -bottom-4 z-0 blur-[32px] opacity-40 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap font-extrabold text-center lg:text-right"
          style={{ fontSize: "clamp(15px, 4.2vw, 64px)" }}
          aria-hidden="true"
        >
          {text}
        </motion.span>
        
        {/* Main Text with liquid gradient animation */}
        <motion.h1
          className="relative z-10 inline-block whitespace-nowrap font-extrabold pb-2 lg:pb-3 max-w-full overflow-visible"
          style={{ 
            fontSize: "clamp(15px, 4.2vw, 64px)",
            letterSpacing: "-0.02em",
            // Modern premium gradient: subtle silvers/whites with a traveling purple/indigo highlight
            backgroundImage: "linear-gradient(to right, #ffffff 0%, #e2e8f0 30%, #c084fc 45%, #818cf8 55%, #e2e8f0 70%, #ffffff 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent"
          }}
          initial={{ opacity: 0, y: 15, backgroundPosition: "-100% center" }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            backgroundPosition: ["100% center", "-100% center"] 
          }}
          transition={{ 
            opacity: { duration: 0.7, ease: "easeOut", delay: 0.1 },
            y: { duration: 0.7, ease: "easeOut", delay: 0.1 },
            backgroundPosition: { 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }
          }}
        >
          {text}
        </motion.h1>
      </div>
    </div>
  )
}
