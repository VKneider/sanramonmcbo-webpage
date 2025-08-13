
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CapillasHeader from '@/components/capillas/CapillasHeader';
import ChapelFilter from '@/components/shared/ChapelFilter';
import CapillaDetail from '@/components/capillas/CapillaDetail';
import CapillasCallToAction from '@/components/capillas/CapillasCallToAction';

const Capillas = () => {
  const [filtroCapilla, setFiltroCapilla] = useState('divinaMisericordia');

  return (
    <div className="min-h-screen bg-mercedario-cream">
      <Navigation />
      <CapillasHeader />
      <ChapelFilter 
        filtroCapilla={filtroCapilla} 
        setFiltroCapilla={setFiltroCapilla}
        translationPrefix="capillas"
      />
      <CapillaDetail capillaId={filtroCapilla} />
      <CapillasCallToAction />
      <Footer />
    </div>
  );
};

export default Capillas;
