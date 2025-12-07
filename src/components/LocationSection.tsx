
import { MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { parishInfo } from '@/data';

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-mercedario-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-mercedario-brown mb-6">
            {t('location.title')}
          </h2>
          <p className="text-lg text-mercedario-brown/80">
            {t('location.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Mapa */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={parishInfo.location.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la Parroquia San Ramón Nonato"
            ></iframe>
          </div>

          {/* Información de ubicación y direcciones */}
          <div className="space-y-6">
            {/* Información básica de contacto */}
            <div className="bg-mercedario-cream/30 rounded-lg p-6">
              <h3 className="font-playfair text-xl font-semibold text-mercedario-brown mb-4">
                {t('location.contactInfo')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-mercedario-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-mercedario-brown">Dirección:</p>
                    <p className="text-mercedario-brown/80">
                      {parishInfo.address.street}<br />
                      {parishInfo.address.city} {parishInfo.address.postalCode}, {parishInfo.address.state}<br />
                      {parishInfo.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-mercedario-red flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-mercedario-brown">Teléfono:</p>
                    <p className="text-mercedario-brown/80">{parishInfo.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-mercedario-red flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-mercedario-brown">Horario de Oficina:</p>
                    <p className="text-mercedario-brown/80">{parishInfo.contact.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direcciones */}
            <div className="bg-mercedario-red/10 rounded-lg p-6 border border-mercedario-red/20">
              <h4 className="font-semibold text-mercedario-brown mb-2">
                {t('location.directions')}
              </h4>
              <p className="text-mercedario-brown/80 text-sm">
                {t('location.parking')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
