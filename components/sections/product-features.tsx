import { Clock, Cloud, Code2, Settings2, Shield, Zap } from "lucide-react";

import { Container } from "@/components/ui/container";

const features = [
  {
    name: "Fast Development",
    description:
      "Build and deploy applications faster with our optimized development tools.",
    icon: Zap,
  },
  {
    name: "Secure by Default",
    description:
      "Enterprise-grade security built into every layer of the platform.",
    icon: Shield,
  },
  {
    name: "Real-time Collaboration",
    description:
      "Work together seamlessly with built-in collaboration features.",
    icon: Clock,
  },
  {
    name: "Cloud Native",
    description: "Designed for modern cloud infrastructure and scalability.",
    icon: Cloud,
  },
  {
    name: "Advanced Customization",
    description: "Flexible configuration options to match your specific needs.",
    icon: Settings2,
  },
  {
    name: "Developer First",
    description: "Built by developers, for developers, with excellent DX.",
    icon: Code2,
  },
];

export function ProductFeatures() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
          Powerful Features
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to build modern applications
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Our platform provides all the tools and features you need to create,
          deploy, and scale your applications efficiently.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <feature.icon className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  );
}
