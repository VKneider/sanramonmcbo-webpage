
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, HandHeart, Music, Baby, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const QueHacemos = () => {
  const { t } = useLanguage();

  const ministerios = [
    {
      icon: BookOpen,
      title: t('whatWeDo.catechesis'),
      description: t('whatWeDo.catechesisDesc')
    },
    {
      icon: Users,
      title: t('whatWeDo.youthPastoral'),
      description: t('whatWeDo.youthPastoralDesc')
    },
    {
      icon: HandHeart,
      title: t('whatWeDo.caritas'),
      description: t('whatWeDo.caritasDesc')
    },
    {
      icon: Music,
      title: t('whatWeDo.choir'),
      description: t('whatWeDo.choirDesc')
    },
    {
      icon: Baby,
      title: t('whatWeDo.familyPastoral'),
      description: t('whatWeDo.familyPastoralDesc')
    },
    {
      icon: Zap,
      title: t('whatWeDo.charismaticRenewal'),
      description: t('whatWeDo.charismaticRenewalDesc')
    }
  ];

  return (
    <section className="py-20 bg-mercedario-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-mercedario-brown mb-6">
            {t('whatWeDo.title')}
          </h2>
          <p className="text-xl text-mercedario-brown/80 max-w-3xl mx-auto leading-relaxed">
            {t('whatWeDo.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ministerios.map((ministerio, index) => (
            <Card 
              key={ministerio.title} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in border-l-4 border-l-mercedario-red bg-mercedario-cream"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <ministerio.icon className="h-12 w-12 text-mercedario-gold mx-auto mb-4" />
                <CardTitle className="font-playfair text-xl text-mercedario-brown">
                  {ministerio.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-mercedario-brown/80 leading-relaxed text-center">
                  {ministerio.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="gradient-mercedario-alt rounded-lg p-8 animate-fade-in">
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

        <div className="text-center mt-16 animate-fade-in">
          <h3 className="font-playfair text-2xl font-semibold text-mercedario-brown mb-4">
            {t('whatWeDo.participate')}
          </h3>
          <p className="text-mercedario-brown/80 mb-6 max-w-2xl mx-auto">
            {t('whatWeDo.participateDesc')}
          </p>
          <div className="bg-mercedario-cream rounded-lg p-4 inline-block border border-mercedario-gold">
            <p className="text-mercedario-red font-semibold">
              📞 {t('whatWeDo.contact')} (555) 123-4567 | ✉️ info@sanramonnonato.org
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;
