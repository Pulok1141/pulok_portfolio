# Implementation Plan - Mahmudul Hasan Pulok Portfolio

A personal portfolio website for **Mahmudul Hasan Pulok** (Computer Science & Engineering Student at Daffodil International University). Built with React, Next.js (App Router), Tailwind CSS, TypeScript, and Framer Motion for subtle, human-crafted animations and micro-interactions.

---

## 1. Design & UX Strategy ("Human-Made", Premium Aesthetic)

- **Typography & Rhythm:** Clean typography stack (`Inter`, `Plus Jakarta Sans`, system sans fallback) with high contrast hierarchy, spacious leading, and generous whitespace.
- **Color System (Dual Theme):**
  - **Dark Mode (Default/Sophisticated):** Canvas `#090d16` / `#0f172a`, card surfaces `#111827`/`#0d1322` with hairline borders (`border-white/10`), subtle blue/violet ambient glow gradients.
  - **Light Mode:** Canvas `#f8fafc`, card surfaces `#ffffff` with hairline borders (`border-slate-200/90`) and subtle elevation shadows (`shadow-sm` to `shadow-md` on hover).
- **Glassmorphism:** Sticky top navigation bar with `backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/60 dark:border-white/10`.
- **Micro-interactions:**
  - Card hover lifts (`-translate-y-1.5`) and subtle border color illumination.
  - Category pill badges with subtle scale and soft background tints.
  - Theme toggle switch with rotating icon transition.
  - Contact form with focused input ring highlights and submission feedback.

---

## 2. Animation Strategy (Framer Motion)

- **Scroll-triggered Staggered Reveals:**
  - Standardized reusable animation wrappers using Framer Motion (`whileInView`, `viewport={{ once: true, margin: "-60px" }}`).
  - Hero staggered entrance: Badge -> Title -> Subtitle -> Tagline -> Action Buttons.
  - Projects: 3-column stagger delay (`index * 0.15s`).
  - Skills: Category fade-in with badges popping into place smoothly.
- **Reduced Motion Support:** Respects user's `prefers-reduced-motion` settings automatically through fluid CSS and Framer Motion transitions.

---

## 3. Component Architecture & File Tree

```
d:\My_Student_Portfolio/
├── app/
│   ├── layout.tsx         # Root layout, fonts, SEO metadata, theme script
│   ├── page.tsx           # Single-page portfolio combining all sections
│   └── globals.css        # Tailwind base, utilities, custom glassmorphism styles
├── components/
│   ├── Navbar.tsx         # Sticky glassmorphism nav with mobile drawer & theme toggle
│   ├── Hero.tsx           # Name, Subhead, Tagline, GitHub & Contact CTA buttons
│   ├── About.tsx          # About Me content, engineering philosophy, key metrics
│   ├── Skills.tsx         # Categorized skill badges (Core, Frontend & UI, Data Science & ML, Tools & Graphics)
│   ├── Projects.tsx       # 3-column card grid (Budget Engine, AsyncGraph, RoadPulse)
│   ├── Contact.tsx        # Contact form + Direct Links (mailto, LinkedIn, GitHub)
│   ├── Footer.tsx         # Minimalist footer with dynamic current year
│   └── ThemeProvider.tsx  # React context for dark/light mode toggle with localStorage sync
├── tailwind.config.ts     # Custom dark mode class config, colors, keyframes
├── postcss.config.js      # PostCSS Tailwind & Autoprefixer plugins
├── tsconfig.json          # TypeScript path mappings & compiler options
└── package.json           # Next.js 14, React 18, Tailwind, Framer Motion, Lucide Icons
```

---

## 4. Exact Content Mapping

1. **Hero Section:**
   - Name: `Mahmudul Hasan Pulok`
   - Subhead: `Computer Science & Engineering Student at Daffodil International University`
   - Tagline: `Bridging the gap between complex data engineering and intuitive human-computer interaction. I build mathematically sound machine learning pipelines and seamless modern web applications.`
   - CTAs: "View GitHub" (`https://github.com/Pulok1141`, new tab) & "Contact Me" (`#contact` smooth scroll).
2. **About Me Section:**
   - Full exact narrative detailing end-to-end solutions, machine learning pipelines, B2B frontend architecture, and delivering tangible user value.
3. **Skills Section:**
   - Visually distinct pill badges with icon accents grouped by:
     - *Core:* JavaScript, TypeScript, Python, C, C++
     - *Frontend & UI:* React, Vite, Next.js, Tailwind CSS, Figma
     - *Data Science & ML:* Scikit-Learn, LightGBM, XGBoost, CatBoost, Optuna, SHAP
     - *Tools & Graphics:* Git, GitHub, OpenGL
4. **Projects Section (3-Column Grid):**
   - **Automated Tour Budget Engine** (Python, Scikit-Learn, LightGBM, Optuna)
   - **AsyncGraph** (React, TypeScript, Vite, Figma)
   - **RoadPulse** (C, OpenGL)
5. **Contact Section:**
   - Functional UI contact form (Name, Email, Message) with feedback state.
   - Direct Contact Links:
     - Email: `mailto:mahmudulhasanpulok33@gmail.com`
     - LinkedIn: `https://www.linkedin.com/in/mhpulok/`
     - GitHub: `https://github.com/Pulok1141`
   - Footer with dynamic year copyright.

---

## 5. Execution & Verification Checklist

- [x] Configure Tailwind CSS, PostCSS, and TypeScript.
- [x] Build theme provider and avoid initial dark/light flash.
- [x] Implement all sections with exact content and responsive layout.
- [x] Validate smooth scrolling, anchor links, and external links.
- [x] Test responsive layouts (mobile 375px, tablet 768px, desktop 1280px+).
- [x] Start local Next.js dev server and verify in browser.
