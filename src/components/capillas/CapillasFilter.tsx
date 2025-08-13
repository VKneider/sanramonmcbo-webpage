
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface CapillasFilterProps {
  filtroCapilla: string;
  setFiltroCapilla: (filtro: string) => void;
}

const CapillasFilter = ({ filtroCapilla, setFiltroCapilla }: CapillasFilterProps) => {
  const { t } = useLanguage();

  const capillas = [
    { value: 'divinaMisericordia', label: t('capillas.chapelsList.divinaMisericordia.title') },
    { value: 'nuestraSeñoraMerced', label: t('capillas.chapelsList.nuestraSeñoraMerced.title') },
    { value: 'sanPedroNolasco', label: t('capillas.chapelsList.sanPedroNolasco.title') },
    { value: 'ermitaCarmen', label: t('capillas.chapelsList.ermitaCarmen.title') }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {capillas.map((capilla) => (
            <button
              key={capilla.value}
              onClick={() => setFiltroCapilla(capilla.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filtroCapilla === capilla.value
                  ? 'bg-mercedario-red text-white shadow-lg'
                  : 'bg-mercedario-cream text-mercedario-red border border-mercedario-red hover:bg-mercedario-red hover:text-white'
              }`}
            >
              {capilla.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapillasFilter;
