import { useEffect } from "react";
import { Navbar, Footer } from "@/components/landing";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

function setHeadTag(selector: string, create: () => HTMLElement, value?: string) {
  if (!value) {
    return;
  }

  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = create() as HTMLMetaElement;
    document.head.appendChild(element);
  }
  element.content = value;
}

export function PageLayout({
  children,
  title,
  description,
  ogTitle,
  ogDescription,
  ogType,
}: PageLayoutProps) {
  useEffect(() => {
    document.title = `${title} | SiteBloom`;

    setHeadTag(
      'meta[name="description"]',
      () => {
        const meta = document.createElement("meta");
        meta.name = "description";
        return meta;
      },
      description,
    );

    setHeadTag(
      'meta[property="og:title"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:title");
        return meta;
      },
      ogTitle || `${title} | SiteBloom`,
    );

    setHeadTag(
      'meta[property="og:description"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:description");
        return meta;
      },
      ogDescription || description,
    );

    setHeadTag(
      'meta[property="og:type"]',
      () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:type");
        return meta;
      },
      ogType || "website",
    );
  }, [title, description, ogTitle, ogDescription, ogType]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
