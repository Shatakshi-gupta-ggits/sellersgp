import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/SectionHeader";
import { ArrowRight, Settings, Package, Megaphone, FileText, MessageCircle, UserCog, BarChart3 } from "lucide-react";

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

const AMAZON_FRAMEWORK = [
  { icon: Settings, title: "Account Setup & Foundation", scope: ["Seller account creation & verification", "Brand registry assistance", "Category approval & compliance", "SEO-optimized listings & keyword research"] },
  { icon: Package, title: "Fulfilment & Operations", scope: ["FBA setup & inventory planning", "Warehouse coordination", "Order processing & tracking", "Return & refund handling"] },
  { icon: Megaphone, title: "Advertising / PPC", scope: ["Sponsored Products, Brands & Display", "Keyword targeting & bidding", "Campaign optimization & scaling", "ACoS / ROI management"] },
  { icon: FileText, title: "Content & Listing Optimization", scope: ["SEO titles, bullets & descriptions", "A+ Content (EBC)", "AI product imagery", "Brand Store design"] },
  { icon: MessageCircle, title: "Customer Service", scope: ["Buyer message handling", "Feedback & review management", "Negative review resolution", "Account health monitoring"] },
  { icon: UserCog, title: "Account Executive Support", scope: ["Daily account monitoring", "Performance tracking", "Issue resolution", "Growth recommendations"] },
  { icon: BarChart3, title: "Strategic Account Management", scope: ["Sales forecasting & expansion", "Product launch strategy", "Competitor analysis", "Monthly performance reviews"] },
];

export default function MarketplacesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="E-commerce Management"
        title={<>Sell where India <span className="text-accent">actually buys.</span></>}
        description="We manage your business across every major Indian marketplace — and we know exactly what works on each one."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {MARKETPLACES.map((m) => (
            <article key={m.name} className="rounded-2xl border border-border bg-card p-7 hover:border-accent/40 hover:shadow-lg transition">
              <div className="flex items-center justify-between gap-3 flex-wrap">
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

      {/* AMAZON FRAMEWORK — folded into E-commerce */}
      <section id="amazon" className="py-16 md:py-20 bg-secondary/40 border-y border-border scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Inside E-commerce</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">Our complete <span className="text-accent">Amazon growth framework</span></h2>
            <p className="mt-4 text-muted-foreground">Every stage of an Amazon business — setup, ops, ads, content, customer service & strategic scaling — handled end-to-end as part of our E-commerce service.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {AMAZON_FRAMEWORK.map((f, i) => (
              <article key={f.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Step {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 font-display text-lg">{f.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/75">
                  {f.scope.map((s) => (
                    <li key={s} className="flex gap-2"><span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-none" />{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
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

      <section className="pb-20">
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
