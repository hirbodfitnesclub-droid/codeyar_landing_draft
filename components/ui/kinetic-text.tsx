"use client"

import { motion } from "motion/react"

interface KineticTextProps {
  text: string
  className?: string
  delay?: number
}

export function KineticText({ text, className, delay = 0 }: KineticTextProps) {
  // We split by space to maintain word bounds for Farsi readability
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Stagger each word
        delayChildren: delay,
      },
    },
  }

  const wordVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Stagger each character within the word
      },
    },
  }

  const charVariant = {
    hidden: { 
      opacity: 0, 
      filter: "blur(12px)", 
      scale: 1.2,
      y: 5 
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, wIdx) => (
        <motion.span 
          key={wIdx} 
          variants={wordVariant}
          className="inline-block whitespace-nowrap ml-3 last:ml-0"
        >
          {Array.from(word).map((char, cIdx) => (
            <motion.span
              key={cIdx}
              variants={charVariant}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  )
}
