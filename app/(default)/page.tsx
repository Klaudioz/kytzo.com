export const metadata = {
  title: "Kytzo - AI Automation Solutions",
  description: "We optimize processes, automate workflows, and elevate businesses with intelligent AI solutions.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Engineers from "@/components/engineers";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Engineers />
      <Cta />
    </>
  );
}
