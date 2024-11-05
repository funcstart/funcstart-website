import { createElement } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Github,
  MessageSquare,
  Users2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const communityInitiatives = [
  {
    title: "Tech Meetups",
    description:
      "Regular community gatherings where members share knowledge, network, and collaborate on innovative projects. Join our vibrant tech community events.",
    icon: Users2,
    status: "Active",
    className: "from-green-500/80",
    features: ["Monthly Events", "Expert Talks", "Networking"],
  },
  {
    title: "Open Source",
    description:
      "Contribute to our open-source projects and help build the future of technology. Perfect for developers looking to make an impact and gain experience.",
    icon: Github,
    status: "Active",
    className: "from-orange-500/80",
    features: ["Collaborative Projects", "Mentorship", "Code Reviews"],
  },
  {
    title: "Learning Hub",
    description:
      "Access our comprehensive learning resources, workshops, and tutorials. A space dedicated to continuous learning and professional development.",
    icon: BookOpen,
    status: "Coming Soon",
    className: "from-blue-500/80",
    features: ["Workshops", "Resources", "Study Groups"],
  },
  {
    title: "Developer Forum",
    description:
      "Connect with fellow developers, share insights, and get help with technical challenges. Our forum is your go-to place for technical discussions.",
    icon: MessageSquare,
    status: "Coming Soon",
    className: "from-purple-500/80",
    features: ["Q&A", "Knowledge Sharing", "Community Support"],
  },
];

export default function CommunityPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid-black/[0.02] absolute inset-0 -z-10" />
      <div className="pb-20 pt-28">
        <MaxWidthWrapper>
          <HeaderSection
            label="Our Community"
            title="Join Our Growing Community"
            subtitle="Connect, collaborate, and grow with fellow tech enthusiasts in our inclusive community spaces."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {communityInitiatives.map((initiative) => (
              <div
                className="group relative overflow-hidden rounded-3xl border bg-background/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5"
                key={initiative.title}
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b ${initiative.className} to-transparent opacity-20 blur-2xl transition-transform duration-500 group-hover:-translate-y-1/4 dark:opacity-10 dark:group-hover:opacity-20`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="relative flex size-20 rounded-2xl border bg-background/50 shadow-sm backdrop-blur-sm transition-transform duration-300 *:relative *:m-auto *:size-14 group-hover:scale-110">
                      {createElement(initiative.icon, {
                        className: "size-8",
                        strokeWidth: 1.5,
                      })}
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm ${
                        initiative.status === "Active"
                          ? "bg-green-100/80 text-green-800 dark:bg-green-900/30 dark:text-green-500"
                          : "bg-yellow-100/80 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500"
                      }`}
                    >
                      {initiative.status}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    {initiative.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {initiative.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {initiative.features.map((feature) => (
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
                      disabled={initiative.status === "Coming Soon"}
                    >
                      <span className="flex items-center gap-2">
                        Join Now
                        <ArrowUpRight className="size-4" />
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
