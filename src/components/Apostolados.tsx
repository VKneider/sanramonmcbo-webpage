
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, HandHeart, Music, Heart, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ApostolModal from './ApostolModal';

const Apostolados = () => {
  const { t } = useLanguage();
  const [apostoladoSeleccionado, setApostoladoSeleccionado] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [filtroCategoria, setFiltroCategoria] = useState('todos');

  const apostolados = [
    {
      id: 1,
      titulo: "Jóvenes de Acción Católica Mercedaria",
      descripcion: "Grupo de jóvenes que busca seguir a Cristo en su cotidianidad y ser sal para el mundo desde su juventud",
      descripcionDetallada: "Los Jóvenes de Acción Católica Mercedaria somos un grupo comprometido con el seguimiento de Cristo desde nuestra realidad juvenil. Buscamos crecer en la fe, la esperanza y la caridad, siendo testimonio del amor de Dios en nuestros ambientes cotidianos: familia, estudios, trabajo y sociedad. Nos formamos en la espiritualidad mercedaria y trabajamos por la liberación de los cautivos de nuestro tiempo.",
      horario: "Sábados 4:00 PM - 6:00 PM",
      lugar: "Salón Juvenil San Ramón",
      edades: "16 - 30 años",
      participantes: "Jóvenes católicos comprometidos",
      categoria: "juvenil",
      icono: Users,
      imagen: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      titulo: "Pastoral Familiar",
      descripcion: "Acompañamiento integral a las familias de nuestra comunidad parroquial en su crecimiento espiritual",
      descripcionDetallada: "La Pastoral Familiar tiene como misión acompañar a las familias en su vocación y misión, promoviendo los valores del Evangelio en la vida familiar. Ofrecemos preparación al matrimonio, talleres de comunicación familiar, encuentros para matrimonios y apoyo en momentos de crisis familiar.",
      horario: "Domingos 10:00 AM - 12:00 PM",
      lugar: "Aula Pastoral Familiar",
      participantes: "Matrimonios y familias",
      categoria: "familiar",
      icono: Heart,
      imagen: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      titulo: "Cáritas Parroquial",
      descripcion: "Ministerio dedicado al servicio de los más necesitados siguiendo el ejemplo de Cristo",
      descripcionDetallada: "Cáritas Parroquial es el brazo caritativo de nuestra comunidad. Trabajamos en la atención directa a familias en situación de vulnerabilidad, distribución de alimentos, apoyo escolar a niños de escasos recursos, visitas a enfermos y ancianos, y promoción del desarrollo humano integral.",
      horario: "Martes y Jueves 2:00 PM - 5:00 PM",
      lugar: "Centro Cáritas - Anexo Parroquial",
      participantes: "Voluntarios comprometidos con la caridad",
      categoria: "social",
      icono: HandHeart,
      imagen: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      titulo: "Coro Parroquial",
      descripcion: "Ministerio litúrgico que acompaña las celebraciones con música sacra y cantos espirituales",
      descripcionDetallada: "El Coro Parroquial San Ramón Nonato tiene como misión realzar la belleza de las celebraciones litúrgicas a través de la música sacra. Preparamos repertorios para las diferentes festividades del año litúrgico, ofrecemos formación musical y promovemos la participación de la asamblea en el canto litúrgico.",
      horario: "Miércoles 7:00 PM - 9:00 PM",
      lugar: "Coro de la Iglesia",
      edades: "Desde 12 años en adelante",
      participantes: "Personas con vocación musical y litúrgica",
      categoria: "liturgico",
      icono: Music,
      imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      titulo: "Catequesis de Adultos",
      descripcion: "Formación en la fe católica para adultos que desean profundizar en su conocimiento religioso",
      descripcionDetallada: "La Catequesis de Adultos ofrece un espacio de formación continua en la fe católica. Abordamos temas de teología, moral, liturgia, historia de la Iglesia y espiritualidad mercedaria. Es ideal para adultos que desean recibir los sacramentos de iniciación cristiana o simplemente profundizar en su fe.",
      horario: "Viernes 7:00 PM - 8:30 PM",
      lugar: "Aula de Catequesis Principal",
      edades: "18 años en adelante",
      participantes: "Adultos en búsqueda de formación religiosa",
      categoria: "formacion",
      icono: BookOpen,
      imagen: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      titulo: "Grupo de Oración",
      descripcion: "Comunidad de fieles dedicada a la oración contemplativa y la adoración eucarística",
      descripcionDetallada: "El Grupo de Oración es una comunidad de fieles que se reúne semanalmente para crecer en la vida de oración. Practicamos diferentes formas de oración: contemplativa, vocal, litúrgica y carismática. Organizamos vigilias, horas santas y retiros espirituales para profundizar en nuestra relación con Dios.",
      horario: "Jueves 7:30 PM - 9:00 PM",
      lugar: "Capilla del Santísimo",
      participantes: "Fieles con deseo de profundizar en la oración",
      categoria: "formacion",
      icono: Star,
      imagen: "https://images.unsplash.com/photo-1499652848871-1527a310b13a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categorias = [
    { value: 'todos', label: t('apostolados.allApostolates') },
    { value: 'juvenil', label: t('apostolados.youth') },
    { value: 'familiar', label: t('apostolados.family') },
    { value: 'social', label: t('apostolados.social') },
    { value: 'liturgico', label: t('apostolados.liturgical') },
    { value: 'formacion', label: t('apostolados.formation') }
  ];

  const apostoladosFiltrados = filtroCategoria === 'todos' 
    ? apostolados 
    : apostolados.filter(apostolado => apostolado.categoria === filtroCategoria);

  const getCategoriaColor = (categoria: string) => {
    const colores = {
      juvenil: 'bg-blue-100 text-blue-800',
      familiar: 'bg-green-100 text-green-800',
      social: 'bg-orange-100 text-orange-800',
      liturgico: 'bg-purple-100 text-purple-800',
      formacion: 'bg-yellow-100 text-yellow-800'
    };
    return colores[categoria as keyof typeof colores] || 'bg-gray-100 text-gray-800';
  };

  const abrirModal = (apostolado: any) => {
    setApostoladoSeleccionado(apostolado);
    setModalAbierto(true);
  };

  return (
    <section className="py-20 bg-mercedario-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-mercedario-brown mb-6">
            {t('apostolados.title')}
          </h2>
          <p className="text-xl text-mercedario-brown/80 max-w-3xl mx-auto leading-relaxed">
            {t('apostolados.description')}
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-12">
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

        {/* Grid de Apostolados */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apostoladosFiltrados.map((apostolado, index) => (
            <Card 
              key={apostolado.id} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden bg-mercedario-white border-mercedario-gold/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={apostolado.imagen} 
                  alt={apostolado.titulo}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getCategoriaColor(apostolado.categoria)}>
                    {apostolado.categoria}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <apostolado.icono className="h-8 w-8 text-mercedario-gold flex-shrink-0" />
                </div>
                <CardTitle className="font-playfair text-xl text-mercedario-brown">
                  {apostolado.titulo}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-mercedario-brown/80 leading-relaxed">
                  {apostolado.descripcion}
                </p>
                
                <Button 
                  onClick={() => abrirModal(apostolado)}
                  className="w-full bg-mercedario-red hover:bg-mercedario-red-dark text-mercedario-white"
                >
                  {t('apostolados.moreInfo')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {apostoladosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-mercedario-brown/70 text-lg">
              {t('apostolados.noApostolates')}
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {apostoladoSeleccionado && (
        <ApostolModal 
          apostolado={apostoladoSeleccionado}
          isOpen={modalAbierto}
          onClose={() => setModalAbierto(false)}
        />
      )}
    </section>
  );
};

export default Apostolados;
