import React from "react";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">AI Research Center Nepal</h3>
          <p className="text-gray-400">
            Advancing AI research and innovation in Nepal
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="text-gray-400 hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#research" className="text-gray-400 hover:text-white">
                Research
              </a>
            </li>
            <li>
              <a
                href="#responsible-ai"
                className="text-gray-400 hover:text-white"
              >
                Responsible AI
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Research Areas</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Natural Language Processing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Computer Vision
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Machine Learning
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                AI Ethics
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-400">
              <Phone className="w-4 h-4" />
              <span>+977 1234567890</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>contact@aircnepal.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} AI Research Center Nepal. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
