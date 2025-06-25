
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ActivitiesFilterProps {
  filtroCategoria: string;
  setFiltroCategoria: (categoria: string) => void;
}

const ActivitiesFilter = ({ filtroCategoria, setFiltroCategoria }: ActivitiesFilterProps) => {
  const { t } = useLanguage();

  const categorias = [
    { value: 'todas', label: t('activities.allActivities') },
    { value: 'retiros', label: t('activities.retreats') },
    { value: 'convivencias', label: t('activities.gatherings') },
    { value: 'sociales', label: t('activities.socialAction') }
  ];

  return (
    <section className="py-8 bg-mercedario-white border-b border-mercedario-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categorias.map((categoria) => (
            <Button
              key={categoria.value}
              onClick={() => setFiltroCategoria(categoria.value)}
              variant={filtroCategoria === categoria.value ? 'default' : 'outline'}
              className={`${
                filtroCategoria === categoria.value 
                  ? 'bg-mercedario-red hover:bg-mercedario-red-dark text-mercedario-white' 
                  : 'border-mercedario-red text-mercedario-red hover:bg-mercedario-red hover:text-mercedario-white'
              }`}
            >
              {categoria.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesFilter;
