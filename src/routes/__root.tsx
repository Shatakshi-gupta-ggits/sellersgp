import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sellers Growth Point by CLUTCHNEXXT — E-commerce Growth Partners" },
      { name: "description", content: "Performance-driven e-commerce consulting. We help offline brands sell online on Amazon, Flipkart, Meesho, Myntra & more — on a 100% commission-based, risk-free model." },
      { name: "author", content: "Sellers Growth Point by CLUTCHNEXXT" },
      { property: "og:title", content: "Sellers Growth Point by CLUTCHNEXXT — E-commerce Growth Partners" },
      { property: "og:description", content: "Performance-driven e-commerce consulting. We help offline brands sell online on Amazon, Flipkart, Meesho, Myntra & more — on a 100% commission-based, risk-free model." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sellers Growth Point by CLUTCHNEXXT — E-commerce Growth Partners" },
      { name: "twitter:description", content: "Performance-driven e-commerce consulting. We help offline brands sell online on Amazon, Flipkart, Meesho, Myntra & more — on a 100% commission-based, risk-free model." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/53ccacf6-d8cf-4d65-b433-1a691c56fe03/id-preview-2413050d--8a91936f-775f-46ae-b1cd-a2ca5886f54f.lovable.app-1777822640392.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/53ccacf6-d8cf-4d65-b433-1a691c56fe03/id-preview-2413050d--8a91936f-775f-46ae-b1cd-a2ca5886f54f.lovable.app-1777822640392.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster richColors position="top-center" />
    </>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background text-foreground p-8 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">404</p>
      <h1 className="font-display text-4xl md:text-6xl">Page not found</h1>
      <p className="text-muted-foreground max-w-md">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="mt-2 inline-flex items-center rounded-full bg-primary px-6 py-3 text-primary-foreground hover:opacity-90 transition">
        Back to home
      </Link>
    </div>
  );
}
