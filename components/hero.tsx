"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import ProfilePicture from "@/components/media/Profile (1).jpeg"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="relative w-40 h-40 mx-auto mb-8">
          <Image
            src={ProfilePicture}
            alt="Joshua Edwin Rajan"
            layout="fill" 
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          JOSHUA EDWIN RAJAN
        </h1>

        <div className="h-12 mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          <TypeAnimation
            sequence={["Full Stack Developer", 1000, "Software Engineer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-4"
      >
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="#projects" className="flex items-center">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <a href="#contact">Get in Touch</a>
        </Button>
      </motion.div>
    </section>
  )
}

