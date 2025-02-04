"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Joshua Edwin Rajan</h2>
          <p className="text-sm text-muted-foreground">Full Stack Developer & Software Engineer</p>
        </div>
        <div className="flex flex-1 justify-end space-x-4">
          <Link
            href="https://github.com/Joshua992700"
            className="text-muted-foreground transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://in.linkedin.com/in/joshua-edwin-rajan-796283290"
            className="text-muted-foreground transition-colors hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:joshua992700@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Joshua Edwin Rajan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

