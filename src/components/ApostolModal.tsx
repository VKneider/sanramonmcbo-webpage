import React, { useState } from 'react';
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
import ImageModal from './ImageModal';

interface ApostolModalProps {
  apostolado: Apostolado | null;
  isOpen: boolean;
  onClose: () => void;
}

const ApostolModal: React.FC<ApostolModalProps> = ({ apostolado, isOpen, onClose }) => {
  const { t } = useLanguage();

  // Estado para el modal de imagen ampliada
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<string[]>([]);

  if (!apostolado) return null;

  // Función para abrir el modal de imagen ampliada
  const openImageModal = (imageUrl: string, isMainImage = false) => {
    // Crear array con todas las imágenes disponibles
    const images: string[] = [];

    // Agregar imagen principal si existe
    if (apostolado.image) {
      images.push(apostolado.image);
    }

    // Agregar imágenes adicionales si existen
    if (apostolado.activityImages && apostolado.activityImages.length > 0) {
      images.push(...apostolado.activityImages);
    }

    setAllImages(images);

    // Encontrar el índice de la imagen clickeada
    const clickedIndex = images.indexOf(imageUrl);
    setCurrentImageIndex(clickedIndex >= 0 ? clickedIndex : 0);

    setImageModalOpen(true);
  };

  // Función para navegar a la imagen anterior
  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : allImages.length - 1
    );
  };

  // Función para navegar a la imagen siguiente
  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < allImages.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] h-[85vh] max-w-none p-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full overflow-hidden">
          {/* Imagen principal */}
          {apostolado.image && (
            <div className="relative h-full min-h-[300px] lg:min-h-full cursor-pointer group" onClick={() => openImageModal(apostolado.image!)}>
              <img
                src={apostolado.image}
                alt={apostolado.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 rounded-full p-3">
                  <span className="text-white text-2xl">🔍</span>
                </div>
              </div>
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
              
              {/* NUEVA SECCIÓN: Coordinadores */}
              {apostolado.coordinadores && apostolado.coordinadores.length > 0 ? (
                <div className="bg-mercedario-cream/50 p-4 rounded-lg border border-mercedario-red/10">
                  <h4 className="font-semibold text-mercedario-red mb-3 flex items-center gap-2">
                    <span className="text-lg">👤</span>
                    {apostolado.coordinadores.length > 1 ? 'Coordinadores' : 'Coordinador'}
                  </h4>
                  <div className="space-y-3">
                    {apostolado.coordinadores.map((coordinador, idx) => (
                      <div key={idx} className="border-l-2 border-mercedario-red/30 pl-3">
                        <p className="font-medium text-foreground break-words">{coordinador.nombre}</p>
                        {coordinador.email && (
                          <p className="text-sm text-foreground/80 break-words overflow-wrap-anywhere">
                            📧 {coordinador.email}
                          </p>
                        )}
                        {coordinador.telefono && (
                          <p className="text-sm text-foreground/80 break-words">
                            📱 {coordinador.telefono}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : apostolado.contact ? (
                // Fallback para apostolados con formato antiguo
                <div className="bg-mercedario-cream/50 p-4 rounded-lg border border-mercedario-red/10">
                  <h4 className="font-semibold text-mercedario-red mb-2 flex items-center gap-2">
                    <span className="text-lg">✉️</span>
                    {t('apostolados.contact')}
                  </h4>
                  <p className="text-foreground/80 break-words overflow-wrap-anywhere">{apostolado.contact}</p>
                </div>
              ) : null}
              
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
            </div>
            
            {/* Galería de actividades */}
            {apostolado.activityImages && apostolado.activityImages.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-mercedario-red mb-4 flex items-center gap-2">
                  <span className="text-lg">📸</span>
                  {t('apostolados.activityGallery')}
                </h4>
                <Carousel className="w-full">
                  <CarouselContent>
                    {apostolado.activityImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div
                          className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer group"
                          onClick={() => openImageModal(image)}
                        >
                          <img
                            src={image}
                            alt={`Actividad ${index + 1}`}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 rounded-full p-3">
                              <span className="text-white text-2xl">🔍</span>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            )}
          </div>
        </div>
      </DialogContent>

      {/* Modal para imagen ampliada */}
      <ImageModal
        isOpen={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
        src={allImages[currentImageIndex] || ''}
        alt={`${apostolado.name} - Imagen ${currentImageIndex + 1}`}
        caption={`${apostolado.name} - Actividad ${currentImageIndex + 1}`}
        onPrevious={allImages.length > 1 ? goToPreviousImage : undefined}
        onNext={allImages.length > 1 ? goToNextImage : undefined}
        hasPrevious={allImages.length > 1}
        hasNext={allImages.length > 1}
      />
    </Dialog>
  );
};

export default ApostolModal;