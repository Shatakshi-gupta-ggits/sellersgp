import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/SectionHeader";
import { ShoppingBag, Globe, Megaphone, Share2, Target, Film, Camera, Palette, Rocket, GraduationCap, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — E-commerce, Marketing, Web & Creative | Sellers Growth Point" },
      { name: "description", content: "End-to-end e-commerce growth services: marketplace management, web development, digital marketing, Meta Ads, creative, and online selling programs." },
      { property: "og:title", content: "Our Services — Sellers Growth Point by CLUTCHNEXXT" },
      { property: "og:description", content: "Marketplace management, web dev, digital marketing, Meta Ads, AI product photography, video ads & online selling programs." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: ShoppingBag,
    title: "E-commerce Marketing",
    desc: "Strategic marketing across online marketplaces to enhance product visibility, improve conversion rates and drive consistent sales growth.",
    points: ["Increasing product visibility", "Improving conversion rates", "Driving consistent revenue growth"],
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance, conversion-focused websites that serve as the digital foundation for your business.",
    points: ["Mobile-responsive design", "Fast loading speed", "SEO-friendly structure", "Conversion optimization"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven strategies to create a strong online presence and generate consistent leads and sales.",
    points: ["Brand visibility across platforms", "Lead generation & customer acquisition", "Performance tracking & optimization"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Strategic content planning and execution to build a powerful, engaging brand presence.",
    points: ["Content strategy & planning", "Audience engagement", "Brand positioning"],
  },
  {
    icon: Target,
    title: "Meta Ads (FB & Instagram)",
    desc: "Highly targeted Meta ad campaigns that reach the right audience and deliver strong ROI.",
    points: ["Advanced audience targeting", "Creative testing & optimization", "Cost-efficient lead generation"],
  },
  {
    icon: Film,
    title: "Video Content Advertising",
    desc: "High-impact video advertising strategies focused on storytelling and engagement to drive conversions.",
    points: ["High-converting video concepts", "Story-driven content", "Platform-specific creatives"],
  },
  {
    icon: Camera,
    title: "AI-Based Product Photography",
    desc: "AI-powered product photography solutions for visually appealing, professional images.",
    points: ["Clean product presentation", "Background & lifestyle enhancement", "Conversion-focused visuals"],
  },
  {
    icon: Palette,
    title: "Graphic Design & Video Editing",
    desc: "Visually compelling designs and videos that strengthen your brand and marketing performance.",
    points: ["Social media creatives", "Ad creatives & banners", "Promotional videos"],
  },
  {
    icon: Rocket,
    title: "Advertising Solutions",
    desc: "Performance-driven paid campaigns across multiple platforms to maximize reach and ROI.",
    points: ["Multi-platform advertising", "ROI-focused campaigns", "Continuous optimization"],
  },
  {
    icon: GraduationCap,
    title: "Online Selling Programs",
    desc: "Structured learning programs for individuals & businesses to manage their online selling journey.",
    points: ["Step-by-step execution guidance", "Real-world strategies", "Long-term business understanding"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title={<>Everything you need to <span className="text-accent">sell, scale and win</span> online.</>}
        description="Performance-led services across marketplaces, ads, web, content and learning — all built around the CLUTCH growth system."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-lg transition">
              <div className="h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-foreground/70">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-none" />{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-border bg-secondary/50 p-10 md:p-14">
            <h2 className="font-display text-3xl md:text-5xl">Not sure where to start?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">We'll map your business model to the right services — and you only pay when sales come in.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold">
              Talk to a strategist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
