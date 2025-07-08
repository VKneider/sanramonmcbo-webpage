
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import QuienesSomos from '@/components/QuienesSomos';
import QueHacemos from '@/components/QueHacemos';
import Donaciones from '@/components/Donaciones';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <QuienesSomos />
      <QueHacemos />
      <Donaciones />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
