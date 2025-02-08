import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface HeroSectionProps {
  title?: {
    en: string;
    np: string;
  };
  mission?: string;
  currentLanguage?: "en" | "np";
}

const HeroSection = ({
  title = {
    en: "Kritrim Baudhikata Anusandhan Kendra Nepal",
    np: "कृत्रिम बौद्धिकता अनुसन्धान केन्द्र नेपाल",
  },
  mission = "Advancing AI research and innovation in Nepal through cutting-edge technology and cultural integration",
  currentLanguage = "en",
}: HeroSectionProps) => {
  return (
    <div className="relative h-[800px] w-full bg-slate-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
          animate={{
            background: [
              "linear-gradient(to right, #3b82f6, #8b5cf6)",
              "linear-gradient(to right, #8b5cf6, #3b82f6)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        {/* Sacred geometry pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0zMCAyYTI4IDI4IDAgMTAwIDU2IDI4IDI4IDAgMDAwLTU2em0wIDhBMjAgMjAgMCAwMTUwIDMwYTIwIDIwIDAgMDEtNDAgMCAyMCAyMCAwIDAxMjAtMjB6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {currentLanguage === "en" ? title.en : title.np}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            {mission}
          </p>
          <Button
            size="lg"
            className="bg-white text-slate-900 hover:bg-gray-200 transition-colors"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
