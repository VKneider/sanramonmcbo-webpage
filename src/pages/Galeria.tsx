
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
      alt: t('gallery.photos.sundayMass'),
      caption: t('gallery.photos.sundayMassCaption'),
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      alt: t('gallery.photos.nightAdoration'),
      caption: t('gallery.photos.nightAdorationCaption'),
      isVertical: true
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      alt: t('gallery.photos.baptismCelebration'),
      caption: t('gallery.photos.baptismCelebrationCaption'),
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      alt: t('gallery.photos.natureRetreat'),
      caption: t('gallery.photos.natureRetreatCaption'),
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      alt: t('gallery.photos.procession'),
      caption: t('gallery.photos.processionCaption'),
      isVertical: true
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: t('gallery.photos.youthPrayer'),
      caption: t('gallery.photos.youthPrayerCaption'),
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      alt: t('gallery.photos.choirRehearsal'),
      caption: t('gallery.photos.choirRehearsalCaption'),
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: t('gallery.photos.catechesisClass'),
      caption: t('gallery.photos.catechesisClassCaption'),
      isVertical: true
    },
    {
      src: "https://images.unsplash.com/photo-1544568100-847a948585b9",
      alt: t('gallery.photos.communityPrayer'),
      caption: t('gallery.photos.communityPrayerCaption'),
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: t('gallery.photos.holyWeek'),
      caption: t('gallery.photos.holyWeekCaption'),
      isVertical: true
    },
    {
      src: "https://images.unsplash.com/photo-1559251606-c623743a6d76",
      alt: t('gallery.photos.firstCommunion'),
      caption: t('gallery.photos.firstCommunionCaption'),
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
      alt: t('gallery.photos.confirmation'),
      caption: t('gallery.photos.confirmationCaption'),
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
      alt: t('gallery.photos.familyPastoral'),
      caption: t('gallery.photos.familyPastoralCaption'),
      isVertical: true
    },
    {
      src: "https://images.unsplash.com/photo-1512389142860-9c449e58a543",
      alt: t('gallery.photos.christmas'),
      caption: t('gallery.photos.christmasCaption'),
      isVertical: false
    },
    {
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
      alt: t('gallery.photos.volunteer'),
      caption: t('gallery.photos.volunteerCaption'),
      isVertical: false
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
