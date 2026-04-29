import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ArrowRight, ShieldCheck, Trophy, TrendingUp, Sparkles, BadgeCheck, ShoppingBag, Megaphone, Code2, Camera, GraduationCap, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sellers Growth Point by CLUTCHNEXXT — Risk-Free E-commerce Growth" },
      { name: "description", content: "We help offline brands sell online & scale on Amazon, Flipkart, Meesho, Myntra and more — on a 100% commission-based, risk-free model. Pay only when you sell." },
      { property: "og:title", content: "Sellers Growth Point by CLUTCHNEXXT — Grow Your Business 2X+" },
      { property: "og:description", content: "Performance-driven e-commerce growth partner. End-to-end marketplace management, ads, content, and D2C — risk-free commission model." },
    ],
  }),
  component: HomePage,
});

const MARKETPLACES = ["Amazon", "Flipkart", "Myntra", "Meesho", "Ajio", "JioMart", "IndiaMART", "TradeIndia"];

const SERVICES = [
  { icon: ShoppingBag, title: "Marketplace Management", desc: "End-to-end account management on Amazon, Flipkart, Meesho, Myntra & more." },
  { icon: Megaphone, title: "Performance Advertising", desc: "Meta Ads, Google Ads & Marketplace PPC — optimized for ROI, not vanity metrics." },
  { icon: Code2, title: "Web & D2C Development", desc: "Conversion-focused websites and direct-to-consumer funnels that actually sell." },
  { icon: Camera, title: "Creative & Content", desc: "AI product photography, video ads and graphic design built to convert." },
  { icon: GraduationCap, title: "Online Selling Programs", desc: "Structured learning to run your e-commerce business independently." },
  { icon: BarChart3, title: "Strategy & Analytics", desc: "Sales forecasting, competitor analysis and monthly performance reviews." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(0.78 0.14 80 / 0.25), transparent 40%), radial-gradient(circle at 80% 0%, oklch(0.55 0.18 28 / 0.18), transparent 45%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground/80 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              No Sales, No Commission — Simple.
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[1.05]">
              Grow your business
              <span className="block text-accent">2X+ online.</span>
              <span className="block text-foreground/70 text-2xl sm:text-3xl md:text-4xl mt-3 font-sans font-medium">Risk-free. Performance-driven. CLUTCH.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
              Sellers Growth Point by <span className="font-semibold text-foreground">CLUTCHNEXXT</span> is a performance-driven e-commerce consulting & growth partner. We help offline manufacturers, wholesalers and brands scale on Amazon, Flipkart, Meesho, Myntra and beyond — on a 100% commission basis.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition shadow-lg shadow-accent/20">
                Start Selling Online <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted transition">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Zero upfront cost</div>
              <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-accent" /> Policy-compliant growth</div>
              <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-accent" /> 2X+ growth potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETPLACE STRIP */}
      <section className="border-y border-border bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">We help you sell across</p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-10 gap-y-3">
            {MARKETPLACES.map((m) => (
              <span key={m} className="font-display text-xl md:text-2xl text-foreground/55 hover:text-foreground transition">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we do"
            title={<>End-to-end e-commerce growth, <span className="text-accent">delivered.</span></>}
            description="From account setup and listings to ads, creative, and scaling strategy — every part of your online business, handled."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* COMMISSION MODEL */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, oklch(0.78 0.14 80), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.55 0.18 28), transparent 40%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-6 w-6 mx-auto text-[color:var(--gold)]" />
          <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight">
            Our model? <span className="text-[color:var(--gold)]">Pay us only when you sell.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-primary-foreground/75 max-w-2xl mx-auto">
            We work on a 100% commission-based partnership. No heavy upfront costs, no unnecessary financial risk — our success is fully aligned with your business growth.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { t: "Transparent", d: "Operations you can audit at any time." },
              { t: "Accountable", d: "Performance tied to real, measurable results." },
              { t: "Aligned", d: "If your business grows, we grow." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <BadgeCheck className="h-5 w-5 text-[color:var(--gold)] mx-auto" />
                <p className="mt-3 font-semibold">{b.t}</p>
                <p className="mt-1 text-sm text-primary-foreground/70">{b.d}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] text-[color:var(--gold-foreground)] px-6 py-3 text-sm font-semibold hover:opacity-90">
            Become a CLUTCH partner <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Why CLUTCHNEXXT"
              title={<>Not service providers. <span className="text-accent">Growth partners.</span></>}
              description="We don't just manage platforms — we build, optimize and scale your business across multiple channels using our CLUTCH performance system."
            />
            <ul className="mt-8 space-y-4">
              {[
                "100% Commission-based, risk-free model",
                "End-to-end business handling across marketplaces",
                "Performance-driven execution, not vanity metrics",
                "Policy-compliant, long-term scalable strategies",
                "Dedicated account experts on every project",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <BadgeCheck className="h-5 w-5 text-accent flex-none mt-0.5" />
                  <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-secondary to-card border border-border p-8 md:p-10 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Core promise</p>
              <p className="mt-4 font-display text-2xl md:text-4xl leading-tight">
                "No Sales, <span className="text-accent">No Commission</span> — Simple."
              </p>
              <p className="mt-6 text-muted-foreground">
                We are committed to delivering results, not just services. We help take your business to the next level with CLUTCH performance strategies that drive 2X+ growth.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[{ k: "8+", v: "Marketplaces" }, { k: "2X+", v: "Growth target" }, { k: "0", v: "Upfront cost" }].map((s) => (
                  <div key={s.v} className="rounded-xl bg-background border border-border p-4">
                    <p className="font-display text-2xl text-accent">{s.k}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-accent to-[oklch(0.45_0.18_25)] text-accent-foreground p-10 md:p-14 text-center shadow-xl">
            <h2 className="font-display text-3xl md:text-5xl tracking-tight">Ready to take your brand online?</h2>
            <p className="mt-4 text-accent-foreground/85 max-w-xl mx-auto">Tell us about your business — we'll show you exactly how the CLUTCH system can scale it.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-semibold hover:opacity-90">
              Get a Free Strategy Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
