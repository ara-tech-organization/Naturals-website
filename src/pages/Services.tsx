import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Star, Users, Award, Scissors, Sparkles, Heart, Zap } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const Services = () => {
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

  const womenServices = [
    {
      name: "Hair Care & Styling",
      description: "Professional hair treatments, cuts, coloring, and styling for all hair types",
      price: "₹500 - ₹3000",
      duration: "1-3 hours",
      icon: Scissors,
      popular: true,
      backgroundImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bridal Packages",
      description: "Complete bridal makeover including hair, makeup, and pre-bridal treatments",
      price: "₹8000 - ₹25000",
      duration: "4-6 hours",
      icon: Heart,
      popular: true,
      backgroundImage: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Facial & Skin Care",
      description: "Deep cleansing facials, anti-aging treatments, and skin rejuvenation",
      price: "₹800 - ₹2500",
      duration: "45-90 minutes",
      icon: Sparkles,
      popular: false,
      backgroundImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Spa & Wellness",
      description: "Full body massage, aromatherapy, and relaxation treatments",
      price: "₹1200 - ₹4000",
      duration: "1-2 hours",
      icon: Zap,
      popular: false,
      backgroundImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Nail Art & Manicure",
      description: "Creative nail designs, manicure, pedicure, and nail extensions",
      price: "₹300 - ₹1500",
      duration: "30-60 minutes",
      icon: Star,
      popular: false,
      backgroundImage: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Makeup & Beauty",
      description: "Professional makeup for parties, events, and special occasions",
      price: "₹1000 - ₹5000",
      duration: "1-2 hours",
      icon: Award,
      popular: true,
      backgroundImage: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const menServices = [
    {
      name: "Haircut & Styling",
      description: "Modern haircuts, beard trimming, and professional styling",
      price: "₹200 - ₹800",
      duration: "30-45 minutes",
      icon: Scissors,
      popular: true,
      backgroundImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Beard & Mustache",
      description: "Professional beard shaping, mustache grooming, and maintenance",
      price: "₹150 - ₹500",
      duration: "20-30 minutes",
      icon: Users,
      popular: true,
      backgroundImage: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Facial Treatments",
      description: "Deep cleansing facials, blackhead removal, and skin care",
      price: "₹400 - ₹1200",
      duration: "45-60 minutes",
      icon: Sparkles,
      popular: false,
      backgroundImage: "./images/wellness.jpeg"
    },
    {
      name: "Hair Treatments",
      description: "Hair spa, dandruff treatment, and hair strengthening therapy",
      price: "₹600 - ₹2000",
      duration: "60-90 minutes",
      icon: Zap,
      popular: false,
      backgroundImage: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Body Grooming",
      description: "Full body grooming, waxing, and personal care services",
      price: "₹800 - ₹2500",
      duration: "1-2 hours",
      icon: Award,
      popular: false,
      backgroundImage: "./images/mens_grooming.jpeg"
    },
    {
      name: "Spa Services",
      description: "Relaxing massage, stress relief, and wellness treatments",
      price: "₹1000 - ₹3000",
      duration: "1-1.5 hours",
      icon: Star,
      popular: true,
      backgroundImage: "./images/saloon.jpeg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-2xl md:text-3xl mb-8 text-purple-100">
              Premium Beauty Solutions for Everyone
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3"
              onClick={() => document.getElementById('women-services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Women Services Section */}
      <section id="women-services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Women's Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and wellness services designed specifically for women
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {womenServices.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-80"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${service.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}
                  
                  <div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-200 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-200 mb-4 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-semibold">{service.price}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-purple-300" />
                        <span className="text-sm text-gray-200">{service.duration}</span>
                      </div>
                    </div>
                    
                    {/* <Button className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white border-opacity-30 hover:bg-white hover:text-gray-900 group-hover:scale-105 transition-all">
                      Book Now
                    </Button> */}
                  </div>
                </div>
                
                {/* Hover overlay for brightness effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Men Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Men's Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional grooming and styling services tailored for the modern man
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menServices.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-80"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${service.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}
                  
                  <div>
                    <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-200 mb-4 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-semibold">{service.price}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-300" />
                        <span className="text-sm text-gray-200">{service.duration}</span>
                      </div>
                    </div>
                    
                    {/* <Button className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white border-opacity-30 hover:bg-white hover:text-gray-900 group-hover:scale-105 transition-all">
                      Book Now
                    </Button> */}
                  </div>
                </div>
                
                {/* Hover overlay for brightness effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold mb-6">Special Packages</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Exclusive combo packages designed to give you the complete makeover experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white text-gray-900 border-0 overflow-hidden" data-aos="flip-left">
              <div className="p-8 text-center">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Bridal Bliss</h3>
                <p className="text-gray-600 mb-6">Complete bridal package with pre-bridal treatments, makeup, and styling</p>
                <div className="text-3xl font-bold text-primary mb-6">₹15,000</div>
                <Link to="/bridal-packages">
                  <Link to="/contact">
                  <Button className="w-full gradient-bg text-white">Book Package</Button>
                </Link>
                </Link>
              </div>
            </Card>
            
            <Card className="bg-white text-gray-900 border-0 overflow-hidden" data-aos="flip-up">
              <div className="p-8 text-center">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Glow Up</h3>
                <p className="text-gray-600 mb-6">Hair treatment, facial, manicure, and pedicure combo package</p>
                <div className="text-3xl font-bold text-primary mb-6">₹3,500</div>
                <Link to="/contact">
                  <Button className="w-full gradient-bg text-white">Book Package</Button>
                </Link>
              </div>
            </Card>
            
            <Card className="bg-white text-gray-900 border-0 overflow-hidden" data-aos="flip-right">
              <div className="p-8 text-center">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Gentlemen's Club</h3>
                <p className="text-gray-600 mb-6">Complete men's grooming with haircut, beard styling, and facial</p>
                <div className="text-3xl font-bold text-primary mb-6">₹1,200</div>
                <Link to="/contact">
                  <Button className="w-full gradient-bg text-white">Book Package</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Naturals?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our expert professionals and premium services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Expert Professionals", desc: "Certified stylists and beauticians" },
              { icon: Star, title: "Premium Products", desc: "High-quality international brands" },
              { icon: Clock, title: "Flexible Timings", desc: "Open 7 days a week for your convenience" },
              { icon: Users, title: "Personalized Care", desc: "Customized treatments for every client" }
            ].map((item, index) => (
              <div key={index} className="text-center group" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the best beauty services in Thanjavur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3">
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+919087000049">
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary font-semibold px-8 py-3">
                Call Now: +91 90870 00049
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
