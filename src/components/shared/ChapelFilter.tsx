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

  const allCapillas = [
    { id: 'temploSanRamon', key: 'temploSanRamon' },
    { id: 'divinaMisericordia', key: 'divinaMisericordia' },
    { id: 'nuestraSeñoraMerced', key: 'nuestraSeñoraMerced' },
    { id: 'sanPedroNolasco', key: 'sanPedroNolasco' },
    { id: 'ermitaCarmen', key: 'ermitaCarmen' }
  ];

  const capillas = translationPrefix === 'capillas' 
    ? allCapillas.filter(capilla => capilla.id !== 'temploSanRamon')
    : allCapillas;

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

        {/* Mobile: Carousel layout */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "center",
              loop: false,
            }}
            className="w-full max-w-xs mx-auto"
          >
            <CarouselContent className="-ml-2">
              {capillas.map((capilla) => (
                <CarouselItem key={capilla.id} className="pl-2 basis-3/4">
                  <div className="p-1">
                    <button
                      onClick={() => setFiltroCapilla(capilla.id)}
                      className={`w-full px-3 py-2.5 rounded-full font-medium transition-all duration-300 text-xs leading-tight ${
                        filtroCapilla === capilla.id
                          ? 'bg-mercedario-red text-white shadow-lg scale-105'
                          : 'bg-mercedario-cream text-mercedario-red border border-mercedario-red hover:bg-mercedario-red hover:text-white'
                      }`}
                    >
                      {t(`${translationPrefix}.chapelsList.${capilla.key}.title`)}
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Indicators */}
          <div className="flex justify-center mt-3 space-x-1.5">
            {capillas.map((capilla) => (
              <button
                key={capilla.id}
                onClick={() => setFiltroCapilla(capilla.id)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  filtroCapilla === capilla.id
                    ? 'bg-mercedario-red scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a ${t(`${translationPrefix}.chapelsList.${capilla.key}.title`)}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapelFilter;