
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Bridal Packages', path: '/bridal-packages' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' },
    { name: 'Location', path: '/location' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => {
    // Scroll to top when navigation link is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm primary-header">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@naturals-thanjavur.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Premium Beauty & Wellness Services in Thanjavur</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
            <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Naturals</h1>
              <p className="text-sm text-gray-600">Beauty & Wellness</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`font-medium transition-colors hover:text-primary ${isActive(item.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-gray-700'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="gradient-bg text-white hover:opacity-90">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 font-medium transition-colors ${isActive(item.path) ? 'text-primary' : 'text-gray-700'
                  }`}
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4 gradient-bg text-white">
              Book Appointment
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
