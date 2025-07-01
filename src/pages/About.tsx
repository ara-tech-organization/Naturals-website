
import { Card } from '@/components/ui/card';
import { Users, Award, Heart, Target, Sparkles } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Naturals Thanjavur</h1>
            <p className="text-xl text-purple-100 mb-8">
              Your trusted partner in beauty and wellness since 2009
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 2009, Naturals has been Thanjavur's premier destination for beauty and wellness services. 
                What started as a small beauty salon has grown into a trusted brand with multiple locations across the city.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple vision: to provide world-class beauty and wellness services that enhance 
                natural beauty and boost confidence. Over the years, we have served thousands of satisfied customers, 
                building lasting relationships based on trust, quality, and exceptional service.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to evolve, incorporating the latest trends and technologies while maintaining our 
                commitment to personalized care and attention to detail that has made us Thanjavur's favorite beauty destination.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg p-8 h-96 flex items-center justify-center">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-center">
                To provide exceptional beauty and wellness services that enhance our customers' natural beauty, 
                boost their confidence, and contribute to their overall well-being. We are committed to delivering 
                personalized experiences using the finest products and latest techniques in a comfortable, 
                hygienic environment.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-center">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Naturals Thanjavur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Our skilled professionals are dedicated to providing you with exceptional service and results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 bg-white text-gray-900 border-0">
                <div className="text-center">
                  <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-sm text-gray-500">{member.specialty}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">5</h3>
              <p className="text-gray-600">Branch Locations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Expert Staff</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
