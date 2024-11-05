"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

const navLinks = [
  { title: "Products", href: "/products" },
  { title: "Community", href: "/community" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);

  const selectedLayout = useSelectedLayoutSegment();
  const documentation = selectedLayout === "docs";

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <MaxWidthWrapper
        className="flex h-14 items-center justify-between py-4"
        large={documentation}
      >
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex">
            <img
              src={"/logo/logo-small-white.svg"}
              height={120}
              width={120}
              alt="company_logo"
            />
          </Link>

          <nav className="hidden gap-6 md:flex">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${selectedLayout}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          {documentation ? (
            <div className="hidden flex-1 items-center space-x-4 sm:justify-end lg:flex">
              <div className="flex lg:hidden">
                <Icons.search className="size-6 text-muted-foreground" />
              </div>
              <div className="flex space-x-4">
                {/* <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.gitHub className="size-7" />
                  <span className="sr-only">GitHub</span>
                </Link> */}
              </div>
            </div>
          ) : null}
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
