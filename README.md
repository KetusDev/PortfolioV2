# 🚀 Portfolio V2

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

Nowoczesne, interaktywne portfolio programisty stworzone z wykorzystaniem najnowszych technologii frontendowych. Prezentuje projekty, umiejętności i doświadczenie w atrakcyjny, wizualnie imponujący sposób z efektami glassmorphism i zaawansowanymi animacjami.

## ✨ Cechy

### 🎨 Design & UI
- **Efekt Glassmorphism** - Nowoczesne, przeszklone karty z efektem rozmycia tła
- **Animowany Background z Cząsteczkami** - Dynamiczne tło z 1500 interaktywnymi cząsteczkami
- **Responsywny Design** - Perfekcyjne dopasowanie do wszystkich urządzeń (mobile, tablet, desktop)
- **Płynne Animacje** - Wykorzystanie Framer Motion dla profesjonalnych przejść i interakcji
- **Parallax Scrolling** - Efekt parallax dla sekcji hero
- **Hover Effects** - Interaktywne efekty przy najechaniu na elementy

### 🌐 Funkcjonalności
- **Multi-język** - Wsparcie dla wielu języków (kontekst językowy)
- **Nawigacja Glassmorphic** - Przezroczysta nawigacja z efektem rozmycia
- **Sekcje Portfolio**:
  - Hero z animowanym nagłówkiem
  - O mnie z kartami informacyjnymi
  - Interaktywna sekcja umiejętności z kategoriami
  - Grid projektów z filtrowaniem
  - Modale projektów z szczegółami
  - Sekcja kontaktowa
- **Filtrowanie Projektów** - Kategoryzacja projektów (Web, Mobile, Scripts, Other)
- **Modal Projektów** - Szczegółowe okna z informacjami o projektach
- **Przyciski CTA** - Download CV i kontakt z animacjami

### 🎯 UX Features
- **Smooth Scrolling** - Płynne przewijanie między sekcjami
- **Loading States** - Eleganckie stany ładowania
- **Micro-interactions** - Drobne animacje zwiększające zaangażowanie
- **Progressive Disclosure** - Stopniowe odkrywanie treści podczas scrollowania
- **Visual Feedback** - Natychmiastowa reakcja na interakcje użytkownika

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework z App Router
- **[React 19](https://react.dev/)** - Najnowsza wersja React z nowymi funkcjami
- **[TypeScript 5](https://www.typescriptlang.org/)** - Typowanie statyczne

### Styling & Animations
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Zaawansowane animacje i przejścia
- **[Motion](https://motion.dev/)** - Dodatkowa biblioteka animacji
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Predefiniowane animacje Tailwind
- **[class-variance-authority](https://cva.style/docs)** - Zarządzanie wariantami komponentów
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Warunkowe klasy CSS

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Kompletny zestaw niewidocznych, dostępnych komponentów:
  - Accordion, Alert Dialog, Avatar
  - Checkbox, Collapsible, Context Menu
  - Dialog, Dropdown Menu, Hover Card
  - Label, Menubar, Navigation Menu
  - Popover, Progress, Radio Group
  - Scroll Area, Select, Separator
  - Slider, Switch, Tabs
  - Toast, Toggle, Tooltip
- **[Lucide React](https://lucide.dev/)** - 1000+ pięknych, spójnych ikon
- **[Sonner](https://sonner.emilkowal.ski/)** - Eleganckie powiadomienia toast

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Wydajne formularze
- **[Zod](https://zod.dev/)** - Schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Integracja walidacji

### Additional Libraries
- **[cmdk](https://cmdk.paco.me/)** - Command menu (⌘K)
- **[date-fns](https://date-fns.org/)** - Nowoczesna biblioteka dat
- **[embla-carousel-react](https://www.embla-carousel.com/)** - Lekki carousel
- **[react-day-picker](https://react-day-picker.js.org/)** - Date picker
- **[recharts](https://recharts.org/)** - Wykresy i wizualizacje
- **[vaul](https://vaul.emilkowal.ski/)** - Drawer component
- **[Geist Font](https://vercel.com/font)** - Czcionka Vercel

### Development Tools
- **[pnpm](https://pnpm.io/)** - Szybki, wydajny package manager
- **[PostCSS](https://postcss.org/)** - CSS transformacje
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Automatyczne prefiksy CSS

## 📁 Struktura Projektu

```
PortfolioV2/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout z providers
│   ├── page.tsx                 # Główna strona portfolio
│   └── globals.css              # Globalne style
├── components/                   # Komponenty React
│   ├── glassmorphism-card.tsx   # Karta z efektem glassmorphism
│   ├── glassmorphism-navbar.tsx # Nawigacja z glassmorphism
│   ├── interactive-skills-section.tsx # Sekcja umiejętności
│   ├── language-provider.tsx    # Provider języków
│   ├── project-modal.tsx        # Modal szczegółów projektu
│   ├── projects-bento-grid.tsx  # Alternatywny grid projektów
│   ├── projects-grid.tsx        # Grid projektów z filtrowaniem
│   ├── theme-provider.tsx       # Provider motywów
│   └── kokonutui/
│       └── particles-background.tsx # Animowane tło z cząsteczkami
├── lib/
│   └── utils.ts                 # Funkcje pomocnicze
├── public/                      # Pliki statyczne
├── styles/
│   └── globals.css              # Dodatkowe style globalne
├── components.json              # Konfiguracja shadcn/ui
├── next.config.mjs              # Konfiguracja Next.js
├── tailwind.config.ts           # Konfiguracja Tailwind CSS
├── tsconfig.json                # Konfiguracja TypeScript
└── package.json                 # Zależności projektu
```

## 🚀 Szybki Start

### Wymagania
- **Node.js** 18.x lub nowszy
- **pnpm** 8.x lub nowszy (lub npm/yarn)

### Instalacja

1. **Sklonuj repozytorium**
```bash
git clone https://github.com/KetusDev/PortfolioV2.git
cd PortfolioV2
```

2. **Zainstaluj zależności**
```bash
pnpm install
# lub
npm install
# lub
yarn install
```

3. **Uruchom serwer deweloperski**
```bash
pnpm dev
# lub
npm run dev
# lub
yarn dev
```

4. **Otwórz przeglądarkę**
```
http://localhost:3000
```

## 📝 Dostępne Skrypty

```bash
# Tryb deweloperski
pnpm dev

# Build produkcyjny
pnpm build

# Start serwera produkcyjnego
pnpm start

# Linting
pnpm lint
```

## 🎨 Customizacja

### Kolory i Style
Edytuj `tailwind.config.ts` aby dostosować paletę kolorów, czcionki i breakpointy:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Twoje kolory
      },
    },
  },
}
```

### Efekt Glassmorphism
Dostosuj efekt w komponentach `GlassmorphismCard` i `GlassmorphismNavbar`:
- Poziom rozmycia: `backdrop-blur-xl`
- Przezroczystość tła: `bg-white/10`
- Obramowanie: `border-white/20`

### Animacje Cząsteczek
Konfiguruj tło w `app/page.tsx`:

```tsx
<ParticlesBackground
  particleCount={1500}        // Liczba cząsteczek
  noiseIntensity={0.002}      // Intensywność ruchu
  particleSize={{ min: 0.5, max: 2.5 }}  // Rozmiar cząsteczek
/>
```

### Treść
- **Projekty**: Edytuj `components/projects-grid.tsx`
- **Umiejętności**: Edytuj `components/interactive-skills-section.tsx`
- **Teksty**: Edytuj tłumaczenia w `components/language-provider.tsx`

## 🌐 Deployment

### Vercel (Zalecane)
```bash
# Zainstaluj Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Lub połącz repozytorium GitHub z [Vercel](https://vercel.com) dla automatycznych deploymentów.

### Inne Platformy
Projekt jest kompatybilny z:
- **Netlify**
- **Cloudflare Pages**
- **AWS Amplify**
- **Digital Ocean App Platform**

## 🔧 Konfiguracja Środowiska

Utwórz plik `.env.local` jeśli potrzebujesz zmiennych środowiskowych:

```env
# Przykładowe zmienne
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=your-ga-id
```

## 📱 Sekcje Portfolio

### 1. Hero Section
- Animowany tytuł z gradient text
- Subtitle i opis
- CTA buttons (Download CV, Contact)
- Parallax effect podczas scrollowania

### 2. About Section
- Bento grid z glassmorphic cards
- Informacje osobiste (lokalizacja, edukacja, doświadczenie)
- Aktualne projekty z progress bars
- Osiągnięcia i nagrody
- Hobby i zainteresowania

### 3. Skills Section
- Kategorie umiejętności (Frontend, Mobile, Backend, Database, Design)
- Interaktywne karty z poziomami
- Doświadczenie i liczba projektów
- Smooth transitions między kategoriami

### 4. Projects Section
- Filtry kategorii (All, Web, Mobile, Scripts, Other)
- Grid projektów z obrazkami
- Modal z pełnymi szczegółami
- Linki do live demo i GitHub

### 5. Contact Section
- Informacje kontaktowe
- Linki do social media
- Email i inne dane

## 🎯 Performance

- ⚡ **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- 🚀 **Fast Loading**: Optymalizacja obrazków, lazy loading
- 📦 **Code Splitting**: Automatyczny przez Next.js
- 🎨 **CSS Purging**: Tylko używane style w produkcji
- 🔍 **SEO Friendly**: Meta tags, semantic HTML

## 🤝 Contributing

Contribucje są mile widziane! Jeśli chcesz pomóc:

1. Fork projektu
2. Stwórz branch z feature (`git checkout -b feature/AmazingFeature`)
3. Commit zmian (`git commit -m 'Add some AmazingFeature'`)
4. Push do brancha (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

## 📄 Licencja

Ten projekt jest otwarty na użytek osobisty i edukacyjny. Przy wykorzystaniu prosimy o atrybucję.

## 👤 Autor

**KetusDev**
- GitHub: [@KetusDev](https://github.com/KetusDev)
- Email: code.szymon@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) za amazing framework
- [Vercel](https://vercel.com/) za hosting
- [Radix UI](https://www.radix-ui.com/) za dostępne komponenty
- [Framer Motion](https://www.framer.com/motion/) za potężne animacje
- [Tailwind CSS](https://tailwindcss.com/) za utility-first CSS

---

<div align="center">
  <strong>Zbudowano używając Next.js i React</strong>
</div>

<div align="center">
  <sub>Jeśli podoba Ci się ten projekt, zostaw ⭐ na GitHub!</sub>
</div>