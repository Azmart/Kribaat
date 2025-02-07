import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Globe, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface NavbarProps {
  onLanguageToggle?: () => void;
  isNepali?: boolean;
}

const Navbar = ({
  onLanguageToggle = () => {},
  isNepali = false,
}: NavbarProps) => {
  const menuItems = [
    { label: isNepali ? "गृहपृष्ठ" : "Home", href: "#" },
    { label: isNepali ? "हाम्रोबारे" : "About Us", href: "#about" },
    { label: isNepali ? "उत्पादनहरू" : "Products", href: "#products" },
    { label: isNepali ? "अनुसन्धान" : "Research", href: "#research" },
    { label: isNepali ? "सम्पर्क" : "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full h-20 px-4 md:px-6 bg-white border-b fixed top-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <img src="/vite.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-xl hidden md:inline-block">
              {isNepali
                ? "कृत्रिम बौद्धिकता अनुसन्धान केन्द्र"
                : "AI Research Center"}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={onLanguageToggle}
            className="ml-2"
          >
            <Globe className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  {isNepali
                    ? "कृत्रिम बौद्धिकता अनुसन्धान केन्द्र"
                    : "AI Research Center"}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  variant="ghost"
                  onClick={onLanguageToggle}
                  className="flex items-center space-x-2"
                >
                  <Globe className="h-5 w-5" />
                  <span>{isNepali ? "English" : "नेपाली"}</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
