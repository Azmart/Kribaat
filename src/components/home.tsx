import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProductShowcase from "./ProductShowcase";
import ResearchSection from "./ResearchSection";
import NewsletterSignup from "./NewsletterSignup";
import ResponsibleAI from "./ResponsibleAI";
import Footer from "./Footer";

// Since we can't import Navbar directly, we'll recreate the minimal interface we need
interface NavbarComponentProps {
  onLanguageToggle?: () => void;
  isNepali?: boolean;
}

// Dynamic import for Navbar
const NavbarComponent = React.lazy(() => import("./Navbar"));

interface HomeProps {
  initialLanguage?: "en" | "np";
}

const Home = ({ initialLanguage = "en" }: HomeProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "np">(
    initialLanguage,
  );
  const [isNewsletterSuccess, setIsNewsletterSuccess] = useState(false);

  const handleLanguageToggle = () => {
    setCurrentLanguage(currentLanguage === "en" ? "np" : "en");
  };

  const handleNewsletterSubmit = (email: string) => {
    // Simulated newsletter signup success
    console.log("Newsletter signup:", email);
    setIsNewsletterSuccess(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <React.Suspense fallback={<div className="h-20 bg-white border-b" />}>
        <NavbarComponent
          onLanguageToggle={handleLanguageToggle}
          isNepali={currentLanguage === "np"}
        />
      </React.Suspense>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="pt-20">
          <HeroSection currentLanguage={currentLanguage} />
        </section>

        {/* Product Showcase */}
        <section id="products">
          <ProductShowcase />
        </section>

        {/* Research Section */}
        <section id="research">
          <ResearchSection />
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-16">
          <NewsletterSignup
            onSubmit={handleNewsletterSubmit}
            isSuccess={isNewsletterSuccess}
          />
        </section>
      </motion.main>

      {/* Responsible AI Section */}
      <section id="responsible-ai">
        <ResponsibleAI />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
