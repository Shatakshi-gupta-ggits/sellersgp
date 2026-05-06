import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/SectionHeader";
import { GraduationCap, Compass, Rocket, ArrowRight, BadgeCheck } from "lucide-react";

const TRACKS = [
  { icon: Compass, title: "Marketplace Selling Foundations", points: ["Account setup on Amazon, Flipkart, Meesho", "Listings, SEO & catalog optimization", "Pricing & competitor strategy"] },
  { icon: Rocket, title: "Ads & Marketing Mastery", points: ["Amazon PPC fundamentals", "Meta Ads (Facebook & Instagram)", "Budget planning & ROI tracking"] },
  { icon: GraduationCap, title: "Practical Execution Guidance", points: ["Real-world case studies", "Step-by-step playbooks", "Long-term scaling principles"] },
];

export default function LearningPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Learning Programs"
        title={<>Learn to <span className="text-accent">sell online</span>, the right way.</>}
        description="Structured programs for individuals and businesses who want to independently manage and grow their online selling journey."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {TRACKS.map((t) => (
            <article key={t.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center"><t.icon className="h-5 w-5" /></div>
              <h3 className="mt-5 font-display text-xl">{t.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2"><BadgeCheck className="h-4 w-4 text-accent mt-0.5 flex-none" />{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Ready to learn?</h2>
          <p className="mt-4 text-muted-foreground">Get details on our next batch and pricing.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold">
            Enroll now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
