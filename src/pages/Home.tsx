
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scissors, Heart, Sparkles, Users, Star, Award, Clock, MapPin, Phone, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import HeroCarousel from '@/components/HeroCarousel';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

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
    {
      name: "Hair Styling",
      desc: "Professional cuts and styling",
      image: "/images/hairstyle.jpg",
    },
    {
      name: "Bridal Services",
      desc: "Complete bridal makeover",
      image: "/images/makeup.jpeg",
    },
    {
      name: "Skin Care",
      desc: "Advanced facial treatments",
      image: "/images/skincare.jpeg",
    },
    {
      name: "Spa & Wellness",
      desc: "Relaxing body treatments",
      image: "/images/spa.jpeg",
    },
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
    { number: 10000, label: "Happy Customers", suffix: "+" },
    { number: 15, label: "Years Experience", suffix: "+" },
    { number: 100, label: "Bridal Works",suffix:"+" },
    { number: 25, label: "Expert Stylists", suffix: "+" }
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
              With over 15 years of expertise, we're your trusted partner
              in looking and feeling your absolute best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer h-[320px] group bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Spotlight Overlay on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-all duration-500" />

                {/* Centered Text */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-white text-sm">{service.desc}</p>
                </div>
              </div>
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
            {stats.map((stat, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.5,
              });

              return (
                <div
                  key={index}
                  ref={ref}
                  className="text-center group"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="text-4xl md:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform">
                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2}
                        suffix={stat.suffix || ''}
                      />
                    )}
                  </div>
                  <div className="text-xl text-purple-100">{stat.label}</div>
                </div>
              );
            })}
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
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Main Branch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conveniently located at Arulanthar Nagar, Thanjavur.
            </p>
          </div>

          {/* Branch Info Card */}
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
            {/* <Button size="sm" className="gradient-bg text-white hover:opacity-90">
              Get Directions
            </Button> */}
          </div>

          {/* Full Width Map */}
          <div className="w-full">
            <iframe
              className="w-full h-[400px] rounded-xl shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4931029823315!2d79.13116237596353!3d10.773494531878411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab9b069029cff%3A0x58f9279539ef68c4!2sNaturals%20unisex%20salon%20-%20Arulanthar%20nagar!5e0!3m2!1sen!2sin!4v1751542614741!5m2!1sen!2sin"
              allowFullScreen=""
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
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              Book Appointment Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg">
              <Phone className="h-5 w-5 mr-2" />
              Call: +91 90870 00049
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
