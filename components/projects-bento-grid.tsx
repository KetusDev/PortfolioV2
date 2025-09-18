"use client"

import { useState, useCallback, useMemo, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Smartphone, Globe, Database, Palette, Code, Code2, Zap } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-provider"
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { ProjectModal } from "@/components/project-modal"

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
    size: "large", // large, medium, small
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
    size: "large",
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
    size: "medium",
    featured: false,
  },
  {
    id: 4,
    title: "AI Chat Interface",
    description: "Modern chat interface with AI integration",
    category: "Web",
    tech: ["Next.js", "OpenAI", "Tailwind"],
    image: "/ai-chat-interface.png",
    link: "#",
    github: "#",
    size: "medium",
    featured: false,
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Cross-platform fitness tracking mobile app",
    category: "Mobile",
    tech: ["Flutter", "Firebase", "HealthKit"],
    image: "/fitness-tracker-app-interface.png",
    link: "#",
    github: "#",
    size: "small",
    featured: false,
  },
  {
    id: 6,
    title: "Data Migration Tool",
    description: "Automated data migration and transformation scripts",
    category: "Scripts",
    tech: ["Python", "Pandas", "SQL"],
    image: "/data-migration-dashboard.png",
    link: "#",
    github: "#",
    size: "small",
    featured: false,
  },
  {
    id: 7,
    title: "Design System",
    description: "Comprehensive design system and component library",
    category: "Other",
    tech: ["Storybook", "React", "Figma"],
    image: "/design-system-components.png",
    link: "#",
    github: "#",
    size: "medium",
    featured: false,
  },
  {
    id: 8,
    title: "API Gateway",
    description: "Microservices API gateway with rate limiting",
    category: "Other",
    tech: ["Node.js", "Redis", "Docker"],
    image: "/api-gateway-architecture.png",
    link: "#",
    github: "#",
    size: "small",
    featured: false,
  },
]

const categoryIcons = {
  All: Globe,
  Web: Code2,
  Mobile: Smartphone,
  Scripts: Code,
  Other: Database,
}

interface ProjectsBentoGridProps {
  hideHeader?: boolean
  showDescription?: boolean
  maxProjects?: number
}

function ProjectsBentoGrid({ 
  hideHeader = false, 
  showDescription = true, 
  maxProjects 
}: ProjectsBentoGridProps = {}) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useLanguage()

  const filteredProjects = useMemo(() => {
    const filtered = activeCategory === "All" 
      ? allProjects 
      : allProjects.filter((project) => project.category === activeCategory)
    
    return maxProjects ? filtered.slice(0, maxProjects) : filtered
  }, [activeCategory, maxProjects])

  const getGridClass = useCallback((size: string, index: number) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2"
      case "medium":
        return "md:col-span-1 md:row-span-2"
      case "small":
        return "md:col-span-1 md:row-span-1"
      default:
        return "md:col-span-1 md:row-span-1"
    }
  }, [])

  const handleProjectClick = useCallback((project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }, [])

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category)
  }, [])

  return (
    <div className="max-w-7xl mx-auto">
      {!hideHeader && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("projects.title")}
          </h2>
          {showDescription && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              {t("projects.second-title")}
            </p>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons]
              return (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                  <span className="font-medium">{category}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category 
                      ? "bg-blue-500 text-white" 
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {category === "All" ? allProjects.length : allProjects.filter((p) => p.category === category).length}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ${getGridClass(
                project.size,
                index
              )}`}
              onClick={() => handleProjectClick(project)}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-full p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.category}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>

                <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-md">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {project.image && (
                    <div className="relative h-28 rounded-xl overflow-hidden bg-gray-50">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={project.size === "large" ? 600 : 400}
                        height={project.size === "large" ? 340 : 400}
                        quality={80}
                        priority={project.featured}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default memo(ProjectsBentoGrid)
