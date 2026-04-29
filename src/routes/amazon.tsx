import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/SectionHeader";
import { Settings, Package, Megaphone, FileText, MessageCircle, UserCog, BarChart3, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/amazon")({
  head: () => ({
    meta: [
      { title: "Amazon Complete Service Framework | Sellers Growth Point by CLUTCHNEXXT" },
      { name: "description", content: "End-to-end Amazon management: account setup, FBA, advertising, content, customer service & strategic growth — on a commission-based model." },
      { property: "og:title", content: "Amazon Complete Service Framework" },
      { property: "og:description", content: "From seller account creation to scaling — every stage of your Amazon business, professionally managed." },
    ],
  }),
  component: AmazonPage,
});

const FRAMEWORK = [
  { icon: Settings, title: "Generalist Services", subtitle: "Complete Account Setup & Foundation", scope: ["Seller account creation & verification", "Brand registry assistance", "Category approval & compliance setup", "SEO-optimized product listings", "Keyword research & backend setup", "Pricing strategy & competitor analysis"], objective: "Build a strong, error-free foundation for long-term growth." },
  { icon: Package, title: "Fulfilment Management", subtitle: "Operations & Logistics", scope: ["FBA setup & management", "Inventory planning & stock management", "Warehouse coordination", "Order processing & tracking", "Return & refund handling"], objective: "Maintain operational efficiency and improve customer satisfaction." },
  { icon: Megaphone, title: "Advertising Management", subtitle: "Amazon Ads / PPC", scope: ["Sponsored Products, Brands & Display Ads", "Keyword targeting & bidding strategy", "Campaign optimization & scaling", "ACoS / ROI management", "Data analysis & reporting"], objective: "Generate profitable sales with optimized ad spend." },
  { icon: FileText, title: "Content & Listing Optimization", subtitle: "Conversion-focused content", scope: ["SEO titles, bullets & descriptions", "A+ Content (Enhanced Brand Content)", "Product image strategy (AI creatives)", "Storefront design (Brand Store)"], objective: "Increase conversion rate and build a strong brand presence." },
  { icon: MessageCircle, title: "Customer Service Management", subtitle: "Account health & ratings", scope: ["Buyer message handling", "Feedback & review management", "Negative review resolution", "Return & refund communication"], objective: "Improve customer satisfaction and protect seller reputation." },
  { icon: UserCog, title: "Account Executive Support", subtitle: "Dedicated daily expert", scope: ["Daily account monitoring", "Performance tracking", "Issue resolution support", "Growth recommendations"], objective: "Ensure smooth account operations and continuous improvement." },
  { icon: BarChart3, title: "Strategic Account Management", subtitle: "Scaling & Growth", scope: ["Business growth strategy planning", "Sales forecasting & expansion planning", "New product launch strategy", "Competitor analysis & market positioning", "Monthly performance review & reporting"], objective: "Scale your Amazon business with a structured, data-driven approach." },
];

function AmazonPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Amazon Framework"
        title={<>Your complete <span className="text-accent">Amazon growth</span> system.</>}
        description="End-to-end Amazon account management covering every stage of your selling journey — setup, ops, ads, content, customer service and strategic scaling."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {FRAMEWORK.map((f, i) => (
            <article key={f.title} className="rounded-2xl border border-border bg-card p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-6">
              <div className="flex md:flex-col items-center md:items-start gap-3">
                <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <f.icon className="h-6 w-6" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Step {String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3 className="font-display text-2xl">{f.title}</h3>
                <p className="text-sm text-accent font-semibold mt-0.5">{f.subtitle}</p>
                <div className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                  {f.scope.map((s) => (
                    <p key={s} className="text-sm text-foreground/80 flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-none" />{s}</p>
                  ))}
                </div>
                <p className="mt-5 text-sm border-t border-border pt-4 text-muted-foreground"><strong className="text-foreground">Objective:</strong> {f.objective}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl">
            <span className="text-[color:var(--gold)]">2X+ growth</span> with the CLUTCH system.
          </h2>
          <p className="mt-5 text-primary-foreground/80">
            We don't just manage your Amazon account — we build, optimize and scale your business using a complete CLUTCH performance system.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] text-[color:var(--gold-foreground)] px-6 py-3 text-sm font-semibold">
            Start with Amazon <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
