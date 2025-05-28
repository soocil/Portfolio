
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { montserrat, poppins, raleway, inter as interFont, cascadia } from "./font"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Soocil",
  description: "Me ma ",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning
    className={`${montserrat.variable} ${poppins.variable} ${raleway.variable} ${interFont.variable} ${cascadia.variable}`}>
  
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
