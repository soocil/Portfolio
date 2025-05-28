"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Moon, Sun, SquareChevronRight, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"



interface NavBarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void
  aboutRef: React.RefObject<HTMLDivElement>
  projectsRef: React.RefObject<HTMLDivElement>
  skillsRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
}

export default function NavBar({ scrollToSection, aboutRef, projectsRef, skillsRef, contactRef }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: "About", ref: aboutRef },
    { name: "Skills", ref: skillsRef },
    { name: "Projects", ref: projectsRef },
    { name: "Contact", ref: contactRef },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b  backdrop-blur-lg ">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="/" className="flex text-xl font-bold">
              <SquareChevronRight /><span className="text-primary">.</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:cursor-pointer text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
          

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/sushil-regmi-441965209/"
              className="text-muted-foreground m-2 hover:text-foreground transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/sooocil"
              className="text-muted-foreground m-2 hover:text-foreground transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
            <Button
              variant="ghost"
              className="md:inline-flex hover:cursor-pointer m-2"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "Dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.ref)
                  toggleMenu()
                }}
                className="block py-2 text-sm font-medium hover:text-primary w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
