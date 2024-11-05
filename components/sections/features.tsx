import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const products = [
  {
    title: "Uninet",
    description:
      "A collaborative STEM learning platform designed for educational institutions, students, and professionals. Revolutionizing how people learn and interact with STEM subjects.",
    icon: "/logo/uninnet-cropped.svg",
    status: "Coming Soon",
    className: "from-blue-500/80",
  },
  {
    title: "Bukmark",
    description:
      "An intelligent productivity tool for organizing bookmarks, managing notes, and enhancing digital workflows. Your go-to solution for seamless information management.",
    icon: "/logo/bookmarks.svg",
    status: "Coming Soon",
    className: "from-purple-500/80",
  },
];

const Features = () => {
  return (
    <section>
      <div className="pb-6 pt-28">
        <MaxWidthWrapper>
          <HeaderSection
            label="Our Products"
            title="Innovation Meets Functionality"
            subtitle="Discover our suite of products designed to revolutionize learning and productivity."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {products.map((product) => {
              const Icon = Icons[product.icon];
              console.log("Icon for", product.title, ":", Icon);

              return (
                <div
                  className="group relative overflow-hidden rounded-2xl border bg-background p-8"
                  key={product.title}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b ${product.className} to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10`}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="relative flex size-16 rounded-2xl border border-border shadow-sm *:relative *:m-auto *:size-12">
                        <img src={product.icon} />
                      </div>
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">
                        {product.status}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {product.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                      {product.description}
                    </p>

                    <div className="-mb-7 mt-6 flex gap-3 border-t border-muted py-4">
                      <Button
                        variant="secondary"
                        size="sm"
                        rounded="xl"
                        className="px-4"
                        disabled
                      >
                        <span className="flex items-center gap-2">
                          Learn More
                          <Icons.arrowUpRight className="size-4" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Features;
