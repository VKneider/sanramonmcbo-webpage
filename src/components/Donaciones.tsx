import { Heart, CreditCard, Building2, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Donaciones = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: t('donations.copied'),
      description: `${label}: ${text}`,
    });
  };

  const bankAccounts = [
    {
      bank: 'BBVA',
      accountNumber: '1234567890123456',
      clabe: '012345678901234567',
      accountHolder: 'Parroquia San Ramón Nonato'
    },
    {
      bank: 'Santander',
      accountNumber: '9876543210987654',
      clabe: '098765432109876543',
      accountHolder: 'Parroquia San Ramón Nonato'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-mercedario-cream to-mercedario-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Heart className="h-16 w-16 text-mercedario-gold" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-mercedario-brown mb-6">
            {t('donations.title')}
          </h2>
          <p className="text-lg text-mercedario-brown/80 max-w-3xl mx-auto leading-relaxed">
            {t('donations.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bankAccounts.map((account, index) => (
            <Card key={index} className="border-mercedario-gold/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-mercedario-brown/5">
                <CardTitle className="flex items-center space-x-2 text-mercedario-brown">
                  <Building2 className="h-5 w-5 text-mercedario-gold" />
                  <span>{account.bank}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-mercedario-brown/60 mb-1">{t('donations.accountHolder')}</p>
                  <p className="font-medium text-mercedario-brown">{account.accountHolder}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-mercedario-cream/30 rounded-lg">
                    <div>
                      <p className="text-sm text-mercedario-brown/60">{t('donations.accountNumber')}</p>
                      <p className="font-mono text-mercedario-brown font-medium">{account.accountNumber}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(account.accountNumber, t('donations.accountNumber'))}
                      className="text-mercedario-gold hover:text-mercedario-brown hover:bg-mercedario-gold/10"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-mercedario-cream/30 rounded-lg">
                    <div>
                      <p className="text-sm text-mercedario-brown/60">{t('donations.clabe')}</p>
                      <p className="font-mono text-mercedario-brown font-medium">{account.clabe}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(account.clabe, t('donations.clabe'))}
                      className="text-mercedario-gold hover:text-mercedario-brown hover:bg-mercedario-gold/10"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-mercedario-brown/5 rounded-lg p-6 max-w-2xl mx-auto">
            <CreditCard className="h-8 w-8 text-mercedario-gold mx-auto mb-4" />
            <h3 className="font-playfair text-xl font-semibold text-mercedario-brown mb-2">
              {t('donations.otherMethods')}
            </h3>
            <p className="text-mercedario-brown/70 mb-4">
              {t('donations.otherMethodsDescription')}
            </p>
            <p className="text-sm text-mercedario-brown/60 italic">
              "{t('donations.gratitude')}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donaciones;