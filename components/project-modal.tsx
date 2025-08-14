"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github, Calendar, Users, Code } from "lucide-react"
import GlassmorphismCard from "@/components/glassmorphism-card"

interface ProjectModalProps {
  project: any
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const projectDetails = {
    1: {
      fullDescription: `This comprehensive e-commerce platform was built from the ground up using modern web technologies. The project involved creating a scalable architecture that could handle thousands of concurrent users while maintaining optimal performance.

Key features include real-time inventory management, advanced search and filtering capabilities, secure payment processing with Stripe integration, and a comprehensive admin dashboard for managing products, orders, and customer data.

The frontend was built with React and Next.js, utilizing server-side rendering for optimal SEO performance. The backend API was developed using Node.js with Express, connected to a PostgreSQL database for reliable data storage.`,
      challenges: [
        "Implementing real-time inventory updates across multiple product variants",
        "Optimizing database queries for complex product filtering",
        "Ensuring PCI compliance for payment processing",
        "Building a responsive design that works across all devices",
      ],
      results: [
        "40% increase in conversion rates compared to previous platform",
        "99.9% uptime achieved through robust error handling",
        "Page load times reduced by 60% through optimization",
        "Successfully handling 10,000+ daily active users",
      ],
      duration: "6 months",
      team: "4 developers",
      role: "Lead Full-Stack Developer",
      additionalImages: [
        "/modern-ecommerce-dashboard.png",
        "/ecommerce-product-page.png",
        "/ecommerce-checkout-flow.png",
        "/ecommerce-admin-panel.png",
      ],
    },
    2: {
      fullDescription: `A cutting-edge mobile banking application designed with security and user experience as top priorities. The app features biometric authentication, real-time transaction monitoring, and seamless integration with banking APIs.

Built using React Native for cross-platform compatibility, the application includes advanced security features such as end-to-end encryption, fraud detection algorithms, and secure token-based authentication. The backend infrastructure was designed to handle high-frequency transactions with minimal latency.

The user interface was crafted with accessibility in mind, ensuring compliance with banking regulations while maintaining an intuitive and modern design that users love.`,
      challenges: [
        "Implementing bank-grade security measures",
        "Ensuring real-time transaction processing",
        "Meeting strict regulatory compliance requirements",
        "Optimizing performance for low-end devices",
      ],
      results: [
        "4.8/5 star rating on app stores",
        "Zero security incidents since launch",
        "50% reduction in customer support tickets",
        "1M+ downloads in first year",
      ],
      duration: "8 months",
      team: "6 developers",
      role: "Mobile Lead Developer",
      additionalImages: [
        "/mobile-banking-app.png",
        "/banking-app-dashboard.png",
        "/banking-app-transactions.png",
        "/banking-app-security.png",
      ],
    },
    3: {
      fullDescription: `A comprehensive DevOps automation suite designed to streamline deployment processes and infrastructure management. This project involved creating a series of interconnected tools and scripts that automate everything from code deployment to monitoring and scaling.

The suite includes automated CI/CD pipelines, infrastructure as code templates, monitoring dashboards, and automated scaling solutions. Built primarily with Python and leveraging cloud services like AWS, the system can manage complex multi-environment deployments with minimal human intervention.

The project significantly reduced deployment times and eliminated manual errors, while providing comprehensive logging and monitoring capabilities for better system visibility.`,
      challenges: [
        "Designing fault-tolerant automation systems",
        "Integrating with multiple cloud providers",
        "Creating comprehensive monitoring and alerting",
        "Ensuring zero-downtime deployments",
      ],
      results: [
        "90% reduction in deployment time",
        "99.99% deployment success rate",
        "75% decrease in infrastructure costs",
        "24/7 automated monitoring and recovery",
      ],
      duration: "4 months",
      team: "3 developers",
      role: "DevOps Architect",
      additionalImages: [
        "/devops-dashboard-automation.png",
        "/devops-pipeline-view.png",
        "/devops-monitoring-dashboard.png",
        "/devops-infrastructure-map.png",
      ],
    },
  }

  const details = projectDetails[project.id as keyof typeof projectDetails] || {
    fullDescription: project.description,
    challenges: [],
    results: [],
    duration: "3 months",
    team: "2 developers",
    role: "Full-Stack Developer",
    additionalImages: [project.image],
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <GlassmorphismCard className="p-0">
              {/* Header */}
              <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/10 border-b border-white/20 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-black/80">{project.title}</h2>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-black/60">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{details.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{details.team}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Code size={14} />
                      <span>{details.role}</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Image Gallery */}
                <div className="space-y-4">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-black/5">
                    <img
                      src={details.additionalImages[currentImageIndex] || project.image}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {details.additionalImages.length > 1 && (
                    <div className="flex space-x-2 justify-center">
                      {details.additionalImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            currentImageIndex === index ? "bg-black/60" : "bg-black/20"
                          }`}
                          title={`Show image ${index + 1}`}
                          aria-label={`Show image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Main Description */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-black/80 mb-4">Project Overview</h3>
                      <p className="text-black/70 leading-relaxed whitespace-pre-line">{details.fullDescription}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-semibold text-black/80 mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech: string) => (
                          <span key={tech} className="px-3 py-2 bg-black/10 text-black/70 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenges */}
                    {details.challenges.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-black/80 mb-4">Key Challenges</h3>
                        <ul className="space-y-2">
                          {details.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-black/40 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-black/70">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Project Stats */}
                    <GlassmorphismCard>
                      <h4 className="font-semibold text-black/80 mb-4">Project Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-black/60">Duration</span>
                          <span className="text-black/80">{details.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-black/60">Team Size</span>
                          <span className="text-black/80">{details.team}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-black/60">My Role</span>
                          <span className="text-black/80">{details.role}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-black/60">Category</span>
                          <span className="text-black/80">{project.category}</span>
                        </div>
                      </div>
                    </GlassmorphismCard>

                    {/* Results */}
                    {details.results.length > 0 && (
                      <GlassmorphismCard>
                        <h4 className="font-semibold text-black/80 mb-4">Key Results</h4>
                        <ul className="space-y-2">
                          {details.results.map((result, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-black/70 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </GlassmorphismCard>
                    )}

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-black/10 hover:bg-black/20 rounded-xl transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>View Live Project</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-black/10 hover:bg-black/20 rounded-xl transition-colors"
                      >
                        <Github size={16} />
                        <span>View Source Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
