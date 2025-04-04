import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "MCPHub - One Endpoint, Infinite MCP Servers",
  description: "A unified hub server that consolidates multiple MCP servers into a single SSE endpoint",
  openGraph: {
    type: "website",
    url: "https://github.com/samanhappy/mcphub",
    title: "MCPHub - One Endpoint, Infinite MCP Servers",
    description: "A unified hub server that consolidates multiple MCP servers into a single SSE endpoint",
    images: [
      {
        url: "https://github.com/samanhappy/mcphub/raw/main/assets/dashboard.png",
        width: 1200,
        height: 630,
        alt: "MCPHub Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/samanhappy/mcphub",
    title: "MCPHub - One Endpoint, Infinite MCP Servers",
    description: "A unified hub server that consolidates multiple MCP servers into a single SSE endpoint",
    images: [
      "https://github.com/samanhappy/mcphub/raw/main/assets/dashboard.png",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      {/* <TestimonialSection /> */}
      {/* <TeamSection /> */}
      <CommunitySection />
      {/* <PricingSection /> */}
      {/* <ContactSection /> */}
      <FAQSection />
      {/* <FooterSection /> */}
    </>
  );
}
