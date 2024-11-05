import Image from "next/image";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function BentoGrid() {
  return (
    <section className="py-32">
      <MaxWidthWrapper>
        <div className="relative z-10 grid grid-cols-6 gap-3">
          {/* Innovation Card */}
          <div className="relative col-span-full flex overflow-hidden rounded-2xl border bg-background p-8 lg:col-span-2">
            <div className="relative m-auto size-fit">
              <div className="relative flex h-24 w-56 items-center">
                <div className="absolute inset-0 size-full rounded-full bg-gradient-to-r from-[#885ff8] via-[#885ff8]/80 to-[#885ff8]/60 opacity-20 blur-2xl" />
                <span className="text-gradient_indigo-purple mx-auto block w-fit bg-gradient-to-r from-[#885ff8] via-[#885ff8]/80 to-[#885ff8]/60 bg-clip-text font-heading text-5xl text-transparent">
                  100%
                </span>
              </div>
              <h2 className="mt-6 text-center font-heading text-3xl md:text-4xl lg:text-[40px]">
                Innovation
              </h2>
            </div>
          </div>

          {/* Global Accessibility Card */}
          <div className="relative col-span-full overflow-hidden rounded-2xl border bg-background p-8 sm:col-span-3 lg:col-span-2">
            <div>
              <div className="relative mx-auto flex aspect-square size-32 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#885ff8] via-[#885ff8]/80 to-[#885ff8]/60 opacity-20 blur-xl" />
                <svg
                  className="m-auto size-12 text-[#885ff8]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
                  />
                </svg>
              </div>
              <div className="relative z-10 mt-8 space-y-1.5 text-center">
                <h2 className="text-lg font-medium text-foreground">
                  Global Accessibility
                </h2>
                <p className="text-muted-foreground">
                  Making technology accessible and impactful for everyone,
                  everywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Community Impact Card */}
          <div className="relative col-span-full overflow-hidden rounded-2xl border bg-background p-8 sm:col-span-3 lg:col-span-2">
            <div>
              <div className="relative mx-auto flex aspect-square size-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#885ff8] via-[#885ff8]/80 to-[#885ff8]/60 opacity-20 blur-xl" />
                <svg
                  className="m-auto size-12 text-[#885ff8]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div className="relative z-10 mt-8 space-y-1.5 text-center">
                <h2 className="text-lg font-medium text-foreground">
                  Community-Driven
                </h2>
                <p className="text-muted-foreground">
                  Building a vibrant ecosystem where creators and builders
                  thrive together.
                </p>
              </div>
            </div>
          </div>

          {/* Real Impact Card */}
          <div className="relative col-span-full overflow-hidden rounded-2xl border bg-background p-8 lg:col-span-3">
            <div className="grid sm:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                <div className="relative flex aspect-square size-12">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#885ff8] via-[#885ff8]/80 to-[#885ff8]/60 opacity-20 blur-lg" />
                  <svg
                    className="m-auto size-6 text-[#885ff8]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-medium text-foreground">
                    Real Value Delivery
                  </h2>
                  <p className="text-muted-foreground">
                    Creating solutions that deliver tangible impact to
                    communities and businesses worldwide.
                  </p>
                </div>
              </div>
              {/* Keep existing graph/chart visualization */}
            </div>
          </div>

          {/* User-Centric Innovation Card */}
          <div className="relative col-span-full overflow-hidden rounded-2xl border bg-background p-8 lg:col-span-3">
            <div className="grid h-full sm:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                <div className="relative flex aspect-square size-12">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#885ff8] via-[#885ff8]/80 to-[#885ff8]/60 opacity-20 blur-lg" />
                  <svg
                    className="m-auto size-6 text-[#885ff8]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-medium text-foreground">
                    User-Centric Approach
                  </h2>
                  <p className="text-muted-foreground">
                    Empowering users with intuitive tools that transform how
                    they learn, work, and create.
                  </p>
                </div>
              </div>
              {/* Keep existing team/collaboration visualization */}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
