
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CapillasHeader from '@/components/capillas/CapillasHeader';
import CapillasFilter from '@/components/capillas/CapillasFilter';
import CapillasList from '@/components/capillas/CapillasList';
import CapillasCallToAction from '@/components/capillas/CapillasCallToAction';

const Capillas = () => {
  const [filtroCapilla, setFiltroCapilla] = useState('todas');

  return (
    <div className="min-h-screen bg-mercedario-cream">
      <Navigation />
      <CapillasHeader />
      <CapillasFilter 
        filtroCapilla={filtroCapilla} 
        setFiltroCapilla={setFiltroCapilla} 
      />
      <CapillasList filtroCapilla={filtroCapilla} />
      <CapillasCallToAction />
      <Footer />
    </div>
  );
};

export default Capillas;
