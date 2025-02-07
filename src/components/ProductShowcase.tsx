import React from "react";
import ProductCard from "./ProductCard";
import { Brain, Cpu, Database, Network } from "lucide-react";
import { motion } from "framer-motion";

interface Product {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductShowcaseProps {
  products?: Product[];
}

const ProductShowcase = ({
  products = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Natural Language Processing",
      description:
        "Advanced NLP solutions optimized for Nepali language processing and understanding.",
    },
    {
      icon: <Network className="w-8 h-8 text-primary" />,
      title: "Neural Networks",
      description:
        "Custom neural network architectures for complex pattern recognition and decision making.",
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Big Data Analytics",
      description:
        "Scalable big data solutions for processing and analyzing large datasets.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Machine Learning",
      description:
        "Cutting-edge machine learning models for predictive analytics and automation.",
    },
  ],
}: ProductShowcaseProps) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#DC143C] mb-4">
            Our AI Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our innovative AI products designed to transform businesses
            and drive technological advancement in Nepal.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <ProductCard
                icon={product.icon}
                title={product.title}
                description={product.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
