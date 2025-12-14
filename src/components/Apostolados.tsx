
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSelectedChapel } from '@/hooks/useSelectedChapel';
import ChapelFilter from './shared/ChapelFilter';
import ApostoladadosDetail from './apostolados/ApostoladadosDetail';

const Apostolados: React.FC = () => {
  const { t } = useLanguage();
  const { selectedChapel, setSelectedChapel } = useSelectedChapel();

  return (
    <div className="min-h-screen bg-mercedario-cream">
      {/* Header */}
      <section className="min-h-[40vh] bg-mercedario-red flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-mercedario-white mb-4">
            {t('apostolados.title')}
          </h1>
          <p className="text-xl text-mercedario-cream max-w-3xl mx-auto">
            {t('apostolados.description')}
          </p>
        </div>
      </section>

      {/* Filtro de capillas */}
      <ChapelFilter 
        filtroCapilla={selectedChapel} 
        setFiltroCapilla={setSelectedChapel}
        translationPrefix="apostolados"
      />

      {/* Detalle de apostolados por capilla */}
      <ApostoladadosDetail capillaId={selectedChapel} />
    </div>
  );
};

export default Apostolados;
