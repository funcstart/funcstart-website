import "@/styles/globals.css";

import { Metadata } from "next";
import { fontGeist, fontHeading, fontSans, fontUrban } from "@/assets/fonts";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@/components/analytics";
import { NavMobile } from "@/components/layout/mobile-nav";
import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ),
  title: {
    default: "FuncStart | Innovative Software Solutions",
    template: "%s | FuncStart",
  },
  description:
    "FuncStart creates innovative software solutions that deliver real value to communities, businesses, and individuals worldwide. Specializing in digital learning and productivity tools including Uninet and Bukmark.",
  keywords: [
    "FuncStart",
    "STEM learning platform",
    "Uninet",
    "Bukmark",
    "digital learning",
    "productivity tools",
    "educational technology",
    "collaborative learning",
    "bookmark management",
    "digital workflows",
    "technology innovation",
    "software solutions",
  ],
  authors: [
    {
      name: "FuncStart",
      url: process.env.NEXT_PUBLIC_APP_URL,
    },
  ],
  creator: "FuncStart",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: "FuncStart - Empowering Digital Innovation",
    description:
      "Revolutionizing education and productivity through innovative software solutions. Discover Uninet for collaborative STEM learning and Bukmark for enhanced digital workflows.",
    siteName: "FuncStart",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FuncStart - Innovative Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FuncStart - Empowering Digital Innovation",
    description:
      "Transform your learning and productivity with FuncStart's innovative software solutions. Featuring Uninet for STEM education and Bukmark for digital organization.",
    images: ["/og-image.jpg"],
    creator: "@funcstart",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
  },
  category: "technology",
  classification:
    "Software Development, Educational Technology, Productivity Tools",
  abstract:
    "FuncStart is a forward-thinking technology company dedicated to fostering innovation through accessible, user-friendly tools for digital learning and productivity enhancement.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable,
          fontGeist.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex items-center">
            <NavBar scroll={true} />
            <NavMobile />
          </header>
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Analytics />
          <Toaster richColors closeButton />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
