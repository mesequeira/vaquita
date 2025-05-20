"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Rocket, Github, ArrowRight, ExternalLink } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { motion } from "framer-motion"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      containerRef.current.style.setProperty("--mouse-x", `${x}px`)
      containerRef.current.style.setProperty("--mouse-y", `${y}px`)
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800/20 bg-black/50 backdrop-blur-xl backdrop-saturate-150">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold">
              Saasfly
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <Link href="#pricing" className="text-sm text-gray-300 hover:text-white">
                Precios
              </Link>
              <Link href="#documentation" className="text-sm text-gray-300 hover:text-white">
                Documentaci
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                  Iniciar Sesión
                </Button>
              </Link>

            </div>
          </div>

          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black"></div>
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id="grain" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.3)"></stop>
                  <stop offset="100%" stopColor="rgba(255,255,255,0)"></stop>
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grain)"></rect>
            </svg>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 inline-block rounded-full bg-gray-800/50 px-4 py-1.5 text-sm font-medium text-gray-300 backdrop-blur-sm"
            >
              Creative Developer & Designer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight"
            >
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Experiences
              </span>{" "}
              That Make an Impact
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-gray-400 md:text-xl"
            >
              I design and build beautiful websites for businesses around the globe. If you need a modern and powerful
              website, send me an email.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button className="group h-12 rounded-full bg-white px-8 text-black hover:bg-gray-200">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full border-gray-700 px-8 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20" ref={containerRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Check out some of my latest work. These projects showcase my skills in design, development, and
              problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-Commerce Platform",
                category: "Web Development",
                image: "/placeholder.svg?height=600&width=800",
                description: "A modern e-commerce platform with a focus on user experience and performance.",
              },
              {
                title: "Mobile Banking App",
                category: "UI/UX Design",
                image: "/placeholder.svg?height=600&width=800",
                description: "A sleek and intuitive mobile banking application designed for ease of use.",
              },
              {
                title: "Portfolio Website",
                category: "Web Design",
                image: "/placeholder.svg?height=600&width=800",
                description: "A creative portfolio website for a photographer showcasing their work.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  backgroundImage:
                    "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)",
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-medium text-purple-400">{project.category}</div>
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-gray-400">{project.description}</p>
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-white">
                    View Project <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="rounded-full border-gray-700 px-8 py-6 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Skills & Services</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              I offer a wide range of services to help businesses succeed in the digital world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Web Development",
                description:
                  "Building responsive and performant websites using modern technologies like React, Next.js, and Tailwind CSS.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                ),
              },
              {
                title: "UI/UX Design",
                description:
                  "Creating beautiful and intuitive user interfaces that provide an exceptional user experience.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                ),
              },
              {
                title: "Mobile Development",
                description:
                  "Developing cross-platform mobile applications using React Native and other modern frameworks.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Branding & Identity",
                description: "Creating cohesive brand identities that communicate your company's values and mission.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  </svg>
                ),
              },
              {
                title: "SEO Optimization",
                description: "Improving your website's visibility in search engines to drive more organic traffic.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Content Strategy",
                description: "Developing content strategies that engage your audience and drive conversions.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-gray-800"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 to-pink-900">
            <div className="p-8 md:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mx-auto max-w-3xl text-center"
              >
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Start Your Project?</h2>
                <p className="mb-8 text-lg text-gray-300">
                  Let's work together to create something amazing. I'm currently available for freelance work.
                </p>
                <Button className="group h-12 rounded-full bg-white px-8 text-black hover:bg-gray-200">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
