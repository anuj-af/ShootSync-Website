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

export default function ServicesPage() {
  const services = [
    {
      title: "COMMERCIAL SHOOTS",
      description: "Professional photography and videography that captures your brand's essence with precision.",
      features: ["4K Video Production", "Professional Photography", "Brand Storytelling", "Creative Direction"],
      price: "From $2,500",
      highlighted: false,
    },
    {
      title: "PERFORMANCE MARKETING",
      description: "Data-driven campaigns that turn clicks into customers and budgets into unstoppable growth.",
      features: ["Paid Advertising", "Conversion Optimization", "Analytics & Reporting", "A/B Testing"],
      price: "From $3,000",
      highlighted: true,
    },
    {
      title: "UGC CONTENT",
      description: "Authentic user-generated content that builds trust and drives engagement across platforms.",
      features: ["Content Creation", "Social Media Optimization", "Influencer Collaboration", "Performance Tracking"],
      price: "From $1,200",
      highlighted: false,
    },
    {
      title: "BRAND STRATEGY",
      description: "Complete brand identity and strategic positioning that resonates with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      price: "From $5,000",
      highlighted: false,
    },
    {
      title: "DIGITAL MARKETING",
      description: "Comprehensive digital strategy and execution across all channels and platforms.",
      features: ["SEO Optimization", "Social Media Management", "Email Marketing", "Content Strategy"],
      price: "From $2,000",
      highlighted: false,
    },
    {
      title: "WEB DEVELOPMENT",
      description: "Modern, responsive web experiences that convert visitors into customers.",
      features: ["Custom Development", "Responsive Design", "E-commerce Solutions", "CMS Integration"],
      price: "From $4,000",
      highlighted: false,
    },
  ]

  const packages = [
    {
      name: "STARTER",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "2 Commercial Shoots",
        "Basic Content Creation",
        "Social Media Management",
        "Monthly Analytics Report",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "GROWTH",
      price: "$5,000",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "4 Commercial Shoots",
        "Advanced Content Creation",
        "Performance Marketing",
        "Weekly Analytics Reports",
        "Priority Support",
        "Brand Strategy Session",
      ],
      popular: true,
    },
    {
      name: "ENTERPRISE",
      price: "$10,000",
      period: "/month",
      description: "For established brands seeking maximum growth",
      features: [
        "Unlimited Shoots",
        "Full Creative Suite",
        "Advanced Performance Marketing",
        "Daily Analytics & Optimization",
        "Dedicated Account Manager",
        "Custom Brand Development",
      ],
      popular: false,
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
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              About
            </Link>
            <Link href="/services" className="opacity-100">
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
              OUR
              <br />
              <span className="font-normal">SERVICES</span>
            </h1>
          </AnimatedText>
          <AnimatedText>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive creative and marketing solutions designed to accelerate your brand's growth and maximize
              your digital presence.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:border-white/30 ${
                  service.highlighted
                    ? "bg-white text-black border-white"
                    : "bg-transparent border-white/10 hover:bg-white/5"
                }`}
              >
                <h3 className="text-lg font-medium mb-4 tracking-wide">{service.title}</h3>
                <p
                  className={`text-sm leading-relaxed mb-6 ${service.highlighted ? "text-gray-700" : "text-gray-400"}`}
                >
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`text-xs flex items-center ${service.highlighted ? "text-gray-600" : "text-gray-500"}`}
                    >
                      <div
                        className={`w-1 h-1 rounded-full mr-3 ${service.highlighted ? "bg-gray-600" : "bg-gray-500"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <div className={`text-sm font-medium mb-4 ${service.highlighted ? "text-gray-800" : "text-white"}`}>
                  {service.price}
                </div> */}
                <Button
                  size="sm"
                  variant={service.highlighted ? "outline" : "ghost"}
                  className={`w-full rounded-full text-xs ${
                    service.highlighted
                      ? "border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-white"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-32 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedText>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">SERVICE PACKAGES</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Choose the perfect package for your business needs and growth objectives.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  pkg.popular
                    ? "bg-white text-black border-white scale-105"
                    : "bg-transparent border-white/10 hover:border-white/20"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-white px-4 py-2 rounded-full text-xs font-medium">MOST POPULAR</span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-lg font-medium mb-2 tracking-wide">{pkg.name}</h3>
                  {/* <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-light">{pkg.price}</span>
                    <span className={`text-sm ml-1 ${pkg.popular ? "text-gray-600" : "text-gray-400"}`}>
                      {pkg.period}
                    </span>
                  </div> */}
                  <p className={`text-sm ${pkg.popular ? "text-gray-700" : "text-gray-400"}`}>{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center text-sm ${pkg.popular ? "text-gray-700" : "text-gray-300"}`}
                    >
                      <div className={`w-1 h-1 rounded-full mr-3 ${pkg.popular ? "bg-gray-700" : "bg-gray-300"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full text-sm ${
                    pkg.popular ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  Get Started
                </Button>
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
              READY TO GET
              <br />
              STARTED?
            </h2>
          </AnimatedText>
          <AnimatedText>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and create a custom solution that fits your needs and budget perfectly.
            </p>
          </AnimatedText>
          <AnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 text-sm font-medium group">
                  Get Custom Quote
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
