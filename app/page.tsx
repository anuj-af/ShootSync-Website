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

export default function HomePage() {
  const stats = [
    { number: "500+", label: "projects" },
    { number: "98%", label: "satisfaction" },
    { number: "5x", label: "growth" },
  ]

  const services = [
    {
      title: "COMMERCIAL SHOOTS",
      description:
        "Professional photography and videography that captures your brand's essence with precision and creativity.",
      highlighted: true,
    },
    {
      title: "PERFORMANCE MARKETING",
      description: "Data-driven campaigns that turn clicks into customers and budgets into unstoppable growth.",
      highlighted: false,
    },
    {
      title: "UGC CONTENT",
      description: "Authentic user-generated content that builds trust and drives engagement across all platforms.",
      highlighted: false,
    },
    {
      title: "BRAND STRATEGY",
      description: "Complete brand identity and strategic positioning that resonates with your target audience.",
      highlighted: true,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/">
            <motion.div className="text-lg font-medium tracking-wide cursor-pointer" whileHover={{ opacity: 0.7 }}>
              shootsync.
            </motion.div>
          </Link>
          <div className="hidden md:flex space-x-12 text-sm">
            <Link href="/" className="hover:opacity-70 transition-opacity cursor-pointer">
              Home
            </Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity cursor-pointer">
              About
            </Link>
            <Link href="/services" className="hover:opacity-70 transition-opacity cursor-pointer">
              Services
            </Link>
            <Link href="/portfolio" className="hover:opacity-70 transition-opacity cursor-pointer">
              Work
            </Link>
            <Link href="/contact" className="hover:opacity-70 transition-opacity cursor-pointer">
              Contact
            </Link>
          </div>
          <Link href="/contact">
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-medium cursor-pointer">
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
              THE CREATIVE
              <br />
              GROWTH
              <br />
              <span className="font-normal">AGENCY</span>
            </h1>
          </AnimatedText>
          <AnimatedText>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Where creativity meets performance. We help brands achieve unstoppable growth through strategic creative
              solutions and data-driven marketing.
            </p>
          </AnimatedText>
          <AnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 text-sm font-medium group cursor-pointer">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 rounded-full px-8 py-3 text-sm font-medium group cursor-pointer"
                >
                  View Our Work
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedText>
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">ABOUT</h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  ShootSync is a creative production and marketing agency dedicated to transforming your digital vision
                  into reality. We're a team of creative professionals who specialize in delivering high-impact visual
                  content and performance-driven marketing strategies.
                </p>
                <Link href="/about">
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 rounded-full px-6 py-2 text-sm font-medium group cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </AnimatedText>
            <AnimatedText>
              <div className="grid grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl md:text-4xl font-light mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedText>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">OUR SERVICES</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Comprehensive creative and marketing solutions designed to accelerate your brand's growth and maximize
                your digital presence.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:border-white/30 cursor-pointer ${
                  service.highlighted
                    ? "bg-white text-black border-white"
                    : "bg-transparent border-white/10 hover:bg-white/5"
                }`}
              >
                <h3 className="text-lg font-medium mb-4 tracking-wide">{service.title}</h3>
                <p className={`text-sm leading-relaxed ${service.highlighted ? "text-gray-700" : "text-gray-400"}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <AnimatedText>
            <div className="text-center mt-16">
              <Link href="/services">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 rounded-full px-6 py-2 text-sm font-medium group cursor-pointer"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText>
            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              SPECIAL OFFER
              <br />
              FOR
              <br />
              NEW CLIENTS
            </h2>
          </AnimatedText>
          <AnimatedText>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              We're excited to offer a special discount on comprehensive creative and marketing packages for new
              clients. Transform your brand with our proven strategies.
            </p>
          </AnimatedText>
          <AnimatedText>
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 text-sm font-medium group cursor-pointer">
                Claim Your Offer
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedText>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/10 relative z-10">
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
