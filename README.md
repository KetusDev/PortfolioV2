<div align="center">

# Portfolio V2

**Modern developer portfolio built with Next.js 15, React 19 and Framer Motion.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-ketusdev.pl-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ketusdev.pl)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## ✨ Features

- **Glassmorphism UI** — frosted glass cards, blurred backgrounds, layered depth
- **1500-particle animated background** — interactive canvas built from scratch
- **Framer Motion animations** — page transitions, scroll reveals, micro-interactions
- **Parallax hero section** — depth effect on scroll
- **Project grid with filtering** — categorized by Web, Mobile, Scripts, Other
- **Project modals** — detailed view with links to live demo and source
- **Interactive skills section** — categorized with experience levels
- **Multi-language support** — language context with EN/PL
- **Fully responsive** — mobile, tablet, desktop

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4, Framer Motion, Motion |
| Components | Radix UI, shadcn/ui, Lucide React |
| Forms | React Hook Form + Zod |
| Font | Geist (Vercel) |
| Package Manager | pnpm |

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/KetusDev/PortfolioV2.git
cd PortfolioV2

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
pnpm dev      # development
pnpm build    # production build
pnpm start    # production server
pnpm lint     # lint
```

## 📁 Project Structure

```
PortfolioV2/
├── app/
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Main portfolio page
│   └── globals.css
├── components/
│   ├── glassmorphism-card.tsx
│   ├── glassmorphism-navbar.tsx
│   ├── interactive-skills-section.tsx
│   ├── projects-grid.tsx        # Filterable project grid
│   ├── project-modal.tsx
│   ├── language-provider.tsx
│   └── kokonutui/
│       └── particles-background.tsx
└── lib/
    └── utils.ts
```

## 🎨 Customization

**Particle background** — configure in `app/page.tsx`:
```tsx
<ParticlesBackground
  particleCount={1500}
  noiseIntensity={0.002}
  particleSize={{ min: 0.5, max: 2.5 }}
/>
```

**Projects** — edit `components/projects-grid.tsx`

**Skills** — edit `components/interactive-skills-section.tsx`

**Colors** — edit `tailwind.config.ts`

## 📄 License

Open for personal and educational use. Attribution appreciated.

---

<div align="center">
  Built by <a href="https://github.com/KetusDev">KetusDev</a> · <a href="https://ketusdev.pl">ketusdev.pl</a>
</div>
