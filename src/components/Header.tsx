import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServicesSubmenu, setShowServicesSubmenu] = useState(false);
  const [showPlansSubmenu, setShowPlansSubmenu] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
    setShowServicesSubmenu(false);
    setShowPlansSubmenu(false);
  };

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+919087000049" className="flex items-center space-x-1 hover:underline">
              <Phone className="h-4 w-4" />
              <span>+91 90870 00049</span>
            </a>
            <a href="mailto:naturals.tj2@gmail.com" className="flex items-center space-x-1 hover:underline">
              <Mail className="h-4 w-4" />
              <span>naturals.tj2@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>Premium Beauty & Wellness Services in Thanjavur</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4 bg-primary relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick}>
            <img src="./images/logo.png" alt="Logo" width="150px" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-white relative">
            <Link to="/" onClick={handleNavClick} className={`font-medium hover:text-white ${isActive('/') ? 'border-b-2 border-white pb-1' : ''}`}>
              Home
            </Link>
            <Link to="/about" onClick={handleNavClick} className={`font-medium hover:text-white ${isActive('/about') ? 'border-b-2 border-white pb-1' : ''}`}>
              About
            </Link>
            <Link to="/services" onClick={handleNavClick} className={`font-medium hover:text-white ${isActive('/services') ? 'border-b-2 border-white pb-1' : ''}`}>
              Services
            </Link>

            {/* Services Dropdown */}
            {/* <div className="relative group">
              <button className="flex items-center font-medium hover:text-white focus:outline-none">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 hidden group-hover:block z-20 min-w-[180px]">
                <Link to="/services" onClick={handleNavClick} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  All Services
                </Link>
                <Link to="/bridal-packages" onClick={handleNavClick} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Bridal Packages
                </Link>
              </div>
            </div> */}

            {/* Plans Dropdown (Pricing & Membership) */}
            {/* <div className="relative group">
              <button className="flex items-center font-medium hover:text-white focus:outline-none">
                Plans <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 hidden group-hover:block z-20 min-w-[180px]">
                <Link to="/pricing" onClick={handleNavClick} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Pricing
                </Link>
                <Link to="/membership" onClick={handleNavClick} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Membership
                </Link>
              </div>
            </div> */}

            <Link to="/contact" onClick={handleNavClick} className={`font-medium hover:text-white ${isActive('/contact') ? 'border-b-2 border-white pb-1' : ''}`}>
              Contact
            </Link>
            {/* <Link to="/location" onClick={handleNavClick} className={`font-medium hover:text-white ${isActive('/location') ? 'border-b-2 border-white pb-1' : ''}`}>
              Location
            </Link> */}

            {/* <Button className="gradient-bg text-white hover:opacity-90">
              Book Appointment
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <Link to="/" className="block py-2" onClick={handleNavClick}>Home</Link>
            <Link to="/about" className="block py-2" onClick={handleNavClick}>About</Link>

            {/* Services Submenu Mobile */}
            <button
              className="block py-2 w-full text-left font-medium"
              onClick={() => setShowServicesSubmenu(!showServicesSubmenu)}
            >
              Services
            </button>
            {showServicesSubmenu && (
              <div className="pl-4">
                <Link to="/services" className="block py-2" onClick={handleNavClick}>
                  All Services
                </Link>
                <Link to="/bridal-packages" className="block py-2" onClick={handleNavClick}>
                  Bridal Packages
                </Link>
              </div>
            )}

            {/* Plans Submenu Mobile */}
            <button
              className="block py-2 w-full text-left font-medium"
              onClick={() => setShowPlansSubmenu(!showPlansSubmenu)}
            >
              Plans
            </button>
            {showPlansSubmenu && (
              <div className="pl-4">
                <Link to="/pricing" className="block py-2" onClick={handleNavClick}>
                  Pricing
                </Link>
                <Link to="/membership" className="block py-2" onClick={handleNavClick}>
                  Membership
                </Link>
              </div>
            )}

            <Link to="/contact" className="block py-2" onClick={handleNavClick}>Contact</Link>
            <Link to="/location" className="block py-2" onClick={handleNavClick}>Location</Link>

            <Link to="/contact" onClick={handleNavClick}>
              <Button className="w-full mt-4 gradient-bg text-white">
                Book Appointment
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
