"use client"

import { Code, Database, FileCode, Server, Terminal, Workflow } from "lucide-react"

const techStack = [
  {
    name: "Next.js",
    description: "React framework for building web applications",
    icon: Workflow,
  },
  {
    name: "Python",
    description: "Versatile programming language for various applications",
    icon: FileCode,
  },
  {
    name: "Supabase",
    description: "Open source Firebase alternative",
    icon: Database,
  },
  {
    name: "SQL",
    description: "Language for managing and querying relational databases",
    icon: Server,
  },
  {
    name: "Java",
    description: "Object-oriented programming language",
    icon: Code,
  },
  {
    name: "C",
    description: "Low-level programming language",
    icon: Terminal,
  },
]

export default function TechStack() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Tech Stack</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">Here are some of the technologies I work with:</p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech) => (
          <div key={tech.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <tech.icon className="h-8 w-8" />
              <h3 className="font-bold">{tech.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

