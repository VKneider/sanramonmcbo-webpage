
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ActivitiesHeader from '@/components/activities/ActivitiesHeader';
import ActivitiesFilter from '@/components/activities/ActivitiesFilter';
import ActivitiesList from '@/components/activities/ActivitiesList';
import ActivitiesCallToAction from '@/components/activities/ActivitiesCallToAction';

const Actividades = () => {
  const [filtroCategoria, setFiltroCategoria] = useState('todas');

  return (
    <div className="min-h-screen bg-mercedario-cream">
      <Navigation />
      <ActivitiesHeader />
      <ActivitiesFilter 
        filtroCategoria={filtroCategoria} 
        setFiltroCategoria={setFiltroCategoria} 
      />
      <ActivitiesList filtroCategoria={filtroCategoria} />
      <ActivitiesCallToAction />
      <Footer />
    </div>
  );
};

export default Actividades;
