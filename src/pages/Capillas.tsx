
import { useSelectedChapel } from '@/hooks/useSelectedChapel';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CapillasHeader from '@/components/capillas/CapillasHeader';
import ChapelFilter from '@/components/shared/ChapelFilter';
import CapillaDetail from '@/components/capillas/CapillaDetail';

const Capillas = () => {
  const validChapels = ['divinaMisericordia', 'nuestraSeñoraMerced', 'sanPedroNolasco', 'ermitaCarmen'];
  const { selectedChapel, setSelectedChapel } = useSelectedChapel({ validChapels });

  return (
    <div className="min-h-screen bg-mercedario-cream">
      <Navigation />
      <div className="pt-16">
        <CapillasHeader />
        <ChapelFilter 
          filtroCapilla={selectedChapel} 
          setFiltroCapilla={setSelectedChapel}
          translationPrefix="capillas"
        />
        <CapillaDetail capillaId={selectedChapel} />
      </div>
      <Footer />
    </div>
  );
};

export default Capillas;
