
import { MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ActivitiesLocation = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-mercedario-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-mercedario-brown mb-6">
            {t('activities.location')}
          </h2>
          <p className="text-lg text-mercedario-brown/80">
            {t('activities.locationDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Mapa */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2738374586786!2d-74.07209908570738!3d4.710988796608639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f2573c4c0d015%3A0x7e9c5f0b4b8a8c4a!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1640995200000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la Parroquia San Ramón Nonato"
            ></iframe>
          </div>

          {/* Información de contacto y direcciones */}
          <div className="space-y-6">
            <div className="bg-mercedario-cream/30 rounded-lg p-6">
              <h3 className="font-playfair text-xl font-semibold text-mercedario-brown mb-4">
                {t('activities.contactInfo')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-mercedario-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-mercedario-brown">Dirección:</p>
                    <p className="text-mercedario-brown/80">
                      Calle Principal #123<br />
                      Colonia Centro<br />
                      Ciudad, Estado CP
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-mercedario-red flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-mercedario-brown">Teléfono:</p>
                    <p className="text-mercedario-brown/80">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-mercedario-red mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-mercedario-brown">Horarios de Atención:</p>
                    <p className="text-mercedario-brown/80">
                      Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                      Sábados: 9:00 AM - 2:00 PM<br />
                      Domingos: Solo durante las misas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-mercedario-red/10 rounded-lg p-6 border border-mercedario-red/20">
              <h4 className="font-semibold text-mercedario-brown mb-2">
                {t('activities.directions')}
              </h4>
              <p className="text-mercedario-brown/80 text-sm">
                La parroquia cuenta con estacionamiento disponible y está ubicada cerca del transporte público. 
                Para llegar en transporte público, puedes tomar las rutas 45, 67 o 89 que paran a una cuadra de la parroquia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesLocation;
