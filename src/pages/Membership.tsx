
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Crown, Star, Gift, Shield, Clock, Users, Check, X } from 'lucide-react';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isFlipped, setIsFlipped] = useState({});

  const membershipPlans = [
    {
      id: 'silver',
      name: 'Silver Membership',
      price: '₹2,999',
      validity: '6 Months',
      icon: <Shield className="h-12 w-12 text-gray-400" />,
      color: 'from-gray-300 to-gray-500',
      benefits: [
        '10% discount on all services',
        'Priority booking',
        'Free birthday surprise',
        'Monthly newsletter with beauty tips',
        'Basic consultation included'
      ],
      services: ['Hair Services', 'Basic Facial', 'Cleanup'],
      popular: false
    },
    {
      id: 'gold',
      name: 'Gold Membership',
      price: '₹4,999',
      validity: '12 Months',
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      color: 'from-yellow-300 to-yellow-600',
      benefits: [
        '15% discount on all services',
        'Priority booking & express service',
        'Free birthday makeover',
        'Quarterly complimentary facial',
        'Advanced consultation & skin analysis',
        'Exclusive member-only offers',
        'Free touch-up sessions'
      ],
      services: ['All Hair Services', 'Premium Facials', 'Body Treatments', 'Basic Makeup'],
      popular: true
    },
    {
      id: 'platinum',
      name: 'Platinum Membership',
      price: '₹7,999',
      validity: '12 Months',
      icon: <Crown className="h-12 w-12 text-purple-500" />,
      color: 'from-purple-400 to-purple-700',
      benefits: [
        '25% discount on all services',
        'VIP priority booking',
        'Free monthly spa session',
        'Complimentary bridal trial',
        'Personal beauty consultant',
        'Exclusive access to new services',
        'Free home service (once a month)',
        'Guest discounts (10% for family)',
        'Annual beauty package worth ₹3000'
      ],
      services: ['All Services', 'Bridal Packages', 'Luxury Treatments', 'Home Services'],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How do I join a membership plan?',
      answer: 'You can join any membership plan by visiting our salon, calling us, or booking online. Our team will guide you through the process and activate your membership immediately.'
    },
    {
      question: 'Can I upgrade my membership plan?',
      answer: 'Yes, you can upgrade your membership at any time. The price difference will be adjusted, and you\'ll immediately get the benefits of the higher tier.'
    },
    {
      question: 'What happens if I miss appointments?',
      answer: 'Your membership benefits remain valid throughout the membership period. However, we recommend regular visits to maintain your beauty routine and get maximum value.'
    },
    {
      question: 'Can I transfer my membership to someone else?',
      answer: 'Memberships are non-transferable and are tied to the individual who purchased them. However, Platinum members get guest discounts for family members.'
    },
    {
      question: 'Is there a refund policy for memberships?',
      answer: 'Memberships are non-refundable, but they can be paused for up to 2 months in case of medical emergencies or extended travel.'
    }
  ];

  const toggleFlip = (planId: string) => {
    setIsFlipped(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  const flipCardStyles = {
    perspective: '1000px'
  };

  const flipCardFrontStyles = (isFlipped: boolean) => ({
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden' as const,
    transition: 'transform 0.6s',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
  });

  const flipCardBackStyles = (isFlipped: boolean) => ({
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden' as const,
    transition: 'transform 0.6s',
    transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)'
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="relative z-10 text-center" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <Users className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Membership Plans</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join our exclusive membership program and enjoy premium benefits and discounts
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Membership Plans */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Membership</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlock exclusive benefits, priority booking, and amazing discounts with our membership plans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {membershipPlans.map((plan, index) => (
            <div key={plan.id} className="relative" data-aos="fade-up" data-aos-delay={index * 100}>
              <div 
                className={`h-96 cursor-pointer ${plan.popular ? 'ring-4 ring-purple-400 scale-105' : ''}`}
                style={flipCardStyles}
                onClick={() => toggleFlip(plan.id)}
              >
                {/* Front Side */}
                <div style={flipCardFrontStyles(isFlipped[plan.id])}>
                  <Card className="h-full relative overflow-hidden">
                    {plan.popular && (
                      <Badge className="absolute top-4 right-4 bg-purple-500 text-white z-10">
                        <Crown className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    )}
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10`}></div>
                    
                    <CardHeader className="text-center relative z-10">
                      <div className="flex justify-center mb-4">
                        {plan.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                        <p className="text-gray-500 mt-1">Valid for {plan.validity}</p>
                      </div>
                    </CardHeader>

                    <CardContent className="text-center relative z-10">
                      <div className="space-y-3">
                        {plan.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-center justify-center text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </div>
                        ))}
                        <p className="text-purple-600 font-medium mt-4 cursor-pointer hover:underline">
                          Click to see all benefits →
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Back Side */}
                <div style={flipCardBackStyles(isFlipped[plan.id])}>
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl font-bold text-gray-800">{plan.name} Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 text-sm">All Benefits:</h4>
                        {plan.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start text-xs">
                            <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{benefit}</span>
                          </div>
                        ))}
                        <h4 className="font-semibold text-gray-800 text-sm mt-4">Services Included:</h4>
                        {plan.services.map((service, idx) => (
                          <div key={idx} className="flex items-center text-xs">
                            <Gift className="h-3 w-3 text-purple-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{service}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <Button 
                  className="w-full gradient-bg text-white hover:opacity-90"
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan(plan.id);
                  }}
                >
                  Choose {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* How to Join Section */}
        <section className="mb-16" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">How to Join</h3>
            <p className="text-lg text-gray-600">Simple steps to become a member</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Plan', desc: 'Select the membership plan that suits your needs' },
              { step: '2', title: 'Visit/Call', desc: 'Visit our salon or call us to complete enrollment' },
              { step: '3', title: 'Payment', desc: 'Make the membership payment and get your member card' },
              { step: '4', title: 'Enjoy Benefits', desc: 'Start enjoying exclusive discounts and services' }
            ].map((item, index) => (
              <Card key={item.step} className="text-center hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
            <p className="text-lg text-gray-600">Everything you need to know about our membership program</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16 px-8 rounded-2xl mt-16" data-aos="fade-up">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Exclusive Membership?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Start saving money and enjoying premium benefits today. Contact us to get started!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-purple-600">
              Visit Our Salon
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Call +91 90870 00049
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Membership;
