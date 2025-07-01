
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Main Branch Address",
      details: [
        "123 Big Street, Thanjavur - 613001",
        "Near Central Bus Stand",
        "Tamil Nadu, India"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Numbers",
      details: [
        "+91 98765 43210 (Main)",
        "+91 87654 32109 (Appointments)",
        "+91 76543 21098 (Emergencies)"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Addresses",
      details: [
        "info@naturals-thanjavur.com",
        "appointments@naturals-thanjavur.com",
        "support@naturals-thanjavur.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Working Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 8:00 PM",
        "Sunday: 10:00 AM - 6:00 PM",
        "Public Holidays: 10:00 AM - 4:00 PM"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by calling us, visiting our branch, or using our online booking system. We recommend booking in advance to ensure your preferred time slot."
    },
    {
      question: "What safety measures do you follow?",
      answer: "We follow strict hygiene protocols including sanitization of all equipment, use of disposable items where possible, and maintaining clean, sterile environments for all treatments."
    },
    {
      question: "Do you offer bridal packages?",
      answer: "Yes, we offer comprehensive bridal packages including pre-bridal treatments, wedding day makeup and hair styling, and post-wedding care. Contact us for customized packages."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, UPI, and all major digital payment methods. We also offer EMI options for expensive treatments and packages."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-purple-100 mb-8">
              Get in touch with Naturals Thanjavur for all your beauty and wellness needs
            </p>
            <p className="text-lg text-purple-200">
              We're here to help you look and feel your best. Reach out to us for appointments, queries, or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us and visit our premium beauty salon in Thanjavur
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                Let us know how we can help you with your beauty and wellness needs.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="hair-care">Hair Care & Styling</option>
                    <option value="skin-care">Skin Care & Facials</option>
                    <option value="spa-wellness">Spa & Wellness</option>
                    <option value="bridal-package">Bridal Package</option>
                    <option value="mens-grooming">Men's Grooming</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements or any questions you have..."
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full gradient-bg text-white hover:opacity-90">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">123 Big Street, Thanjavur</p>
                </div>
              </div>
              
              {/* Quick Contact */}
              <Card className="p-6 border-0 shadow-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Call Now</span>
                    <Button size="sm" className="gradient-bg text-white hover:opacity-90">
                      +91 98765 43210
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">WhatsApp</span>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Chat Now
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Email</span>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Send Email
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Business Hours */}
              <Card className="p-6 border-0 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Public Holidays</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions and answers about our services and policies
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            For urgent appointments or emergency situations, contact us directly. We're here to help you with immediate beauty and wellness needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3">
              Call Emergency Line: +91 76543 21098
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3">
              WhatsApp Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
