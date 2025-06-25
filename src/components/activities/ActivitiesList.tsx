
import { useLanguage } from '@/contexts/LanguageContext';
import ActivityCard from './ActivityCard';
import { Heart, Mountain, HandHeart, Users } from 'lucide-react';

interface ActivitiesListProps {
  filtroCategoria: string;
}

const ActivitiesList = ({ filtroCategoria }: ActivitiesListProps) => {
  const { t } = useLanguage();

  const actividades = [
    {
      id: 1,
      titulo: "Retiro Espiritual Juvenil",
      descripcion: "Un fin de semana de reflexión, oración y encuentro con Dios dirigido especialmente a jóvenes de 15 a 30 años.",
      fecha: "15-17 Marzo 2024",
      lugar: "Casa de Retiros La Merced",
      categoria: "retiros",
      participantes: "25 personas máx.",
      icono: Mountain,
      imagen: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      titulo: "Convivencia Familiar",
      descripcion: "Día de integración para familias con actividades recreativas, reflexiones y celebración eucarística.",
      fecha: "28 Marzo 2024",
      lugar: "Salón Parroquial y Jardines",
      categoria: "convivencias",
      participantes: "Familias completas",
      icono: Users,
      imagen: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      titulo: "Campaña de Alimentos",
      descripcion: "Recolección y distribución de alimentos no perecederos para familias en situación vulnerable de nuestra comunidad.",
      fecha: "5-12 Abril 2024",
      lugar: "Atrio de la Parroquia",
      categoria: "sociales",
      participantes: "Toda la comunidad",
      icono: HandHeart,
      imagen: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      titulo: "Retiro de Pascua",
      descripcion: "Retiro de preparación para la Semana Santa, centrado en la Pasión, Muerte y Resurrección de Jesucristo.",
      fecha: "20-22 Abril 2024",
      lugar: "Casa de Retiros San José",
      categoria: "retiros",
      participantes: "40 personas máx.",
      icono: Heart,
      imagen: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      titulo: "Tarde de Juegos y Catequesis",
      descripcion: "Actividad lúdica y formativa para niños de primera comunión, combinando diversión con aprendizaje religioso.",
      fecha: "10 Mayo 2024",
      lugar: "Patio Parroquial",
      categoria: "convivencias",
      participantes: "Niños de 7-12 años",
      icono: Users,
      imagen: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      titulo: "Visita a Hogar de Ancianos",
      descripcion: "Actividad de servicio social visitando y acompañando a los adultos mayores del Hogar San Vicente de Paúl.",
      fecha: "18 Mayo 2024",
      lugar: "Hogar San Vicente de Paúl",
      categoria: "sociales",
      participantes: "Grupo de voluntarios",
      icono: HandHeart,
      imagen: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categorias = [
    { value: 'todas', label: t('activities.allActivities') },
    { value: 'retiros', label: t('activities.retreats') },
    { value: 'convivencias', label: t('activities.gatherings') },
    { value: 'sociales', label: t('activities.socialAction') }
  ];

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
