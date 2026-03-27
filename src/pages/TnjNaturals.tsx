import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, MapPin, Phone, Mail, Menu, X, ChevronRight, Clock, Facebook, Instagram, Twitter, Sparkles, Heart, Shield, Award, CheckCircle } from 'lucide-react';
import AOS from 'aos';

const TnjNaturals = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      offset: 60,
    });
    AOS.refresh();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://naturalsthanjavur.com/api/submit-lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'TNJ Naturals Landing Page' }),
      });
      const data = await response.json();
      if (data.success) {
        navigate('/thankyou');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const offerServices = [
    {
      title: "Hair Care & Styling",
      desc: "Expert cuts, coloring, treatments, and styling for all hair types.",
      image: "/images/hairstyle.jpg",
      highlights: ["Haircuts & Trims", "Hair Coloring", "Keratin Treatment", "Hair Spa"],
    },
    {
      title: "Bridal Services",
      desc: "Complete bridal makeover packages for your special day.",
      image: "/images/makeup.jpeg",
      highlights: ["Bridal Makeup", "Mehendi", "Saree Draping", "Pre-bridal Package"],
    },
    {
      title: "Skin Care",
      desc: "Advanced facial treatments, cleanup, and skin rejuvenation.",
      image: "/images/skincare.jpeg",
      highlights: ["Facials", "Cleanup", "De-tan", "Anti-aging"],
    },
    {
      title: "Men's Grooming",
      desc: "Premium grooming services tailored for the modern man.",
      image: "./images/mens_grooming.jpeg",
      highlights: ["Haircut & Styling", "Beard Grooming", "Facial Care", "Hair Color"],
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      {/* Header */}
      <header className="bg-primary shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-3 relative">
          <div className="flex justify-between items-center">
            <a href="/tnjnaturals" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}>
              <img src="./images/logo.png" alt="Naturals Logo" width="130px" />
            </a>

            <div className="hidden lg:flex items-center space-x-6 text-white text-sm font-medium">
              <a href="#what-we-offer" onClick={(e) => scrollToSection(e, 'what-we-offer')} className="hover:text-purple-200 transition-colors">Services</a>
              <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="hover:text-purple-200 transition-colors">Reviews</a>
              <a href="#footer-contact" onClick={(e) => scrollToSection(e, 'footer-contact')} className="hover:text-purple-200 transition-colors">Contact</a>
              <a href="tel:+919087000049">
                <Button size="sm" className="bg-white text-primary hover:bg-gray-100 font-semibold text-sm">
                  <Phone className="h-3.5 w-3.5 mr-1.5" />
                  Call Now
                </Button>
              </a>
            </div>

            <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-3 pb-3 border-t border-white/20 pt-3 text-white text-sm">
              <a href="#what-we-offer" className="block py-2" onClick={(e) => scrollToSection(e, 'what-we-offer')}>Services</a>
              <a href="#reviews" className="block py-2" onClick={(e) => scrollToSection(e, 'reviews')}>Reviews</a>
              <a href="#footer-contact" className="block py-2" onClick={(e) => scrollToSection(e, 'footer-contact')}>Contact</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero_bgimage.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left */}
            <div className="text-white text-center lg:text-left" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm text-purple-200">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                Thanjavur's Most Trusted Salon
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-[1.1]">
                Premium Beauty <br />Services in <span className="text-purple-300">Thanjavur</span>
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-300 max-w-lg mx-auto lg:mx-0">
                Transform your look with 15+ years of expert care. Book your appointment today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-300">
                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" />15+ Years Experience</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" />10,000+ Happy Clients</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" />Expert Stylists</span>
              </div>
            </div>

            {/* Right - Form */}
            <div data-aos="fade-left" data-aos-delay="150">
              <Card className="p-6 md:p-8 border-0 shadow-2xl bg-white rounded-2xl">
                <div className="text-center mb-5">
                  <h3 className="text-xl font-bold text-gray-900">Book a Free Consultation</h3>
                  <p className="text-gray-500 text-sm mt-1">Get expert beauty advice — no obligation</p>
                </div>
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <div>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name *"
                      required
                      className="border-gray-200 focus:border-primary h-11"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="border-gray-200 focus:border-primary h-11"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number *"
                      required
                      className="border-gray-200 focus:border-primary h-11"
                    />
                  </div>
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:border-primary text-sm text-gray-700 h-11"
                    >
                      <option value="">Select a Service</option>
                      <option value="Hair Care & Styling">Hair Care & Styling</option>
                      <option value="Bridal Package">Bridal Package</option>
                      <option value="Facial & Skin Care">Facial & Skin Care</option>
                      <option value="Men's Grooming">Men's Grooming</option>
                    </select>
                  </div>
                  <Button className="w-full gradient-bg text-white hover:opacity-90 h-12 text-base font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Book Appointment Now'}
                  </Button>
                  <p className="text-xs text-gray-400 text-center">We'll get back to you within 30 minutes</p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white text-sm font-medium">
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" />100% Hygiene Guaranteed</span>
            <span className="flex items-center gap-2"><Award className="h-4 w-4" />India's No.1 Salon Chain</span>
            <span className="flex items-center gap-2"><Heart className="h-4 w-4" />Premium Products Only</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" />4.8 Google Rating</span>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">What Our Customers Say</h2>
            <p className="text-gray-500">Real experiences from our valued customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white rounded-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-100 pt-3">
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-primary text-xs font-medium">{testimonial.service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Images Section - Placeholder */}
      <section id="clinic-images" className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Salon</h2>
            <p className="text-gray-500">A glimpse into our premium salon experience</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className="aspect-[4/3] rounded-xl bg-gray-100 flex items-center justify-center border border-dashed border-gray-200"
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <div className="text-center text-gray-300">
                  <Sparkles className="h-6 w-6 mx-auto mb-1" />
                  <p className="text-xs">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Do We Offer Section */}
      <section id="what-we-offer" className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">What Do We Offer</h2>
            <p className="text-gray-500">Everything you need for a complete beauty transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {offerServices.map((service, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg group min-h-[380px]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Default */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500 group-hover:opacity-0">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{service.desc}</p>
                </div>

                {/* Hover */}
                <div className="absolute inset-0 gradient-bg flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-95 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 text-center text-sm mb-5">{service.desc}</p>
                  <div className="space-y-2 w-full max-w-xs">
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-white/15 rounded-lg px-4 py-2 backdrop-blur-sm">
                        <CheckCircle className="h-3.5 w-3.5 text-white flex-shrink-0" />
                        <span className="text-white font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Naturals Section */}
      <section id="why-naturals" className="py-14 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left */}
            <div data-aos="fade-right">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/30 text-purple-300 font-semibold text-xs mb-4 tracking-wide uppercase">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Why <span className="text-gradient bg-clip-text">Naturals</span>?
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We don't just style — we transform. With a legacy of trust and excellence,
                Naturals is where beauty meets expertise in Thanjavur.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-xs text-gray-400 mt-1">Years</div>
                </div>
                <div className="w-px h-10 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-xs text-gray-400 mt-1">Happy Clients</div>
                </div>
                <div className="w-px h-10 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-xs text-gray-400 mt-1">Experts</div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4" data-aos="fade-left">
              {[
                {
                  icon: <Award className="h-5 w-5" />,
                  title: "Award-Winning Legacy",
                  desc: "India's largest unisex salon chain with a proven track record of excellence."
                },
                {
                  icon: <Sparkles className="h-5 w-5" />,
                  title: "Premium Products Only",
                  desc: "We partner with top global brands for salon-grade results every time."
                },
                {
                  icon: <Heart className="h-5 w-5" />,
                  title: "Personalized Experience",
                  desc: "Every visit starts with a consultation — your look should be uniquely yours."
                },
                {
                  icon: <Shield className="h-5 w-5" />,
                  title: "Strict Hygiene Standards",
                  desc: "Sterilized tools, sanitized stations, and disposable essentials for safety."
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-0.5">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-10 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform Your Look?</h2>
          <p className="text-purple-100 mb-6 max-w-xl mx-auto text-sm">
            Book your appointment today and discover why we're Thanjavur's favorite salon.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8"
              onClick={() => { document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
            >
              Book Appointment
            </Button>
            <a href="tel:+919087000049">
              <Button size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary font-semibold px-8">
                <Phone className="h-4 w-4 mr-2" />
                +91 90870 00049
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer-contact" className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-9 h-9 gradient-bg rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Naturals</h3>
                  <p className="text-xs text-gray-400">Beauty & Wellness</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Premium beauty and wellness services in Thanjavur. Experience luxury treatments
                with our expert professionals.
              </p>
              <div className="flex space-x-3">
                <Facebook className="h-4 w-4 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Instagram className="h-4 w-4 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="h-4 w-4 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-1.5 text-sm">
                <li><a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className="text-gray-400 hover:text-primary transition-colors">Reviews</a></li>
                <li><a href="#what-we-offer" onClick={(e) => scrollToSection(e, 'what-we-offer')} className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
                <li><a href="#why-naturals" onClick={(e) => scrollToSection(e, 'why-naturals')} className="text-gray-400 hover:text-primary transition-colors">Why Naturals</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Our Services</h4>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li>Hair Care & Styling</li>
                <li>Skin Care Treatments</li>
                <li>Bridal Packages</li>
                <li>Men's Grooming</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Contact Info</h4>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">Arulananda Nagar</p>
                    <p className="text-xs text-gray-500">No 2851/14, No 2, 1st Floor, Philomena Shop, Thanjavur - 613007</p>
                  </div>
                </div>
                <a href="tel:+919087000049" className="flex items-center space-x-2.5">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-gray-400 hover:text-primary transition-colors">+91 90870 00049</span>
                </a>
                <div className="flex items-center space-x-2.5">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-gray-400">naturals.tj2@gmail.com</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Clock className="h-4 w-4 text-primary mt-0.5" />
                  <div className="text-gray-400">
                    <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-500">
            <p>© 2024 Naturals Beauty Salon, Thanjavur. All rights reserved.</p>
            <a href="https://discovertechnologies.co/" className="hover:text-gray-400 transition-colors">
              <p>Website created by ARA Discover Technologies - A unit of ARA Discoveries Pvt. Ltd.</p>
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 flex gap-2 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
        <a href="tel:+919087000049" className="flex-1">
          <Button className="w-full bg-primary text-white h-11 text-sm font-semibold">
            <Phone className="h-4 w-4 mr-1.5" />
            Call Now
          </Button>
        </a>
        <Button
          className="flex-1 gradient-bg text-white h-11 text-sm font-semibold"
          onClick={() => { document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default TnjNaturals;
