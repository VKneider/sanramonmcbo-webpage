
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from '@/contexts/LanguageContext';
import { Apostolado } from './ApostolCard';

interface ApostolModalProps {
  apostolado: Apostolado | null;
  isOpen: boolean;
  onClose: () => void;
}

const ApostolModal: React.FC<ApostolModalProps> = ({ apostolado, isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!apostolado) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] h-[85vh] max-w-none p-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full overflow-hidden">
          {/* Imagen principal */}
          {apostolado.image && (
            <div className="relative h-full min-h-[300px] lg:min-h-full">
              <img 
                src={apostolado.image} 
                alt={apostolado.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}
          
          {/* Contenido */}
          <div className="flex flex-col h-full overflow-y-auto p-6 lg:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-3xl lg:text-4xl text-mercedario-red mb-3 break-words">
                {apostolado.name}
              </DialogTitle>
              <DialogDescription className="text-base lg:text-lg text-muted-foreground break-words">
                {apostolado.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              {apostolado.ageRange && (
                <div className="bg-mercedario-cream/50 p-4 rounded-lg border border-mercedario-red/10">
                  <h4 className="font-semibold text-mercedario-red mb-2 flex items-center gap-2">
                    <span className="text-lg">👥</span>
                    {t('apostolados.ageRange')}
                  </h4>
                  <p className="text-foreground/80 break-words">{apostolado.ageRange}</p>
                </div>
              )}
              
              {apostolado.schedule && (
                <div className="bg-mercedario-cream/50 p-4 rounded-lg border border-mercedario-red/10">
                  <h4 className="font-semibold text-mercedario-red mb-2 flex items-center gap-2">
                    <span className="text-lg">🕐</span>
                    {t('apostolados.schedule')}
                  </h4>
                  <p className="text-foreground/80 break-words">{apostolado.schedule}</p>
                </div>
              )}
              
              {apostolado.location && (
                <div className="bg-mercedario-cream/50 p-4 rounded-lg border border-mercedario-red/10">
                  <h4 className="font-semibold text-mercedario-red mb-2 flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    {t('apostolados.location')}
                  </h4>
                  <p className="text-foreground/80 break-words">{apostolado.location}</p>
                </div>
              )}
              
              {apostolado.contact && (
                <div className="bg-mercedario-cream/50 p-4 rounded-lg border border-mercedario-red/10">
                  <h4 className="font-semibold text-mercedario-red mb-2 flex items-center gap-2">
                    <span className="text-lg">✉️</span>
                    {t('apostolados.contact')}
                  </h4>
                  <p className="text-foreground/80 break-words overflow-wrap-anywhere">{apostolado.contact}</p>
                </div>
              )}
              
              {apostolado.requirements && (
                <div className="bg-mercedario-cream/50 p-4 rounded-lg border border-mercedario-red/10 md:col-span-2">
                  <h4 className="font-semibold text-mercedario-red mb-2 flex items-center gap-2">
                    <span className="text-lg">📋</span>
                    {t('apostolados.requirements')}
                  </h4>
                  <p className="text-foreground/80 break-words">{apostolado.requirements}</p>
                </div>
              )}
              
              {apostolado.activities && apostolado.activities.length > 0 && (
                <div className="bg-mercedario-cream/50 p-4 rounded-lg border border-mercedario-red/10 md:col-span-2">
                  <h4 className="font-semibold text-mercedario-red mb-3 flex items-center gap-2">
                    <span className="text-lg">✨</span>
                    {t('apostolados.activities')}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {apostolado.activities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-mercedario-red mt-1">•</span>
                        <span className="break-words">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Carrusel de imágenes de actividades */}
              {apostolado.activityImages && apostolado.activityImages.length > 0 && (
                <div className="md:col-span-2 bg-mercedario-cream/50 p-4 rounded-lg border border-mercedario-red/10">
                  <h4 className="font-semibold text-mercedario-red mb-4 flex items-center gap-2">
                    <span className="text-lg">📸</span>
                    {t('apostolados.activityGallery')}
                  </h4>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {apostolado.activityImages.map((imgSrc, index) => (
                        <CarouselItem key={index} className="md:basis-1/2">
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img
                              src={imgSrc}
                              alt={`Actividad ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApostolModal;
