import { AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CertificationsAchievements from "@/components/certifications-achievements"

export default function Home() {
  return (
    <AnimatePresence>
      <div className="relative min-h-screen bg-background">
        {/* Background gradients */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Projects />
          <TechStack />
          <About />
          <CertificationsAchievements />
          <Contact />
          <Footer />
        </div>
      </div>
    </AnimatePresence>
  )
}

