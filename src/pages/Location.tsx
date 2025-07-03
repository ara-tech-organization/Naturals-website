import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Car, Navigation, Star } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import Map from '@/components/Map';

const Location = () => {
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

  const branches = [
    {
      name: "Naturals Main Branch",
      address: "123 Big Street, Thanjavur - 613001",
      landmark: "Near Central Bus Stand",
      phone: "+91 90870 00049",
      hours: "9:00 AM - 8:00 PM",
      services: ["Full Service Salon", "Spa & Wellness", "Bridal Services", "Men's Grooming"],
      rating: 4.9,
      reviews: 850,
      parking: "Available",
      established: "2009"
    },
    {
      name: "Naturals Anna Nagar Branch",
      address: "45 Anna Nagar Main Road, Thanjavur - 613007",
      landmark: "Opposite Anna Nagar Park",
      phone: "+91 87654 32109",
      hours: "9:30 AM - 7:30 PM",
      services: ["Hair Care", "Skin Treatments", "Spa Services", "Bridal Makeup"],
      rating: 4.8,
      reviews: 620,
      parking: "Available",
      established: "2015"
    },
    {
      name: "Naturals Gandhiji Road Branch",
      address: "78 Gandhiji Road, Thanjavur - 613009",
      landmark: "Near District Collectorate",
      phone: "+91 76543 21098",
      hours: "10:00 AM - 7:00 PM",
      services: ["Quick Services", "Hair Styling", "Basic Facials", "Men's Cuts"],
      rating: 4.7,
      reviews: 420,
      parking: "Limited",
      established: "2017"
    },
    {
      name: "Naturals Medical College Road",
      address: "156 Medical College Road, Thanjavur - 613004",
      landmark: "Near Thanjavur Medical College",
      phone: "+91 90870 00049",
      hours: "9:00 AM - 8:00 PM",
      services: ["Student Packages", "Hair Care", "Skin Care", "Affordable Services"],
      rating: 4.6,
      reviews: 380,
      parking: "Available",
      established: "2018"
    },
    {
      name: "Naturals East Main Street",
      address: "234 East Main Street, Thanjavur - 613005",
      landmark: "Near Big Temple",
      phone: "+91 90870 00049",
      hours: "8:30 AM - 7:30 PM",
      services: ["Premium Services", "Luxury Spa", "VIP Treatments", "Exclusive Packages"],
      rating: 4.9,
      reviews: 720,
      parking: "Valet Available",
      established: "2020"
    }
  ];

  const cityAreas = [
    {
      area: "Central Thanjavur",
      branches: 2,
      description: "Prime locations near major landmarks and business centers"
    },
    {
      area: "Anna Nagar",
      branches: 1,
      description: "Residential area with family-friendly services"
    },
    {
      area: "Medical College Area",
      branches: 1,
      description: "Student-friendly packages and affordable services"
    },
    {
      area: "East Thanjavur",
      branches: 1,
      description: "Premium location near heritage sites"
    }
  ];

  const transportInfo = [
    {
      mode: "Bus",
      details: "Multiple bus routes connect to all our branches. Main branch is 2 minutes walk from Central Bus Stand."
    },
    {
      mode: "Auto/Taxi",
      details: "Easily accessible by auto-rickshaw and taxi services. All drivers know our locations."
    },
    {
      mode: "Car",
      details: "Parking facilities available at most branches. Valet service at premium locations."
    },
    {
      mode: "Bike",
      details: "Two-wheeler parking available at all locations. Safe and secure parking areas."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(126, 71, 152, 0.7), rgba(126, 71, 152, 0.7)), url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Our Locations in Thanjavur</h1>
            <p className="text-2xl md:text-3xl mb-8 text-purple-100">
              Five convenient locations across Thanjavur to serve you better
            </p>
            <p className="text-lg text-purple-200 mb-8">
              Visit any of our premium branches for exceptional beauty and wellness services
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3">
              Find Nearest Branch
            </Button>
          </div>
        </div>
      </section>

      {/* Branch Locations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Branch Network</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategically located across Thanjavur for your convenience. Each branch offers unique services tailored to the local community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {branches.map((branch, index) => (
              <Card 
                key={index} 
                className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow group hover:scale-105 duration-300"
                data-aos="slide-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{branch.name}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{branch.rating}</span>
                      <span className="text-gray-600">({branch.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-primary font-medium">Est. {branch.established}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{branch.address}</p>
                      <p className="text-sm text-gray-600">{branch.landmark}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">{branch.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">{branch.hours}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Car className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">Parking: {branch.parking}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Available Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="px-3 py-1 bg-primary-50 text-primary text-sm rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button size="sm" className="gradient-bg text-white hover:opacity-90 flex-1">
                    Get Directions
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white flex-1">
                    Call Branch
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Area Coverage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage across Thanjavur with branches in key areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cityAreas.map((area, index) => (
              <Card 
                key={index} 
                className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{area.area}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{area.branches}</p>
                <p className="text-sm text-gray-600 mb-4">Branch{area.branches > 1 ? 'es' : ''}</p>
                <p className="text-sm text-gray-600">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transport & Accessibility Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple transportation options to visit our branches conveniently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportInfo.map((transport, index) => (
              <Card 
                key={index} 
                className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{transport.mode}</h3>
                <p className="text-sm text-gray-600">{transport.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us on Map</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interactive map showing all our branch locations in Thanjavur
            </p>
          </div>
          
          {/* Enhanced Interactive Map */}
          <div data-aos="zoom-in">
            <Map />
          </div>
        </div>
      </section>

      {/* Visit Planning Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Plan Your Visit</h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Choose the most convenient branch and book your appointment today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white text-gray-900 border-0" data-aos="slide-right">
              <div className="text-center">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Choose Location</h3>
                <p className="text-gray-600">Select the branch nearest to you or with your preferred services</p>
              </div>
            </Card>
            
            <Card className="p-6 bg-white text-gray-900 border-0" data-aos="slide-up">
              <div className="text-center">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Book Appointment</h3>
                <p className="text-gray-600">Call the branch directly or use our online booking system</p>
              </div>
            </Card>
            
            <Card className="p-6 bg-white text-gray-900 border-0" data-aos="slide-left">
              <div className="text-center">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enjoy Service</h3>
                <p className="text-gray-600">Experience premium beauty and wellness services at your chosen branch</p>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 mr-4">
              Book Appointment Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3">
              Get Directions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
