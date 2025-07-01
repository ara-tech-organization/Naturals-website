
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, Users, Award, Clock, ArrowRight, Sparkles, Heart, Scissors } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to <span className="text-yellow-300">Naturals</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 animate-fade-in">
              Thanjavur's Premier Beauty & Wellness Destination
            </p>
            <p className="text-lg mb-10 text-purple-200 max-w-2xl mx-auto animate-fade-in">
              Experience luxury beauty treatments with our expert professionals. From hair styling to spa wellness, 
              we offer comprehensive beauty solutions for both men and women in the heart of Thanjavur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3">
                <Link to="/services" className="flex items-center">
                  View Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating SVG Elements */}
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="25" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M20 30 L25 35 L40 20" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{animationDelay: '1s'}}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <rect x="10" y="10" width="30" height="30" rx="15" stroke="white" strokeWidth="2" fill="none"/>
            <circle cx="25" cy="20" r="3" fill="white"/>
            <path d="M18 30 Q25 35 32 30" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of beauty and wellness services designed to enhance your natural beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow border-0 bg-white">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 px-8 py-3">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Naturals Thanjavur?</h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Trusted by thousands of customers across Thanjavur for exceptional beauty and wellness services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-yellow-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read testimonials from our satisfied customers across Thanjavur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Look?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the best beauty and wellness services in Thanjavur. 
            Our expert team is ready to help you look and feel your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-white hover:opacity-90 px-8 py-3">
              Book Now
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
