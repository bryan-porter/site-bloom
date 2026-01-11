# Design Guidelines: Juicebox.ai-Inspired SaaS Landing Page

## Design Approach
**Reference-Based Design**: Direct inspiration from Juicebox.ai's premium SaaS aesthetic, combining modern minimalism with strategic visual emphasis.

## Color Palette
- **Backgrounds**: `slate-50` or `zinc-50` for light sections
- **Text**: `slate-900` for primary text
- **Accent**: Vibrant Orange/Coral `#FF5A30` for CTAs and highlights
- **Cards**: White backgrounds with subtle shadows
- **Testimonials**: Very light orange or light gray card backgrounds

## Typography System
- **Font Family**: Inter (clean sans-serif)
- **Hero Headline**: `text-5xl md:text-7xl`, bold, tight leading
- **Section Titles**: Large, bold, tracking-tight
- **Body Text**: Standard Inter weights for readability
- **Badges/Pills**: Smaller text in pill-shaped containers

## Spacing & Layout
- **Max Width**: `max-w-5xl` for hero, `max-w-7xl` for features
- **Vertical Rhythm**: Generous spacing between sections
- **Border Radius**: `rounded-2xl` for cards, `rounded-full` for buttons and pills
- **Container Padding**: Consistent horizontal padding across breakpoints

## Component Design Patterns

### Navigation
- **Sticky navbar** with `backdrop-blur-md`, `bg-white/80`, `z-50`
- Logo left, navigation + CTAs right
- Mobile hamburger drawer pattern
- Primary CTA: Orange pill button

### Hero Section
- Centered layout with badge → headline → subhead → CTA row structure
- **Headline**: Maximum visual impact, bold typography
- **CTA Pattern**: Primary orange button + outline secondary button side-by-side
- **Interactive Element**: Large chat interface mockup with floating candidate cards using absolute positioning
- **Card Animations**: Subtle float effect on candidate cards

### Feature Blocks (Alternating Layout)
- **Pattern**: Text Left/Image Right → Image Left/Text Right alternating
- **Visual Placeholders**: Gray rounded rectangles for product screenshots
- **Structure**: Title, description, CTA button per block
- Three distinct features: Search & CRM, Insights, Engagement

### Cards & Grids
- **AI Agents Grid**: 3-column layout with white cards
- **Shadow Strategy**: `shadow-sm` default, `hover:shadow-xl` transition
- **Testimonial Grid**: 4 cards with colored backgrounds
- **Integration Logos**: Horizontal flex row, grayscale treatment

### Interactive Elements
- **FAQ Accordion**: Two-column desktop (intro left, questions right), collapsible items
- **Hover Effects**: Shadow elevation on cards, subtle transitions
- **Scroll Animations**: Fade-in with `opacity: 0, y: 20` → `opacity: 1, y: 0` using Framer Motion

### Footer Structure
- **Top Callout**: Large dark hero-style CTA section
- **Link Columns**: 5-column grid (Product, Resources, Partners, Company, Security)
- **Bottom Bar**: Copyright, legal links

## Animation Guidelines
- **Scroll Animations**: Subtle fade-in on scroll for all major sections
- **Hover Effects**: Card shadow transitions, button states
- **Hero Elements**: Floating animation on candidate cards
- **Performance**: Keep animations subtle and performant

## Images & Visuals
- **Hero**: Chat interface mockup with floating candidate cards (avatars, names, role tags)
- **Feature Blocks**: Product screenshot placeholders (gray rounded rectangles)
- **Candidate Cards**: Include dummy avatars, names (e.g., "Dean Wiegand"), roles, skill tags (Python, React)
- **Social Proof**: Text-based logo placeholders styled as brand marks

## Responsive Behavior
- **Mobile Navigation**: Hamburger menu drawer
- **Grid Adaptations**: 3-column → 2-column → 1-column as needed
- **FAQ Layout**: Two-column desktop → stacked mobile
- **Text Scaling**: Responsive typography from mobile to desktop
- **Card Layouts**: Maintain readability and touch targets on all devices

## Accessibility & UX
- **Interactive States**: Clear hover, active, focus states
- **Touch Targets**: Adequate sizing for mobile interactions
- **Contrast**: Maintain WCAG standards with slate-900 on light backgrounds
- **Navigation**: Clear visual hierarchy and logical tab order