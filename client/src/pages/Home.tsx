import {
  Navbar,
  Hero,
  ValueProp,
  FeaturesSection,
  AgentsGrid,
  SocialProof,
  Testimonials,
  FAQ,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
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
