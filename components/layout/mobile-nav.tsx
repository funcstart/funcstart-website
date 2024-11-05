"use client";

import { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/shared/icons";

const navLinks = [
  { title: "Products", href: "/products" },
  { title: "Community", href: "/community" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export function NavMobile() {
  const [open, setOpen] = useState(false);
  const selectedLayout = useSelectedLayoutSegment();
  const documentation = selectedLayout === "docs";

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "ml-auto hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden",
          )}
        >
          <Menu className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="px-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src={"/logo/logo-small-white.svg"}
                height={120}
                width={120}
                alt="company_logo"
              />{" "}
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            {documentation ? (
              <>
                <Link href="/docs" className="font-semibold">
                  Documentation
                </Link>
                <Link
                  href="/docs/getting-started"
                  className="text-muted-foreground"
                >
                  Getting Started
                </Link>
                <Link href="/docs/components" className="text-muted-foreground">
                  Components
                </Link>
                <Link href="/docs/theming" className="text-muted-foreground">
                  Theming
                </Link>
              </>
            ) : (
              <>
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="font-semibold hover:text-foreground/80"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
