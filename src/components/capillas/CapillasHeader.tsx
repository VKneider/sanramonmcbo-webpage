
import { useLanguage } from '@/contexts/LanguageContext';

const CapillasHeader = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-mercedario-brown text-mercedario-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            {t('capillas.title')}
          </h1>
          <p className="text-xl md:text-2xl text-mercedario-cream max-w-4xl mx-auto leading-relaxed">
            {t('capillas.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CapillasHeader;
