"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import GlassmorphismCard from "@/components/glassmorphism-card"
import { useLanguage } from "@/components/language-provider"
import { ExternalLink, Github, Code2, Smartphone, Terminal, Layers } from "lucide-react"
import ProjectModal from "@/components/project-modal"

const projectCategories = ["All", "Web", "Mobile", "Scripts", "Other"]

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    category: "Web",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "/modern-ecommerce-dashboard.png",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    category: "Mobile",
    tech: ["React Native", "TypeScript", "Firebase"],
    image: "/mobile-banking-app.png",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "DevOps Automation Suite",
    description: "Automated deployment and monitoring scripts for cloud infrastructure",
    category: "Scripts",
    tech: ["Python", "Docker", "AWS", "Terraform"],
    image: "/devops-dashboard-automation.png",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 4,
    title: "AI Chat Interface",
    description: "Modern chat interface with AI integration and real-time responses",
    category: "Web",
    tech: ["Next.js", "OpenAI", "Tailwind", "WebSocket"],
    image: "/ai-chat-interface.png",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Cross-platform fitness tracking mobile app with health monitoring",
    category: "Mobile",
    tech: ["Flutter", "Firebase", "HealthKit", "Charts"],
    image: "/fitness-tracker-app-interface.png",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Data Migration Tool",
    description: "Automated data migration and transformation scripts for enterprise systems",
    category: "Scripts",
    tech: ["Python", "Pandas", "SQL", "Apache Airflow"],
    image: "/data-migration-dashboard.png",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Design System",
    description: "Comprehensive design system and component library for modern applications",
    category: "Other",
    tech: ["Storybook", "React", "Figma", "TypeScript"],
    image: "/design-system-components.png",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 8,
    title: "API Gateway",
    description: "Microservices API gateway with rate limiting and authentication",
    category: "Other",
    tech: ["Node.js", "Redis", "Docker", "JWT"],
    image: "/api-gateway-architecture.png",
    link: "#",
    github: "#",
    featured: false,
  },
]

const categoryIcons = {
  All: Layers,
  Web: Code2,
  Mobile: Smartphone,
  Scripts: Terminal,
  Other: Layers,
}

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useLanguage()

  const filteredProjects =
    activeCategory === "All" ? allProjects : allProjects.filter((project) => project.category === activeCategory)

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-black/70 mb-6">
          {t("projects.title")}
        </h2>
        <p className="text-xl text-black/70 max-w-3xl mx-auto mb-12">
          A collection of projects showcasing my expertise across different technologies and platforms
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons]
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "backdrop-blur-xl bg-black/20 border border-black/30 text-black"
                    : "backdrop-blur-xl bg-white/10 border border-white/20 text-black/70 hover:bg-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
                <span>{category}</span>
                <span className="text-xs bg-black/10 px-2 py-1 rounded-full">
                  {category === "All" ? allProjects.length : allProjects.filter((p) => p.category === category).length}
                </span>
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Projects Grid - Regular Grid Layout */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassmorphismCard
                className="h-full group cursor-pointer"
                onClick={() => handleProjectClick(project)}
                hover={true}
              >
                <div className="h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative rounded-2xl overflow-hidden bg-black/5 mb-6 aspect-video">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 text-xs bg-black/20 text-black/80 rounded-full backdrop-blur-sm font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 text-xs bg-black/10 text-black/70 rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-black/80 group-hover:text-black transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-black/60 leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-sm bg-black/10 text-black/70 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4 pt-4">
                      <motion.a
                        href={project.link}
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-black/70 hover:text-black transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-black/70 hover:text-black transition-colors duration-300"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
