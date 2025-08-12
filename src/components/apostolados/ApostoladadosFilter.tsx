import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ApostoladadosFilterProps {
  filtroCapilla: string;
  setFiltroCapilla: (capilla: string) => void;
}

const ApostoladadosFilter: React.FC<ApostoladadosFilterProps> = ({ 
  filtroCapilla, 
  setFiltroCapilla 
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
        <div className="flex flex-wrap justify-center gap-4">
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
              {t(`apostolados.chapelsList.${capilla.key}.title`)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApostoladadosFilter;