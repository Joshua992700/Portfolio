"use client"

import { Award, BadgeIcon as Certificate } from "lucide-react"
import { motion } from "framer-motion"

const certifications = [
  {
    name: "Introduction to Web Development",
    issuer: "Internzlearn",
    date: "2022",
    icon: Certificate,
  },
  {
    name: "Python - For Beginners",
    issuer: "Guvi",
    date: "2022",
    icon: Certificate,
  },
]

const achievements = [
  {
    title: "1st Place in Paper Presentation",
    description: "Won first place in the Paper Presentation hosted by Chennai Institute of Technology",
    year: "2022",
  },
]

export default function CertificationsAchievements() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[58rem] text-center"
      >
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          <span className="text-white">CERTIFICATIONS & ACHIEVEMENTS</span>
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">Recognitions and milestones in my professional journey</p>
      </motion.div>

      <div className="grid gap-16 md:grid-cols-2  pl-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">Certifications</h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg border border-primary/20 bg-secondary/50 backdrop-blur-sm"
              >
                <cert.icon className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6">Achievements</h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-4 rounded-lg border border-primary/20 bg-secondary/50 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">{achievement.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
                <p className="text-sm text-primary mt-2">{achievement.year}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

