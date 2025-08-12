
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ApostolCard, { Apostolado } from './ApostolCard';
import ApostolModal from './ApostolModal';

const Apostolados: React.FC = () => {
  const { t } = useLanguage();
  const [selectedApostolado, setSelectedApostolado] = useState<Apostolado | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Configuración de capillas con sus apostolados
  const chapelImages = {
    divinaMisericordia: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    nuestraSeñoraMerced: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=300&fit=crop',
    sanPedroNolasco: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop',
    ermitaCarmen: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop'
  };

  const chapelKeys = ['divinaMisericordia', 'nuestraSeñoraMerced', 'sanPedroNolasco', 'ermitaCarmen'];

  // Generar apostolados organizados por capilla
  const apostoladosByChapel = chapelKeys.map(chapelKey => {
    try {
      const chapelData = t(`apostolados.chapelsList.${chapelKey}`) as any;
      if (!chapelData || typeof chapelData !== 'object' || !chapelData.apostolates) return null;

      const apostolates = Object.keys(chapelData.apostolates).map((apostolateKey) => {
        const apostolateData = chapelData.apostolates[apostolateKey];
        return {
          id: `${chapelKey}-${apostolateKey}`,
          name: apostolateData.name,
          description: apostolateData.description,
          image: chapelImages[chapelKey as keyof typeof chapelImages],
          ageRange: apostolateData.ageRange,
          schedule: apostolateData.schedule,
          location: apostolateData.location,
          activities: apostolateData.activities,
          requirements: apostolateData.requirements,
          contact: apostolateData.contact
        } as Apostolado;
      });

      return {
        chapelKey,
        chapelTitle: chapelData.title,
        apostolates
      };
    } catch (error) {
      return null;
    }
  }).filter(Boolean) as Array<{
    chapelKey: string;
    chapelTitle: string;
    apostolates: Apostolado[];
  }>;

  const handleMoreInfo = (apostolado: Apostolado) => {
    setSelectedApostolado(apostolado);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApostolado(null);
  };

  return (
    <div className="min-h-screen bg-mercedario-cream">
      {/* Header */}
      <section className="min-h-[40vh] bg-mercedario-red flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-mercedario-white mb-4">
            {t('apostolados.title')}
          </h1>
          <p className="text-xl text-mercedario-cream max-w-3xl mx-auto">
            {t('apostolados.description')}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {apostoladosByChapel.map((chapel) => (
            <div key={chapel.chapelKey} className="mb-16">
              <h2 className="text-3xl font-bold text-mercedario-red mb-8 text-center">
                {chapel.chapelTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chapel.apostolates.map((apostolado) => (
                  <ApostolCard
                    key={apostolado.id}
                    apostolado={apostolado}
                    onMoreInfo={handleMoreInfo}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
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

      <ApostolModal
        apostolado={selectedApostolado}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Apostolados;
