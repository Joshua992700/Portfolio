"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Profile from "@/components/media/Profile (1).jpeg"

export default function About() {
  return (
    <section id="about" className="container py-30 md:py-32 flex justify-center items-center">
      <div className="grid gap-12 lg:grid-cols-2 justify-center items-center pl-60">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-4 text-center lg:text-left"
        >
          <h1 className="text-4xl font-semibold text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-white">ABOUT ME</span>
          </h1>
          <br />
          <p className="text-muted-foreground sm:text-lg">
            I'm Joshua Edwin Rajan, a passionate Full Stack Developer and Software Engineer. With a strong foundation in
            both front-end and back-end technologies, I strive to create efficient, scalable, and user-friendly
            applications.
          </p>
          <p className="text-muted-foreground sm:text-lg">
            My experience spans across various technologies, including Next.js, Python, Supabase, SQL, Java, and C. I'm
            always eager to learn new technologies and tackle challenging projects.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary">
            <Image
              src={Profile}
              alt="Joshua Edwin Rajan"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 hover:scale-110"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
