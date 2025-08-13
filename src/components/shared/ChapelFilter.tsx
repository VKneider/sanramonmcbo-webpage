import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface ChapelFilterProps {
  filtroCapilla: string;
  setFiltroCapilla: (capilla: string) => void;
  translationPrefix: 'apostolados' | 'capillas';
}

const ChapelFilter: React.FC<ChapelFilterProps> = ({ 
  filtroCapilla, 
  setFiltroCapilla,
  translationPrefix
}) => {
  const { t } = useLanguage();

  const capillas = [
    { id: 'divinaMisericordia', key: 'divinaMisericordia' },
    { id: 'nuestraSeñoraMerced', key: 'nuestraSeñoraMerced' },
    { id: 'sanPedroNolasco', key: 'sanPedroNolasco' },
    { id: 'ermitaCarmen', key: 'ermitaCarmen' }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Desktop: Flex layout */}
        <div className="hidden md:flex flex-wrap justify-center gap-4">
          {capillas.map((capilla) => (
            <button
              key={capilla.id}
              onClick={() => setFiltroCapilla(capilla.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filtroCapilla === capilla.id
                  ? 'bg-mercedario-red text-white shadow-lg'
                  : 'bg-mercedario-cream text-mercedario-red border border-mercedario-red hover:bg-mercedario-red hover:text-white'
              }`}
            >
              {t(`${translationPrefix}.chapelsList.${capilla.key}.title`)}
            </button>
          ))}
        </div>

        {/* Mobile: Grid 2x2 layout */}
        <div className="md:hidden grid grid-cols-2 gap-3 max-w-md mx-auto">
          {capillas.map((capilla) => (
            <button
              key={capilla.id}
              onClick={() => setFiltroCapilla(capilla.id)}
              className={`px-4 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                filtroCapilla === capilla.id
                  ? 'bg-mercedario-red text-white shadow-lg'
                  : 'bg-mercedario-cream text-mercedario-red border border-mercedario-red hover:bg-mercedario-red hover:text-white'
              }`}
            >
              {t(`${translationPrefix}.chapelsList.${capilla.key}.title`)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChapelFilter;