"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Animated text component
const AnimatedText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/">
            <motion.div className="text-lg font-medium tracking-wide" whileHover={{ opacity: 0.7 }}>
              shootsync.
            </motion.div>
          </Link>
          <div className="hidden md:flex space-x-12 text-sm">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              About
            </Link>
            <Link href="/services" className="hover:opacity-70 transition-opacity">
              Services
            </Link>
            <Link href="/portfolio" className="hover:opacity-70 transition-opacity">
              Work
            </Link>
            <Link href="/contact" className="opacity-100">
              Contact
            </Link>
          </div>
          <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-medium">
            Get Started
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedText>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-8 tracking-tight">
              LET'S CREATE
              <br />
              <span className="font-normal">TOGETHER</span>
            </h1>
          </AnimatedText>
          <AnimatedText>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your brand? Get in touch and let's discuss your next big project.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedText>
              <div className="p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-light mb-8 tracking-wide">SEND US A MESSAGE</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="First Name"
                        className="bg-transparent border-white/20 focus:border-white/40 rounded-xl"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Last Name"
                        className="bg-transparent border-white/20 focus:border-white/40 rounded-xl"
                      />
                    </div>
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent border-white/20 focus:border-white/40 rounded-xl"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-transparent border-white/20 focus:border-white/40 rounded-xl"
                  />
                  <select className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl focus:border-white/40 focus:outline-none text-white">
                    <option className="bg-black">Select a service</option>
                    <option className="bg-black">Commercial Shoots</option>
                    <option className="bg-black">Performance Marketing</option>
                    <option className="bg-black">UGC Content</option>
                    <option className="bg-black">Brand Strategy</option>
                    <option className="bg-black">Web Development</option>
                    <option className="bg-black">Other</option>
                  </select>
                  <select className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl focus:border-white/40 focus:outline-none text-white">
                    <option className="bg-black">Budget Range</option>
                    <option className="bg-black">$5,000 - $10,000</option>
                    <option className="bg-black">$10,000 - $25,000</option>
                    <option className="bg-black">$25,000 - $50,000</option>
                    <option className="bg-black">$50,000+</option>
                  </select>
                  <Textarea
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="bg-transparent border-white/20 focus:border-white/40 rounded-xl min-h-32"
                  />
                  <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full py-3 text-sm font-medium group">
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </AnimatedText>

            {/* Contact Information */}
            <AnimatedText>
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-light mb-8 tracking-wide">GET IN TOUCH</h2>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    We'd love to hear about your project. Send us a message and we'll respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium mb-2 tracking-wider uppercase">Email</h3>
                    <p className="text-gray-400">hello@shootsync.com</p>
                    <p className="text-gray-400">support@shootsync.com</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2 tracking-wider uppercase">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">+1 (555) 987-6543</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2 tracking-wider uppercase">Office</h3>
                    <p className="text-gray-400">123 Creative Street</p>
                    <p className="text-gray-400">New York, NY 10001</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2 tracking-wider uppercase">Business Hours</h3>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-4 tracking-wider uppercase">Follow Us</h3>
                  <div className="flex space-x-4">
                    {["Instagram", "Twitter", "LinkedIn"].map((platform) => (
                      <motion.a
                        key={platform}
                        href="#"
                        className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white/40 transition-colors text-xs"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {platform.charAt(0)}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-light text-center mb-16 leading-tight">COMMON QUESTIONS</h2>
          </AnimatedText>
          <div className="space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "Project timelines vary based on scope, but most projects take 2-8 weeks from concept to completion. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer:
                  "Yes! We work with startups, small businesses, and enterprise companies. Our services are scalable to meet your specific needs and budget.",
              },
              {
                question: "What's included in your pricing?",
                answer:
                  "Our pricing includes strategy, creative development, production, and post-production. We provide transparent pricing with no hidden fees.",
              },
              {
                question: "Can you help with ongoing marketing needs?",
                answer:
                  "We offer retainer packages for ongoing creative and marketing support to help your brand grow consistently.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-sm font-medium mb-3 tracking-wide">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-medium tracking-wide mb-4 md:mb-0">shootsync.</div>
            <div className="text-sm text-gray-500">© 2024 ShootSync. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
