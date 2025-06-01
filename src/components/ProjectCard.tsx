"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  isPrivate: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
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
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <span
            className={`absolute bottom-0 left-4 text-xs px-2 py-0.5 rounded border ${
              project.isPrivate
                ? "bg-zinc-800 text-zinc-200 border-zinc-600"
                : "bg-zinc-200 text-zinc-800 border-zinc-300"
            }`}
          >
            {project.isPrivate ? "Private Repo" : "Public Repo"}
          </span>

          {/* Overlay with GitHub link */}
          <div className="absolute inset-0 bg-black/50  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4"
            >
              <ExternalLink
                size={50}
                className="text-white hover:bg-slate-800 p-4 rounded-full "
              />
              <Github
                size={50}
                className="text-white  p-4 hover:bg-slate-800 rounded-full  "
              />
            </a>
          </div>
        </div>

        {/* Card content */}
        <CardContent className="flex-1 flex flex-col p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-indigo-600/20 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
