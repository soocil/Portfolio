"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  icon?: React.ReactNode
  index: number
}

export default function SkillBadge({ name, icon, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 px-3 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="text-sm 
      ">{name}</span>
    </motion.div>
  )
}
