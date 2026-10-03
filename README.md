# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, premium editorial visual hierarchy, and mobile responsiveness.

## 🚀 Live Demo
- **Live URL:** [Insert Deployment Link Here]
- **Repository:** [Insert GitHub Repo Link Here]

## 🛠️ Tech Stack
- **Framework:** React 18+ (Vite toolchain)
- **Styling:** Tailwind CSS (custom TIS brand palette & dark mode)
- **Animations:** Framer Motion (useSpring, whileInView, layout transitions)
- **Icons:** Lucide React
- **Deployment:** Vercel / Netlify

---

## ✨ Standout Features Implemented (4 / 4 Complete)

1. **Feature A: Custom Cursor (`CustomCursor.jsx`)**
   - Circular spring ring following mouse coordinates via Framer Motion.
   - Automatically hidden on touch/coarse devices (`@media (pointer: coarse)`).
   - Dynamic scaling and gold highlight on interactive elements (`<a>`, `<button>`, cards).

2. **Feature B: Scroll-Triggered Reveals (`Reveal.jsx`)**
   - Viewport-triggered entrance reveals using Framer Motion's `whileInView` with `viewport={{ once: true }}`.
   - Staggered timing (0.3s to 0.5s duration) with `prefers-reduced-motion` accessibility support.

3. **Feature C: Animated Dark/Light Theme Switcher (`useTheme.js`)**
   - Seamless transition toggle between dark slate and light editorial themes.
   - Toggles `.dark` class on `document.documentElement` and persists preference in `localStorage`.

4. **Feature D: Scroll Progress Bar (`ScrollProgress.jsx`)**
   - Top-edge fixed progress bar indicating page scroll depth using Framer Motion's `useScroll()` and `useSpring()`.

---

## 📦 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🏗️ Component Architecture Overview

```
src/
├── components/
│   ├── ui/               # Atomic UI primitives (Button, Badge, SectionHeading, Card)
│   ├── layout/           # Sticky Navbar, MobileNav drawer, Semantic Footer
│   ├── sections/         # HeroSection, AboutSection, WhyTISSection, AcademicsSection, 
│   │                     # CampusSection, ActivitiesSection, TestimonialsSection, 
│   │                     # AdmissionsSection, CTASection, EnquiryModal
│   └── animation/        # CustomCursor, ScrollProgress, Reveal
├── hooks/                # Custom hooks (useTheme, useScrollProgress, useMousePosition)
├── data/                 # Authentic school content, sports list, navigation, testimonials
├── pages/                # Home page aggregator
├── App.jsx               # Master root component
├── main.jsx              # React 18 DOM entry point
└── index.css             # Tailwind directives & CSS variables
```

---

## 🏛️ Brand Identity Retained

- **Official Colors:** TIS Crimson Red (`#B90124`), Teal Green (`#007A83`), Gold Accent (`#C09D59`), Slate Dark (`#131313`).
- **Core Positioning:** Modern Gurukul Ethos, CBSE Co-Ed Boarding School (Class IV-XII), 22-Acre Campus in Dehradun, 16+ Sports Foundation.
- **Authentic Information:** Address (Dhoolkot, Dehradun), Admissions Helpline (`+91-9837983791`), Landlines (`0135-2699444`), and Rishabh Educational Trust legacy.

---

## 📋 Submission Checklist Verification

- [x] Project builds locally without errors (`npm run build` succeeds).
- [x] All 4 bonus standout features (Cursor, Scroll Reveal, Theme Switcher, Progress Bar) are fully functional.
- [x] Tested on Mobile (375px), Tablet (768px), and Desktop (1280px+).
- [x] No unused dependencies, dead code, or forgotten `console.log()` calls.
- [x] Zero compilation or console errors.
- [x] Comprehensive `README.md` aligned with Technical Reference Guide standards.
