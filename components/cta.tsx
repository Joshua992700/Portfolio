"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Get in Touch</h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
        <div className="mt-8 grid w-full max-w-md gap-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" type="email" />
          <Textarea placeholder="Your Message" />
          <Button size="lg">Send Message</Button>
        </div>
        <div className="mt-8 flex flex-col items-center space-y-2">
          <p className="text-muted-foreground">Or reach me directly at:</p>
          <a href="mailto:joshua992700@gmail.com" className="text-primary hover:underline">
            joshua992700@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

