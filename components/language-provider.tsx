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
    "current.title": "Currently Working On",
    "interests.title": "Interests & Hobbies",
    "projects.title": "Featured Projects",
    "projects.second-title": "A collection of projects showcasing my expertise across different technologies and platforms",
    "skills.title": "Technical Skills",
    "skills.second-title": "Comprehensive technical expertise across the full development stack",
    "skills.categories-title": "Skill Categories",
    "contact.title": "Get In Touch",
    "contact.description": "Ready to bring your ideas to life",
  },
  pl: {
    "nav.home": "Strona główna",
    "nav.about": "O mnie",
    "nav.projects": "Projekty",
    "nav.skills": "Umiejętności",
    "nav.contact": "Kontakt",
    "hero.title": "Programista FullStack",
    "hero.subtitle": "Web • Mobile • Skrypty • Cloud",
    "hero.description": "Tworzę cyfrowe doświadczenia przy użyciu nowoczesnych technologii",
    "about.title": "O mnie",
    "about.description":
      "Pasjonat programowania FullStack z doświadczeniem w nowoczesnych technologiach webowych, rozwoju aplikacji mobilnych i automatyzacji.",
    "current.title": "Obecnie pracuję nad",
    "interests.title": "Zainteresowania i hobby",
    "projects.title": "Wybrane projekty",
    "projects.second-title": "Kolekcja projektów prezentujących moje doświadczenie w różnych technologiach i platformach",
    "skills.title": "Umiejętności techniczne",
    "skills.second-title": "Kompleksowa wiedza techniczna obejmująca cały stos technologiczny",
    "skills.categories-title": "Kategorie umiejętności",
    "contact.title": "Skontaktuj się ze mną",
    "contact.description": "Gotowy do realizacji Twoich pomysłów",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "hero.title": "Desarrollador FullStack",
    "hero.subtitle": "Web • Móvil • Scripts • Nube",
    "hero.description": "Creando experiencias digitales con tecnologías modernas",
    "about.title": "Sobre mí",
    "about.description":
      "Desarrollador FullStack apasionado con experiencia en tecnologías web modernas, desarrollo móvil y automatización de procesos.",
    "current.title": "Actualmente trabajando en",
    "interests.title": "Intereses y aficiones",
    "projects.title": "Proyectos destacados",
    "projects.second-title": "Una colección de proyectos que muestran mi experiencia en diferentes tecnologías y plataformas",
    "skills.title": "Habilidades técnicas",
    "skills.second-title": "Experiencia técnica integral en todo el stack de desarrollo",
    "skills.categories-title": "Categorías de habilidades",
    "contact.title": "Ponte en contacto",
    "contact.description": "Listo para dar vida a tus ideas",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.about": "プロフィール",
    "nav.projects": "プロジェクト",
    "nav.skills": "スキル",
    "nav.contact": "お問い合わせ",
    "hero.title": "フルスタック開発者",
    "hero.subtitle": "Web • モバイル • スクリプト • クラウド",
    "hero.description": "最新技術を駆使してデジタル体験を創造します",
    "about.title": "プロフィール",
    "about.description":
      "最新のWeb技術、モバイル開発、自動化スクリプトに精通した情熱的なフルスタック開発者です。",
    "current.title": "現在取り組んでいること",
    "interests.title": "興味・趣味",
    "projects.title": "主要プロジェクト",
    "projects.second-title": "さまざまな技術とプラットフォームでの専門知識を紹介するプロジェクト集",
    "skills.title": "技術スキル",
    "skills.second-title": "開発スタック全体にわたる包括的な技術的専門知識",
    "skills.categories-title": "スキルカテゴリー",
    "contact.title": "お問い合わせ",
    "contact.description": "あなたのアイデアを形にする準備ができています",
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
