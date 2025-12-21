
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with solid color */}
      <div className="absolute inset-0 bg-mercedario-red"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-0">
          <img
            src="/favicon.svg"
            alt="Iglesia San Ramón Nonato"
            className="size-32 text-mercedario-gold mx-auto"
          />
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-mercedario-white mb-6 leading-tight">
          {t('hero.title')}
          <span className="block text-mercedario-cream">{t('hero.subtitle')}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-mercedario-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
        
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-mercedario-white text-mercedario-red hover:bg-mercedario-cream font-semibold px-8 py-3"
            onClick={() => {
              const quienesSomosSection = document.getElementById('quienes-somos');
              if (quienesSomosSection) {
                quienesSomosSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {t('hero.missionButton')}
          </Button>
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
