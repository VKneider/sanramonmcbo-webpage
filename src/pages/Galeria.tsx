
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GalleryPhoto from '@/components/GalleryPhoto';
import ImageModal from '@/components/ImageModal';
import { useLanguage } from '../contexts/LanguageContext';

const Galeria = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      alt: "Misa dominical",
      caption: "Celebración de la eucaristía dominical en nuestra parroquia",
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      alt: "Adoración nocturna",
      caption: "Momento de oración y adoración al Santísimo Sacramento",
      isVertical: true
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      alt: "Celebración de bautismo",
      caption: "Sacramento del bautismo para nuevos miembros de la comunidad",
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      alt: "Retiro en la naturaleza",
      caption: "Retiro espiritual en contacto con la creación de Dios",
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      alt: "Procesión de San Ramón",
      caption: "Procesión en honor a nuestro santo patrono San Ramón Nonato",
      isVertical: true
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Jóvenes en oración",
      caption: "Encuentro de oración con los jóvenes de la parroquia",
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      alt: "Ensayo del coro",
      caption: "Preparación musical para las celebraciones litúrgicas",
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "Clases de catequesis",
      caption: "Formación religiosa para niños y jóvenes de la comunidad",
      isVertical: true
    }
  ];

  const handleImageClick = (photo: { src: string; alt: string; caption: string }) => {
    setSelectedImage(photo);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-mercedario-cream">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-mercedario-brown mb-4">
              Galería de Fotos
            </h1>
            <p className="text-lg text-mercedario-brown/80 max-w-2xl mx-auto">
              Momentos especiales de nuestra comunidad parroquial
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[200px]">
            {photos.map((photo, index) => (
              <GalleryPhoto
                key={index}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                isVertical={photo.isVertical}
                onClick={() => handleImageClick(photo)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          src={selectedImage.src}
          alt={selectedImage.alt}
          caption={selectedImage.caption}
        />
      )}
    </div>
  );
};

export default Galeria;
