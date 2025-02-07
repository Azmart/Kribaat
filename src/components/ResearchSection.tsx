import React, { useState } from "react";
import ResearchCard from "./ResearchCard";
import { motion } from "framer-motion";

interface ResearchProject {
  title: string;
  description: string;
  publications: Array<{
    title: string;
    url: string;
  }>;
}

interface ResearchSectionProps {
  projects?: ResearchProject[];
}

const ResearchSection = ({
  projects = [
    {
      title: "AI-Powered Nepali Language Processing",
      description:
        "Developing advanced natural language processing models specifically optimized for the Nepali language, incorporating cultural context and linguistic nuances.",
      publications: [
        {
          title: "Advances in Nepali NLP: A Comprehensive Study",
          url: "#",
        },
        {
          title: "Cultural Context in Language Models: Nepal Case Study",
          url: "#",
        },
      ],
    },
    {
      title: "Computer Vision for Cultural Heritage",
      description:
        "Using AI to preserve and analyze Nepal's rich cultural heritage through advanced image processing and pattern recognition.",
      publications: [
        {
          title: "Deep Learning Applications in Cultural Preservation",
          url: "#",
        },
        {
          title: "Automated Analysis of Ancient Nepali Scripts",
          url: "#",
        },
      ],
    },
    {
      title: "AI in Agriculture",
      description:
        "Developing smart farming solutions adapted to Nepal's unique geographical and climatic conditions.",
      publications: [
        {
          title: "Machine Learning for Crop Yield Prediction in Nepal",
          url: "#",
        },
        {
          title: "AI-Driven Agricultural Solutions for Mountainous Regions",
          url: "#",
        },
      ],
    },
  ],
}: ResearchSectionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#DC143C] mb-4">
            Research Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest research projects and publications in artificial
            intelligence and machine learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ResearchCard
                title={project.title}
                description={project.description}
                publications={project.publications}
                isExpanded={expandedIndex === index}
                onToggle={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
