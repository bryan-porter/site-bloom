import {
  Navbar,
  Hero,
  LogoMarquee,
  ValueStatement,
  FeaturesSection,
  AgentsGrid,
  SocialProof,
  Testimonials,
  FAQ,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06051B]">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <ValueStatement />
        <FeaturesSection />
        <AgentsGrid />
        <SocialProof />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
