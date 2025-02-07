import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Link as LinkIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Publication {
  title: string;
  url: string;
}

interface ResearchCardProps {
  title?: string;
  description?: string;
  publications?: Publication[];
  isExpanded?: boolean;
  onToggle?: () => void;
}

const ResearchCard = ({
  title = "AI-Powered Nepali Language Processing",
  description = "Developing advanced natural language processing models specifically optimized for the Nepali language, incorporating cultural context and linguistic nuances.",
  publications = [
    {
      title: "Advances in Nepali NLP: A Comprehensive Study",
      url: "#",
    },
    {
      title: "Cultural Context in Language Models: Nepal Case Study",
      url: "#",
    },
  ],
  isExpanded = false,
  onToggle = () => {},
}: ResearchCardProps) => {
  return (
    <Card className="w-[380px] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-900">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="ghost"
          className="w-full justify-between"
          onClick={onToggle}
        >
          <span>View Publications</span>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-3">
                {publications.map((pub, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50"
                  >
                    <FileText className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {pub.title}
                      </p>
                      <a
                        href={pub.url}
                        className="text-sm text-blue-500 hover:text-blue-700 inline-flex items-center space-x-1"
                      >
                        <LinkIcon className="h-3 w-3" />
                        <span>View Publication</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default ResearchCard;
