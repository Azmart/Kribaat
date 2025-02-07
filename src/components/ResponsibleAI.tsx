import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Shield, Heart, Users } from "lucide-react";

const ResponsibleAI = () => {
  const principles = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Ethical AI Development",
      description:
        "Ensuring our AI solutions adhere to strict ethical guidelines and promote social good.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Inclusive Technology",
      description:
        "Making AI accessible to all Nepali communities, bridging the digital divide.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community Impact",
      description:
        "Developing AI solutions that address Nepal's unique challenges and empower local communities.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#DC143C] mb-4">
            Responsible AI for Nepal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to developing AI solutions that benefit Nepal's
            society while preserving our cultural values.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{principle.title}</h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsibleAI;
