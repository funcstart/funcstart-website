"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

const AnimatedBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    <div className="duration-[2s] absolute inset-0 bg-gradient-to-r from-[#885ff8]/20 via-secondary/20 to-muted/20 opacity-0 transition-opacity hover:opacity-100" />

    {/* Gradient Orbs */}
    <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#885ff8]/20 blur-3xl" />
    <div className="absolute right-1/4 top-3/4 h-96 w-96 -translate-y-1/2 translate-x-1/2 animate-pulse rounded-full bg-secondary/20 blur-3xl" />
  </div>
);

interface HeroLandingProps {
  stars?: number;
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay * 0.1,
    },
  }),
};

export default function HeroLanding({ stars = 0 }: HeroLandingProps) {
  return (
    <section className="relative min-h-[85vh] space-y-6 overflow-hidden py-12 sm:py-20 lg:py-12">
      <style jsx global>{`
        @keyframes glow {
          0% {
            opacity: 0.4;
            transform: scale(0.95) rotate(0deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05) rotate(180deg);
          }
          100% {
            opacity: 0.4;
            transform: scale(0.95) rotate(360deg);
          }
        }

        .logo-glow::before,
        .logo-glow::after {
          content: "";
          position: absolute;
          inset: -4px;
          background: conic-gradient(
            from 0deg,
            transparent,
            #885ff8,
            transparent
          );
          animation: glow 3s linear infinite;
          border-radius: 1.5rem;
          opacity: 0.5;
        }

        .logo-glow::after {
          animation: glow 3s linear infinite reverse;
          filter: blur(8px);
        }

        .logo-container {
          position: relative;
          z-index: 1;
          background: linear-gradient(
            145deg,
            rgba(136, 95, 248, 0.15),
            rgba(136, 95, 248, 0.05)
          );
          border-radius: 1.5rem;
          backdrop-filter: blur(10px);
          animation: float 6s ease-in-out infinite;
          box-shadow:
            0 0 30px -10px rgba(136, 95, 248, 0.5),
            inset 0 0 0 1px rgba(136, 95, 248, 0.2);
        }

        .logo-inner {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.05)
          );
          border-radius: 1.25rem;
          padding: 2px;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .text-gradient {
          background: linear-gradient(to right, #885ff8, #885ff8aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: textShine 5s ease-in-out infinite alternate;
        }

        @keyframes textShine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      <AnimatedBackground />

      <div className="container relative flex max-w-5xl flex-col items-center gap-5 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="relative size-32">
            <div className="logo-glow absolute inset-0">
              <div className="absolute inset-0 rounded-[1.5rem] bg-[#885ff8]/20 blur-xl" />
            </div>
            <div className="logo-container relative size-full p-4">
              <div className="logo-inner size-full p-1">
                <img
                  src="/logo/logo-white.svg"
                  alt="FuncStart logo"
                  className="size-full drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <Link
            href="https://twitter.com/funcstart"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
                rounded: "full",
              }),
              "group px-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[#885ff8]/25",
            )}
            target="_blank"
          >
            <span className="mr-3 animate-bounce">💡</span>
            <span className="hidden md:flex">Building&nbsp;</span> Software with
            Purpose
          </Link>
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[62px]"
          >
            Creating <span className="text-gradient">Real Impact</span> Through
            Innovation
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          >
            We build products that delivers tangible value to communities,
            businesses, and individuals worldwide. Transforming ideas into
            solutions that make a difference.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex justify-center space-x-2 md:space-x-4"
        >
          <Link
            href="/about"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg", rounded: "full" }),
              "group gap-2 shadow-lg shadow-[#885ff8]/25 transition-all duration-300 hover:scale-105 hover:bg-[#885ff8]",
            )}
          >
            <span>Discover Our Impact</span>
            <Icons.arrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/community"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                rounded: "full",
              }),
              "group px-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#885ff8]/50",
            )}
          >
            <Icons.gitHub className="mr-2 size-4 transition-transform duration-300 group-hover:rotate-12" />
            <p>
              <span className="hidden sm:inline-block">Join Our</span> Community{" "}
            </p>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
