import Link from "next/link";

import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const footerLinks = {
  products: {
    title: "Products",
    links: [
      { label: "Features", href: "/products#features" },
      { label: "Solutions", href: "/products#solutions" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  community: {
    title: "Community",
    links: [
      { label: "Discord", href: "/discord" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          {/* Logo and Description Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex">
              <img
                src={"/logo/logo-small-white.svg"}
                height={140}
                width={140}
                alt="company_logo"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Building the future of digital innovation, one solution at a time.
            </p>
          </div>

          {/* Navigation Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h3 className="font-semibold">{section.title}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between border-t py-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Funcstart. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link
              href="https://twitter.com/funcstart"
              className="text-muted-foreground hover:text-foreground"
            >
              <Icons.twitter className="size-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://github.com/funcstart"
              className="text-muted-foreground hover:text-foreground"
            >
              <Icons.gitHub className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="/discord"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Discord</span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
