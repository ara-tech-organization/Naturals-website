
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Crown, Sparkles, Star } from 'lucide-react';

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');

  const womenServices = [
    {
      category: 'Hair Services',
      services: [
        { name: 'Hair Cut & Styling', price: '₹800', duration: '45 min', popular: false },
        { name: 'Hair Coloring (Full)', price: '₹2500', duration: '2 hours', popular: true },
        { name: 'Hair Spa Treatment', price: '₹1200', duration: '1 hour', popular: false },
        { name: 'Keratin Treatment', price: '₹4500', duration: '3 hours', popular: false },
        { name: 'Hair Straightening', price: '₹3500', duration: '2.5 hours', popular: false },
        { name: 'Hair Highlights', price: '₹3000', duration: '2 hours', popular: true }
      ]
    },
    {
      category: 'Facial & Skin Care',
      services: [
        { name: 'Classic Facial', price: '₹1500', duration: '1 hour', popular: true },
        { name: 'Gold Facial', price: '₹2500', duration: '1.5 hours', popular: false },
        { name: 'Diamond Facial', price: '₹3500', duration: '1.5 hours', popular: true },
        { name: 'Anti-Aging Facial', price: '₹3000', duration: '1.5 hours', popular: false },
        { name: 'Acne Treatment', price: '₹2000', duration: '1 hour', popular: false },
        { name: 'Cleanup', price: '₹800', duration: '30 min', popular: true }
      ]
    },
    {
      category: 'Body Care & Spa',
      services: [
        { name: 'Full Body Massage', price: '₹2500', duration: '1.5 hours', popular: true },
        { name: 'Body Polishing', price: '₹3000', duration: '2 hours', popular: false },
        { name: 'Body Wrap', price: '₹2800', duration: '1.5 hours', popular: false },
        { name: 'Manicure', price: '₹600', duration: '45 min', popular: true },
        { name: 'Pedicure', price: '₹800', duration: '1 hour', popular: true },
        { name: 'Waxing (Full Body)', price: '₹1500', duration: '1.5 hours', popular: false }
      ]
    },
    {
      category: 'Makeup Services',
      services: [
        { name: 'Party Makeup', price: '₹2500', duration: '1.5 hours', popular: true },
        { name: 'Bridal Makeup', price: '₹8000', duration: '3 hours', popular: true },
        { name: 'Engagement Makeup', price: '₹4000', duration: '2 hours', popular: false },
        { name: 'HD Makeup', price: '₹3500', duration: '2 hours', popular: false },
        { name: 'Airbrush Makeup', price: '₹4500', duration: '2 hours', popular: false }
      ]
    }
  ];

  const menServices = [
    {
      category: 'Hair Services',
      services: [
        { name: 'Hair Cut', price: '₹300', duration: '30 min', popular: true },
        { name: 'Hair Cut + Styling', price: '₹500', duration: '45 min', popular: true },
        { name: 'Hair Coloring', price: '₹1500', duration: '1 hour', popular: false },
        { name: 'Hair Spa', price: '₹800', duration: '45 min', popular: false },
        { name: 'Beard Styling', price: '₹400', duration: '30 min', popular: true },
        { name: 'Mustache Styling', price: '₹200', duration: '15 min', popular: false }
      ]
    },
    {
      category: 'Facial & Grooming',
      services: [
        { name: 'Classic Facial', price: '₹1000', duration: '45 min', popular: true },
        { name: 'De-tan Facial', price: '₹1200', duration: '1 hour', popular: false },
        { name: 'Anti-Aging Facial', price: '₹1800', duration: '1 hour', popular: false },
        { name: 'Cleanup', price: '₹600', duration: '30 min', popular: true },
        { name: 'Blackhead Removal', price: '₹800', duration: '30 min', popular: false }
      ]
    },
    {
      category: 'Body Care',
      services: [
        { name: 'Body Massage', price: '₹1500', duration: '1 hour', popular: true },
        { name: 'Head Massage', price: '₹500', duration: '30 min', popular: false },
        { name: 'Manicure', price: '₹400', duration: '30 min', popular: true },
        { name: 'Pedicure', price: '₹500', duration: '45 min', popular: true },
        { name: 'Body Waxing', price: '₹800', duration: '45 min', popular: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="relative z-10 text-center" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Service Pricing</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transparent pricing for all our premium beauty and wellness services
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Service Categories */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Service Menu</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional services with competitive pricing and exceptional quality
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <div className="flex justify-center mb-8" data-aos="fade-up">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
              <TabsTrigger value="women" className="text-lg font-semibold">
                Women's Services
              </TabsTrigger>
              <TabsTrigger value="men" className="text-lg font-semibold">
                Men's Services
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="women" className="space-y-8">
            {womenServices.map((category, categoryIndex) => (
              <Card key={category.category} className="overflow-hidden" data-aos="fade-up" data-aos-delay={categoryIndex * 100}>
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                    <Crown className="h-6 w-6 text-purple-500 mr-2" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Service</TableHead>
                        <TableHead className="font-semibold">Duration</TableHead>
                        <TableHead className="font-semibold">Price</TableHead>
                        <TableHead className="font-semibold">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.services.map((service, serviceIndex) => (
                        <TableRow key={service.name} className="hover:bg-gray-50">
                          <TableCell>
                            <div className="flex items-center">
                              {service.name}
                              {service.popular && (
                                <Badge className="ml-2 bg-purple-500 text-white text-xs">
                                  <Star className="h-3 w-3 mr-1" />
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-gray-600">{service.duration}</TableCell>
                          <TableCell className="font-semibold text-purple-600 text-lg">{service.price}</TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline" className="hover:bg-purple-500 hover:text-white">
                              Book Now
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="men" className="space-y-8">
            {menServices.map((category, categoryIndex) => (
              <Card key={category.category} className="overflow-hidden" data-aos="fade-up" data-aos-delay={categoryIndex * 100}>
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                    <Crown className="h-6 w-6 text-blue-500 mr-2" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Service</TableHead>
                        <TableHead className="font-semibold">Duration</TableHead>
                        <TableHead className="font-semibold">Price</TableHead>
                        <TableHead className="font-semibold">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.services.map((service, serviceIndex) => (
                        <TableRow key={service.name} className="hover:bg-gray-50">
                          <TableCell>
                            <div className="flex items-center">
                              {service.name}
                              {service.popular && (
                                <Badge className="ml-2 bg-blue-500 text-white text-xs">
                                  <Star className="h-3 w-3 mr-1" />
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-gray-600">{service.duration}</TableCell>
                          <TableCell className="font-semibold text-blue-600 text-lg">{service.price}</TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline" className="hover:bg-blue-500 hover:text-white">
                              Book Now
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Special Offers Section */}
        <section className="mt-16" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Special Offers</h3>
            <p className="text-lg text-gray-600">Limited time deals and combo packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-2 bg-purple-500">20% OFF</Badge>
                <CardTitle className="text-xl">First Visit Special</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Get 20% off on your first service booking</p>
                <Button className="w-full gradient-bg text-white">Claim Offer</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-2 bg-green-500">COMBO DEAL</Badge>
                <CardTitle className="text-xl">Hair + Facial Combo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Save ₹500 on Hair + Facial combo</p>
                <Button className="w-full bg-green-500 text-white hover:bg-green-600">Book Combo</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-2 bg-pink-500">LOYALTY</Badge>
                <CardTitle className="text-xl">Refer & Earn</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Refer friends and earn ₹200 credits</p>
                <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
