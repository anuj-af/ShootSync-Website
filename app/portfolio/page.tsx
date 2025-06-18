"use client"

import type React from "react"
import { useRef, useState } from "react"
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

// Project Card Component
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer"
    >
      <div className="aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500">
        <div className="relative w-full h-full">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />

          {/* Project Info Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium mb-3 border border-white/20">
                {project.category}
              </span>
              <h3 className="text-lg font-medium mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-4 text-xs text-gray-400">
                  {Object.entries(project.metrics)
                    .slice(0, 2)
                    .map(([key, value]) => (
                      <span key={key}>
                        <span className="text-white font-medium">{value as string}</span> {key}
                      </span>
                    ))}
                </div>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Title Below Card */}
      <div className="mt-4">
        <h3 className="text-sm font-medium tracking-wide">{project.title}</h3>
        <p className="text-xs text-gray-500 mt-1">{project.category}</p>
      </div>
    </motion.div>
  )
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL")

  const categories = ["ALL", "COMMERCIAL", "UGC", "BRANDING", "PERFORMANCE", "DIGITAL"]

  const projects = [
    {
      title: "Nike Air Max Campaign",
      category: "COMMERCIAL",
      description:
        "High-energy commercial shoot showcasing the latest Nike Air Max collection with dynamic visuals and compelling storytelling.",
      image: "/placeholder.svg?height=400&width=600&text=Nike+Campaign",
      metrics: { views: "2.5M", engagement: "8.2%", conversion: "12%" },
      year: "2024",
    },
    {
      title: "TechStart Launch Video",
      category: "UGC",
      description:
        "Authentic user-generated content strategy for a tech startup's product launch, featuring real customer testimonials.",
      image: "/placeholder.svg?height=400&width=600&text=TechStart+Launch",
      metrics: { views: "1.8M", engagement: "15.3%", conversion: "18%" },
      year: "2024",
    },
    {
      title: "Luxury Fashion Brand",
      category: "BRANDING",
      description:
        "Complete brand identity redesign for a luxury fashion house, including logo, visual system, and brand guidelines.",
      image: "/placeholder.svg?height=400&width=600&text=Fashion+Brand",
      metrics: { reach: "5.2M", engagement: "11.7%", sales: "+45%" },
      year: "2023",
    },
    {
      title: "E-commerce Performance",
      category: "PERFORMANCE",
      description:
        "Data-driven advertising campaign that increased ROAS by 340% through strategic targeting and optimization.",
      image: "/images/Ecommerce.JPG",
      metrics: { roas: "340%", ctr: "4.8%", conversion: "22%" },
      year: "2024",
    },
    {
      title: "Restaurant Social Campaign",
      category: "DIGITAL",
      description: "Comprehensive social media strategy that drove significant foot traffic and online engagement.",
      image: "/placeholder.svg?height=400&width=600&text=Restaurant+Social",
      metrics: { followers: "+125%", engagement: "19.4%", visits: "+67%" },
      year: "2023",
    },
    {
      title: "Fitness App Commercial",
      category: "COMMERCIAL",
      description: "Motivational commercial series showcasing real fitness transformation stories and app features.",
      image: "/images/Fitness.PNG",
      metrics: { views: "3.1M", downloads: "+89%", retention: "78%" },
      year: "2024",
    },
    {
      title: "Beauty Brand UGC",
      category: "UGC",
      description:
        "Authentic beauty tutorials and reviews from real customers, building trust and driving conversions.",
      image: "/placeholder.svg?height=400&width=600&text=Beauty+UGC",
      metrics: { views: "4.2M", engagement: "23.1%", sales: "+156%" },
      year: "2023",
    },
    {
      title: "SaaS Performance Campaign",
      category: "PERFORMANCE",
      description:
        "B2B lead generation campaign for enterprise software, focusing on quality leads and conversion optimization.",
      image: "/placeholder.svg?height=400&width=600&text=SaaS+Campaign",
      metrics: { leads: "2,847", cost: "-42%", quality: "94%" },
      year: "2024",
    },
    {
      title: "Sustainable Brand Identity",
      category: "BRANDING",
      description: "Eco-friendly brand identity for sustainable products company, emphasizing environmental values.",
      image: "/images/Honda.PNG",
      metrics: { awareness: "+78%", sentiment: "92%", sales: "+34%" },
      year: "2023",
    },
  ]

  const filteredProjects =
    selectedCategory === "ALL" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-black text-white relative">

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
            <Link href="/portfolio" className="opacity-100 cursor-pointer">
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
              OUR
              <br />
              <span className="font-normal">WORK</span>
            </h1>
          </AnimatedText>
          <AnimatedText>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore our latest projects and see how we've helped brands achieve extraordinary results through
              strategic creative solutions and performance-driven marketing.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-gray-400 border-white/20 hover:border-white/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={`${project.title}-${selectedCategory}`} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedText>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">PROJECT IMPACT</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Numbers that showcase the real impact of our creative and strategic work.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "projects completed" },
              { number: "2.5B+", label: "total impressions" },
              { number: "340%", label: "average ROAS" },
              { number: "98%", label: "client satisfaction" },
            ].map((stat, index) => (
              <AnimatedText key={index}>
                <div className="p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-light mb-4">{stat.number}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText>
            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              READY TO CREATE
              <br />
              YOUR SUCCESS
              <br />
              <span className="font-normal">STORY?</span>
            </h2>
          </AnimatedText>
          <AnimatedText>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and create something extraordinary that drives real results for your business.
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
              <Link href="/services">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 rounded-full px-8 py-3 text-sm font-medium group cursor-pointer"
                >
                  View Our Services
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </div>
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
