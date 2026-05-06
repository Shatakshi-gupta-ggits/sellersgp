import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/SectionHeader";
import { Phone, Mail, Globe, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Thanks! We'll be in touch within 24 hours.");
      form.reset();
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={<>Let's grow your business <span className="text-accent">together.</span></>}
        description="Tell us about your business — we'll show you exactly how the CLUTCH system can scale it. Pay only when you sell."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          {/* Contact info */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl">Get in touch</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="h-9 w-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-none"><Phone className="h-4 w-4" /></span>
                  <div>
                    <p className="text-muted-foreground">Phone</p>
                    <a href="tel:+918269454968" className="font-medium hover:text-accent">+91 8269454968</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-9 w-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-none"><Mail className="h-4 w-4" /></span>
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <a href="mailto:info.sellersgrowthpoint@gmail.com" className="font-medium hover:text-accent break-all">info.sellersgrowthpoint@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-9 w-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-none"><Globe className="h-4 w-4" /></span>
                  <div>
                    <p className="text-muted-foreground">Website</p>
                    <p className="font-medium">sellersgrowthpoint.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-9 w-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-none"><MapPin className="h-4 w-4" /></span>
                  <div>
                    <p className="text-muted-foreground">Office Hours</p>
                    <p className="font-medium">Mon–Sat · 10:00 AM – 7:00 PM IST</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-primary text-primary-foreground p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)] font-semibold">Our Promise</p>
              <p className="mt-3 font-display text-2xl">"No Sales, No Commission — Simple."</p>
              <p className="mt-3 text-sm text-primary-foreground/75">We're committed to delivering results, not just services.</p>
            </div>
          </aside>

          {/* Form */}
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Full name" required />
              <Field name="phone" label="Phone" type="tel" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="email" label="Email" type="email" required />
              <Field name="business" label="Business / Brand name" />
            </div>
            <Select name="service" label="What do you need help with?" options={[
              "Amazon Account Management",
              "Flipkart / Meesho Management",
              "Myntra / Ajio (Fashion)",
              "B2B (IndiaMART / TradeIndia)",
              "Web Development / D2C",
              "Digital Marketing / Meta Ads",
              "Creative & Content",
              "Online Selling Training",
              "Other",
            ]} />
            <div>
              <label className="text-sm font-medium text-foreground/80">Tell us about your business</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Categories, current sales, marketplaces you're on, goals…"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 disabled:opacity-60 w-full sm:w-auto"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {submitting ? "Sending…" : "Send message"}
            </button>
            <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted by Sellers Growth Point regarding your inquiry.</p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground/80">{label}{required && <span className="text-accent"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground/80">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="" disabled>Select a service…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
