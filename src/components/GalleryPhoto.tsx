
interface GalleryPhotoProps {
  src: string;
  alt: string;
  caption: string;
  isVertical?: boolean;
  onClick: () => void;
}

const GalleryPhoto = ({ src, alt, caption, isVertical = false, onClick }: GalleryPhotoProps) => {
  return (
    <div 
      className={`group cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-150 hover:scale-[1.02] ${
        isVertical ? 'row-span-2 h-[400px]' : 'h-[200px]'
      }`}
      onClick={onClick}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default GalleryPhoto;
