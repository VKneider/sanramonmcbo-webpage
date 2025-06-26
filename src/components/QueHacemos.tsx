
import { Clock, Users, Heart, Music, Home, Sparkles, Calendar, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const QueHacemos = () => {
  const { t } = useLanguage();

  const ministerios = [
    {
      icon: <Users className="h-8 w-8" />,
      title: t('whatWeDo.catechesis'),
      description: t('whatWeDo.catechesisDesc')
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('whatWeDo.youthPastoral'),
      description: t('whatWeDo.youthPastoralDesc')
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: t('whatWeDo.caritas'),
      description: t('whatWeDo.caritasDesc')
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: t('whatWeDo.choir'),
      description: t('whatWeDo.choirDesc')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('whatWeDo.familyPastoral'),
      description: t('whatWeDo.familyPastoralDesc')
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: t('whatWeDo.charismaticRenewal'),
      description: t('whatWeDo.charismaticRenewalDesc')
    }
  ];

  return (
    <section id="que-hacemos" className="py-20 bg-mercedario-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-mercedario-brown mb-6">
            {t('whatWeDo.title')}
          </h2>
          <p className="text-lg text-mercedario-brown/80 max-w-3xl mx-auto">
            {t('whatWeDo.description')}
          </p>
        </div>

        {/* Ministerios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ministerios.map((ministerio, index) => (
            <div 
              key={index}
              className="bg-mercedario-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-mercedario-red mb-4">
                {ministerio.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold text-mercedario-brown mb-3">
                {ministerio.title}
              </h3>
              <p className="text-mercedario-brown/80">
                {ministerio.description}
              </p>
            </div>
          ))}
        </div>

        {/* Horarios de Celebraciones */}
        <div className="bg-mercedario-red rounded-lg p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="h-8 w-8 text-mercedario-gold mr-3" />
              <h3 className="font-playfair text-2xl font-bold text-mercedario-white">
                {t('whatWeDo.scheduleTitle')}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-mercedario-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-5 w-5 text-mercedario-gold mr-2" />
                    <h4 className="font-semibold text-mercedario-white">
                      {t('whatWeDo.sundayMasses')}
                    </h4>
                  </div>
                  <p className="text-mercedario-cream">8:00 AM • 10:00 AM • 12:00 PM • 6:00 PM</p>
                </div>
                
                <div className="bg-mercedario-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-5 w-5 text-mercedario-gold mr-2" />
                    <h4 className="font-semibold text-mercedario-white">
                      {t('whatWeDo.weekdayMasses')}
                    </h4>
                  </div>
                  <p className="text-mercedario-cream">6:30 AM • 6:00 PM</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-mercedario-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <Heart className="h-5 w-5 text-mercedario-gold mr-2" />
                    <h4 className="font-semibold text-mercedario-white">
                      {t('whatWeDo.adoration')}
                    </h4>
                  </div>
                  <p className="text-mercedario-cream">Jueves 7:00 PM - 8:00 PM</p>
                </div>
                
                <div className="bg-mercedario-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-5 w-5 text-mercedario-gold mr-2" />
                    <h4 className="font-semibold text-mercedario-white">
                      {t('whatWeDo.confessions')}
                    </h4>
                  </div>
                  <p className="text-mercedario-cream">Sábados 4:00 PM - 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="font-playfair text-2xl font-bold text-mercedario-brown mb-4">
            {t('whatWeDo.participate')}
          </h3>
          <p className="text-lg text-mercedario-brown/80 mb-6 max-w-2xl mx-auto">
            {t('whatWeDo.participateDesc')}
          </p>
          <div className="flex items-center justify-center text-mercedario-red">
            <Phone className="h-5 w-5 mr-2" />
            <span className="font-semibold">{t('whatWeDo.contact')} (555) 123-4567</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;
