
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption: string;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

const ImageModal = ({ 
  isOpen, 
  onClose, 
  src, 
  alt, 
  caption, 
  onPrevious, 
  onNext, 
  hasPrevious = false, 
  hasNext = false 
}: ImageModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          if (hasPrevious && onPrevious) {
            onPrevious();
          }
          break;
        case 'ArrowRight':
          if (hasNext && onNext) {
            onNext();
          }
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasPrevious, hasNext, onPrevious, onNext, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black/90 border-none">
        <DialogClose className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white">
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </DialogClose>
        
        {/* Navigation Buttons */}
        {hasPrevious && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full p-2"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous image</span>
          </Button>
        )}
        
        {hasNext && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full p-2"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next image</span>
          </Button>
        )}
        
        <div className="relative">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold mb-2">{alt}</h3>
            <p className="text-white/90 text-base">{caption}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
