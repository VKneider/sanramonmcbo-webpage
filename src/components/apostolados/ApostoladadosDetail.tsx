import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ApostolCard, { Apostolado } from '../ApostolCard';
import ApostolModal from '../ApostolModal';

interface ApostoladadosDetailProps {
  capillaId: string;
}

const ApostoladadosDetail: React.FC<ApostoladadosDetailProps> = ({ capillaId }) => {
  const { t } = useLanguage();
  const [selectedApostolado, setSelectedApostolado] = useState<Apostolado | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const chapelImages = {
    divinaMisericordia: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    nuestraSeñoraMerced: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=300&fit=crop',
    sanPedroNolasco: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop',
    ermitaCarmen: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop'
  };

  const handleMoreInfo = (apostolado: Apostolado) => {
    setSelectedApostolado(apostolado);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApostolado(null);
  };

  // Obtener datos de la capilla seleccionada
  const getChapelData = () => {
    try {
      const chapelData = t(`apostolados.chapelsList.${capillaId}`) as any;
      if (!chapelData || typeof chapelData !== 'object' || !chapelData.apostolates) {
        return null;
      }

      const apostolates = Object.keys(chapelData.apostolates).map((apostolateKey) => {
        const apostolateData = chapelData.apostolates[apostolateKey];
        return {
          id: `${capillaId}-${apostolateKey}`,
          name: apostolateData.name,
          description: apostolateData.description,
          image: chapelImages[capillaId as keyof typeof chapelImages],
          ageRange: apostolateData.ageRange,
          schedule: apostolateData.schedule,
          location: apostolateData.location,
          activities: apostolateData.activities,
          requirements: apostolateData.requirements,
          contact: apostolateData.contact
        } as Apostolado;
      });

      return {
        title: chapelData.title,
        apostolates
      };
    } catch (error) {
      return null;
    }
  };

  const chapelData = getChapelData();

  if (!chapelData) {
    return (
      <section className="py-16 bg-mercedario-cream">
        <div className="container mx-auto px-4 text-center">
          <p className="text-mercedario-red text-lg">
            {t('capillas.noChapels')}
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-16 bg-mercedario-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-mercedario-red mb-4">
              {chapelData.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Apostolados y ministerios de {chapelData.title}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapelData.apostolates.map((apostolado) => (
              <ApostolCard
                key={apostolado.id}
                apostolado={apostolado}
                onMoreInfo={handleMoreInfo}
              />
            ))}
          </div>
        </div>
      </section>

      <ApostolModal
        apostolado={selectedApostolado}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ApostoladadosDetail;