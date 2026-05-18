'use client'

import { motion } from 'framer-motion'

export function HeroLoading() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950 overflow-hidden"
    >
      {/* Ambient background glow for loading */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative rounded-xl"
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(139,92,246,0.3)',
              '0 0 40px rgba(139,92,246,0.6)',
              '0 0 20px rgba(139,92,246,0.3)'
            ]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
            <span className="text-2xl font-bold text-white font-mono">{'</>'}</span>
          </div>
        </motion.div>

        <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </div>

        <motion.p
          className="text-zinc-500 text-sm font-medium tracking-wide pr-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          dir="rtl"
        >
          در حال آماده‌سازی...
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
