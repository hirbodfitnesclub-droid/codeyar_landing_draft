'use client'

import { motion } from 'framer-motion'
import { Check, Clock } from 'lucide-react'

type TaskStatus = 'done' | 'in-progress' | 'pending'

type TaskItem = {
  id: number
  label: string
  status: TaskStatus
}

const tasks: TaskItem[] = [
  { id: 1, label: 'UI Design', status: 'done' },
  { id: 2, label: 'Frontend Implementation', status: 'in-progress' },
  { id: 3, label: 'Backend Implementation', status: 'pending' },
  { id: 4, label: 'Documentation', status: 'pending' },
]

export function TaskProgressCard() {
  return (
    <div dir="ltr" className="backdrop-blur-xl bg-zinc-950/80 border border-zinc-800 rounded-xl p-5 shadow-[0_0_40px_rgba(139,92,246,0.15)] flex flex-col gap-3 text-left">
      {tasks.map((task, index) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.12 }}
          className={`flex flex-row items-center justify-between p-3 rounded-lg ${
            task.status === 'done'
              ? 'bg-zinc-900/40 border border-zinc-800/50 border-l-2 border-l-green-500'
              : task.status === 'in-progress'
                ? 'bg-violet-500/10 border border-violet-500/30 shadow-[inset_0_0_20px_rgba(139,92,246,0.12)]'
                : 'bg-zinc-900/30 border border-zinc-800/50'
          }`}
        >
          <div className="flex flex-row items-center gap-3">
            {task.status === 'done' && (
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-green-500">
                <Check className="w-4 h-4" />
              </div>
            )}
            {task.status === 'in-progress' && (
              <div className="flex items-center justify-center w-6 h-6">
                <div className="w-5 h-5 rounded-full border-2 border-violet-400 border-t-transparent animate-spin" />
              </div>
            )}
            {task.status === 'pending' && (
              <div className="flex items-center justify-center w-6 h-6 text-zinc-600">
                <Clock className="w-4 h-4" />
              </div>
            )}

            <span
              className={`text-sm ${
                task.status === 'done'
                  ? 'line-through opacity-50 text-zinc-300'
                  : task.status === 'in-progress'
                    ? 'text-zinc-100 font-medium'
                    : 'text-zinc-500'
              }`}
            >
              {task.label}
            </span>
          </div>

          <div
            className={`text-xs px-2.5 py-1 rounded-md flex flex-row items-center gap-2 whitespace-nowrap ${
              task.status === 'done'
                ? 'bg-green-500/10 text-green-400'
                : task.status === 'in-progress'
                  ? 'bg-violet-500/20 text-violet-300'
                  : 'bg-zinc-800 text-zinc-500'
            }`}
          >
            {task.status === 'in-progress' && (
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            )}
            {task.status === 'done'
              ? 'Done'
              : task.status === 'in-progress'
                ? 'In progress'
                : 'Pending'}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
