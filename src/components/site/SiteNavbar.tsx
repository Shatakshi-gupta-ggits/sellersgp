import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/marketplaces", label: "E-commerce" },
  { to: "/learning", label: "Learning" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility strip */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <p className="opacity-80">
            <span className="text-[color:var(--gold)] font-semibold">No Sales, No Commission</span> — risk-free e-commerce growth partner.
          </p>
          <div className="flex items-center gap-5 opacity-90">
            <a href="tel:+918269454968" className="inline-flex items-center gap-1.5 hover:text-[color:var(--gold)]">
              <Phone className="h-3.5 w-3.5" /> +91 8269454968
            </a>
            <a href="mailto:info.sellersgrowthpoint@gmail.com" className="hover:text-[color:var(--gold)]">
              info.sellersgrowthpoint@gmail.com
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all ${
          scrolled
            ? "bg-background/95 backdrop-blur shadow-[0_1px_0_0_var(--border)]"
            : "bg-background border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="Sellers Growth Point logo"
              className="h-9 w-9 rounded-md object-cover ring-1 ring-border"
            />
            <div className="leading-tight">
              <div className="font-display text-base font-semibold tracking-tight">
                Sellers Growth Point
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                by CLUTCHNEXXT
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-[13.5px] font-medium transition ${
                    isActive ? "text-foreground font-semibold after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:-bottom-[22px] after:h-[2px] after:bg-accent" : "text-foreground/70 hover:text-foreground"
                  }`
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918269454968"
              className="text-sm font-semibold text-foreground/80 hover:text-accent"
            >
              +91 8269454968
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-md bg-accent text-accent-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition shadow-sm"
            >
              Book a Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="px-4 py-3 flex flex-col">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-2.5 text-sm font-medium border-b border-border/60 last:border-0 ${isActive ? "text-accent font-semibold" : "text-foreground/80"}`
                  }
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex justify-center items-center gap-1.5 rounded-md bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold"
              >
                Book a Call <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
