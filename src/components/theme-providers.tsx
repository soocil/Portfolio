// src/components/theme-provider.tsx
"use client"

import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

export function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  )
}
