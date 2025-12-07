
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GalleryPhoto from '@/components/GalleryPhoto';
import ImageModal from '@/components/ImageModal';
import { useLanguage } from '../contexts/LanguageContext';
import { galleryPhotos } from '@/data/static/gallery';

const Galeria = () => {
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const photos = galleryPhotos.map((p) => ({
    src: p.src,
    isVertical: p.isVertical,
    alt: t(p.altKey),
    caption: t(p.captionKey),
  }));

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < photos.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const selectedPhoto = selectedImageIndex !== null ? photos[selectedImageIndex] : null;

  return (
    <div className="min-h-screen bg-mercedario-cream">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-mercedario-brown mb-4">
              {t('gallery.title')}
            </h1>
            <p className="text-lg text-mercedario-brown/80 max-w-2xl mx-auto">
              {t('gallery.description')}
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
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {selectedPhoto && (
        <ImageModal
          isOpen={selectedImageIndex !== null}
          onClose={handleCloseModal}
          src={selectedPhoto.src}
          alt={selectedPhoto.alt}
          caption={selectedPhoto.caption}
          onPrevious={handlePreviousImage}
          onNext={handleNextImage}
          hasPrevious={selectedImageIndex !== null && selectedImageIndex > 0}
          hasNext={selectedImageIndex !== null && selectedImageIndex < photos.length - 1}
        />
      )}
    </div>
  );
};

export default Galeria;
