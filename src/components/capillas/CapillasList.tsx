
import { useLanguage } from '@/contexts/LanguageContext';
import CapillaCard from './CapillaCard';
import { Church } from 'lucide-react';
import { chapelCardImages } from '@/data/static/chapels';

interface CapillasListProps {
  filtroCapilla: string;
}

const CapillasList = ({ filtroCapilla }: CapillasListProps) => {
  const { t } = useLanguage();

  const capillas = [
    {
      id: 'divinaMisericordia',
      titulo: t('capillas.chapelsList.divinaMisericordia.title'),
      descripcion: t('capillas.chapelsList.divinaMisericordia.description'),
      historia: t('capillas.chapelsList.divinaMisericordia.history'),
      horarios: t('capillas.chapelsList.divinaMisericordia.schedules'),
      ubicacion: t('capillas.chapelsList.divinaMisericordia.location'),
      imagen: chapelCardImages.divinaMisericordia
    },
    {
      id: 'nuestraSeñoraMerced',
      titulo: t('capillas.chapelsList.nuestraSeñoraMerced.title'),
      descripcion: t('capillas.chapelsList.nuestraSeñoraMerced.description'),
      historia: t('capillas.chapelsList.nuestraSeñoraMerced.history'),
      horarios: t('capillas.chapelsList.nuestraSeñoraMerced.schedules'),
      ubicacion: t('capillas.chapelsList.nuestraSeñoraMerced.location'),
      imagen: chapelCardImages.nuestraSeñoraMerced
    },
    {
      id: 'sanPedroNolasco',
      titulo: t('capillas.chapelsList.sanPedroNolasco.title'),
      descripcion: t('capillas.chapelsList.sanPedroNolasco.description'),
      historia: t('capillas.chapelsList.sanPedroNolasco.history'),
      horarios: t('capillas.chapelsList.sanPedroNolasco.schedules'),
      ubicacion: t('capillas.chapelsList.sanPedroNolasco.location'),
      imagen: chapelCardImages.sanPedroNolasco
    },
    {
      id: 'ermitaCarmen',
      titulo: t('capillas.chapelsList.ermitaCarmen.title'),
      descripcion: t('capillas.chapelsList.ermitaCarmen.description'),
      historia: t('capillas.chapelsList.ermitaCarmen.history'),
      horarios: t('capillas.chapelsList.ermitaCarmen.schedules'),
      ubicacion: t('capillas.chapelsList.ermitaCarmen.location'),
      imagen: chapelCardImages.ermitaCarmen
    }
  ];

  const capillasFiltradas = filtroCapilla === 'todas' 
    ? capillas 
    : capillas.filter(capilla => capilla.id === filtroCapilla);

  return (
    <section className="py-16 bg-mercedario-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {capillasFiltradas.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {capillasFiltradas.map((capilla, index) => (
              <CapillaCard
                key={capilla.id}
                capilla={capilla}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Church className="h-16 w-16 text-mercedario-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-mercedario-brown mb-2">
              {t('capillas.noChapels')}
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default CapillasList;
