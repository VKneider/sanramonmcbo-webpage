
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CapillasHeader from '@/components/capillas/CapillasHeader';
import CapillasFilter from '@/components/capillas/CapillasFilter';
import CapillaDetail from '@/components/capillas/CapillaDetail';
import CapillasCallToAction from '@/components/capillas/CapillasCallToAction';

const Capillas = () => {
  const [filtroCapilla, setFiltroCapilla] = useState('divinaMisericordia');

  return (
    <div className="min-h-screen bg-mercedario-cream">
      <Navigation />
      <CapillasHeader />
      <CapillasFilter 
        filtroCapilla={filtroCapilla} 
        setFiltroCapilla={setFiltroCapilla} 
      />
      <CapillaDetail capillaId={filtroCapilla} />
      <CapillasCallToAction />
      <Footer />
    </div>
  );
};

export default Capillas;
