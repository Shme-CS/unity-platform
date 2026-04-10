# Unity Platform - CTC Club Learning Platform

A modern, production-ready learning platform frontend built with React, TypeScript, Tailwind CSS, and Vite.

## 🚀 Features

- ✅ Modern React 18 with TypeScript
- ✅ Vite for lightning-fast development
- ✅ Tailwind CSS for utility-first styling
- ✅ Fully responsive design (mobile-first)
- ✅ Accessible components (WCAG AA compliant)
- ✅ Production-ready architecture
- ✅ Reusable component library
- ✅ Clean code structure

## 📦 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: npm/yarn

## 🛠️ Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Install dependencies**:
```bash
cd unity-platform
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open browser**:
Navigate to [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
unity-platform/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Courses.tsx
│   │   │   ├── LearningPaths.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Community.tsx
│   │   │   ├── Support.tsx
│   │   │   ├── Events.tsx
│   │   │   ├── Pricing.tsx
│   │   │   └── CTA.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Container.tsx
│   │       └── SectionTitle.tsx
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Component Library

### UI Components

#### Button
Fully featured button with variants, sizes, and link support.

```tsx
import Button from '@/components/ui/Button'

<Button variant="primary" size="lg">Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline" href="/link">Link Button</Button>
```

#### Card
Reusable card component with hover effects.

```tsx
import Card from '@/components/ui/Card'

<Card hover className="p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

#### Badge
Small badge component for labels and tags.

```tsx
import Badge from '@/components/ui/Badge'

<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
```

#### Container
Responsive container with max-width and padding.

```tsx
import Container from '@/components/ui/Container'

<Container>
  <div>Your content</div>
</Container>
```

#### SectionTitle
Consistent section headers with label, title, and subtitle.

```tsx
import SectionTitle from '@/components/ui/SectionTitle'

<SectionTitle
  label="Features"
  title="Amazing Features"
  subtitle="Everything you need"
  centered
/>
```

## 🚀 Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📝 Development Guidelines

### Code Style

- Use TypeScript for all components
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components small and focused
- Write accessible HTML

### Component Structure

```tsx
import { ReactNode } from 'react'

interface ComponentProps {
  children: ReactNode
  className?: string
}

export default function Component({ children, className = '' }: ComponentProps) {
  return (
    <div className={`base-classes ${className}`}>
      {children}
    </div>
  )
}
```

### Naming Conventions

- **Components**: PascalCase (Button, Navbar)
- **Files**: PascalCase (Button.tsx, Navbar.tsx)
- **Functions**: camelCase (handleClick, fetchData)
- **Constants**: UPPER_SNAKE_CASE (API_URL)

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Features Implemented

### Sections
- ✅ Navbar (sticky, responsive, mobile menu)
- ✅ Hero (with CTA, search, social proof)
- ✅ Stats (4 key metrics)
- ✅ Features (6 platform features)
- ✅ Courses (4 featured courses)
- ✅ Learning Paths (2 career paths)
- ✅ How It Works (5-step process)
- ✅ Testimonials (3 student stories)
- ✅ Projects (3 real projects)
- ✅ Community (engagement section)
- ✅ Support (3 support channels)
- ✅ Events (3 upcoming events)
- ✅ Pricing (2 pricing tiers)
- ✅ CTA (final call-to-action)
- ✅ Footer (links, newsletter, copyright)

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- ✅ Responsive navigation
- ✅ Flexible grid layouts
- ✅ Touch-friendly interactions

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Alt text for images

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 👤 Author

Built following senior frontend engineering best practices.

## 🙏 Acknowledgments

- Design from Figma prototype
- Built with React, TypeScript, and Tailwind CSS
- Icons from Heroicons

---

**Made with ❤️ and TypeScript**
