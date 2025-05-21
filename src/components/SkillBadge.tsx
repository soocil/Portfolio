"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  index: number
}

export default function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
    >
      {name}
    </motion.span>
  )
}
