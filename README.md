# AV Technology — Website

Premium dark-futuristic company website for **AV Automation & AI Solutions**.

Built with **React 18 + Vite + Tailwind CSS + Framer-ready animations**.

---

## Features

- **8 Complete Sections**: Hero, About, Services, Projects, Pricing, Testimonials, Blog, Contact
- **Particle Network** background (canvas-based, 80 animated particles with connections)
- **Custom animated cursor** with ring follow effect
- **Typewriter hero** rotating through service keywords
- **Glitch text effect** on main headline
- **Scroll reveal animations** via IntersectionObserver
- **Floating tech cards** in hero with CSS keyframe animations
- **Animated skill bars** and counter stats in About
- **6 Service cards** with hover glow and neon border effects
- **4 Projects** with expandable Problem/Solution/Outcome sections
- **Pricing cards** with billing toggle (monthly/yearly) and popular badge
- **Testimonials slider** with auto-play and dot/arrow navigation
- **4 Blog cards** with newsletter CTA
- **Contact form** with full JS validation, budget selector, loading state
- **Chatbot widget** with quick replies and typing indicator
- **Sticky Navbar** with active section detection and mobile hamburger menu
- **Scan line** and **noise overlay** effects for cyberpunk aesthetic
- **Custom scrollbar** with gradient
- **SEO meta tags** in index.html

---

## Quick Start

### Prerequisites
- Node.js 18+
- npm 8+

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

##  Project Structure

```
av-automation/
├── index.html              # Entry HTML (SEO meta tags, Google Fonts)
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind theme (custom fonts, colors, animations)
├── postcss.config.js       # PostCSS (autoprefixer)
├── public/
│   └── favicon.svg         # Gradient AV logo favicon
└── src/
    ├── main.jsx            # React DOM entry point
    ├── App.jsx             # Root: particles, cursor, scroll reveal, layout
    ├── index.css           # Global CSS (glass, neon, animations, cursor)
    └── components/
        ├── Navbar.jsx      # Sticky nav, active link detection, mobile menu
        ├── Hero.jsx        # Full-screen hero: typewriter, floating cards, CTAs
        ├── About.jsx       # Founders, animated counters, skill bars, timeline
        ├── Services.jsx    # 6 service cards with hover glow
        ├── Projects.jsx    # 4 projects: problem/solution/stack/outcome
        ├── Pricing.jsx     # 3 plans, billing toggle, feature checklist
        ├── Testimonials.jsx # Slider with auto-play, 5 testimonials
        ├── Blog.jsx        # 4 article cards + newsletter form
        ├── Contact.jsx     # Form with validation, WhatsApp/Email CTAs
        ├── Footer.jsx      # Links, contact bar, credits
        └── ChatbotButton.jsx # Floating chatbot with quick replies
```

---

## Design System

### Color Palette
| Variable | Value | Usage |
|----------|-------|-------|
| `--cyan` | `#22d3ee` | Primary accent, links, CTAs |
| `--purple` | `#a855f7` | Secondary accent, gradients |
| `--blue` | `#3b82f6` | Tertiary accent |
| Navy 950 | `#020818` | Page background |
| Navy 900 | `#050d1e` | Card backgrounds |

### Typography
| Font | Usage |
|------|-------|
| **Orbitron** | Headings, buttons, logo, labels |
| **Rajdhani** | Body text, descriptions, paragraphs |
| **JetBrains Mono** | Tags, metadata, code snippets |

---

## Customization

### Update Contact Info
In `Contact.jsx` and `Footer.jsx`:
```jsx
href="https://wa.me/91XXXXXXXXXX"    // Your WhatsApp number
href="mailto:you@yourdomain.com"      // Your email
```

### Update Founders
In `About.jsx` — edit the `founders` array with real LinkedIn/GitHub links.

### Update Projects
In `Projects.jsx` — edit the `projects` array with your actual work.

### Connect Contact Form
Replace the `setTimeout` simulation in `Contact.jsx` with your email API:
```jsx
// Using EmailJS:
await emailjs.send('service_id', 'template_id', form, 'public_key')

// Using Formspree:
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST', body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' }
})
```

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload `dist/` folder to Netlify
```

### GitHub Pages
```bash
# Add to vite.config.js: base: '/repo-name/'
npm run build
# Push dist/ to gh-pages branch
```

---

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3 | UI framework |
| react-dom | ^18.3 | DOM rendering |
| framer-motion | ^11.0 | Animation library (ready to use) |
| lucide-react | ^0.383 | Icon system |
| vite | ^5.3 | Build tool |
| tailwindcss | ^3.4 | Utility CSS |

---

Built with ❤️ by **Akshay Kumar T** & **Vigneswaran** · Coimbatore, India 🇮🇳
