import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

import NavLogo from "/public/nav-log.png"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };
  return <header className="sticky top-0 z-50 bg-black">
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-4">
        {/* Hero Image */}
        <a href="#" className="flex items-center space-x-2" onClick={e => { e.preventDefault();scrollToTop();}} aria-label="ampxaled">
          {/* old <img alt="ampxaled-logo" className="h-7 sm:h-8" src="/lovable-uploads/2a3dcfa4-20e1-4c74-9e3a-06e011631772.png" /></a> */}
          <img alt="ampxaled-logo" className="h-7 sm:h-8" src={NavLogo} /></a>

        {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 bg-inherit text-white hover:text-orange" >
          <a href="#" onClick={e => {e.preventDefault();scrollToTop();}} className="nav-link text-white hover:text-orange-500">Home</a>
          <a href="#features" className="nav-link text-white hover:text-orange-500">About</a>
          <a href="#details" className="nav-link text-white hover:text-orange-500">Contact</a>
          </nav>

        {/* Mobile menu button - increased touch target */}
        <button className="md:hidden text-gray-700 p-3 focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
       </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn("fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out", isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none")}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a href="#" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={e => {
          e.preventDefault();
          scrollToTop();
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            Home
          </a>
          <a href="#features" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            About
          </a>
          <a href="#details" className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = '';
        }}>
            Contact
          </a>
        </nav>
      </div>
    </header>;
};
export default Navbar;