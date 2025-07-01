
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Scissors, Sparkles, Heart, Crown, User, Palette, Zap, Shield } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('women');

  const womenServices = [
    {
      category: "Hair Care & Styling",
      icon: <Scissors className="h-8 w-8 text-primary" />,
      services: [
        { name: "Hair Cut & Styling", price: "₹500 - ₹1,500", duration: "60 mins" },
        { name: "Hair Coloring", price: "₹1,200 - ₹3,000", duration: "120 mins" },
        { name: "Hair Spa Treatment", price: "₹800 - ₹1,200", duration: "90 mins" },
        { name: "Keratin Treatment", price: "₹3,000 - ₹5,000", duration: "180 mins" },
        { name: "Bridal Hair Styling", price: "₹2,000 - ₹4,000", duration: "150 mins" }
      ]
    },
    {
      category: "Skin Care & Facials",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      services: [
        { name: "Classic Facial", price: "₹800 - ₹1,200", duration: "75 mins" },
        { name: "Anti-Aging Facial", price: "₹1,500 - ₹2,500", duration: "90 mins" },
        { name: "Hydrating Facial", price: "₹1,000 - ₹1,800", duration: "80 mins" },
        { name: "Acne Treatment", price: "₹1,200 - ₹2,000", duration: "85 mins" },
        { name: "Brightening Facial", price: "₹1,100 - ₹1,900", duration: "80 mins" }
      ]
    },
    {
      category: "Spa & Wellness",
      icon: <Heart className="h-8 w-8 text-primary" />,
      services: [
        { name: "Full Body Massage", price: "₹1,800 - ₹3,000", duration: "90 mins" },
        { name: "Aromatherapy", price: "₹2,000 - ₹3,500", duration: "100 mins" },
        { name: "Body Polishing", price: "₹1,500 - ₹2,500", duration: "120 mins" },
        { name: "Reflexology", price: "₹1,200 - ₹2,000", duration: "60 mins" },
        { name: "Hot Stone Therapy", price: "₹2,500 - ₹4,000", duration: "110 mins" }
      ]
    },
    {
      category: "Bridal Packages",
      icon: <Crown className="h-8 w-8 text-primary" />,
      services: [
        { name: "Pre-Bridal Package", price: "₹8,000 - ₹15,000", duration: "Multiple sessions" },
        { name: "Bridal Makeup", price: "₹3,000 - ₹8,000", duration: "180 mins" },
        { name: "Bridal Hair & Makeup", price: "₹5,000 - ₹12,000", duration: "240 mins" },
        { name: "Mehendi Design", price: "₹500 - ₹2,000", duration: "120 mins" },
        { name: "Complete Bridal Package", price: "₹15,000 - ₹25,000", duration: "Full day" }
      ]
    }
  ];

  const menServices = [
    {
      category: "Hair Care & Styling",
      icon: <Scissors className="h-8 w-8 text-primary" />,
      services: [
        { name: "Hair Cut & Styling", price: "₹300 - ₹800", duration: "45 mins" },
        { name: "Hair Wash & Conditioning", price: "₹200 - ₹400", duration: "30 mins" },
        { name: "Hair Coloring", price: "₹800 - ₹2,000", duration: "90 mins" },
        { name: "Hair Spa Treatment", price: "₹600 - ₹1,000", duration: "60 mins" },
        { name: "Dandruff Treatment", price: "₹500 - ₹900", duration: "50 mins" }
      ]
    },
    {
      category: "Beard & Mustache",
      icon: <User className="h-8 w-8 text-primary" />,
      services: [
        { name: "Beard Trimming", price: "₹200 - ₹500", duration: "30 mins" },
        { name: "Mustache Styling", price: "₹150 - ₹300", duration: "20 mins" },
        { name: "Beard Oil Treatment", price: "₹300 - ₹600", duration: "40 mins" },
        { name: "Full Shave", price: "₹250 - ₹500", duration: "35 mins" },
        { name: "Beard & Mustache Combo", price: "₹400 - ₹800", duration: "50 mins" }
      ]
    },
    {
      category: "Skin Care",
      icon: <Palette className="h-8 w-8 text-primary" />,
      services: [
        { name: "Men's Facial", price: "₹600 - ₹1,200", duration: "60 mins" },
        { name: "Anti-Tan Treatment", price: "₹800 - ₹1,500", duration: "70 mins" },
        { name: "Acne Treatment", price: "₹900 - ₹1,600", duration: "65 mins" },
        { name: "Brightening Facial", price: "₹700 - ₹1,300", duration: "65 mins" },
        { name: "Hydrating Treatment", price: "₹650 - ₹1,100", duration: "55 mins" }
      ]
    },
    {
      category: "Wellness & Massage",
      icon: <Zap className="h-8 w-8 text-primary" />,
      services: [
        { name: "Head & Shoulder Massage", price: "₹800 - ₹1,500", duration: "60 mins" },
        { name: "Full Body Massage", price: "₹1,500 - ₹2,500", duration: "90 mins" },
        { name: "Sports Massage", price: "₹1,200 - ₹2,000", duration: "75 mins" },
        { name: "Stress Relief Package", price: "₹2,000 - ₹3,000", duration: "120 mins" },
        { name: "Executive Grooming", price: "₹1,800 - ₹3,500", duration: "150 mins" }
      ]
    }
  ];

  const specialPackages = [
    {
      title: "Couple's Spa Package",
      description: "Relaxing spa experience for couples",
      price: "₹5,000 - ₹8,000",
      duration: "180 mins",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "Mother & Daughter Package",
      description: "Special bonding experience with beauty treatments",
      price: "₹3,500 - ₹6,000",
      duration: "150 mins",
      icon: <Crown className="h-6 w-6 text-primary" />
    },
    {
      title: "Corporate Grooming",
      description: "Professional grooming services for executives",
      price: "₹2,500 - ₹4,500",
      duration: "120 mins",
      icon: <Shield className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Premium Services</h1>
            <p className="text-xl text-purple-100 mb-8">
              Comprehensive beauty and wellness solutions for men and women
            </p>
            <p className="text-lg text-purple-200">
              Experience luxury treatments with our expert professionals using premium products and latest techniques
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-gray-100">
                <TabsTrigger value="women" className="text-lg font-semibold">
                  Women's Services
                </TabsTrigger>
                <TabsTrigger value="men" className="text-lg font-semibold">
                  Men's Services
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="women" className="space-y-12">
              {womenServices.map((category, index) => (
                <div key={index} className="space-y-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.category}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Card key={serviceIndex} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.name}</h3>
                        <div className="space-y-2 mb-4">
                          <p className="text-primary font-semibold text-lg">{service.price}</p>
                          <p className="text-gray-600">Duration: {service.duration}</p>
                        </div>
                        <Button className="w-full gradient-bg text-white hover:opacity-90">
                          Book Now
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="men" className="space-y-12">
              {menServices.map((category, index) => (
                <div key={index} className="space-y-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.category}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Card key={serviceIndex} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.name}</h3>
                        <div className="space-y-2 mb-4">
                          <p className="text-primary font-semibold text-lg">{service.price}</p>
                          <p className="text-gray-600">Duration: {service.duration}</p>
                        </div>
                        <Button className="w-full gradient-bg text-white hover:opacity-90">
                          Book Now
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Special Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exclusive packages designed for special occasions and unique experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialPackages.map((pkg, index) => (
              <Card key={index} className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-primary font-semibold text-lg">{pkg.price}</p>
                  <p className="text-gray-600">Duration: {pkg.duration}</p>
                </div>
                <Button className="w-full gradient-bg text-white hover:opacity-90">
                  Book Package
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Experience the difference with our premium services and expert care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Professionals</h3>
              <p className="text-purple-200">Trained and certified beauticians with years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Products</h3>
              <p className="text-purple-200">Only the finest, internationally acclaimed beauty products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
              <p className="text-purple-200">Customized treatments based on your unique needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Technology</h3>
              <p className="text-purple-200">Modern equipment and advanced treatment techniques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Book Your Service?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment and experience the best beauty and wellness services in Thanjavur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-white hover:opacity-90 px-8 py-3">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
              Call Now: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
