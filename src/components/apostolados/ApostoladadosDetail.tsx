import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ApostolCard, { Apostolado, Coordinador } from '../ApostolCard';
import ApostolModal from '../ApostolModal';
import { chapelImages } from '@/data/static/chapels';
import { temploApostoladoImages } from '@/data/static/apostolados';
import { chapelApostolates } from '@/i18n/chapels';

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
      let selectedChapelId = capillaId;

      // Si la capilla seleccionada no tiene apostolados, usar temploSanRamon por defecto
      if (!chapelApostolates[capillaId as keyof typeof chapelApostolates]) {
        selectedChapelId = 'temploSanRamon';
      }

      const chapelData = chapelApostolates[selectedChapelId as keyof typeof chapelApostolates];

      if (!chapelData) {
        return null;
      }

      const apostolates = Object.keys(chapelData.apostolates).map((apostolateKey) => {
        const apostolateData = chapelData.apostolates[apostolateKey][t('language') === 'es' ? 'es' : 'en'];

        // Priorizar imagen del apostolado (del Excel), luego fallback a imágenes hardcodeadas
        let imageUrl = apostolateData.image; // Imagen del formulario de apostolados

        // Si no hay imagen del apostolado, usar imágenes hardcodeadas como fallback
        if (!imageUrl) {
          imageUrl = chapelImages[selectedChapelId as keyof typeof chapelImages];
          if (selectedChapelId === 'temploSanRamon' && temploApostoladoImages[apostolateKey as keyof typeof temploApostoladoImages]) {
            imageUrl = temploApostoladoImages[apostolateKey as keyof typeof temploApostoladoImages];
          }
        }

        return {
          id: `${selectedChapelId}-${apostolateKey}`,
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
              {t('apostolados.subtitle')} {chapelData.title}
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
