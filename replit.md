# Juicebox AI Recruiting Platform

## Overview

This is a SaaS landing page for Juicebox, an AI-powered recruiting platform. The application is built as a full-stack TypeScript project with a React frontend and Express backend. The landing page showcases the platform's features including AI-powered talent search, CRM capabilities, and autonomous recruiting agents. The design follows a premium Juicebox.ai-inspired aesthetic with modern minimalism and strategic visual emphasis.

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
│       │   └── ui/       # shadcn/ui components
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utilities and query client
│       └── pages/        # Page components
├── server/           # Express backend
├── shared/           # Shared types and schemas
└── migrations/       # Drizzle database migrations
```

### Design System
- **Primary Accent**: Orange/Coral (#FF5A30) for CTAs and highlights
- **Typography**: Inter font family with tight tracking for headlines
- **Spacing**: Generous vertical rhythm with max-width constraints (5xl for hero, 7xl for content)
- **Components**: Rounded corners (2xl for cards, full for buttons), subtle shadows with hover elevation

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