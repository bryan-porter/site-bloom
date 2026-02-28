import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import Dashboard from "@/pages/Dashboard";

// Service pages
import FullRedesign from "@/pages/services/FullRedesign";
import SpeedOptimization from "@/pages/services/SpeedOptimization";
import MobileOverhaul from "@/pages/services/MobileOverhaul";
import SeoVisibility from "@/pages/services/SeoVisibility";
import Analytics from "@/pages/services/Analytics";
import Pricing from "@/pages/Pricing";

// Resource pages
import Blog from "@/pages/Blog";
import CaseStudies from "@/pages/CaseStudies";
import FreeAudit from "@/pages/FreeAudit";
import SiteGrader from "@/pages/SiteGrader";
import Guides from "@/pages/Guides";

// Platform pages
import Shopify from "@/pages/platforms/Shopify";
import WordPress from "@/pages/platforms/WordPress";
import Webflow from "@/pages/platforms/Webflow";
import Custom from "@/pages/platforms/Custom";

// Company pages
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";

// Legal pages
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

function Router() {
  return (
    <Switch>
      {/* Main pages */}
      <Route path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />

      {/* Service pages */}
      <Route path="/services/full-redesign" component={FullRedesign} />
      <Route path="/services/speed-optimization" component={SpeedOptimization} />
      <Route path="/services/mobile-overhaul" component={MobileOverhaul} />
      <Route path="/services/seo-visibility" component={SeoVisibility} />
      <Route path="/services/analytics" component={Analytics} />
      <Route path="/pricing" component={Pricing} />

      {/* Resource pages */}
      <Route path="/blog" component={Blog} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/free-audit" component={FreeAudit} />
      <Route path="/site-grader" component={SiteGrader} />
      <Route path="/guides" component={Guides} />

      {/* Platform pages */}
      <Route path="/platforms/shopify" component={Shopify} />
      <Route path="/platforms/wordpress" component={WordPress} />
      <Route path="/platforms/webflow" component={Webflow} />
      <Route path="/platforms/custom" component={Custom} />

      {/* Company pages */}
      <Route path="/about" component={About} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />

      {/* Legal pages */}
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
