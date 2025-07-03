
import { useLanguage } from '@/contexts/LanguageContext';

const CapillasCallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-mercedario-red py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h3 className="font-playfair text-3xl font-semibold text-mercedario-white mb-6">
          {t('capillas.participate')}
        </h3>
        <p className="text-mercedario-cream mb-8 max-w-3xl mx-auto text-lg">
          {t('capillas.participateDesc')}
        </p>
        <div className="bg-mercedario-white rounded-lg p-6 inline-block border border-mercedario-gold">
          <p className="text-mercedario-red font-semibold text-lg">
            📞 {t('capillas.contactInfo')} (555) 123-4567 | ✉️ capillas@sanramonnonato.org
          </p>
        </div>
      </div>
    </section>
  );
};

export default CapillasCallToAction;
