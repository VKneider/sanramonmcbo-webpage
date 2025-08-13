
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ApostoladadosFilter from './apostolados/ApostoladadosFilter';
import ApostoladadosDetail from './apostolados/ApostoladadosDetail';

const Apostolados: React.FC = () => {
  const { t } = useLanguage();
  const [filtroCapilla, setFiltroCapilla] = useState('divinaMisericordia');

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
      <ApostoladadosFilter 
        filtroCapilla={filtroCapilla} 
        setFiltroCapilla={setFiltroCapilla} 
      />

      {/* Detalle de apostolados por capilla */}
      <ApostoladadosDetail capillaId={filtroCapilla} />

      {/* Sección de contacto */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center animate-slide-in">
            <div className="bg-mercedario-cream rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-mercedario-red mb-4">
                {t('apostolados.joinUs')}
              </h3>
              <p className="text-gray-700 mb-6">
                {t('apostolados.joinUsDescription')}
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>{t('apostolados.contactInfo')}:</strong></p>
                <p>📧 info@sanramonnnonato.org</p>
                <p>📞 (555) 123-4567</p>
                <p>🕐 {t('apostolados.officeHours')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apostolados;
