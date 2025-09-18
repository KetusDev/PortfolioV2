"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import GlassmorphismCard from "@/components/glassmorphism-card"
import { useLanguage } from "@/components/language-provider"
import { Code2, Smartphone, Cloud, Database, Palette, Zap, TrendingUp, Clock, Award } from "lucide-react"

const skillCategories = {
  frontend: {
    title: "Frontend Development",
    icon: Code2,
    color: "from-black/10 to-black/20",
    skills: [
      {
        name: "React",
        level: 80,
        experience: "2 years",
        projects: 5,
        description: "Advanced React development with hooks, context, and performance optimization",
      },
      {
        name: "Next.js",
        level: 90,
        experience: "3 years",
        projects: 3,
        description: "Full-stack React framework with SSR, SSG, and API routes",
      },
      {
        name: "TypeScript",
        level: 75,
        experience: "3 years",
        projects: 13,
        description: "Type-safe JavaScript development for large-scale applications",
      },
      {
        name: "Tailwind CSS",
        level: 90,
        experience: "2 years",
        projects: 18,
        description: "Utility-first CSS framework for rapid UI development",
      },
      {
        name: "Vue.js",
        level: 50,
        experience: "2 years",
        projects: 1,
        description: "Progressive JavaScript framework for building user interfaces",
      },
    ],
  },
  backend: {
    title: "Backend Development",
    icon: Database,
    color: "from-black/15 to-black/25",
    skills: [
      {
        name: "Node.js",
        level: 80,
        experience: "3 years",
        projects: 3,
        description: "Server-side JavaScript runtime for scalable applications",
      },
      {
        name: "Python",
        level: 85,
        experience: "6 years",
        projects: 7,
        description: "Versatile programming language for web development and automation",
      },
      {
        name: "PostgreSQL",
        level: 80,
        experience: "3 years",
        projects: 5,
        description: "Advanced relational database management and optimization",
      },
      {
        name: "MongoDB",
        level: 65,
        experience: "2 years",
        projects: 1,
        description: "NoSQL database for flexible, document-based data storage",
      },
      // {
      //   name: "GraphQL",
      //   level: 70,
      //   experience: "1 year",
      //   projects: 6,
      //   description: "Query language for APIs with efficient data fetching",
      // },
    ],
  },
  mobile: {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-black/20 to-black/30",
    skills: [
      {
        name: "React Native",
        level: 70,
        experience: "2 years",
        projects: 1,
        description: "Cross-platform mobile development with native performance",
      },
      {
        name: "Flutter",
        level: 50,
        experience: "1.5 years",
        projects: 1,
        description: "Google's UI toolkit for building natively compiled applications",
      },
      {
        name: "Swift",
        level: 45,
        experience: "1 year",
        projects: 4,
        description: "Native iOS development with modern Swift language",
      },
      {
        name: "Kotlin",
        level: 50,
        experience: "1 year",
        projects: 3,
        description: "Modern programming language for Android development",
      },
    ],
  },
  devops: {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-black/25 to-black/35",
    skills: [
      {
        name: "AWS",
        level: 60,
        experience: "2 years",
        projects: 1,
        description: "Amazon Web Services for scalable cloud infrastructure",
      },
      {
        name: "Docker",
        level: 65,
        experience: "1.5 years",
        projects: 3,
        description: "Containerization platform for consistent deployment environments",
      },
      {
        name: "Kubernetes",
        level: 40,
        experience: "0.5 years",
        projects: 1,
        description: "Container orchestration for automated deployment and scaling",
      },
      // {
      //   name: "CI/CD",
      //   level: 82,
      //   experience: "3 years",
      //   projects: 25,
      //   description: "Continuous integration and deployment pipelines",
      // },
    ],
  },
  tools: {
    title: "Others",
    icon: Palette,
    color: "from-black/30 to-black/40",
    skills: [
      {
        name: "Figma",
        level: 85,
        experience: "3 years",
        projects: 3,
        description: "Collaborative design tool for UI/UX prototyping",
      },
      {
        name: "Git",
        level: 70,
        experience: "5 years",
        projects: 4,
        description: "Version control system for collaborative development",
      },
      {
        name: "Lua",
        level: 65,
        experience: "3 years",
        projects: 5,
        description: "Lightweight scripting language for embedded use",
      },
      {
        name: "C++",
        level: 70,
        experience: "3 years",
        projects: 2,
        description: "General-purpose programming language for high-performance applications",
      },
    ],
  },
}

export default function InteractiveSkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [selectedSkill, setSelectedSkill] = useState<any>(null)
  const { t } = useLanguage()

  const currentCategory = skillCategories[activeCategory as keyof typeof skillCategories]

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
          {t("skills.title")}
        </h2>
        <p className="text-xl text-black/70 max-w-3xl mx-auto">
          {t("skills.second-title")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Category Sidebar */}
        <div className="lg:col-span-1">
          <GlassmorphismCard>
            <div className="space-y-3">
              <h3 className="font-semibold text-black/80 mb-4">{t("skills.categories-title")}</h3>
              {Object.entries(skillCategories).map(([key, category]) => {
                const Icon = category.icon
                return (
                  <motion.button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                      activeCategory === key
                        ? "bg-black/10 text-black"
                        : "text-black/70 hover:bg-black/5 hover:text-black"
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                      <Icon size={16} />
                    </div>
                    <span className="text-sm font-medium">{category.title}</span>
                  </motion.button>
                )
              })}
            </div>
          </GlassmorphismCard>
        </div>

        {/* Skills Grid */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <GlassmorphismCard>
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${currentCategory.color}`}>
                    <currentCategory.icon size={24} className="text-black/70" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-black/80">{currentCategory.title}</h3>
                    <p className="text-black/60">
                      {currentCategory.skills.length} skills •
                      {Math.round(
                        currentCategory.skills.reduce((acc, skill) => acc + skill.level, 0) /
                          currentCategory.skills.length,
                      )}
                      % avg proficiency
                    </p>
                  </div>
                </div>
              </GlassmorphismCard>

              {/* Skills List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCategory.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <GlassmorphismCard
                      className="cursor-pointer group"
                      hover={true}
                      onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-black/80 group-hover:text-black transition-colors">
                            {skill.name}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-black/60">★</span>
                            <span className="text-sm text-black/60">{skill.level}%</span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="w-full bg-black/10 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-black/60 to-black/40 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="flex items-center justify-between text-sm text-black/60">
                          <div className="flex items-center space-x-1">
                            <Clock size={12} />
                            <span>{skill.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp size={12} />
                            <span>{skill.projects} projects</span>
                          </div>
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                          {selectedSkill?.name === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pt-4 border-t border-black/10"
                            >
                              <p className="text-sm text-black/70 leading-relaxed">{skill.description}</p>
                              <div className="flex items-center space-x-4 mt-3">
                                <div className="flex items-center space-x-1">
                                  <Award size={12} className="text-black/50" />
                                  <span className="text-xs text-black/60">Expert Level</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Zap size={12} className="text-black/50" />
                                  <span className="text-xs text-black/60">Production Ready</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </GlassmorphismCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
