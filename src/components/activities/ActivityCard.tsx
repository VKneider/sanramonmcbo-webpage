
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ActivityCardProps {
  actividad: {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: string;
    lugar: string;
    categoria: string;
    participantes: string;
    icono: React.ComponentType<{ className?: string }>;
    imagen: string;
  };
  index: number;
  getCategoriaColor: (categoria: string) => string;
  categorias: Array<{ value: string; label: string }>;
}

const ActivityCard = ({ actividad, index, getCategoriaColor, categorias }: ActivityCardProps) => {
  const { t } = useLanguage();

  return (
    <Card 
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
          {t('activities.moreInfo')}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
