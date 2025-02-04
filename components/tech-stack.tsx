"use client"

import { Code, Database, FileCode, Server, Terminal, Workflow } from "lucide-react"
import { motion } from "framer-motion"

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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[58rem] text-center"
      >
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Tech Stack
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">Here are some of the technologies I work with:</p>
      </motion.div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-secondary/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <tech.icon className="h-8 w-8 text-primary" />
                <h3 className="font-bold text-primary">{tech.name}</h3>
              </div>
              <p className="mt-2 text-muted-foreground">{tech.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

