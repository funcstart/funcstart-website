import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for side projects and small teams.",
    features: [
      "Up to 3 team members",
      "5GB storage",
      "Basic support",
      "Core features",
      "Community access",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    description: "Ideal for growing businesses and teams.",
    features: [
      "Unlimited team members",
      "50GB storage",
      "Priority support",
      "Advanced features",
      "API access",
      "Custom integrations",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs.",
    features: [
      "Custom team setup",
      "Unlimited storage",
      "24/7 dedicated support",
      "All features included",
      "Custom development",
      "SLA guarantee",
      "Advanced security",
    ],
  },
];

export function ProductPricing() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Choose the perfect plan for your needs. All plans include core
          features and updates.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700 xl:p-10"
          >
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8">{tier.name}</h3>
              </div>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <span className="text-sm font-semibold leading-6">
                    /month
                  </span>
                )}
              </p>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {tier.description}
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              className="mt-8"
              variant={tier.name === "Pro" ? "default" : "outline"}
            >
              Get started
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
}
