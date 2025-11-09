import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ApostolCard, { Apostolado, Coordinador } from '../ApostolCard';
import ApostolModal from '../ApostolModal';

interface ApostoladadosDetailProps {
  capillaId: string;
}

// Interfaz para los datos que vienen de las traducciones
interface ApostolateTranslationData {
  name: string;
  description: string;
  ageRange?: string;
  schedule?: string;
  location?: string;
  activities?: string[];
  requirements?: string;
  contact?: string;
  coordinadores?: Coordinador[];
  activityImages?: string[];
}

interface ChapelTranslationData {
  title: string;
  apostolates: {
    [key: string]: ApostolateTranslationData;
  };
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

  // Imágenes específicas para apostolados del templo San Ramón Nonato
  const temploApostoladoImages = {
    choir: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    lectores: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    eucharisticMinisters: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop'
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
      const chapelData = t(`apostolados.chapelsList.${capillaId}`) as unknown as ChapelTranslationData;
      
      if (!chapelData || typeof chapelData !== 'object' || !chapelData.apostolates) {
        return null;
      }

      const apostolates = Object.keys(chapelData.apostolates).map((apostolateKey) => {
        const apostolateData = chapelData.apostolates[apostolateKey];
        
        // Asignar imagen específica para apostolados del templo San Ramón Nonato
        let imageUrl = chapelImages[capillaId as keyof typeof chapelImages];
        if (capillaId === 'temploSanRamon' && temploApostoladoImages[apostolateKey as keyof typeof temploApostoladoImages]) {
          imageUrl = temploApostoladoImages[apostolateKey as keyof typeof temploApostoladoImages];
        }
        
        return {
          id: `${capillaId}-${apostolateKey}`,
          name: apostolateData.name,
          description: apostolateData.description,
          image: imageUrl,
          ageRange: apostolateData.ageRange,
          schedule: apostolateData.schedule,
          location: apostolateData.location,
          activities: apostolateData.activities,
          requirements: apostolateData.requirements,
          contact: apostolateData.contact,
          coordinadores: apostolateData.coordinadores,
          activityImages: apostolateData.activityImages,
        } as Apostolado;
      });

      return {
        title: chapelData.title,
        apostolates
      };
    } catch (error) {
      console.error('Error loading chapel data:', error);
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