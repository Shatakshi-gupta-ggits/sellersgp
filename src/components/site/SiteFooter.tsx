import { Link } from "@tanstack/react-router";
import { Mail, Phone, Instagram, Facebook, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full ring-1 ring-white/20" />
            <div>
              <div className="font-display text-lg">Sellers Growth Point</div>
              <div className="text-[11px] uppercase tracking-[0.2em] opacity-70">by CLUTCHNEXXT</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/75">
            Performance-driven e-commerce consulting & growth partner. We help offline brands scale online with our CLUTCH performance system. <span className="text-[color:var(--gold)] font-semibold">No sales, no commission — simple.</span>
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/about" className="hover:text-[color:var(--gold)]">About</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--gold)]">Services</Link></li>
            <li><Link to="/marketplaces" className="hover:text-[color:var(--gold)]">Marketplaces</Link></li>
            <li><Link to="/amazon" className="hover:text-[color:var(--gold)]">Amazon Framework</Link></li>
            <li><Link to="/learning" className="hover:text-[color:var(--gold)]">Learning Programs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 8269454968</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> sellersgrowthpoint@gmail.com</li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4" /> sellersgrowthpoint.com</li>
            <li className="flex gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Sellers Growth Point by CLUTCHNEXXT. All rights reserved.</p>
          <p>Crafted with the CLUTCH performance system.</p>
        </div>
      </div>
    </footer>
  );
}
