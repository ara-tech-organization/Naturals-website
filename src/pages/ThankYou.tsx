
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Mail, ArrowLeft } from 'lucide-react';
import AOS from 'aos';

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from');
  const backUrl =
    from === 'tnjnaturals' ? '/naturalsappoinment' :
    '/';

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100
    });
    AOS.refresh();

    // Fire GTM conversion event for thank you page
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'form_submission',
        page: '/thankyou'
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary shadow-lg sticky top-0 z-50">
        <div className="bg-primary text-white py-2 hidden lg:block">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+919087000049" className="flex items-center space-x-1 hover:underline">
                <Phone className="h-4 w-4" />
                <span>+91 90870 00049</span>
              </a>
              <a href="mailto:naturals.tj2@gmail.com" className="flex items-center space-x-1 hover:underline">
                <Mail className="h-4 w-4" />
                <span>naturals.tj2@gmail.com</span>
              </a>
            </div>
            <div className="hidden md:block">
              <span>Premium Beauty & Wellness Services in Thanjavur</span>
            </div>
          </div>
        </div>

        <nav className="container mx-auto px-4 py-4 bg-primary relative">
          <div className="flex justify-between items-center">
            <a href={backUrl}>
              <img src="./images/logo.png" alt="Logo" width="150px" />
            </a>
            <div className="hidden lg:flex items-center space-x-8 text-white">
              <a href={backUrl} className="font-medium hover:text-white">
                Home
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Thank You Content */}
      <section className="flex-1 flex items-center justify-center py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div
            className="max-w-2xl mx-auto text-center bg-white rounded-3xl shadow-2xl border border-purple-100 px-8 py-14 md:px-16 md:py-16"
            data-aos="zoom-in"
          >
            <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <CheckCircle className="h-14 w-14 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Your message has been sent successfully.
            </p>
            <p className="text-lg text-gray-500 mb-10">
              Our team will get back to you. We look forward to helping you look and feel your best!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={backUrl}>
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 font-semibold px-8 py-4 text-lg">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Button>
              </a>
              <a href="tel:+919087000049">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 text-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
