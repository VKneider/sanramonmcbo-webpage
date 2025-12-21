
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Cross, Crown, ScrollText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const QuienesSomos = () => {
  const { t } = useLanguage();

  return (
    <section id="quienes-somos" className="py-20 bg-mercedario-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-mercedario-brown mb-6">
            {t('aboutUs.title')}
          </h2>
          <p className="text-xl text-mercedario-brown/80 max-w-3xl mx-auto leading-relaxed">
            {t('aboutUs.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <img 
              src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Interior de iglesia católica" 
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-playfair text-3xl font-semibold text-mercedario-brown">
              {t('aboutUs.historyTitle')}
            </h3>
            <p className="text-mercedario-brown/80 leading-relaxed">
              {t('aboutUs.historyP1')}
            </p>
            <p className="text-mercedario-brown/80 leading-relaxed">
              {t('aboutUs.historyP2')}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-semibold text-center text-mercedario-brown mb-12">
            {t('aboutUs.charismTitle')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in bg-mercedario-white border-mercedario-gold">
              <CardContent className="p-8 text-center">
                <Cross className="h-12 w-12 text-mercedario-red mx-auto mb-4" />
                <h4 className="font-playfair text-xl font-semibold mb-4 text-mercedario-brown">
                  {t('aboutUs.redemption')}
                </h4>
                <p className="text-mercedario-brown/80 leading-relaxed">
                  {t('aboutUs.redemptionDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in bg-mercedario-white border-mercedario-gold">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-mercedario-red mx-auto mb-4" />
                <h4 className="font-playfair text-xl font-semibold mb-4 text-mercedario-brown">
                  {t('aboutUs.mercy')}
                </h4>
                <p className="text-mercedario-brown/80 leading-relaxed">
                  {t('aboutUs.mercyDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in bg-mercedario-white border-mercedario-gold">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-mercedario-red mx-auto mb-4" />
                <h4 className="font-playfair text-xl font-semibold mb-4 text-mercedario-brown">
                  {t('aboutUs.community')}
                </h4>
                <p className="text-mercedario-brown/80 leading-relaxed">
                  {t('aboutUs.communityDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-mercedario-white rounded-lg p-8 shadow-md animate-fade-in border border-mercedario-gold/20">
          <h3 className="font-playfair text-3xl font-semibold text-center text-mercedario-brown mb-8">
            {t('aboutUs.missionTitle')}
          </h3>
          <p className="text-lg text-mercedario-brown/80 text-center leading-relaxed max-w-4xl mx-auto">
            "{t('aboutUs.missionText')}"
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div className="bg-mercedario-white p-8 rounded-lg shadow-md border-l-4 border-mercedario-red animate-fade-in hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-playfair text-2xl font-bold text-mercedario-brown mb-4 flex items-center gap-3">
              <ScrollText className="h-8 w-8 text-mercedario-red" />
              {t('aboutUs.founderTitle')}
            </h3>
            <p className="text-mercedario-brown/80 leading-relaxed text-lg">
              {t('aboutUs.founderDesc')}
            </p>
          </div>

          <div className="bg-mercedario-white p-8 rounded-lg shadow-md border-l-4 border-mercedario-gold animate-fade-in hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-playfair text-2xl font-bold text-mercedario-brown mb-4 flex items-center gap-3">
              <Crown className="h-8 w-8 text-mercedario-gold" />
              {t('aboutUs.patronTitle')}
            </h3>
            <p className="text-mercedario-brown/80 leading-relaxed text-lg">
              {t('aboutUs.patronDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
