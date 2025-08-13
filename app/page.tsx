"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import ParticlesBackground from "@/components/kokonutui/particles-background"
import GlassmorphismNavbar from "@/components/glassmorphism-navbar"
import GlassmorphismCard from "@/components/glassmorphism-card"
import { useLanguage } from "@/components/language-provider"
import { Code2, Smartphone, Cloud, Github, Linkedin, Mail, Download, Database } from "lucide-react"
import ProjectsGrid from "@/components/projects-grid"
import InteractiveSkillsSection from "@/components/interactive-skills-section"

const skills = {
  web: ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  scripts: ["Python", "Bash", "PowerShell", "Automation"],
  cloud: ["AWS", "Docker", "Kubernetes", "CI/CD"],
}

export default function Portfolio() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed Particles Background */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground
          title=""
          subtitle=""
          particleCount={1500}
          noiseIntensity={0.002}
          particleSize={{ min: 0.3, max: 1.5 }}
        />
      </div>

      <GlassmorphismNavbar />

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div style={{ y }} className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black via-black/90 to-black/60">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-black/70">{t("hero.subtitle")}</p>
            <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto">{t("hero.description")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="backdrop-blur-xl bg-black/10 hover:bg-black/20 border border-black/20 hover:border-black/30 rounded-full px-8 py-4 text-black font-medium transition-all duration-300 flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full px-8 py-4 text-black font-medium transition-all duration-300"
            >
              {t("contact.title")}
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-black/70 mb-6">
              {t("about.title")}
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Passionate developer crafting digital experiences with cutting-edge technologies
            </p>
          </motion.div>

          {/* Enhanced Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-6 mb-16">
            {/* Main Profile Card */}
            <GlassmorphismCard className="md:col-span-3 lg:col-span-3 md:row-span-2" delay={0}>
              <div className="h-full flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-black/10 to-black/5">
                    <img
                      src="/professional-developer-portrait.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-black/80">Jan Kowalski</h3>
                    <p className="text-black/60">Senior FullStack Developer</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="w-2 h-2 bg-black/60 rounded-full animate-pulse"></span>
                      <span className="text-sm text-black/60">Available for projects</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <p className="text-black/70 leading-relaxed">
                    Passionate FullStack developer with 5+ years of experience building scalable web applications,
                    mobile apps, and automation solutions. I specialize in modern JavaScript frameworks, cloud
                    architecture, and creating seamless user experiences.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                        <span className="text-xs">📍</span>
                      </div>
                      <span className="text-sm text-black/60">Warsaw, Poland (Remote Worldwide)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                        <span className="text-xs">🎓</span>
                      </div>
                      <span className="text-sm text-black/60">Computer Science, Warsaw University</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                        <span className="text-xs">💼</span>
                      </div>
                      <span className="text-sm text-black/60">Senior Developer at TechCorp</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Problem Solver", "Team Leader", "Innovation Driven", "Open Source Contributor"].map((trait) => (
                      <span key={trait} className="px-3 py-1 text-xs bg-black/10 text-black/70 rounded-full">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassmorphismCard>

            {/* Experience Stats */}
            <GlassmorphismCard className="md:col-span-1 lg:col-span-1" delay={0.1}>
              <div className="text-center space-y-2 h-full flex flex-col justify-center">
                <div className="text-4xl font-bold text-black/80">5+</div>
                <div className="text-sm text-black/60">Years Experience</div>
              </div>
            </GlassmorphismCard>

            {/* Projects Count */}
            <GlassmorphismCard className="md:col-span-1 lg:col-span-1" delay={0.2}>
              <div className="text-center space-y-2 h-full flex flex-col justify-center">
                <div className="text-4xl font-bold text-black/80">50+</div>
                <div className="text-sm text-black/60">Projects</div>
              </div>
            </GlassmorphismCard>

            {/* Clients */}
            <GlassmorphismCard className="md:col-span-1 lg:col-span-1" delay={0.3}>
              <div className="text-center space-y-2 h-full flex flex-col justify-center">
                <div className="text-4xl font-bold text-black/80">30+</div>
                <div className="text-sm text-black/60">Happy Clients</div>
              </div>
            </GlassmorphismCard>

            {/* Awards */}
            <GlassmorphismCard className="md:col-span-2 lg:col-span-2" delay={0.4}>
              <div className="space-y-3">
                <h4 className="font-semibold text-black/80 flex items-center space-x-2">
                  <span>🏆</span>
                  <span>Recent Achievements</span>
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black/60 rounded-full"></div>
                    <span className="text-sm text-black/60">Best Developer Award 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black/60 rounded-full"></div>
                    <span className="text-sm text-black/60">AWS Certified Solutions Architect</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black/60 rounded-full"></div>
                    <span className="text-sm text-black/60">Google Cloud Professional</span>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>

            {/* Current Projects */}
            <GlassmorphismCard className="md:col-span-3 lg:col-span-3" delay={0.5}>
              <div className="space-y-4">
                <h4 className="font-semibold text-black/80">Currently Working On</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-black/5 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <div>
                        <div className="text-sm font-medium text-black/80">AI-Powered SaaS Platform</div>
                        <div className="text-xs text-black/60">Next.js, OpenAI, PostgreSQL</div>
                      </div>
                    </div>
                    <span className="text-xs text-black/60">85%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/5 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <div className="text-sm font-medium text-black/80">Mobile Banking App</div>
                        <div className="text-xs text-black/60">React Native, TypeScript</div>
                      </div>
                    </div>
                    <span className="text-xs text-black/60">60%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/5 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                      <div>
                        <div className="text-sm font-medium text-black/80">DevOps Automation Suite</div>
                        <div className="text-xs text-black/60">Python, Docker, AWS</div>
                      </div>
                    </div>
                    <span className="text-xs text-black/60">40%</span>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>

            {/* Interests & Hobbies */}
            <GlassmorphismCard className="md:col-span-2 lg:col-span-2" delay={0.6}>
              <div className="space-y-4">
                <h4 className="font-semibold text-black/80">Interests & Hobbies</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-black/5 rounded-xl">
                    <div className="text-2xl mb-1">🎮</div>
                    <div className="text-xs text-black/60">Gaming</div>
                  </div>
                  <div className="text-center p-3 bg-black/5 rounded-xl">
                    <div className="text-2xl mb-1">📚</div>
                    <div className="text-xs text-black/60">Reading</div>
                  </div>
                  <div className="text-center p-3 bg-black/5 rounded-xl">
                    <div className="text-2xl mb-1">🏃</div>
                    <div className="text-xs text-black/60">Running</div>
                  </div>
                  <div className="text-center p-3 bg-black/5 rounded-xl">
                    <div className="text-2xl mb-1">🎵</div>
                    <div className="text-xs text-black/60">Music</div>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>

            {/* Contact Info */}
            <GlassmorphismCard className="md:col-span-3 lg:col-span-3" delay={0.7}>
              <div className="space-y-4">
                <h4 className="font-semibold text-black/80">Let's Connect</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <motion.a
                    href="mailto:jan@example.com"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                      <Mail size={14} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-black/80">Email</div>
                      <div className="text-xs text-black/60">jan@example.com</div>
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                      <Linkedin size={14} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-black/80">LinkedIn</div>
                      <div className="text-xs text-black/60">Connect</div>
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://github.com"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 bg-black/5 rounded-xl hover:bg-black/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                      <Github size={14} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-black/80">GitHub</div>
                      <div className="text-xs text-black/60">@jankowalski</div>
                    </div>
                  </motion.a>
                  <div className="flex items-center space-x-3 p-3 bg-black/5 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                      <span className="text-xs">🌍</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-black/80">Timezone</div>
                      <div className="text-xs text-black/60">UTC+1 (CET)</div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>
          </div>

          {/* Skills Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: "Frontend",
                skills: ["React", "Next.js", "TypeScript", "Tailwind"],
                color: "from-black/10 to-black/20",
              },
              {
                icon: Database,
                title: "Backend",
                skills: ["Node.js", "Python", "PostgreSQL", "GraphQL"],
                color: "from-black/15 to-black/25",
              },
              {
                icon: Smartphone,
                title: "Mobile",
                skills: ["React Native", "Flutter", "Swift", "Kotlin"],
                color: "from-black/20 to-black/30",
              },
              {
                icon: Cloud,
                title: "DevOps",
                skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
                color: "from-black/25 to-black/35",
              },
            ].map((category, index) => (
              <GlassmorphismCard key={category.title} delay={index * 0.1}>
                <div className="text-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${category.color} mb-4`}
                  >
                    <category.icon size={24} className="text-black/70" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-black/80">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm bg-black/10 text-black/70 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-32 px-4">
        <ProjectsGrid />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-32 px-4">
        <InteractiveSkillsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-black/70 mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-xl text-black/70">{t("contact.description")}</p>
          </motion.div>

          <GlassmorphismCard className="text-center">
            <div className="space-y-8">
              <div className="flex justify-center space-x-6">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/10 hover:bg-black/20 text-black/70 hover:text-black transition-all duration-300"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-xl bg-black/10 hover:bg-black/20 border border-black/20 hover:border-black/30 rounded-full px-12 py-4 text-black font-medium transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Mail size={18} />
                <span>contact@example.com</span>
              </motion.button>
            </div>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <GlassmorphismCard className="text-center">
            <p className="text-black/60">© 2024 FullStack Developer Portfolio. Built with Next.js & Framer Motion.</p>
          </GlassmorphismCard>
        </div>
      </footer>
    </div>
  )
}
