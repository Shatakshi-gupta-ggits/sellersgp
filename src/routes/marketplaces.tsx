import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/SectionHeader";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/marketplaces")({
  head: () => ({
    meta: [
      { title: "Marketplaces — Amazon, Flipkart, Myntra, Meesho, Ajio | Sellers Growth Point" },
      { name: "description", content: "End-to-end management on India's top marketplaces: Amazon, Flipkart, Myntra, Meesho, Ajio, IndiaMART, TradeIndia and JioMart." },
      { property: "og:title", content: "Multi-Platform E-commerce Management" },
      { property: "og:description", content: "We manage your business across Amazon, Flipkart, Myntra, Meesho, Ajio, IndiaMART, TradeIndia & JioMart." },
    ],
  }),
  component: MarketplacesPage,
});

const MARKETPLACES = [
  { name: "Amazon", emoji: "🔥", best: "Almost all categories", why: ["High traffic with ready buyers", "Strong logistics (FBA)", "High trust factor"], reality: "Competition is high, but the right strategy + ads = serious sales potential." },
  { name: "Flipkart", emoji: "🛍️", best: "Budget products, mass market", why: ["Strong India-wide customer base", "Tier 2/3 city demand", "Less strict than Amazon"], reality: "Tighter margins but excellent volume." },
  { name: "Myntra", emoji: "👗", best: "Fashion & apparel brands", why: ["Premium audience", "Strong brand-building platform", "High AOV (average order value)"], reality: "Entry approval is tough but the upside is worth it." },
  { name: "Meesho", emoji: "💰", best: "Low-cost products, reselling", why: ["Mostly zero commission", "Easy onboarding", "Best for new sellers"], reality: "Margins low but entry easy — perfect for beginners." },
  { name: "Ajio", emoji: "🧾", best: "Fashion & lifestyle brands", why: ["Fast-growing platform", "Brand-focused audience", "Less competition than Myntra"], reality: "A great alternative to Myntra for fashion brands." },
  { name: "IndiaMART", emoji: "🌍", best: "Manufacturers & wholesalers", why: ["Bulk buyers & B2B leads", "Direct lead generation", "Best for offline-to-online shift"], reality: "The go-to channel for manufacturers." },
  { name: "TradeIndia", emoji: "🏢", best: "Exporters & manufacturers", why: ["B2B + export opportunities", "Strong lead generation"], reality: "Great if you're scaling globally." },
  { name: "JioMart", emoji: "📦", best: "Grocery + general products", why: ["Fast-growing ecosystem", "Strong future potential"], reality: "Early-mover advantage for general categories." },
];

function MarketplacesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Marketplaces"
        title={<>Sell where India <span className="text-accent">actually buys.</span></>}
        description="We manage your business across every major Indian marketplace — and we know exactly what works on each one."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {MARKETPLACES.map((m) => (
            <article key={m.name} className="rounded-2xl border border-border bg-card p-7 hover:border-accent/40 hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl flex items-center gap-2"><span>{m.emoji}</span> {m.name}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold">Best for: {m.best}</span>
              </div>
              <ul className="mt-5 space-y-1.5 text-sm text-foreground/80">
                {m.why.map((w) => (
                  <li key={w} className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-none" />{w}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted-foreground border-t border-border pt-4"><strong className="text-foreground">Reality:</strong> {m.reality}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl text-center">How we work on every marketplace</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              { t: "Account Setup & Foundation", d: "Seller onboarding, category approvals, compliance & SEO-optimized listings." },
              { t: "Fulfilment & Operations", d: "FBA / Flipkart Fulfilment / Meesho logistics, inventory & returns." },
              { t: "Advertising & PPC", d: "Sponsored ads, keyword targeting, ROI/ACoS management & scaling." },
              { t: "Content & Listing Optimization", d: "SEO copy, A+ content, AI creatives, catalog optimization." },
              { t: "Customer Service Management", d: "Buyer messages, reviews, negative feedback resolution." },
              { t: "Strategic Account Management", d: "Forecasting, launches, competitor analysis, monthly reporting." },
            ].map((b) => (
              <div key={b.t} className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold">{b.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Pick a platform. We'll handle the rest.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold">
            Get marketplace plan <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
