
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import QuienesSomos from '@/components/QuienesSomos';
import QueHacemos from '@/components/QueHacemos';
import Apostolados from '@/components/Apostolados';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <QuienesSomos />
      <QueHacemos />
      <Apostolados />
      <Footer />
    </div>
  );
};

export default Index;
