
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scissors, Heart, Sparkles, Users, Star, Award, Clock, MapPin, Phone, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import HeroCarousel from '@/components/HeroCarousel';

const Home = () => {
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

  const services = [
    { icon: Scissors, name: "Hair Styling", desc: "Professional cuts and styling" },
    { icon: Heart, name: "Bridal Services", desc: "Complete bridal makeover" },
    { icon: Sparkles, name: "Skin Care", desc: "Advanced facial treatments" },
    { icon: Users, name: "Spa & Wellness", desc: "Relaxing body treatments" }
  ];

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

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "5", label: "Branches" },
    { number: "25+", label: "Expert Stylists" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Welcome to Naturals Thanjavur</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the finest in beauty and wellness at Thanjavur's premier salon chain. 
              With over 15 years of expertise and 5 convenient locations, we're your trusted partner 
              in looking and feeling your absolute best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group p-8 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Our Success in Numbers</h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Trusted by thousands of customers across Thanjavur
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group"
                data-aos="count-up"
                data-aos-delay={index * 200}
              >
                <div className="text-5xl md:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-xl text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-20 bg-gray-50">
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
                services: ["Hair Care & Styling", "Bridal Packages", "Facial Treatments", "Spa & Wellness"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Men's Grooming Services",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
                  <Button className="w-full gradient-bg text-white hover:opacity-90">
                    View Services
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Flip Card Section */}
      <section className="py-20 bg-white">
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
                className="group h-80 [perspective:1000px] cursor-pointer"
                data-aos="flip-left"
                data-aos-delay={index * 200}
              >
                <div className="relative h-full w-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-700">
                  {/* Front */}
                  <div className="absolute inset-0 [backface-visibility:hidden] bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center p-6">
                    <div className="text-center text-white">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-current" />
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>
                      <p className="text-purple-100">{testimonial.service}</p>
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white border-2 border-purple-200 rounded-lg flex items-center justify-center p-6">
                    <div className="text-center">
                      <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Branches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five convenient locations across Thanjavur for your comfort
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Main Branch", area: "Big Street", landmark: "Near Central Bus Stand" },
              { name: "Anna Nagar", area: "Anna Nagar", landmark: "Opposite Park" },
              { name: "Medical College", area: "Medical College Road", landmark: "Near College" },
              { name: "East Main", area: "East Main Street", landmark: "Near Big Temple" },
              { name: "Gandhiji Road", area: "Gandhiji Road", landmark: "Near Collectorate" }
            ].map((branch, index) => (
              <Card 
                key={index} 
                className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{branch.name}</h3>
                    <p className="text-gray-600">{branch.area}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{branch.landmark}</p>
                <Button size="sm" className="gradient-bg text-white hover:opacity-90">
                  Get Directions
                </Button>
              </Card>
            ))}
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
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              Book Appointment Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg">
              <Phone className="h-5 w-5 mr-2" />
              Call: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
