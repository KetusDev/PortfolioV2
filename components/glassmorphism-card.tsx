"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export default function GlassmorphismCard({ children, className, hover = true, delay = 0 }: GlassmorphismCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={
        hover
          ? {
              // scale: 1.02,
              y: -5,
              transition: { duration: 0.3 },
            }
          : undefined
      }
      className={cn(
        "backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl",
        "hover:bg-white/15 hover:border-white/30 transition-all duration-500",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
