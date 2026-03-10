# 🌐 Jiphin George — Personal Portfolio

A modern, responsive personal portfolio website built with **Next.js 14**, **TypeScript**, and **Styled Components**. Showcasing my projects, skills, experience, education, and certifications.

� **Live:** [jiphingeorge.vercel.app](https://jiphingeorge.vercel.app)

---

## ✨ Features

- **Interactive Home** — Animated hero section with particle background, typewriter effect, and 3D card modal
- **About Me** — Personal bio with social links (GitHub, LinkedIn, Instagram, WhatsApp, Email)
- **Projects Gallery** — Detailed project pages with tech stack, screenshots, video demos, Trello board integration, and team contributors
- **Skills Grid** — Visual skill cards with colored icons for 14 technologies
- **Experience Timeline** — Professional experience displayed in a vertical timeline
- **Education & Certifications** — Academic background and certificate PDFs
- **Contact Form** — Email.js-powered contact form with Calendly meeting scheduler
- **GitHub Activity** — Live GitHub contribution calendar and stats
- **Resume Page** — Embedded Canva resume with download option
- **Dark/Light Mode** — Theme toggle with smooth transitions
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Page Transitions** — Smooth route animations with Framer Motion
- **SEO Optimized** — Meta tags, Open Graph, Twitter cards
- **Cookie Consent** — GDPR-compliant cookie banner
- **404 Page** — Custom error page
- **Privacy Policy & Terms** — Legal pages

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14, React 18 |
| **Language** | TypeScript |
| **Styling** | Styled Components, CSS |
| **Animations** | Framer Motion, React Spring |
| **Icons** | Phosphor React, React Icons |
| **Forms** | React Hook Form, Zod, Email.js |
| **Analytics** | Vercel Analytics, Google Analytics (react-ga4) |
| **UI Libraries** | Mantine, React Modal, React Tabs |
| **Media** | React Player, React Responsive Carousel, React Slick |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
Portfolio/
├── public/                  # Static assets
│   ├── icons/               # Skill & tech icons (PNG, SVG)
│   ├── projects/            # Project screenshots & team images
│   ├── vectors/             # SVG illustrations
│   ├── Gif/                 # Project preview GIFs
│   ├── education/           # Education-related images
│   ├── experience/          # Experience-related images
│   ├── pdf/                 # Downloadable documents
│   ├── *.pdf                # Certificate PDFs
│   ├── jiphin.jpg           # Profile photo
│   └── Logo1.png            # Favicon
│
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Home/            # Hero section + particle background
│   │   ├── Header/          # Navigation bar with social links
│   │   ├── Footer/          # Footer with copyright & links
│   │   ├── CardAbout/       # About preview card
│   │   ├── CardContact/     # Contact CTA card
│   │   ├── Skills/          # Skills grid display
│   │   ├── Projects/        # Project listing & blog cards
│   │   ├── Experience/      # Experience timeline
│   │   ├── Education/       # Education section
│   │   ├── Educations/      # Certifications section
│   │   ├── Contact/         # Contact form + Calendly embed
│   │   ├── Github/          # GitHub activity calendar
│   │   ├── Animations/      # Route transitions & fade-ins
│   │   ├── Settings/        # Theme, music, font size controls
│   │   ├── Links/           # Sidebar social links
│   │   ├── ScrollTop/       # Scroll-to-top button
│   │   ├── Cookies/         # Cookie consent banner
│   │   ├── CV/              # Resume/CV component
│   │   ├── Certifications/  # Certificate viewer
│   │   └── Toaster/         # Toast notifications
│   │
│   ├── pages/               # Next.js pages (routes)
│   │   ├── index.tsx         # Home page (/)
│   │   ├── about.tsx         # About page (/about)
│   │   ├── contact.tsx       # Contact page (/contact)
│   │   ├── projects.tsx      # Projects listing (/projects)
│   │   ├── project/[id].tsx  # Dynamic project detail page
│   │   ├── experience.tsx    # Experience page (/experience)
│   │   ├── resume.tsx        # Resume page (/resume)
│   │   ├── privacypolicy.tsx  # Privacy Policy
│   │   ├── terms&condition.tsx # Terms & Conditions
│   │   ├── 404.tsx           # Custom 404 page
│   │   ├── _app.tsx          # App wrapper (providers, global styles)
│   │   ├── _document.tsx     # Document head (SEO, fonts, meta)
│   │   └── api/              # API routes & widget components
│   │
│   ├── data/                 # Static data files
│   │   ├── skills.ts         # Skills list (14 technologies)
│   │   ├── projects.ts       # Project entries with details
│   │   ├── experiences.ts    # Work experience data
│   │   ├── educations.ts     # Education history
│   │   ├── certifications.ts # Certification details
│   │   └── github.json       # GitHub config
│   │
│   ├── context/              # React contexts (Theme)
│   ├── hooks/                # Custom hooks
│   ├── styles/               # Styled-components themes & globals
│   ├── types/                # TypeScript interfaces
│   └── utils/                # Utility functions
│
├── next.config.js            # Next.js configuration
├── tsconfig.json             # TypeScript config
├── package.json              # Dependencies & scripts
└── .env.local                # Environment variables (not committed)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/JiphinGeorge/Portfolio.git

# Navigate to project
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root with the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_CALENDLY_URL=your_calendly_url
NEXT_PUBLIC_PORTFOLIO_CALENDER_URL=your_google_calendar_url
```

### Build for Production

```bash
npm run build
npm run start
```

---

## 📬 Contact

- **Email:** [jiphingeorge80@gmail.com](mailto:jiphingeorge80@gmail.com)
- **LinkedIn:** [linkedin.com/in/jiphin-george-89315b295](https://www.linkedin.com/in/jiphin-george-89315b295/)
- **GitHub:** [github.com/JiphinGeorge](https://github.com/JiphinGeorge)
- **Instagram:** [instagram.com/jiphin_george](https://www.instagram.com/jiphin_george)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by <strong>Jiphin George</strong>
</p>
