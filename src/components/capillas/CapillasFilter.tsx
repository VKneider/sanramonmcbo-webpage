
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface CapillasFilterProps {
  filtroCapilla: string;
  setFiltroCapilla: (filtro: string) => void;
}

const CapillasFilter = ({ filtroCapilla, setFiltroCapilla }: CapillasFilterProps) => {
  const { t } = useLanguage();

  const capillas = [
    { value: 'todas', label: t('capillas.allChapels') },
    { value: 'divinaMisericordia', label: t('capillas.chapelsList.divinaMisericordia.title') },
    { value: 'nuestraSeñoraMerced', label: t('capillas.chapelsList.nuestraSeñoraMerced.title') },
    { value: 'sanPedroNolasco', label: t('capillas.chapelsList.sanPedroNolasco.title') },
    { value: 'ermitaCarmen', label: t('capillas.chapelsList.ermitaCarmen.title') }
  ];

  return (
    <div className="bg-mercedario-white py-8 border-b border-mercedario-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {capillas.map((capilla) => (
            <Button
              key={capilla.value}
              variant={filtroCapilla === capilla.value ? "default" : "outline"}
              onClick={() => setFiltroCapilla(capilla.value)}
              className={`transition-all duration-200 ${
                filtroCapilla === capilla.value
                  ? 'bg-mercedario-red text-mercedario-white hover:bg-mercedario-red/90'
                  : 'border-mercedario-gold text-mercedario-brown hover:bg-mercedario-gold/10'
              }`}
            >
              {capilla.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapillasFilter;
