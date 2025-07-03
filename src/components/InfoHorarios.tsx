
import { useLanguage } from '../contexts/LanguageContext';

const InfoHorarios = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-mercedario-red rounded-lg p-8 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="font-playfair text-3xl font-semibold text-mercedario-white mb-6">
            {t('whatWeDo.scheduleTitle')}
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-mercedario-white/20">
              <span className="font-semibold text-mercedario-white">{t('whatWeDo.sundayMasses')}</span>
              <span className="text-mercedario-cream">8:00 AM - 10:00 AM - 12:00 PM - 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-mercedario-white/20">
              <span className="font-semibold text-mercedario-white">{t('whatWeDo.weekdayMasses')}</span>
              <span className="text-mercedario-cream">6:30 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-mercedario-white/20">
              <span className="font-semibold text-mercedario-white">{t('whatWeDo.adoration')}</span>
              <span className="text-mercedario-cream">Viernes 7:00 PM - 8:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-semibold text-mercedario-white">{t('whatWeDo.confessions')}</span>
              <span className="text-mercedario-cream">Sábados 4:00 PM - 5:30 PM</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <img 
            src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Iglesia católica" 
            className="rounded-lg shadow-lg mx-auto h-64 w-full object-cover"
          />
          <p className="mt-4 text-sm text-mercedario-cream italic">
            "Vengan a mí todos los que están cansados y agobiados, y yo les daré descanso." - Mt 11,28
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoHorarios;
