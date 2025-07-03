import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import NavLogo from "/public/nav-log.png"

import { Globe } from "lucide-react";
import { House } from "lucide-react"; // Add this if not present

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Flag from 'react-world-flags'



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  


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
  return <header className={cn("sticky top-0 z-50 bg-black transition-opacity duration-300", isScrolled && "opacity-50")}>
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-4">
        
        {/*nav logo */}
        <a href="#" className="flex items-center space-x-2" onClick={e => { e.preventDefault();scrollToTop();}} aria-label="ampxaled">
          {/* old <img alt="ampxaled-logo" className="h-7 sm:h-8" src="/lovable-uploads/2a3dcfa4-20e1-4c74-9e3a-06e011631772.png" /></a> */}
          <img alt="ampxaled-logo" className="h-7 sm:h-8" src={NavLogo} /></a>

        {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <nav className="flex space-x-8 text-white">
          <a href="#" onClick={e => {e.preventDefault();scrollToTop();}} className="nav-link text-white hover:text-orange-500 flex items-center space-x-1"> 
            <House size={16} /><span>Home</span>
</a>
          <a href="#features" className="nav-link text-white hover:text-orange-500">About</a>
          <a href="#details" className="nav-link text-white hover:text-orange-500">Contact</a>
        </nav>
      
<div className="relative w-[140px]">
  <Select value={language} onValueChange={setLanguage}>

   <SelectTrigger className="flex items-center gap-2 h-9 text-center w-full justify-center bg-transparent text-white hover:text-orange-500 space-x-1 border-none focus:outline-none focus:ring-0 focus:ring-offset-0 shadow-none">
  <div className="flex items-center gap-2">
    <span>{language}</span>
    <Flag
      code={
        language === "EN"? "US": language === "AR"? "SA": language === "FR"? "FR": "DE"
      }
      className="w-5 h-4 rounded-sm"
    />
  </div>
</SelectTrigger>
<SelectContent
  className={cn(
    "bg-black text-white rounded-xl shadow-md w-[140px] transition-opacity duration-300 font-semibold",
    isScrolled && "opacity-50"
  )}
>
  <SelectItem value="EN" className="hover:underline hover:text-orange-500">
    <div className="flex items-center gap-2">
      <Flag code="US" className="w-5 h-4 rounded-sm" />
      <span>EN</span>
    </div>
  </SelectItem>
  <SelectItem value="AR" className="hover:underline hover:text-orange-500">
    <div className="flex items-center gap-2">
      <Flag code="SA" className="w-5 h-4 rounded-sm" />
      <span>AR</span>
    </div>
  </SelectItem>
  <SelectItem value="FR" className="hover:underline hover:text-orange-500">
    <div className="flex items-center gap-2">
      <Flag code="FR" className="w-5 h-4 rounded-sm" />
      <span>FR</span>
    </div>
  </SelectItem>
  <SelectItem value="DE" className="hover:underline hover:text-orange-500">
    <div className="flex items-center gap-2">
      <Flag code="DE" className="w-5 h-4 rounded-sm" />
      <span>DE</span>
    </div>
  </SelectItem>
</SelectContent>
  </Select>
</div>
      </div>
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