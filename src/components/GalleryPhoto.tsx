
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

interface GalleryPhotoProps {
  src: string;
  alt: string;
  caption: string;
  isVertical?: boolean;
  onClick: () => void;
}

const GalleryPhoto = ({ src, alt, caption, isVertical = false, onClick }: GalleryPhotoProps) => {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div 
          className={`group cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-200 hover:scale-105 ${
            isVertical ? 'row-span-2' : ''
          }`}
          onClick={onClick}
        >
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
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
