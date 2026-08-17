
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src="./images/logo.png" alt="Naturals Logo" width="150px" />
            </div>
            <p className="text-gray-400 mb-4">
              Premium beauty and wellness services in Thanjavur. Experience luxury treatments 
              with our expert professionals.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/naturals.thanjavur/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/naturals.thanjavur" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/location" className="text-gray-400 hover:text-primary transition-colors">Our Locations</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Hair Care & Styling</li>
              <li>Skin Care Treatments</li>
              <li>Spa & Wellness</li>
              <li>Bridal Packages</li>
              <li>Men's Grooming</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Arulananda Nagar</p>
                  <p className="text-sm text-gray-400">
No 2851/14, No 2, 1st Floor, Philomena Shop
Arulananda Nagar
Thanjavur - 613007</p>
                </div>
              </div>
              <a href="tel:+919087000049" className="flex items-center space-x-3 hover:text-primary">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">+91 90870 00049</span>
              </a>
              <a href="mailto:naturals.tj2@gmail.com" className="flex items-center space-x-3 hover:text-primary">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">naturals.tj2@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div className="text-gray-400">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © 2024 Naturals Beauty Salon, Thanjavur. All rights reserved.
          </p>
          <a href="https://discovertechnologies.co/" target="_blank" rel="noopener noreferrer">
            <p className="text-gray-400">Website created by ARA Discover Technologies - A unit of ARA Discoveries Pvt. Ltd.</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
