"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Video, Mic, Lightbulb, Wifi, Coffee, Car, Clock, Users } from "lucide-react"
import Link from "next/link"

// Animated text component
const AnimatedText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function StudioPage() {
  const features = [
    { icon: Camera, title: "Professional Equipment", description: "Latest cameras, lenses, and photography gear" },
    { icon: Video, title: "4K Video Setup", description: "Professional video recording and streaming equipment" },
    { icon: Mic, title: "Audio Recording", description: "High-quality microphones and sound equipment" },
    { icon: Lightbulb, title: "Professional Lighting", description: "Studio lighting setups for any mood" },
    { icon: Wifi, title: "High-Speed Internet", description: "Gigabit internet for live streaming and uploads" },
    { icon: Coffee, title: "Refreshments", description: "Complimentary coffee, tea, and snacks" },
    { icon: Car, title: "Free Parking", description: "Convenient parking for you and your team" },
    { icon: Users, title: "Team Support", description: "Optional technical support and assistance" },
  ]

  const packages = [
    {
      name: "Hourly",
      price: "$150",
      period: "/hour",
      description: "Perfect for quick shoots and content creation",
      features: [
        "Studio access for 1 hour",
        "Basic lighting setup",
        "Equipment usage",
        "Free parking",
        "Refreshments included",
      ],
      popular: false,
    },
    {
      name: "Half Day",
      price: "$500",
      period: "/4 hours",
      description: "Ideal for medium-sized productions",
      features: [
        "Studio access for 4 hours",
        "Professional lighting setup",
        "All equipment included",
        "Technical support",
        "Free parking",
        "Catering options",
      ],
      popular: true,
    },
    {
      name: "Full Day",
      price: "$800",
      period: "/8 hours",
      description: "Best value for extensive productions",
      features: [
        "Studio access for 8 hours",
        "Custom lighting setup",
        "Premium equipment access",
        "Dedicated technical support",
        "Free parking",
        "Full catering service",
        "Editing suite access",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 w-full z-40 bg-black/90 backdrop-blur-md border-b border-gray-800"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              ShootSync
            </motion.div>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-yellow-400 transition-colors duration-300 text-sm">
              Home
            </Link>
            <Link href="/about" className="hover:text-yellow-400 transition-colors duration-300 text-sm">
              About Us
            </Link>
            <Link href="/services" className="hover:text-yellow-400 transition-colors duration-300 text-sm">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-yellow-400 transition-colors duration-300 text-sm">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors duration-300 text-sm">
              Contact Us
            </Link>
            <Link href="/studio" className="text-yellow-400 text-sm">
              Rent Studio
            </Link>
          </div>
          <Link href="/contact">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 border-0 rounded-full px-6 font-medium">
              Book Now
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Rent Our{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Studio
                </span>
              </h1>
            </AnimatedText>
            <AnimatedText>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Professional studio space equipped with everything you need for your next creative project
              </p>
            </AnimatedText>
            <AnimatedText>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-8 py-4">
                    Book Studio
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-8 py-4"
                >
                  Virtual Tour
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Studio Features */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Studio Features</h2>
          </AnimatedText>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 group text-center"
              >
                <feature.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <AnimatedText>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Studio Rental Packages</h2>
              <p className="text-xl text-gray-400">Flexible pricing options for every project size</p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-gray-900/80 backdrop-blur-sm border rounded-xl p-8 ${
                  pkg.popular ? "border-yellow-400 scale-105" : "border-gray-800"
                } hover:border-yellow-400/50 transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-gray-400 ml-1">{pkg.period}</span>
                  </div>
                  <p className="text-gray-400">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-yellow-400 text-black hover:bg-yellow-500"
                      : "bg-gray-800 hover:bg-yellow-400 hover:text-black"
                  } rounded-full py-3`}
                >
                  Book Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Studio Gallery</h2>
          </AnimatedText>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl aspect-video bg-gradient-to-br from-gray-800 to-gray-900"
              >
                <img
                  src={`/placeholder.svg?height=300&width=400&text=Studio+${item}`}
                  alt={`Studio view ${item}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Book?</h2>
            </AnimatedText>
            <AnimatedText>
              <p className="text-xl text-gray-300 mb-12">
                Contact us to check availability and book your studio session today.
              </p>
            </AnimatedText>
            <AnimatedText>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-8 py-4">
                    Book Studio Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-8 py-4"
                >
                  <Clock className="mr-2 w-5 h-5" />
                  Check Availability
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4 md:mb-0">
              ShootSync
            </div>
            <div className="text-gray-400">© 2024 ShootSync. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
