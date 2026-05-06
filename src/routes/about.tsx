import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/SectionHeader";
import { Target, Eye, Heart, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title={<>We don't just manage platforms — <span className="text-accent">we grow businesses.</span></>}
        description="Sellers Growth Point by CLUTCHNEXXT is a performance-driven e-commerce consulting & growth solutions company dedicated to helping offline manufacturers, wholesalers and business owners successfully establish and scale their presence online."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, t: "Our Mission", d: "Transform traditional businesses into structured, profitable and scalable online brands through end-to-end systems." },
            { icon: Eye, t: "Our Vision", d: "Become the most trusted growth partner for Indian sellers — ethical, policy-compliant and built for the long term." },
            { icon: Heart, t: "Our Promise", d: "If your business grows, we grow. We win only when you do — no exceptions, no fine print." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center"><c.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-xl">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-4 font-display text-3xl md:text-5xl">Risk-Free Growth Approach</h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            We operate on a commission-based model — making it a completely low-risk, performance-driven partnership. <strong className="text-foreground">You pay us only when you make sales.</strong>
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {["No heavy upfront costs", "No unnecessary financial risk", "Complete alignment with your growth"].map((p) => (
              <div key={p} className="rounded-xl bg-card border border-border p-5 text-sm text-foreground/80">{p}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Ready to grow with CLUTCH?</h2>
          <p className="mt-4 text-muted-foreground">Talk to our team — we'll map out your e-commerce growth plan in 30 minutes.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold">
            Book a Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
