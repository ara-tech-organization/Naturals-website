
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Crown, Heart, Sparkles, Star, Gift } from 'lucide-react';

const BridalPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState('');

  const packages = [
    {
      id: 'classic',
      title: 'Classic Bridal Package',
      price: '₹25,000',
      duration: '6 hours',
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      services: [
        'Bridal Makeup (HD)',
        'Hair Styling & Draping',
        'Manicure & Pedicure',
        'Facial & Cleanup',
        'Mehendi Design',
        'Pre-wedding Consultation'
      ],
      features: ['Professional Team', 'Quality Products', 'Touch-up Kit'],
      popular: false
    },
    {
      id: 'premium',
      title: 'Premium Bridal Package',
      price: '₹45,000',
      duration: '8 hours',
      icon: <Crown className="h-8 w-8 text-purple-500" />,
      services: [
        'Bridal Makeup (HD + Airbrush)',
        'Hair Styling & Advanced Draping',
        'Spa Manicure & Pedicure',
        'Luxury Facial Treatment',
        'Intricate Mehendi Design',
        'Pre-wedding Trial Session',
        'Jewelry Styling',
        'Saree/Lehenga Draping'
      ],
      features: ['Premium Products', 'Senior Stylist', 'Touch-up Kit', 'Photography Support'],
      popular: true
    },
    {
      id: 'royal',
      title: 'Royal Bridal Package',
      price: '₹65,000',
      duration: '12 hours',
      icon: <Sparkles className="h-8 w-8 text-gold-500" />,
      services: [
        'Complete Bridal Makeover',
        'Designer Hair Styling',
        'Luxury Spa Treatment',
        'Full Body Massage',
        'Designer Mehendi',
        'Multiple Trial Sessions',
        'Wedding Day Coordination',
        'Groom Styling Included',
        'Family Makeup (2 people)'
      ],
      features: ['Luxury Brand Products', 'Celebrity Stylist', 'Complete Kit', 'Photoshoot Ready', 'Doorstep Service'],
      popular: false
    }
  ];

  const preWeddingServices = [
    { name: 'Engagement Makeup', price: '₹8,000', duration: '3 hours' },
    { name: 'Mehendi Ceremony', price: '₹6,000', duration: '2 hours' },
    { name: 'Sangeet Night', price: '₹10,000', duration: '4 hours' },
    { name: 'Reception Look', price: '₹12,000', duration: '4 hours' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="relative z-10 text-center" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <Crown className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Bridal Packages</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Make your special day unforgettable with our exclusive bridal packages
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Main Packages Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Perfect Package</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From classic elegance to royal luxury, we have the perfect bridal package for your dream wedding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {pkg.popular && (
                <Badge className="absolute top-4 right-4 bg-purple-500 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {pkg.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">{pkg.title}</CardTitle>
                <CardDescription className="text-lg">
                  <span className="text-3xl font-bold text-purple-600">{pkg.price}</span>
                  <span className="text-gray-500 ml-2">({pkg.duration})</span>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Services Included:</h4>
                    <ul className="space-y-1">
                      {pkg.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Gift className="h-3 w-3 text-purple-500 mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full gradient-bg text-white hover:opacity-90"
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pre-Wedding Services */}
        <section className="mb-16" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Pre-Wedding Services</h3>
            <p className="text-lg text-gray-600">Individual services for your special celebrations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preWeddingServices.map((service, index) => (
              <Card 
                key={service.name}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                    <br />
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16 px-8 rounded-2xl" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-4">Ready to Book Your Dream Wedding Look?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contact us today for a consultation and let us make your special day absolutely perfect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-purple-600">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Call +91 98765 43210
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BridalPackages;
