
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock, Heart, Mountain, HandHeart } from 'lucide-react';

const Actividades = () => {
  const [filtroCategoria, setFiltroCategoria] = useState('todas');

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
    { value: 'todas', label: 'Todas las Actividades' },
    { value: 'retiros', label: 'Retiros Espirituales' },
    { value: 'convivencias', label: 'Convivencias' },
    { value: 'sociales', label: 'Acción Social' }
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
    <div className="min-h-screen bg-mercedario-cream">
      <Navigation />
      
      {/* Header */}
      <section className="pt-20 pb-12 gradient-mercedario-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-mercedario-white mb-4">
            Nuestras Actividades
          </h1>
          <p className="text-xl text-mercedario-cream max-w-3xl mx-auto">
            Participa en nuestras actividades espirituales, convivencias y acciones sociales. 
            Juntos crecemos en fe y servicio siguiendo el carisma mercedario.
          </p>
        </div>
      </section>

      {/* Filtros */}
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

      {/* Lista de Actividades */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actividadesFiltradas.map((actividad, index) => (
              <Card 
                key={actividad.id} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden bg-mercedario-white border-mercedario-gold/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={actividad.imagen} 
                    alt={actividad.titulo}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getCategoriaColor(actividad.categoria)}>
                      {categorias.find(c => c.value === actividad.categoria)?.label.replace('s', '')}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <actividad.icono className="h-8 w-8 text-mercedario-gold flex-shrink-0" />
                  </div>
                  <CardTitle className="font-playfair text-xl text-mercedario-brown">
                    {actividad.titulo}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-mercedario-brown/80 leading-relaxed">
                    {actividad.descripcion}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-mercedario-brown/70">
                      <Calendar className="h-4 w-4 text-mercedario-red" />
                      <span>{actividad.fecha}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-mercedario-brown/70">
                      <MapPin className="h-4 w-4 text-mercedario-red" />
                      <span>{actividad.lugar}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-mercedario-brown/70">
                      <Users className="h-4 w-4 text-mercedario-red" />
                      <span>{actividad.participantes}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-mercedario-red hover:bg-mercedario-red-dark text-mercedario-white">
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {actividadesFiltradas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-mercedario-brown/70 text-lg">
                No hay actividades disponibles para esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-mercedario-red/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-mercedario-brown mb-6">
            ¿Quieres participar?
          </h2>
          <p className="text-lg text-mercedario-brown/80 mb-8">
            Todas nuestras actividades están abiertas para la comunidad. 
            Contáctanos para más información sobre inscripciones y requisitos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2 text-mercedario-red">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Inscripciones abiertas</span>
            </div>
            <div className="flex items-center space-x-2 text-mercedario-red">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Atención: Lun-Vie 9AM-6PM</span>
            </div>
          </div>
          <div className="mt-8 bg-mercedario-white rounded-lg p-6 shadow-md border border-mercedario-gold/20">
            <p className="text-mercedario-brown">
              <strong>Contacto:</strong> (555) 123-4567 | 
              <strong> Email:</strong> actividades@sanramonnonato.org
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Actividades;
