"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "pl" | "es" | "ja"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.title": "FullStack Developer",
    "hero.subtitle": "Web • Mobile • Scripts • Cloud",
    "hero.description": "Crafting digital experiences with modern technologies",
    "about.title": "About Me",
    "about.description":
      "Passionate FullStack developer with expertise in modern web technologies, mobile development, and automation scripts.",
    "projects.title": "Featured Projects",
    "skills.title": "Technical Skills",
    "contact.title": "Get In Touch",
    "contact.description": "Ready to bring your ideas to life",
  },
  pl: {
    "nav.home": "Strona główna",
    "nav.about": "O mnie",
    "nav.projects": "Projekty",
    "nav.skills": "Umiejętności",
    "nav.contact": "Kontakt",
    "hero.title": "FullStack Developer",
    "hero.subtitle": "Web • Mobile • Skrypty • Chmura",
    "hero.description": "Tworzę cyfrowe doświadczenia z nowoczesnymi technologiami",
    "about.title": "O mnie",
    "about.description":
      "Pasjonat FullStack developmentu z doświadczeniem w nowoczesnych technologiach webowych, mobile i automatyzacji.",
    "projects.title": "Wybrane Projekty",
    "skills.title": "Umiejętności Techniczne",
    "contact.title": "Skontaktuj się",
    "contact.description": "Gotowy do realizacji Twoich pomysłów",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "hero.title": "Desarrollador FullStack",
    "hero.subtitle": "Web • Móvil • Scripts • Nube",
    "hero.description": "Creando experiencias digitales con tecnologías modernas",
    "about.title": "Acerca de mí",
    "about.description":
      "Desarrollador FullStack apasionado con experiencia en tecnologías web modernas, desarrollo móvil y scripts de automatización.",
    "projects.title": "Proyectos Destacados",
    "skills.title": "Habilidades Técnicas",
    "contact.title": "Ponte en contacto",
    "contact.description": "Listo para dar vida a tus ideas",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.about": "私について",
    "nav.projects": "プロジェクト",
    "nav.skills": "スキル",
    "nav.contact": "お問い合わせ",
    "hero.title": "フルスタック開発者",
    "hero.subtitle": "Web • モバイル • スクリプト • クラウド",
    "hero.description": "最新技術でデジタル体験を創造",
    "about.title": "私について",
    "about.description":
      "最新のWeb技術、モバイル開発、自動化スクリプトの専門知識を持つ情熱的なフルスタック開発者です。",
    "projects.title": "注目プロジェクト",
    "skills.title": "技術スキル",
    "contact.title": "お問い合わせ",
    "contact.description": "あなたのアイデアを実現する準備ができています",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
