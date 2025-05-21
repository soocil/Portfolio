"use client"

import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  //year of creation 2024
  const year = 2024 

  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">© {year} Sushil Regmi</div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/sushil-regmi-441965209//"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/sooocil"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
