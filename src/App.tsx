import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import NotFound from "./pages/NotFound";
import BridalPackages from "./pages/BridalPackages";
import Pricing from "./pages/Pricing";
import Membership from "./pages/Membership";
import NaturalsTnj from "./pages/NaturalsTnj";
import TnjNaturals from "./pages/TnjNaturals";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100
    });
    
    // Refresh AOS on route change
    AOS.refresh();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* NaturalsTnj and ThankYou have their own header/footer */}
            <Route path="/naturalstnj" element={<NaturalsTnj />} />
            <Route path="/naturalsappoinment" element={<TnjNaturals />} />
            <Route path="/thankyou" element={<ThankYou />} />

            {/* All other pages use common Header/Footer */}
            <Route path="*" element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/location" element={<Location />} /> */}
                    <Route path="/bridal-packages" element={<BridalPackages />} />
                    {/* <Route path="/pricing" element={<Pricing />} /> */}
                    <Route path="/membership" element={<Membership />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
