# Sitebloom - Website Transformation Platform

## Overview

This is a SaaS landing page for Sitebloom, a company that specializes in transforming outdated, slow, or poorly designed websites into modern, high-converting digital storefronts. The application is built as a full-stack TypeScript project with a React frontend and Express backend. The design follows a retro-techy aesthetic with VT323 DOS font, ASCII art effects, and alternating white/purple (#9333EA) section backgrounds.

## Brand

- **Brand Name**: Sitebloom
- **Core Idea**: We fix underperforming websites and help them grow
- **Tone**: Bold, modern, confident, slightly witty (never cheesy)
- **Primary CTA**: "Bloom My Site"
- **Demo credentials**: admin@sitebloom.com / demo123

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for scroll-triggered animations and hover effects
- **Icons**: Lucide React for consistent iconography
- **State Management**: TanStack React Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful endpoints prefixed with `/api`
- **Development**: Vite dev server with HMR integration via custom middleware

### Data Storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Schema**: Defined in `shared/schema.ts` with Zod validation via drizzle-zod
- **Storage Layer**: Abstracted through `IStorage` interface with in-memory implementation for development

### Build System
- **Frontend Build**: Vite outputs to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.cjs`
- **Shared Code**: `shared/` directory contains code used by both frontend and backend

### Project Structure
```
├── client/           # Frontend React application
│   └── src/
│       ├── components/
│       │   ├── landing/  # Landing page sections
│       │   │   ├── Navbar.tsx        # Nav with SITEBLOOM logo, SERVICES/PRICING/WORK/RESULTS links
│       │   │   ├── Hero.tsx          # ASCII grid bg, main headline + CTAs
│       │   │   ├── LogoMarquee.tsx   # Purple strip with dev tool icons
│       │   │   ├── ValueStatement.tsx # Large centered statement
│       │   │   ├── FeatureBlock.tsx   # Tabbed features (Redesign/Performance/Growth)
│       │   │   ├── AgentsGrid.tsx    # 6 service cards grid
│       │   │   ├── SocialProof.tsx   # Platform badges (Shopify, WordPress, etc.)
│       │   │   ├── Testimonials.tsx  # 4 client result cards
│       │   │   ├── FAQ.tsx           # Accordion FAQ with CTA
│       │   │   └── Footer.tsx        # CTA section + link columns
│       │   ├── BookDemoModal.tsx     # "Bloom My Site" form modal
│       │   └── ui/       # shadcn/ui components
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utilities and query client
│       └── pages/        # Page components (Home, SignIn, Dashboard)
├── server/           # Express backend
├── shared/           # Shared types and schemas
└── migrations/       # Drizzle database migrations
```

### Design System
- **Primary Accent**: Purple (#9333EA) for highlights and alternating backgrounds
- **Typography**: VT323 (DOS-style monospace) for nav, labels, buttons; Inter for body
- **Section Pattern**: Alternating white and purple (#9333EA) backgrounds
- **Hero Effect**: ASCII keyboard character grid fading from white center to purple edges
- **Components**: Rounded corners (lg for cards), subtle borders, hover transitions

## Routes
- `/` - Landing page (Home)
- `/signin` - Sign in page
- `/dashboard` - Protected dashboard

## External Dependencies

### UI Framework
- **Radix UI**: Full suite of accessible, unstyled components (dialog, dropdown, accordion, etc.)
- **shadcn/ui**: Pre-configured component library using Radix primitives

### Database & ORM
- **PostgreSQL**: Primary database (requires DATABASE_URL environment variable)
- **Drizzle ORM**: Type-safe SQL query builder and schema management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Animation & Interaction
- **Framer Motion**: Animation library for scroll-triggered and hover animations
- **Embla Carousel**: Carousel/slider functionality

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Zod integration with React Hook Form

### Development Tools
- **Vite**: Development server and build tool
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server code
- **Replit plugins**: Development banner, cartographer, and error overlay for Replit environment
