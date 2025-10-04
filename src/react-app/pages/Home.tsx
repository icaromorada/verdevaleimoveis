import { useEffect } from 'react';
import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import AnniversaryOffer from '@/react-app/components/AnniversaryOffer';
import Benefits from '@/react-app/components/Benefits';
import Testimonials from '@/react-app/components/Testimonials';
import HowItWorks from '@/react-app/components/HowItWorks';
import LeadForm from '@/react-app/components/LeadForm';
import Footer from '@/react-app/components/Footer';
import WhatsAppButton from '@/react-app/components/WhatsAppButton';

export default function Home() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AnniversaryOffer />
      <Benefits />
      <Testimonials />
      <HowItWorks />
      <LeadForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
