
import { Calendar, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ActivitiesCallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-mercedario-red/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-3xl font-bold text-mercedario-brown mb-6">
          {t('activities.participate')}
        </h2>
        <p className="text-lg text-mercedario-brown/80 mb-8">
          {t('activities.participateDesc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center space-x-2 text-mercedario-red">
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">{t('activities.openRegistration')}</span>
          </div>
          <div className="flex items-center space-x-2 text-mercedario-red">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">{t('activities.schedule')}</span>
          </div>
        </div>
        <div className="mt-8 bg-mercedario-white rounded-lg p-6 shadow-md border border-mercedario-gold/20">
          <p className="text-mercedario-brown">
            <strong>{t('activities.contactInfo')}</strong> (555) 123-4567 | 
            <strong> Email:</strong> actividades@sanramonnonato.org
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesCallToAction;
