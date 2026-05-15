"use client"

import { motion, useTransform, type MotionValue, useSpring } from "motion/react"
import { type ReactNode } from "react"

interface GlassTerminalProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  children?: ReactNode
}

export function GlassTerminal({ mouseX, mouseY, children }: GlassTerminalProps) {
  // Tilt effect calculations:
  // rotateY (yaw) depends on mouseX. When mouse is at 0 (left), we rotate -10deg. When at center, 0deg.
  // rotateX (pitch) depends on mouseY. When mouse is at 0 (top), we rotate 10deg.
  const rotateY = useTransform(mouseX, [0, 2000], [-8, 8])
  const rotateX = useTransform(mouseY, [0, 1000], [8, -8])

  // Apply smoothing spring to prevent jitter and make motion feel "weighted"
  const springX = useSpring(rotateX, { stiffness: 60, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 60, damping: 20 })

  return (
    <motion.div
      id="sentient-terminal-core"
      initial={{ scale: 0.8, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay: 0.2 
      }}
      style={{ 
        rotateX: springX, 
        rotateY: springY,
        transformStyle: "preserve-3d" 
      }}
      className="w-full max-w-4xl aspect-video md:aspect-[16/9] backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] relative flex flex-col overflow-hidden"
    >
      {/* Decorative Terminal Header */}
      <div 
        id="terminal-header"
        className="h-10 border-b border-white/5 flex items-center justify-between px-4"
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="text-[10px] font-mono text-white/20 tracking-[0.2em] uppercase">
          Sentient Terminal v1.0.4
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Internal Content Area */}
      <div 
        id="terminal-body"
        className="flex-1 relative flex flex-col items-center justify-center p-8 md:p-12"
      >
        {/* Subtle inner glow/gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent pointer-events-none" />
        
        {children}
      </div>

      {/* Optical Reflection Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05]" />
    </motion.div>
  )
}
