import {
  Globe,
  Lightbulb,
  Linkedin,
  Target,
  Twitter,
  Users,
  X,
  XIcon,
} from "lucide-react";

import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const companyValues = [
  {
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible by providing accessible, user-friendly tools and resources that accelerate development and deployment of impactful projects.",
    Icon: Lightbulb,
    className: "from-blue-500/80",
  },
  {
    title: "Community Driven",
    description:
      "We're building a vibrant community where creators and builders can learn, collaborate, and bring their ideas to life swiftly and efficiently.",
    Icon: Users,
    className: "from-green-500/80",
  },
  {
    title: "Global Impact",
    description:
      "We aim to deliver real value and impact to communities, businesses, and individuals across the globe through innovative software solutions.",
    Icon: Globe,
    className: "from-purple-500/80",
  },
  {
    title: "Vision Focused",
    description:
      "We're dedicated to shaping how people interact with digital products, fostering innovation, and revolutionizing digital experiences.",
    Icon: Target,
    className: "from-orange-500/80",
  },
];

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid-black/[0.02] absolute inset-0 -z-10" />
      <div className="pb-20 pt-28">
        <MaxWidthWrapper>
          <HeaderSection
            label="About Us"
            title="Our Mission & Vision"
            subtitle="Building innovative solutions that empower communities worldwide"
          />

          {/* Mission Statement */}
          <div className="mt-16 rounded-3xl border bg-background/50 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-center text-xl font-semibold">
              Our Mission
            </h3>
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              Our mission is to foster innovation by providing accessible,
              user-friendly tools and resources that accelerate the development
              and deployment of impactful projects. We are dedicated to shaping
              how people interact with digital products, and aim to build a
              vibrant community where creators and builders can learn,
              collaborate, and bring their ideas to life swiftly and
              efficiently.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="mt-8 rounded-3xl border bg-background/50 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-center text-xl font-semibold">
              Our Vision
            </h3>
            <p className="text-center text-lg leading-relaxed text-muted-foreground">
              Our vision is to become a global leader in technology by offering
              innovative software and hardware solutions that empower
              individuals, businesses, and communities. We aim to revolutionize
              education and productivity, making technology more accessible and
              impactful for everyone. Through our products, we strive to shape a
              future where learning, working, and creating are seamless,
              collaborative, and transformative.
            </p>
          </div>

          {/* Company Values */}
          <div className="mt-16">
            <h2 className="text-center text-3xl font-bold">Our Values</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {companyValues.map((value) => (
                <div
                  key={value.title}
                  className="group relative overflow-hidden rounded-3xl border bg-background/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b ${value.className} to-transparent opacity-20 blur-2xl transition-transform duration-500 group-hover:-translate-y-1/4 dark:opacity-10 dark:group-hover:opacity-20`}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-2xl border bg-background/50 shadow-sm">
                        <value.Icon className="size-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                    </div>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-16 text-center">
            <h2 className="mb-6 text-2xl font-bold">Connect With Us</h2>
            <div className="flex justify-center gap-6">
              <a
                href="https://twitter.com/funcstart"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border bg-background/50 px-6 py-3 transition-all hover:bg-muted"
              >
                <Icons.twitter className="ml-2 size-3.5 transition-transform duration-300 group-hover:rotate-12" />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/company/funcstart/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border bg-background/50 px-6 py-3 transition-all hover:bg-muted"
              >
                <Linkedin className="size-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
