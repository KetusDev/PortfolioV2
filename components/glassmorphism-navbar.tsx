"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Globe, Menu, X } from "lucide-react"

const navItems = ["home", "about", "projects", "skills", "contact"]
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
]

export default function GlassmorphismNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 left-0 w-full flex justify-center z-50 transition-all duration-500 ${isScrolled ? "scale-95" : "scale-100"
          }`}
      >
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-4 shadow-2xl flex items-center justify-between max-w-2xl w-full">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo on left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mr-8"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-black to-black/60 flex items-center justify-center ml-8">
                <span className="text-white font-bold text-sm">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
                </span>
              </div>
            </motion.div>

            {/* Navigation items */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-black/80 hover:text-black transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t(`nav.${item}`)}
                </motion.button>
              ))}
            </div>

            {/* Language Selector - Desktop */}
            <div className="relative ml-8">
              <motion.button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 text-black/80 hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={18} />
                <span>{languages.find((lang) => lang.code === language)?.flag}</span>
              </motion.button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-2 shadow-2xl min-w-[150px]"
                  >
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any)
                          setIsLanguageMenuOpen(false)
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl transition-colors duration-200 flex items-center space-x-2 ${language === lang.code
                          ? "bg-black/10 text-black"
                          : "text-black/70 hover:text-black hover:bg-black/5"
                          }`}
                        whileHover={{ x: 2 }}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Logo - Mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-black to-black/60 flex items-center justify-center">
                <span className="text-white font-bold text-sm">FS</span>
              </div>
            </motion.div>

            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center space-x-2 text-black/80 hover:text-black transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe size={18} />
                  <span className="inline">{languages.find((lang) => lang.code === language)?.flag}</span>
                </motion.button>

                <AnimatePresence>
                  {isLanguageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 right-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-2 shadow-2xl min-w-[150px]"
                    >
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as any)
                            setIsLanguageMenuOpen(false)
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl transition-colors duration-200 flex items-center space-x-2 ${language === lang.code
                            ? "bg-black/10 text-black"
                            : "text-black/70 hover:text-black hover:bg-black/5"
                            }`}
                          whileHover={{ x: 2 }}
                        >
                          <span>{lang.flag}</span>
                          <span className="text-sm">{lang.name}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black/80 hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-20 left-1/4 transform -translate-x-1/2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl min-w-[280px] w-4/5 max-w-md"
            >
              <div className="flex flex-col items-center space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="w-full text-center text-black/80 hover:text-black transition-colors duration-300 font-medium py-3 border-b border-white/10 last:border-0"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t(`nav.${item}`)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
