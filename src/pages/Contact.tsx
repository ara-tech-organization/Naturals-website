
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Calendar, Star } from 'lucide-react';
import AOS from 'aos';

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 98765 43210",
      desc: "Available 9 AM - 8 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@naturals-thanjavur.com",
      desc: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Big Street, Thanjavur",
      desc: "5 branches across the city"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Mon - Sat: 9 AM - 8 PM",
      desc: "Sunday: 10 AM - 6 PM"
    }
  ];

  const faqData = [
    {
      question: "How do I book an appointment?",
      answer: "You can book by calling us, using our online form, or visiting any of our branches directly."
    },
    {
      question: "Do you accept walk-ins?",
      answer: "Yes, we accept walk-ins based on availability. However, we recommend booking in advance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, UPI, credit/debit cards, and digital wallets."
    },
    {
      question: "Do you offer bridal packages?",
      answer: "Yes, we offer comprehensive bridal packages including pre-bridal treatments and makeup."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl mx-auto px-4" data-aos="fade-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Get In Touch</h1>
            <p className="text-2xl md:text-3xl mb-8 text-purple-100">
              We're Here to Make You Beautiful
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3">
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <Card 
                key={index} 
                className="group p-8 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 cursor-pointer"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-primary mb-2">{item.info}</p>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div data-aos="slide-right">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <Card className="p-8 border-0 shadow-lg">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="hair">Hair Care & Styling</option>
                        <option value="bridal">Bridal Package</option>
                        <option value="facial">Facial & Skin Care</option>
                        <option value="spa">Spa & Wellness</option>
                        <option value="men">Men's Grooming</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className="border-gray-300 focus:border-primary"
                    />
                  </div>
                  
                  <Button className="w-full gradient-bg text-white hover:opacity-90 py-3">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Info Cards */}
            <div className="space-y-8" data-aos="slide-left">
              <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
              
              <div className="space-y-6">
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Professionals</h3>
                      <p className="text-gray-600">Our certified stylists and beauticians have years of experience in the industry.</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Service</h3>
                      <p className="text-gray-600">We customize our treatments according to your specific needs and preferences.</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
                      <p className="text-gray-600">Book appointments at your convenience with our flexible timing options.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Flip Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <Card 
                key={index} 
                className="group h-48 [perspective:1000px] cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="relative h-full w-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-700">
                  {/* Front */}
                  <div className="absolute inset-0 [backface-visibility:hidden] bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center p-6">
                    <div className="text-center text-white">
                      <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold">{faq.question}</h3>
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white border border-gray-200 rounded-lg flex items-center justify-center p-6">
                    <div className="text-center">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Contact us today and let our experts take care of your beauty needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3">
              Call: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
