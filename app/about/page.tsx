"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
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

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "projects completed" },
    { number: "98%", label: "client satisfaction" },
    { number: "5x", label: "average growth" },
    { number: "50+", label: "team members" },
  ]

  const values = [
    {
      title: "CREATIVE EXCELLENCE",
      description:
        "We push the boundaries of creativity to deliver exceptional visual experiences that captivate and convert.",
    },
    {
      title: "DATA-DRIVEN RESULTS",
      description: "Every creative decision is backed by data and insights to ensure maximum performance and ROI.",
    },
    {
      title: "CLIENT PARTNERSHIP",
      description:
        "We believe in building long-term partnerships, not just completing projects. Your success is our success.",
    },
    {
      title: "INNOVATION FIRST",
      description: "We stay ahead of trends and technologies to keep your brand at the forefront of your industry.",
    },
  ]

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
            <Link href="/about" className="opacity-100">
              About
            </Link>
            <Link href="/services" className="hover:opacity-70 transition-opacity">
              Services
            </Link>
            <Link href="/portfolio" className="hover:opacity-70 transition-opacity">
              Work
            </Link>
            <Link href="/contact" className="hover:opacity-70 transition-opacity">
              Contact
            </Link>
          </div>
          <Link href="/contact">
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-medium">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-20">

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <AnimatedText>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-8 tracking-tight">
              ABOUT
              <br />
              <span className="font-normal">SHOOTSYNC</span>
            </h1>
          </AnimatedText>
          <AnimatedText>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're not just another creative agency. We're your strategic growth partner, combining cutting-edge
              creativity with performance-driven marketing to create campaigns that don't just look stunning—they
              deliver results.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
              <AnimatedText key={index}>
                <div className="p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-light mb-4">{stat.number}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedText>
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">OUR STORY</h2>
                <div className="space-y-6 text-gray-400 leading-relaxed">
                  <p>
                    Founded in 2020, ShootSync emerged from a simple observation: most creative agencies were either
                    purely artistic or purely data-driven. We saw an opportunity to bridge this gap.
                  </p>
                  <p>
                    Our founders, coming from backgrounds in both creative direction and performance marketing, built
                    ShootSync on the principle that creativity and conversion aren't mutually exclusive—they're
                    complementary forces that, when combined, create unstoppable growth.
                  </p>
                  <p>
                    Today, we're proud to be the go-to creative growth partner for brands that refuse to choose between
                    beautiful and effective.
                  </p>
                </div>
              </div>
            </AnimatedText>
            <AnimatedText>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎯</div>
                    <p className="text-gray-400 text-sm">Our Mission</p>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-light text-center mb-16 leading-tight">OUR VALUES</h2>
          </AnimatedText>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-lg font-medium mb-4 tracking-wide">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText>
            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              READY TO GROW
              <br />
              TOGETHER?
            </h2>
          </AnimatedText>
          <AnimatedText>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's create something extraordinary that not only looks amazing but drives real results for your
              business.
            </p>
          </AnimatedText>
          <AnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 text-sm font-medium group">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 rounded-full px-8 py-3 text-sm font-medium group"
                >
                  View Our Work
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </AnimatedText>
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
