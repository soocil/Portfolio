"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full flex flex-col group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Button size="icon" variant="ghost" className="text-white rounded-full">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="text-white rounded-full">
              <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <CardContent className="flex-1 flex flex-col p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
