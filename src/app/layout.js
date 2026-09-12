import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { PremiumStarsBackground } from "@/components/ui/premium-stars";
import { ThemeProvider } from "@/components/ThemeProvider";
import BlurryBlobTwo from "@/components/BlurryBlobTwo";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://lumenoor.com"),
  title: {
    default: "LumeNoor | Custom Web Development & AI Analytics Agency for US SMBs",
    template: "%s | LumeNoor Agency",
  },
  description:
    "Bespoke frontend web development, AI analytics & strategy integration, Conversion Rate Optimization (CRO), and monthly website management for US small & medium businesses.",
  keywords: [
    "Custom Web Development US",
    "US Small Business Web Design Agency",
    "AI Growth Analytics Integration",
    "Conversion Rate Optimization Agency",
    "Bespoke Frontend Architecture Next.js",
    "Monthly Website Management & Retainer",
    "High Converting Business Websites",
    "AI Traffic Intelligence",
    "US SMB Digital Strategy Agency",
    "Custom React Frontend Engineering",
  ],
  authors: [{ name: "LumeNoor Agency", url: "https://lumenoor.com" }],
  creator: "LumeNoor Agency",
  publisher: "LumeNoor Agency",
  formatDetection: {
    email: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "https://lumenoor.com",
    },
  },
  openGraph: {
    title: "LumeNoor | Custom Web Development & AI Analytics Agency for US SMBs",
    description:
      "Engineered specifically for US small & medium businesses. High-converting custom frontend sites with built-in AI growth strategy.",
    url: "https://lumenoor.com",
    siteName: "LumeNoor Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LumeNoor | Custom Web Dev & AI Growth Strategy",
    description:
      "Bespoke web development and AI analytics integration for US small and medium-sized businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "geo.position": "37.09024;-95.712891",
    "ICBM": "37.09024, -95.712891",
  },
};

export default function RootLayout({ children }) {
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://lumenoor.com/#website",
        "url": "https://lumenoor.com",
        "name": "LumeNoor Agency",
        "description": "Bespoke Custom Web Development & AI Analytics Integration for US Businesses",
        "publisher": {
          "@id": "https://lumenoor.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://lumenoor.com/#organization",
        "name": "LumeNoor",
        "url": "https://lumenoor.com",
        "logo": "https://lumenoor.com/Images/logo-black.png",
        "email": "connect@lumenoor.com",
        "description": "Digital agency delivering tailor-made frontend web development and AI analytics growth strategy for US SMBs.",
        "sameAs": [
          "https://lumenoor.com"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://lumenoor.com/#service",
        "name": "LumeNoor Digital Agency",
        "url": "https://lumenoor.com",
        "priceRange": "$$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Credit Card, Direct Bank Wire, Stripe",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "description": "High-converting custom frontend web development, AI traffic analytics integration, CRO, and monthly website management.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "LumeNoor Core Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Frontend Web Development",
                "description": "100% bespoke, mobile-responsive Next.js frontend site architecture built from scratch for US SMBs."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Analytics & Strategy Integration",
                "description": "Direct AI tracking for user behavior, traffic trends, and lead patterns delivering actionable growth reports."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Conversion Rate Optimization (CRO)",
                "description": "Frictionless form optimization, visual hierarchy enhancement, and continuous behavioral testing."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Monthly Website Management & Support",
                "description": "High-speed hosting, 24/7 security monitoring, routine maintenance, and monthly AI growth strategy reports."
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#8b5cf6" />
        <link rel="alternate" hrefLang="en-us" href="https://lumenoor.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body
        className={`${sora.variable} ${inter.variable} antialiased relative`}
      >
        <ThemeProvider>
          <BlurryBlobTwo
            className="rounded-xl opacity-45"
            firstBlobColor="bg-blue-400"
            secondBlobColor="bg-purple-400"
          />
          <BackgroundRippleEffect rows={8} cols={27} cellSize={90} />
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-10 max-w-full w-full left-0 right-0">
            <PremiumStarsBackground />
          </div>
          <div className="relative z-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
