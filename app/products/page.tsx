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
    features: ["Interactive Learning", "Real-time Collaboration", "STEM Focus"],
  },
  {
    title: "Bukmark",
    description:
      "An intelligent productivity tool for organizing bookmarks, managing notes, and enhancing digital workflows. Your go-to solution for seamless information management.",
    icon: "/logo/bookmarks.svg",
    status: "Coming Soon",
    className: "from-purple-500/80",
    features: ["Smart Organization", "Quick Notes", "Workflow Automation"],
  },
];

export default function ProductPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid-black/[0.02] absolute inset-0 -z-10" />
      <div className="pb-20 pt-28">
        <MaxWidthWrapper>
          <HeaderSection
            label="Our Products"
            title="Innovation Meets Functionality"
            subtitle="Discover our suite of products designed to revolutionize learning and productivity."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {products.map((product) => (
              <div
                className="group relative overflow-hidden rounded-3xl border bg-background/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5"
                key={product.title}
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b ${product.className} to-transparent opacity-20 blur-2xl transition-transform duration-500 group-hover:-translate-y-1/4 dark:opacity-10 dark:group-hover:opacity-20`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="relative flex size-20 rounded-2xl border bg-background/50 shadow-sm backdrop-blur-sm transition-transform duration-300 *:relative *:m-auto *:size-14 group-hover:scale-110">
                      <img src={product.icon} alt={`${product.title} logo`} />
                    </div>
                    <span className="inline-flex items-center rounded-full bg-yellow-100/80 px-4 py-1.5 text-sm font-medium text-yellow-800 backdrop-blur-sm dark:bg-yellow-900/30 dark:text-yellow-500">
                      {product.status}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    {product.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center rounded-lg bg-foreground/5 px-3 py-1 text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="-mb-7 mt-8 flex gap-3 border-t border-muted py-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="rounded-xl px-5 transition-transform duration-300 hover:scale-105"
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
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
