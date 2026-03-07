import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import AdminPage from "./components/AdminPage";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import WhyAscendrix from "./components/WhyAscendrix";

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handler = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return hash;
}

const toasterProps = {
  theme: "dark" as const,
  position: "bottom-right" as const,
  toastOptions: {
    style: {
      background: "oklch(0.145 0.018 265)",
      border: "1px solid oklch(0.25 0.025 265)",
      color: "oklch(0.96 0.005 265)",
    },
  },
};

export default function App() {
  const hash = useHashRoute();

  if (hash === "#/admin") {
    return (
      <>
        <AdminPage />
        <Toaster {...toasterProps} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <WhyAscendrix />
        <Testimonials />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <Toaster {...toasterProps} />
    </div>
  );
}
