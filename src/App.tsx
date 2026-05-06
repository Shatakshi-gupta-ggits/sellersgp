import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/index";
import AboutPage from "./routes/about";
import ServicesPage from "./routes/services";
import MarketplacesPage from "./routes/marketplaces";
import LearningPage from "./routes/learning";
import ContactPage from "./routes/contact";
import AdminLayout from "./routes/admin";
import AdminOverview from "./routes/admin.index";
import AdminLeads from "./routes/admin.leads";
import AdminServices from "./routes/admin.services";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-8">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">404</p>
        <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The page you are looking for doesn’t exist.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/marketplaces" element={<MarketplacesPage />} />
      <Route path="/learning" element={<LearningPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminOverview />} />
        <Route path="leads" element={<AdminLeads />} />
        <Route path="services" element={<AdminServices />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
