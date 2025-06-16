
import { Button } from '@/components/ui/button';
import { Church } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-mercedario"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8">
          <Church className="h-16 w-16 text-mercedario-white mx-auto mb-4" />
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-mercedario-white mb-6 leading-tight">
          Parroquia
          <span className="block text-mercedario-cream">San Ramón Nonato</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-mercedario-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Una comunidad católica guiada por el carisma mercedario, 
          comprometida con la liberación y el servicio a los más necesitados
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-mercedario-white text-mercedario-red hover:bg-mercedario-cream font-semibold px-8 py-3">
            Conoce Nuestra Misión
          </Button>
          <Button size="lg" variant="outline" className="border-mercedario-white text-mercedario-white hover:bg-mercedario-white hover:text-mercedario-red font-semibold px-8 py-3">
            Ver Actividades
          </Button>
        </div>
        
        <div className="mt-12 text-mercedario-white/80 text-sm">
          <p className="italic">"Bendito sea Dios Padre de misericordias"</p>
          <p className="text-xs mt-1">- Lema de la Orden de la Merced</p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-mercedario-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-mercedario-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
