import {
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Drop us a line anytime",
    value: "hello@funcstart.com",
    href: "mailto:hello@funcstart.com",
  },
  //   {
  //     icon: MapPin,
  //     title: "Office",
  //     description: "Come say hello",
  //     value: "San Francisco, CA",
  //     href: "#",
  //   },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon-Fri from 8am to 5pm",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "Follow us on Twitter",
    value: "@funcstart",
    href: "https://twitter.com/funcstart",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect with us on LinkedIn",
    value: "FuncStart",
    href: "https://www.linkedin.com/company/funcstart/",
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid-black/[0.02] absolute inset-0 -z-10" />
      <div className="pb-20 pt-28">
        <MaxWidthWrapper>
          <HeaderSection
            label="Contact Us"
            title="Get in Touch"
            subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-3xl border bg-background/50 p-8 backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px] resize-none bg-background"
                  />
                </div>

                <Button className="w-full">Send Message</Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="grid gap-8 sm:grid-cols-2">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className="group relative overflow-hidden rounded-3xl border bg-background/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-foreground/10 to-transparent opacity-20 blur-2xl transition-transform duration-500 group-hover:-translate-y-1/4 dark:opacity-10 dark:group-hover:opacity-20"
                  />
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-2xl border bg-background/50 shadow-sm">
                        <method.icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {method.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>
                    <a
                      href={method.href}
                      className="mt-4 block text-lg font-medium hover:underline"
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
