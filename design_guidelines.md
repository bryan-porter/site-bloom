# Design Guidelines: Juicebox.ai-Inspired SaaS Landing Page

## Design Approach
**Dark Premium Aesthetic**: Direct inspiration from Juicebox.ai's dark gradient backgrounds, luminous accents, glassmorphism cards, and sophisticated motion.

## Color Palette
- **Primary Background**: Deep navy to purple gradient `#06051B` → `#1C1252`
- **Secondary Background**: Charcoal panels `#0D0C1D`
- **Accent Primary**: Vibrant Coral/Orange `#FF5A30`
- **Accent Secondary**: Luminous Blue `#3AC8F0`
- **Accent Tertiary**: Magenta/Pink highlights
- **Text Primary**: White `#FFFFFF`
- **Text Secondary**: Gray `rgba(255,255,255,0.7)`
- **Text Muted**: `rgba(255,255,255,0.5)`
- **Cards**: Dark glassmorphism with `rgba(255,255,255,0.05)` backgrounds
- **Borders**: Subtle `rgba(255,255,255,0.1)` borders
- **Glow Effects**: Coral/blue radial blurs behind key elements

## Typography System
- **Font Family**: Inter with tight letter-spacing
- **Hero Headline**: `text-5xl md:text-7xl`, bold, `tracking-tight`, `leading-[1.1]`
- **Section Titles**: Large, bold, tracking-tight, white text
- **Body Text**: `rgba(255,255,255,0.7)` for contrast on dark backgrounds
- **Microcopy**: Uppercase, small, letter-spaced labels (e.g., "[01] FEATURES")
- **Feature Labels**: Orange accent color, uppercase, tracking-wider

## Spacing & Layout
- **Max Width**: `max-w-6xl` for hero, `max-w-7xl` for sections
- **Vertical Rhythm**: `py-24` to `py-32` between sections
- **Border Radius**: `rounded-2xl` for cards, `rounded-full` for buttons and pills
- **Container Padding**: `px-4 sm:px-6 lg:px-8`

## Component Design Patterns

### Navigation
- **Fixed navbar** with dark translucent background `bg-[#06051B]/90`
- **Backdrop blur**: `backdrop-blur-xl`
- Logo left, navigation + CTAs right
- **Primary CTA**: Orange pill button with glow effect
- Mobile hamburger with dark drawer

### Hero Section
- **Full-width dark gradient background**
- **Radial gradient orbs**: Coral and blue blurred circles behind content
- **Badge**: Dark pill with coral dot indicator
- **Headline**: Bold white, maximum impact
- **Subhead**: Muted white text
- **CTA Row**: Orange primary + outline secondary buttons
- **Interactive Mockup**: Dark card with search interface
- **Floating Candidate Cards**: Dark glassmorphism with subtle glow, floating animation

### Feature Blocks
- **Tabbed Navigation**: "search | insights | engagement" tabs
- **Dark panels** with subtle diagonal line patterns
- **Alternating layouts**: Text/visual switching sides
- **Orange accent** for labels and highlights
- **Embedded mockups**: Dark interface screenshots

### Cards & Grids
- **Glassmorphism**: `bg-white/5` with `backdrop-blur`, `border-white/10`
- **Glow on hover**: Subtle coral/blue glow borders
- **Shadow Strategy**: Use glow effects instead of traditional shadows
- **AI Agents**: Grid with icon badges, titles, descriptions

### Logo Marquee
- **Continuous horizontal scroll animation**
- **Grayscale logos** that colorize on hover
- **Dark background strip**

### Testimonials
- **Dark cards** with colored accent backgrounds
- **Quote styling**: Italic with quotation marks
- **Avatar + name + role** layout

### FAQ Section
- **Two-column**: Intro left, accordion right
- **Dark background panel** for questions
- **Smooth expand/collapse** animation
- **Chevron rotation** on open/close

### Footer
- **Top CTA**: Large headline section with gradient background
- **Dark footer**: Navy background
- **Link columns**: Organized grid
- **Muted text** for copyright

## Animation Guidelines
- **Scroll Reveals**: Staggered fade-in-up on viewport entry
- **Parallax**: Subtle background movement on scroll
- **Floating Cards**: Continuous gentle float with varying delays
- **Hover Glow**: Cards gain subtle luminous border on hover
- **Marquee**: Infinite smooth scroll for logos
- **Tab Transitions**: Smooth content crossfade

## Glow Effects
- **Hero Orbs**: Large blurred gradient circles (`blur-3xl`)
- **Card Hover**: `box-shadow: 0 0 30px rgba(255,90,48,0.2)`
- **Button Glow**: Subtle coral glow behind primary buttons
- **Accent Lines**: Diagonal grid lines with low opacity

## Responsive Behavior
- **Mobile**: Stack all grids, reduce spacing
- **Navigation**: Hamburger menu with dark drawer
- **Typography**: Scale down headlines on mobile
- **Cards**: Single column on mobile

## Accessibility
- **Contrast**: Ensure white text on dark backgrounds meets WCAG
- **Focus States**: Visible focus rings using accent colors
- **Reduced Motion**: Respect prefers-reduced-motion media query
