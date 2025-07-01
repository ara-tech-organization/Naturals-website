
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeroCarousel from '@/components/HeroCarousel';
import { Star, Users, Award, Clock, ArrowRight, Sparkles, Heart, Scissors, Zap, Trophy } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: "Hair Care & Styling",
      description: "Professional hair treatments, cuts, and styling services",
      icon: <Scissors className="h-8 w-8 text-primary" />
    },
    {
      title: "Skin Care Treatments",
      description: "Advanced facials and skin rejuvenation therapies",
      icon: <Sparkles className="h-8 w-8 text-primary" />
    },
    {
      title: "Spa & Wellness",
      description: "Relaxing spa treatments for complete wellness",
      icon: <Heart className="h-8 w-8 text-primary" />
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "10,000+", label: "Happy Customers" },
    { icon: <Award className="h-8 w-8" />, number: "15+", label: "Years Experience" },
    { icon: <Star className="h-8 w-8" />, number: "4.9", label: "Customer Rating" },
    { icon: <Clock className="h-8 w-8" />, number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      service: "Bridal Package",
      review: "Exceptional service! The team made my wedding day perfect with their professional makeup and hair styling.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      service: "Men's Grooming",
      review: "Great experience at Naturals. Professional staff and excellent facilities for men's grooming services.",
      rating: 5
    },
    {
      name: "Meera Devi",
      service: "Skin Treatment",
      review: "Amazing results from their skin care treatments. My skin feels rejuvenated and glowing!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section>
        <HeroCarousel />
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and wellness services designed to enhance your natural beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-10 text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.description}</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-3">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <Link to="/services">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 px-12 py-4 rounded-full text-lg font-semibold">
                View All Services <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative" style={{
        backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backgroundAttachment: "fixed"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold mb-6 text-white">Why Choose Naturals Thanjavur?</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Trusted by thousands of customers across Thanjavur for exceptional beauty and wellness services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="bg-white bg-opacity-10 rounded-3xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex justify-center mb-6 text-yellow-300 group-hover:animate-pulse">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-3 text-white">{stat.number}</div>
                  <div className="text-purple-200 text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 Q50,50 100,0 L100,100 L0,100 Z" fill="url(#gradient)" />
          </svg>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7e4798" />
              <stop offset="100%" stopColor="#9c5cb5" />
            </linearGradient>
          </defs>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read testimonials from our satisfied customers across Thanjavur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 shadow-xl rounded-2xl relative overflow-hidden" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-primary font-medium">{testimonial.service}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div data-aos="zoom-in">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-white bg-opacity-10 rounded-full backdrop-blur-sm">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Look?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Book your appointment today and experience the best beauty and wellness services in Thanjavur. 
              Our expert team is ready to help you look and feel your best.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 px-12 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                Book Now
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-12 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
