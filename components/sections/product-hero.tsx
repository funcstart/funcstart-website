import { Button } from "@/components/ui/button";

import { Container } from "../ui/container";

export function ProductHero() {
  return (
    <Container className="flex flex-col items-center pb-16 pt-20 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
        Transform Your Workflow
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
        Discover our powerful suite of tools designed to streamline your
        development process, enhance productivity, and deliver exceptional
        results.
      </p>
      <div className="mt-10 flex items-center gap-6">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">
          View Demo
        </Button>
      </div>
    </Container>
  );
}
