
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

interface ApostolModalProps {
  apostolado: {
    id: number;
    titulo: string;
    descripcion: string;
    descripcionDetallada?: string;
    horario?: string;
    lugar?: string;
    edades?: string;
    participantes?: string;
    categoria: string;
    icono: any;
    imagen: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ApostolModal = ({ apostolado, isOpen, onClose }: ApostolModalProps) => {
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
            <img 
              src={apostolado.imagen} 
              alt={apostolado.titulo}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge className={getCategoriaColor(apostolado.categoria)}>
                {apostolado.categoria}
              </Badge>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 mb-4">
            <apostolado.icono className="h-8 w-8 text-mercedario-gold" />
            <DialogTitle className="font-playfair text-2xl text-mercedario-brown">
              {apostolado.titulo}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-mercedario-brown mb-2">Descripción</h3>
            <p className="text-mercedario-brown/80 leading-relaxed">
              {apostolado.descripcionDetallada || apostolado.descripcion}
            </p>
          </div>

          {(apostolado.horario || apostolado.lugar || apostolado.edades || apostolado.participantes) && (
            <div className="border-t pt-4">
              <h3 className="font-semibold text-mercedario-brown mb-4">Información Adicional</h3>
              <div className="grid md:grid-cols-2 gap-4">
                
                {apostolado.horario && (
                  <div className="flex items-center space-x-2 text-sm text-mercedario-brown/70">
                    <Clock className="h-4 w-4 text-mercedario-red" />
                    <div>
                      <span className="font-medium">Horario:</span>
                      <p className="text-mercedario-brown">{apostolado.horario}</p>
                    </div>
                  </div>
                )}
                
                {apostolado.lugar && (
                  <div className="flex items-center space-x-2 text-sm text-mercedario-brown/70">
                    <MapPin className="h-4 w-4 text-mercedario-red" />
                    <div>
                      <span className="font-medium">Lugar:</span>
                      <p className="text-mercedario-brown">{apostolado.lugar}</p>
                    </div>
                  </div>
                )}
                
                {apostolado.edades && (
                  <div className="flex items-center space-x-2 text-sm text-mercedario-brown/70">
                    <Calendar className="h-4 w-4 text-mercedario-red" />
                    <div>
                      <span className="font-medium">Edades:</span>
                      <p className="text-mercedario-brown">{apostolado.edades}</p>
                    </div>
                  </div>
                )}
                
                {apostolado.participantes && (
                  <div className="flex items-center space-x-2 text-sm text-mercedario-brown/70">
                    <Users className="h-4 w-4 text-mercedario-red" />
                    <div>
                      <span className="font-medium">Participantes:</span>
                      <p className="text-mercedario-brown">{apostolado.participantes}</p>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
          )}

          <div className="border-t pt-4">
            <p className="text-sm text-mercedario-brown/70">
              Para más información o para unirte a este apostolado, contáctanos a través de nuestros canales de comunicación.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApostolModal;
