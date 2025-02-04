import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/effects/move-mouse-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joshua Edwin Rajan - Full Stack Developer & Software Engineer",
  description: "Portfolio of Joshua Edwin Rajan, showcasing skills in Next.js, Python, Supabase, SQL, Java, and C.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}

