"use client"

import type React from "react"

import { motion } from "framer-motion"
import { IoLogoJavascript } from "react-icons/io"
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiTailwindcss,
  SiShadcnui,
  SiHtml5,
  SiCss3,
  SiTauri,
  SiAndroidstudio,
  SiMysql,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiSketch,
} from "react-icons/si"
import { FaJava } from "react-icons/fa6"
import { LuFigma } from "react-icons/lu"

interface AboutSectionProps {
  skillsRef: React.RefObject<HTMLDivElement>
}

export default function AboutSection({ skillsRef }: AboutSectionProps) {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <SiHtml5 size={20} className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 size={20} className="text-blue-600" /> },
        { name: "JavaScript", icon: <IoLogoJavascript size={20} className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript size={20} className="text-blue-500" /> },
        { name: "React", icon: <SiReact size={20} className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs size={20} className="text-black dark:text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} className="text-sky-400" /> },
        { name: "shadcn/ui", icon: <SiShadcnui size={20} className="text-violet-500" /> },
      ],
      color: "zinc",
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={20} className="text-green-600" /> },
        { name: "ExpressJs", icon: <SiExpress size={20} className="text-gray-700 dark:text-gray-200" /> },
        { name: "MongoDB", icon: <SiMongodb size={20} className="text-green-700" /> },
        { name: "SQLite", icon: <SiMysql size={20} className="text-blue-500" /> },
        { name: "Java", icon: <FaJava size={20} className="text-red-500" /> },
      ],
      color: "zinc",
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Git", icon: <SiGit size={20} className="text-orange-200" /> },
        { name: "Tauri", icon: <SiTauri size={20} className="text-orange-400" /> },
        { name: "Android Studio", icon: <SiAndroidstudio size={20} className="text-green-500" /> },
        { name: "Figma", icon: <LuFigma size={20} className="text-pink-500" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop size={20} className="text-blue-400" /> },
        { name: "Illustrator", icon: <SiAdobeillustrator size={20} className="text-orange-600" /> },
        { name: "Sketch", icon: <SiSketch size={20} className="text-yellow-500" /> },
      ],
      color: "zinc",
    },
  ]

  // Calculate dates
  const currentYear = new Date().getFullYear()
  const webDevStartYear = currentYear - 3
  const graphicsStartYear = currentYear - 4
  const graphicsEndYear = currentYear - 3
  const gameDevYear = currentYear - 4

  const journeyItems = [
    {
      title: "Web Development",
      description: "Doing passionately web development, building modern applications with React, Next.js, and Node.js",
      period: `${webDevStartYear} - Present`,
      
      duration: "3 years",
      color: "zinc",
    },
    {
      title: "Graphics Designer",
      description:
        "Worked as a freelance graphics designer, creating visual identities and digital designs for clients. Good with tools like Photoshop, Illustrator, and Figma",
      period: `${graphicsStartYear} - ${graphicsEndYear}`,
      duration: "1 years",
      color: "zinc",
    },
    {
      title: "Game Development",
      description: "Explored game development with Unity and C#, created small indie games and interactive experiences",
      period: `${gameDevYear - 2} - ${gameDevYear}`,
      duration: "1 year",
      color: "zinc",
    },
  ]

  return (
    <section className=" py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 font-raleway text-shadow">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-center font-montserrat">My Journey</h3>

            <div className="space-y-6 w-full max-w-md">
              {journeyItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline line */}
                  {index < journeyItems.length - 1 && (
                    <div className="absolute  left-6 top-[40px] w-0.5 h-16 bg-zinc-300 dark:bg-zinc-600"></div>
                  )}
              

                  <div className="flex items-start gap-4">
                    {/* Timeline dot */}
                    <div
                      className={`flex-shrink-0 w-3 h-3 rounded-full mt-2 ring-4 ring-zinc-200 dark:ring-zinc-700 ${
                      index === 0 ? "bg-green-500" : "bg-zinc-500"
                      }`}
                    ></div>

                    {/* Content card */}
                    <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 font-montserrat">{item.title}</h4>
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded-full">
                          {item.duration}
                        </span>
                      </div>

                      <p className="text-justify text-sm text-zinc-600 dark:text-zinc-300 mb-2 font-poppins leading-relaxed">
                        {item.description}
                      </p>

                      <div className="text-xs text-zinc-500 dark:text-zinc-400 font-inter">{item.period}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            ref={skillsRef}
            className="flex flex-col items-center"
          >
            
            <h3 className="mt-4 text-2xl font-bold mb-8 text-center font-montserrat">My Skills</h3>

            <div className="space-y-6 w-full max-w-md">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline line */}
                  {categoryIndex < skillCategories.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-zinc-300 dark:bg-zinc-600"></div>
                  )}

                  <div className="flex items-start gap-4">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-3 h-3 bg-zinc-500 rounded-full mt-2 ring-4 ring-zinc-200 dark:ring-zinc-700"></div>

                    {/* Content card */}
                    <div className="flex-1 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4 border border-zinc-200 dark:border-zinc-700 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 font-montserrat">
                          {category.title}
                        </h4>
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded-full">
                          {category.skills.length} skills
                        </span>
                      </div>

                      {/* Skills grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-700/50 text-zinc-700 dark:text-zinc-300 text-xs font-medium hover:bg-zinc-200 dark:hover:bg-zinc-600/50 transition-colors"
                          >
                            <span className="flex-shrink-0">{skill.icon}</span>
                            <span className="truncate font-poppins">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
