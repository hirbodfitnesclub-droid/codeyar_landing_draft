import type React from "react"
import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/providers/lenis-provider"
import { cn } from "@/lib/utils"
import "./globals.css"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
  display: "swap",
})

export const metadata: Metadata = {
  title: "دکمه‌های متالیک مایع | کامپوننت‌های پیشرفته UI",
  description:
    "مجموعه‌ای از دکمه‌های پرمیوم با حاشیه‌های متالیک متحرک، قدرت گرفته از Paper Shaders.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className={cn("dark", vazirmatn.variable)}>
      <head />
      <body className="font-sans antialiased bg-zinc-950 text-zinc-100">
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
