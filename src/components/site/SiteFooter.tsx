import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook, Globe, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <h3 className="font-display text-2xl md:text-3xl tracking-tight">
              Ready to scale your brand online?
            </h3>
            <p className="mt-1 text-sm text-primary-foreground/70">
              Book a free strategy call. Pay only when you sell.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition"
          >
            Book a Free Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-md ring-1 ring-white/15" />
            <div>
              <div className="font-display text-lg leading-tight">Sellers Growth Point</div>
              <div className="text-[11px] uppercase tracking-[0.22em] opacity-70">by CLUTCHNEXXT</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            Performance-driven e-commerce consulting & growth partner. We help offline brands scale
            online with our CLUTCH performance system.{" "}
            <span className="text-[color:var(--gold)] font-semibold">
              No sales, no commission — simple.
            </span>
          </p>
          <div className="mt-5 flex gap-2">
            <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Website" className="p-2 rounded-md bg-white/10 hover:bg-white/20">
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Explore</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-[color:var(--gold)]">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--gold)]">Services</Link></li>
            <li><Link to="/marketplaces" className="hover:text-[color:var(--gold)]">E-commerce</Link></li>
            <li><Link to="/learning" className="hover:text-[color:var(--gold)]">Learning Programs</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--gold)]">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-90">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 text-[color:var(--gold)]" />
              <a href="tel:+918269454968" className="hover:text-[color:var(--gold)]">+91 8269454968</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 text-[color:var(--gold)]" />
              <a href="mailto:info.sellersgrowthpoint@gmail.com" className="hover:text-[color:var(--gold)] break-all">
                info.sellersgrowthpoint@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Globe className="h-4 w-4 mt-0.5 text-[color:var(--gold)]" />
              <span>sellersgrowthpoint.com</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 text-[color:var(--gold)]" />
              <span>India — serving brands nationwide</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/55">
          <p>© {new Date().getFullYear()} Sellers Growth Point by CLUTCHNEXXT. All rights reserved.</p>
          <p>Crafted with the CLUTCH performance system.</p>
        </div>
      </div>
    </footer>
  );
}
