import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const Clergy: React.FC = () => {
  const { t } = useLanguage();

  const priests = [
    {
      id: 'parroco',
      name: t('clergy.priests.parroco.name'),
      title: t('clergy.priests.parroco.title'),
      photo: t('clergy.priests.parroco.photo')
    },
    {
      id: 'vicario',
      name: t('clergy.priests.vicario.name'),
      title: t('clergy.priests.vicario.title'),
      photo: t('clergy.priests.vicario.photo')
    }
  ];

  return (
    <section className="py-16 bg-mercedario-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-mercedario-red mb-4">
            {t('clergy.title')}
          </h2>
          <p className="text-lg text-mercedario-brown max-w-2xl mx-auto">
            {t('clergy.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {priests.map((priest, index) => (
            <Card 
              key={priest.id}
              className="bg-mercedario-cream border-mercedario-gold/20 hover:shadow-lg transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-mercedario-gold/10 border-4 border-mercedario-gold/20 overflow-hidden">
                    <img
                      src={priest.photo}
                      alt={priest.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-mercedario-red mb-2">
                  {priest.name}
                </h3>
                
                <p className="text-mercedario-brown font-medium">
                  {priest.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clergy;