import { Montserrat, Poppins, Raleway, Inter } from "next/font/google"
import localFont from "next/font/local"

// Main heading font - Montserrat
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

// Body text font - Poppins
export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

// Alternative heading font - Raleway
export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
})

// UI font - Inter
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Custom font for special elements
export const cascadia = localFont({
  src: [
    {
      path: "./fonts/CascadiaCode.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cascadia",
})
