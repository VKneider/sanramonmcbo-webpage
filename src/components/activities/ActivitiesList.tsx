
import { useLanguage } from '@/contexts/LanguageContext';
import ActivityCard from './ActivityCard';
import { Heart, Mountain, HandHeart, Users } from 'lucide-react';

interface ActivitiesListProps {
  filtroCategoria: string;
}

const ActivitiesList = ({ filtroCategoria }: ActivitiesListProps) => {
  const { t } = useLanguage();

  const getActividades = () => [
    {
      id: 1,
      titulo: t('activities.activitiesList.youthRetreat.title'),
      descripcion: t('activities.activitiesList.youthRetreat.description'),
      fecha: t('activities.activitiesList.youthRetreat.date'),
      lugar: t('activities.activitiesList.youthRetreat.location'),
      categoria: "retiros",
      participantes: t('activities.activitiesList.youthRetreat.participants'),
      icono: Mountain,
      imagen: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://example.com/retiro-juvenil"
    },
    {
      id: 2,
      titulo: t('activities.activitiesList.familyGathering.title'),
      descripcion: t('activities.activitiesList.familyGathering.description'),
      fecha: t('activities.activitiesList.familyGathering.date'),
      lugar: t('activities.activitiesList.familyGathering.location'),
      categoria: "convivencias",
      participantes: t('activities.activitiesList.familyGathering.participants'),
      icono: Users,
      imagen: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://example.com/convivencia-familiar"
    },
    {
      id: 3,
      titulo: t('activities.activitiesList.foodCampaign.title'),
      descripcion: t('activities.activitiesList.foodCampaign.description'),
      fecha: t('activities.activitiesList.foodCampaign.date'),
      lugar: t('activities.activitiesList.foodCampaign.location'),
      categoria: "sociales",
      participantes: t('activities.activitiesList.foodCampaign.participants'),
      icono: HandHeart,
      imagen: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://example.com/campana-alimentos"
    },
    {
      id: 4,
      titulo: t('activities.activitiesList.easterRetreat.title'),
      descripcion: t('activities.activitiesList.easterRetreat.description'),
      fecha: t('activities.activitiesList.easterRetreat.date'),
      lugar: t('activities.activitiesList.easterRetreat.location'),
      categoria: "retiros",
      participantes: t('activities.activitiesList.easterRetreat.participants'),
      icono: Heart,
      imagen: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://example.com/retiro-pascua"
    },
    {
      id: 5,
      titulo: t('activities.activitiesList.gamesCatechesis.title'),
      descripcion: t('activities.activitiesList.gamesCatechesis.description'),
      fecha: t('activities.activitiesList.gamesCatechesis.date'),
      lugar: t('activities.activitiesList.gamesCatechesis.location'),
      categoria: "convivencias",
      participantes: t('activities.activitiesList.gamesCatechesis.participants'),
      icono: Users,
      imagen: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://example.com/juegos-catequesis"
    },
    {
      id: 6,
      titulo: t('activities.activitiesList.nursingHomeVisit.title'),
      descripcion: t('activities.activitiesList.nursingHomeVisit.description'),
      fecha: t('activities.activitiesList.nursingHomeVisit.date'),
      lugar: t('activities.activitiesList.nursingHomeVisit.location'),
      categoria: "sociales",
      participantes: t('activities.activitiesList.nursingHomeVisit.participants'),
      icono: HandHeart,
      imagen: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://example.com/visita-hogar-ancianos"
    }
  ];

  const categorias = [
    { value: 'todas', label: t('activities.allActivities') },
    { value: 'retiros', label: t('activities.retreats') },
    { value: 'convivencias', label: t('activities.gatherings') },
    { value: 'sociales', label: t('activities.socialAction') }
  ];

  const actividades = getActividades();
  const actividadesFiltradas = filtroCategoria === 'todas' 
    ? actividades 
    : actividades.filter(actividad => actividad.categoria === filtroCategoria);

  const getCategoriaColor = (categoria: string) => {
    const colores = {
      retiros: 'bg-blue-100 text-blue-800',
      convivencias: 'bg-green-100 text-green-800',
      sociales: 'bg-orange-100 text-orange-800'
    };
    return colores[categoria as keyof typeof colores] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actividadesFiltradas.map((actividad, index) => (
            <ActivityCard
              key={actividad.id}
              actividad={actividad}
              index={index}
              getCategoriaColor={getCategoriaColor}
              categorias={categorias}
            />
          ))}
        </div>
        
        {actividadesFiltradas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-mercedario-brown/70 text-lg">
              {t('activities.noActivities')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivitiesList;
