import { Building, MessageCircle, Phone, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { parishInfo } from '@/data';

const ContactSection = () => {
  const { t } = useLanguage();

  // Servicios del despacho parroquial con traducciones
  const officeServices = [
    t('contact.officeContact.serviceList.certificates'),
    t('contact.officeContact.serviceList.baptisms'),
    t('contact.officeContact.serviceList.marriages'),
    t('contact.officeContact.serviceList.communions'),
    t('contact.officeContact.serviceList.confirmations'),
    t('contact.officeContact.serviceList.generalInfo')
  ];

  // Servicios de intenciones con traducciones
  const intentionServices = [
    t('contact.intentionsContact.serviceList.novenas'),
    t('contact.intentionsContact.serviceList.soulMasses'),
    t('contact.intentionsContact.serviceList.suffrages'),
    t('contact.intentionsContact.serviceList.generalIntentions'),
    t('contact.intentionsContact.serviceList.generalInfo')
  ];

  return (
    <section className="py-16 bg-mercedario-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-mercedario-brown mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-mercedario-brown/80 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contacto Despacho Parroquial */}
          <div className="bg-mercedario-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Building className="h-8 w-8 text-mercedario-red mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-mercedario-brown">
                {t('contact.officeContact.title')}
              </h3>
            </div>
            
            <p className="text-mercedario-brown/80 mb-6">
              {t('contact.officeContact.description')}
            </p>

            <div className="space-y-6 mb-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-mercedario-red mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-mercedario-brown mb-1">{t('contact.address')}:</p>
                  <p className="text-mercedario-brown/80">
                    {parishInfo.address.street}<br />
                    {parishInfo.address.city} {parishInfo.address.postalCode}, {parishInfo.address.state}<br />
                    {parishInfo.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-mercedario-red flex-shrink-0" />
                <div>
                  <p className="font-semibold text-mercedario-brown mb-1">{t('contact.phone')}:</p>
                  <p className="text-mercedario-brown/80">{parishInfo.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-mercedario-red flex-shrink-0" />
                <div>
                  <p className="font-semibold text-mercedario-brown mb-1">{t('contact.officeHours')}:</p>
                  <p className="text-mercedario-brown/80">{parishInfo.contact.officeHours}</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-mercedario-brown mb-3">
                {t('contact.officeContact.services')}
              </p>
              <ul className="space-y-2">
                {officeServices.map((service, index) => (
                  <li key={index} className="flex items-center text-mercedario-brown/80">
                    <span className="text-mercedario-red mr-2">•</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-mercedario-red/10 rounded-lg p-4 border border-mercedario-red/20">
              <p className="font-semibold text-mercedario-brown mb-2">
                {t('contact.officeContact.contact')}
              </p>
              <p className="text-mercedario-brown/80 mb-1">{parishInfo.officeContact.contact.name}</p>
              <p className="text-mercedario-red font-bold text-lg">{parishInfo.officeContact.contact.phone}</p>
            </div>
          </div>

          {/* Contacto Intenciones */}
          <div className="bg-mercedario-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-8 w-8 text-mercedario-red mr-4" />
              <h3 className="font-playfair text-2xl font-semibold text-mercedario-brown">
                {t('contact.intentionsContact.title')}
              </h3>
            </div>
            
            <p className="text-mercedario-brown/80 mb-6">
              {t('contact.intentionsContact.description')}
            </p>

            <div className="space-y-6 mb-6">
              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-mercedario-red flex-shrink-0" />
                <div>
                  <p className="font-semibold text-mercedario-brown mb-1">
                    {t('contact.intentionsContact.hours')}
                  </p>
                  <p className="text-mercedario-brown/80 text-lg font-semibold">
                    {parishInfo.intentionsContact.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-mercedario-brown mb-3">
                {t('contact.intentionsContact.services')}
              </p>
              <ul className="space-y-2">
                {intentionServices.map((service, index) => (
                  <li key={index} className="flex items-center text-mercedario-brown/80">
                    <span className="text-mercedario-red mr-2">•</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-mercedario-red/10 rounded-lg p-4 border border-mercedario-red/20">
              <p className="font-semibold text-mercedario-brown mb-2">
                {t('contact.intentionsContact.contact')}
              </p>
              <p className="text-mercedario-brown/80 mb-1 text-lg">{parishInfo.intentionsContact.contact.name}</p>
              <p className="text-mercedario-red font-bold text-xl mb-2">{parishInfo.intentionsContact.contact.phone}</p>
              <p className="text-mercedario-red font-bold text-sm bg-mercedario-red/10 rounded px-3 py-1 inline-block">
                {t('contact.intentionsContact.whatsappOnly')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
