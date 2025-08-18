
import { Church, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { parishInfo } from '@/data/parishInfo';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-mercedario-brown text-mercedario-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8 text-mercedario-gold" />
              <div>
                <h3 className="font-playfair font-bold text-xl text-mercedario-white">San Ramón Nonato</h3>
                <p className="text-mercedario-gold text-sm">{t('navigation.parish')}</p>
              </div>
            </div>
            <p className="text-mercedario-cream mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <p className="text-mercedario-cream/80 text-sm italic">
              "{t('footer.motto')}"
            </p>
          </div>

          {/* Información de contacto básica */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-mercedario-gold">
              {t('footer.contact')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-mercedario-gold mt-1 flex-shrink-0" />
                <p className="text-mercedario-cream text-sm">
                  {parishInfo.address.street}<br />
                  {parishInfo.address.city} {parishInfo.address.postalCode}, {parishInfo.address.state}<br />
                  {parishInfo.address.country}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-mercedario-gold" />
                <p className="text-mercedario-cream text-sm">{parishInfo.contact.phone}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-mercedario-gold" />
                <p className="text-mercedario-cream text-sm">{parishInfo.contact.email}</p>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-mercedario-gold">
              {t('footer.schedule')}
            </h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-mercedario-gold mt-1 flex-shrink-0" />
                <div className="text-mercedario-cream text-sm">
                  <p className="font-medium">{t('footer.sundayMasses')}</p>
                  <p>8:00 AM, 10:00 AM</p>
                  <p>12:00 PM, 6:00 PM</p>
                </div>
              </div>
              <div className="text-mercedario-cream text-sm ml-7">
                <p className="font-medium">{t('footer.weekdayMasses')}</p>
                <p>5:00 PM, 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-mercedario-gold/20 mt-8 pt-6 text-center">
          <p className="text-mercedario-cream/80 text-sm">
            {t('footer.copyright')}
          </p>
          <p className="text-mercedario-cream/60 text-xs mt-2">
            {t('footer.order')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
