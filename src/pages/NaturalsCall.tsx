
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone, Mail, Menu, X, ChevronRight, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import AOS from 'aos';

const NaturalsCall = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100
    });
    AOS.refresh();
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      service: "Bridal Package",
      rating: 5,
      text: "Absolutely amazing service! The team made my wedding day perfect with their bridal package."
    },
    {
      name: "Rajesh Kumar",
      service: "Men's Grooming",
      rating: 5,
      text: "Professional service and great ambiance. Best salon in Thanjavur for men's grooming."
    },
    {
      name: "Meera Devi",
      service: "Hair Treatment",
      rating: 5,
      text: "My hair has never looked better! The hair treatment package worked wonders."
    }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Dedicated Header */}
      <header className="bg-primary shadow-lg sticky top-0 z-50">
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

        <nav className="container mx-auto px-4 py-4 bg-primary relative">
          <div className="flex justify-between items-center">
            <a href="/naturals-beauty-salon" onClick={handleNavClick}>
              <img src="./images/logo.png" alt="Logo" width="150px" />
            </a>

            <div className="hidden lg:flex items-center space-x-8 text-white">
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="font-medium hover:text-white">
                Services
              </a>
              <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="font-medium hover:text-white">
                Reviews
              </a>
              <a href="#location" onClick={(e) => scrollToSection(e, 'location')} className="font-medium hover:text-white">
                Contact
              </a>
            </div>

            <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t pt-4 text-white">
              <a href="#services" className="block py-2" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
              <a href="#testimonials" className="block py-2" onClick={(e) => scrollToSection(e, 'testimonials')}>Reviews</a>
              <a href="#location" className="block py-2" onClick={(e) => scrollToSection(e, 'location')}>Contact</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Full width content, no form */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32 flex items-center justify-center min-h-[60vh]">
          <div className="text-white text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Premium Beauty Services
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-purple-100">
              Transform Your Look with Expert Care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919087000049">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg animate-pulse-scale">
                  <Phone className="h-5 w-5 mr-2" />
                  Click to Call: +91 90870 00049
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and wellness services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Women's Beauty Services",
                image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                services: ["Hair Care & Styling", "Bridal Packages", "Facial Treatments"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Men's Grooming Services",
                image: "./images/mens_grooming.jpeg",
                services: ["Haircut & Styling", "Beard Grooming", "Facial Care", "Body Treatments"],
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "Special Packages",
                image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                services: ["Bridal Bliss", "Glow Up Package", "Couple's Special", "Family Care"],
                color: "from-green-500 to-teal-500"
              }
            ].map((category, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                data-aos="slide-up"
                data-aos-delay={index * 200}
              >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-600">
                        <ChevronRight className="h-4 w-4 text-primary mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <a href="/services">
                    <Button className="w-full gradient-bg text-white hover:opacity-90">
                      View Services
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from our valued customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-primary font-medium">{testimonial.service}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Main Branch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conveniently located at Arulanthar Nagar, Thanjavur.
            </p>
          </div>

          <div
            className="max-w-2xl mx-auto p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group mb-12"
            data-aos="zoom-in"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Naturals</h3>
                <p className="text-gray-600">Arulanthar Nagar</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">1st Floor, Philomena Shop, 2851/14, No 2, opposite Vinodhagan Hospital, Arulanthar Nagar, Thanjavur, Tamil Nadu 613007</p>
          </div>

          <div className="w-full">
            <iframe
              className="w-full h-[400px] rounded-xl shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4931029823315!2d79.13116237596353!3d10.773494531878411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab9b069029cff%3A0x58f9279539ef68c4!2sNaturals%20unisex%20salon%20-%20Arulanthar%20nagar!5e0!3m2!1sen!2sin!4v1751542614741!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Experience the best in beauty and wellness services at Naturals Thanjavur.
            Book your appointment today and discover why we're the city's favorite salon.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+919087000049">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                <Phone className="h-5 w-5 mr-2" />
                Call: +91 90870 00049
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <Facebook className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/naturals-beauty-salon" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
                <li><a href="#location" onClick={(e) => scrollToSection(e, 'location')} className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Hair Care & Styling</li>
                <li>Skin Care Treatments</li>
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
                    <p className="text-sm text-gray-400">No 2851/14, No 2, 1st Floor, Philomena Shop, Arulananda Nagar, Thanjavur - 613007</p>
                  </div>
                </div>
                <a href="tel:+919087000049" className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-400 hover:text-primary transition-colors">+91 90870 00049</span>
                </a>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-400">naturals.tj2@gmail.com</span>
                </div>
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
            <a href="https://discovertechnologies.co/">
              <p className="text-gray-400">Website created by ARA Discover Technologies - A unit of ARA Discoveries Pvt. Ltd.</p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NaturalsCall;
