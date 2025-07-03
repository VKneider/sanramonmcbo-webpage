
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CapillaCardProps {
  capilla: {
    id: string;
    titulo: string;
    descripcion: string;
    historia: string;
    horarios: string;
    ubicacion: string;
    imagen: string;
  };
  index: number;
}

const CapillaCard = ({ capilla, index }: CapillaCardProps) => {
  const { t } = useLanguage();

  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden bg-mercedario-cream border-mercedario-gold/20"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={capilla.imagen} 
          alt={capilla.titulo}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-playfair text-xl font-semibold">{capilla.titulo}</h3>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="font-playfair text-xl text-mercedario-brown">
          {t('capillas.history')}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-mercedario-brown/80 leading-relaxed">
          {capilla.historia}
        </p>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3 text-sm text-mercedario-brown/70">
            <Clock className="h-4 w-4 text-mercedario-red mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold block">{t('capillas.schedules')}</span>
              <span>{capilla.horarios}</span>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 text-sm text-mercedario-brown/70">
            <MapPin className="h-4 w-4 text-mercedario-red mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold block">{t('capillas.location')}</span>
              <span>{capilla.ubicacion}</span>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 text-sm text-mercedario-brown/70">
            <BookOpen className="h-4 w-4 text-mercedario-red mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold block">Descripción</span>
              <span>{capilla.descripcion}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CapillaCard;
