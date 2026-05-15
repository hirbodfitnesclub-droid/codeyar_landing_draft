"use client"

import { motion, useTransform, type MotionValue } from "motion/react"

interface PerspectiveGridProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export function PerspectiveGrid({ mouseX, mouseY }: PerspectiveGridProps) {
  // Parallax movement - moves in opposite direction of mouse to create depth
  // We transform mouse position (assuming screen width ~2000px) to a small translation range
  const x = useTransform(mouseX, [0, 2000], [30, -30])
  const y = useTransform(mouseY, [0, 1000], [30, -30])

  return (
    <div 
      id="perspective-grid-container"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <motion.div 
        id="perspective-grid-mesh"
        style={{ x, y }}
        className="absolute inset-[-100px] opacity-25"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern 
              id="grid-pattern" 
              width="80" 
              height="80" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 80 0 L 0 0 0 80" 
                fill="none" 
                stroke="url(#neon-blue-purple)" 
                strokeWidth="0.5" 
              />
            </pattern>
            <linearGradient id="neon-blue-purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
              <stop offset="100%" stopColor="#a855f7" /> {/* purple-500 */}
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </motion.div>
      
      {/* Smooth radial vignetting to focus on center and blend with black background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_85%)]" />
    </div>
  )
}
