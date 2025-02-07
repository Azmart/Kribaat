import React from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Send, CheckCircle2 } from "lucide-react";

interface NewsletterSignupProps {
  onSubmit?: (email: string) => void;
  isSuccess?: boolean;
}

const NewsletterSignup = ({
  onSubmit = () => {},
  isSuccess = false,
}: NewsletterSignupProps) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <div className="w-full min-h-[400px] bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-[600px] bg-white">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Stay Updated with Our Research
          </CardTitle>
          <CardDescription className="text-gray-600">
            Join our newsletter to receive the latest updates on AI research and
            innovations
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-4 pr-12 py-6 text-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <motion.div
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="submit"
                    size="icon"
                    className="rounded-full w-10 h-10"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8 space-y-4"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
              <p className="text-lg font-medium text-gray-900">
                Thank you for subscribing!
              </p>
              <p className="text-gray-600">
                You'll receive our latest updates straight to your inbox.
              </p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsletterSignup;
