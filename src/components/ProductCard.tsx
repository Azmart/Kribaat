import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  onClick?: () => void;
}

const ProductCard = ({
  icon = <ArrowRight className="w-8 h-8 text-primary" />,
  title = "AI Solution",
  description = "Advanced artificial intelligence solution that helps businesses optimize their operations and improve efficiency.",
  onClick = () => {},
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-[280px] h-[320px] bg-white"
    >
      <Card
        className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onClick={onClick}
      >
        <CardHeader className="space-y-2">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
            {icon}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm text-muted-foreground line-clamp-4">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
