
import { useSelectedChapel } from '@/hooks/useSelectedChapel';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CapillasHeader from '@/components/capillas/CapillasHeader';
import ChapelFilter from '@/components/shared/ChapelFilter';
import CapillaDetail from '@/components/capillas/CapillaDetail';
import CapillasCallToAction from '@/components/capillas/CapillasCallToAction';

const Capillas = () => {
  const validChapels = ['divinaMisericordia', 'nuestraSeñoraMerced', 'sanPedroNolasco', 'ermitaCarmen'];
  const { selectedChapel, setSelectedChapel } = useSelectedChapel({ validChapels });

  return (
    <div className="min-h-screen bg-mercedario-cream">
      <Navigation />
      <CapillasHeader />
      <ChapelFilter 
        filtroCapilla={selectedChapel} 
        setFiltroCapilla={setSelectedChapel}
        translationPrefix="capillas"
      />
      <CapillaDetail capillaId={selectedChapel} />
      <CapillasCallToAction />
      <Footer />
    </div>
  );
};

export default Capillas;
