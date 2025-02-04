"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import MarkGen from "@/components/Thumbnails/ESEC_Mark_Gen.jpg"
import Torex from "@/components/Thumbnails/Turftown.webp"
import Zenzi from "@/components/Thumbnails/Zen.jpg"

const projects = [
  {
    title: "ESEC Mark Gen",
    description: "A Project that sends the students reports to the parents reducing the human work load",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "Python"],
    image: {MarkGen},
    url: "github.com/Joshua992700/ESEC_Mark_Gen",
  },
  {
    title: "Torex - Turf Booking"Java", "Spring Boot", "PostgreSQL""Java", "Spring Boot", "PostgreSQL"",
    description: "A Web Application that allows users to book turfs for sports events",
    techStack: ["Next JS","Python", "Supabase", "Tailwind CSS"],
    image: {Torex},
    url: "github.com/Joshua992700/Torex",
  },
  {
    title: "Zenzi Technologics Landing Page",
    description: "A Landing Page for Zenzi Technologics",
    techStack: ["Next JS","Supabase", "Tailwind CSS"],
    image: {Zenzi},
    url: "github.com/Joshua992700/zenzitechnologics",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container space-y-16 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[58rem] text-center"
      >
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Projects</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Here are some of the projects I've worked on. Hover over each card to see more details.
        </p>
      </motion.div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-secondary/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 group-hover:scale-110"
              />
              <CardHeader className="relative z-20">
                <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-md">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-20">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-30">
                <span className="text-white text-lg font-bold">View Project</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

