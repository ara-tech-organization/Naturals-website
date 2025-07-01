import { Card } from '@/components/ui/card';
import { Users, Award, Heart, Target, Sparkles, Shield, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Customer Care",
      description: "We prioritize our customers' satisfaction and well-being above everything else."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in every service we provide, maintaining the highest standards."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We embrace the latest techniques and technologies in beauty and wellness."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings."
    }
  ];

  const team = [
    {
      name: "Kavitha Ramesh",
      role: "Senior Hair Stylist",
      experience: "12+ Years",
      specialty: "Bridal Hair & Advanced Styling"
    },
    {
      name: "Suresh Kumar",
      role: "Men's Grooming Specialist",
      experience: "8+ Years",
      specialty: "Modern Cuts & Beard Styling"
    },
    {
      name: "Lakshmi Devi",
      role: "Skin Care Expert",
      experience: "10+ Years",
      specialty: "Anti-aging & Facial Treatments"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-32 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(126, 71, 152, 0.8), rgba(126, 71, 152, 0.8)), url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-6xl font-bold mb-8">About Naturals Thanjavur</h1>
            <p className="text-2xl text-purple-100 mb-8">
              Your trusted partner in beauty and wellness since 2009
            </p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Established in 2009, Naturals has been Thanjavur's premier destination for beauty and wellness services. 
                  What started as a small beauty salon has grown into a trusted brand with multiple locations across the city.
                </p>
                <p>
                  Our journey began with a simple vision: to provide world-class beauty and wellness services that enhance 
                  natural beauty and boost confidence. Over the years, we have served thousands of satisfied customers, 
                  building lasting relationships based on trust, quality, and exceptional service.
                </p>
                <p>
                  Today, we continue to evolve, incorporating the latest trends and technologies while maintaining our 
                  commitment to personalized care and attention to detail that has made us Thanjavur's favorite beauty destination.
                </p>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-12 h-96 flex items-center justify-center shadow-2xl">
                <svg width="250" height="250" viewBox="0 0 200 200" fill="none" className="animate-float">
                  <circle cx="100" cy="100" r="80" stroke="#7e4798" strokeWidth="3" fill="none"/>
                  <circle cx="100" cy="100" r="60" stroke="#7e4798" strokeWidth="2" fill="none"/>
                  <circle cx="100" cy="100" r="40" stroke="#7e4798" strokeWidth="2" fill="none"/>
                  <path d="M100 60 L100 140 M60 100 L140 100" stroke="#7e4798" strokeWidth="2"/>
                  <circle cx="100" cy="100" r="8" fill="#7e4798"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-12 border-0 shadow-2xl rounded-3xl bg-white transform hover:scale-105 transition-all duration-500" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                To provide exceptional beauty and wellness services that enhance our customers' natural beauty, 
                boost their confidence, and contribute to their overall well-being. We are committed to delivering 
                personalized experiences using the finest products and latest techniques in a comfortable, 
                hygienic environment.
              </p>
            </Card>

            <Card className="p-12 border-0 shadow-2xl rounded-3xl bg-white transform hover:scale-105 transition-all duration-500" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                To be Thanjavur's most trusted and preferred beauty and wellness destination, known for our 
                innovative services, exceptional customer care, and commitment to enhancing natural beauty. 
                We aspire to expand our reach while maintaining our core values of quality, integrity, and 
                customer satisfaction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Naturals Thanjavur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div key={index} className="text-center group" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-white rounded-full shadow-lg group-hover:animate-bounce">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        className="py-20 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(126, 71, 152, 0.9), rgba(126, 71, 152, 0.9)), url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Our skilled professionals are dedicated to providing you with exceptional service and results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <Card key={index} className="p-8 bg-white bg-opacity-10 backdrop-blur-sm text-white border-white border-opacity-20 rounded-3xl hover:bg-opacity-20 transition-all duration-500 transform hover:scale-105" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="text-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{member.name}</h3>
                  <p className="text-yellow-300 font-medium mb-3 text-lg">{member.role}</p>
                  <p className="text-purple-200 mb-3">{member.experience}</p>
                  <p className="text-purple-300 text-sm">{member.specialty}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group" data-aos="zoom-in" data-aos-delay="0">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3">15+</h3>
                <p className="text-gray-600 text-lg">Years of Excellence</p>
              </div>
            </div>
            <div className="text-center group" data-aos="zoom-in" data-aos-delay="100">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3">10,000+</h3>
                <p className="text-gray-600 text-lg">Happy Customers</p>
              </div>
            </div>
            <div className="text-center group" data-aos="zoom-in" data-aos-delay="200">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3">5</h3>
                <p className="text-gray-600 text-lg">Branch Locations</p>
              </div>
            </div>
            <div className="text-center group" data-aos="zoom-in" data-aos-delay="300">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3">50+</h3>
                <p className="text-gray-600 text-lg">Expert Staff</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
