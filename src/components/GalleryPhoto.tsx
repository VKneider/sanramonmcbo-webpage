
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

interface GalleryPhotoProps {
  src: string;
  alt: string;
  caption: string;
}

const GalleryPhoto = ({ src, alt, caption }: GalleryPhotoProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto p-2 bg-mercedario-brown text-mercedario-white border-mercedario-gold">
        <p className="text-sm font-medium">{caption}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default GalleryPhoto;
