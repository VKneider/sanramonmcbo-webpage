
import { useLanguage } from '@/contexts/LanguageContext';

const ActivitiesHeader = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[40vh] bg-mercedario-red flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-mercedario-white mb-4">
          {t('activities.title')}
        </h1>
        <p className="text-xl text-mercedario-cream max-w-3xl mx-auto">
          {t('activities.description')}
        </p>
      </div>
    </section>
  );
};

export default ActivitiesHeader;
