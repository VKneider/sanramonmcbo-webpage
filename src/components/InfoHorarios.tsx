
import { useLanguage } from '../contexts/LanguageContext';
import { Clock } from 'lucide-react';

interface InfoHorariosProps {
  capillaId?: string;
  horarios?: string;
  sundayMass?: string;
  eucharisticAdoration?: string;
  imagen?: string;
}

const InfoHorarios = ({ capillaId, horarios, sundayMass, eucharisticAdoration, imagen }: InfoHorariosProps) => {
  const { t } = useLanguage();

  // Si es para una capilla específica, usar los datos pasados como props
  if (capillaId && imagen) {
    return (
      <div className="bg-mercedario-red rounded-lg p-8 animate-fade-in">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Clock className="h-6 w-6 text-mercedario-white mr-3" />
              <h3 className="font-playfair text-2xl font-semibold text-mercedario-white">
                {t('capillas.schedules')}
              </h3>
            </div>
            <div className="space-y-4">
              {sundayMass && (
                <div className="flex justify-between items-center py-2 border-b border-mercedario-white/20">
                  <span className="font-semibold text-mercedario-white">{t('capillas.sundayMass')}</span>
                  <span className="text-mercedario-cream">{sundayMass}</span>
                </div>
              )}
              {horarios && (
                <div className="flex justify-between items-center py-2 border-b border-mercedario-white/20">
                  <span className="font-semibold text-mercedario-white">Otras Misas</span>
                  <span className="text-mercedario-cream">{horarios}</span>
                </div>
              )}
              {eucharisticAdoration && (
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-mercedario-white">{t('capillas.eucharisticAdoration')}</span>
                  <span className="text-mercedario-cream">{eucharisticAdoration}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src={imagen} 
              alt="Capilla" 
              className="rounded-lg shadow-lg mx-auto h-64 w-full object-cover"
            />
            <p className="mt-4 text-sm text-mercedario-cream italic">
              "Vengan a mí todos los que están cansados y agobiados, y yo les daré descanso." - Mt 11,28
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Comportamiento original para la página principal
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
