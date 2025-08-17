
import { useLanguage } from '@/contexts/LanguageContext';
import { History, MapPin } from 'lucide-react';
import InfoHorarios from '@/components/InfoHorarios';

interface CapillaDetailProps {
  capillaId: string;
}

const CapillaDetail = ({ capillaId }: CapillaDetailProps) => {
  const { t } = useLanguage();

  const capillaData = {
    divinaMisericordia: {
      titulo: t('capillas.chapelsList.divinaMisericordia.title'),
      descripcion: t('capillas.chapelsList.divinaMisericordia.description'),
      historia: t('capillas.chapelsList.divinaMisericordia.history'),
      horarios: t('capillas.chapelsList.divinaMisericordia.schedules'),
      sundayMass: t('capillas.chapelsList.divinaMisericordia.sundayMass'),
      eucharisticAdoration: t('capillas.chapelsList.divinaMisericordia.eucharisticAdoration'),
      ubicacion: t('capillas.chapelsList.divinaMisericordia.location'),
      imagen: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4072.7070876309544!2d-71.61069269046317!3d10.706283665480935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e899f0051b2c083%3A0xdff32ed8481207b3!2sCapilla%20Jes%C3%BAs%20de%20la%20Divina%20Misericordia!5e0!3m2!1ses-419!2sve!4v1755453139407!5m2!1ses-419!2sve"
    },
    nuestraSeñoraMerced: {
      titulo: t('capillas.chapelsList.nuestraSeñoraMerced.title'),
      descripcion: t('capillas.chapelsList.nuestraSeñoraMerced.description'),
      historia: t('capillas.chapelsList.nuestraSeñoraMerced.history'),
      horarios: t('capillas.chapelsList.nuestraSeñoraMerced.schedules'),
      sundayMass: t('capillas.chapelsList.nuestraSeñoraMerced.sundayMass'),
      eucharisticAdoration: t('capillas.chapelsList.nuestraSeñoraMerced.eucharisticAdoration'),
      ubicacion: t('capillas.chapelsList.nuestraSeñoraMerced.location'),
      imagen: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.5!2d-74.007!3d40.7129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjIiTiA3NMKwMDAnMjIuNiJX!5e0!3m2!1sen!2sus!4v1234567891"
    },
    sanPedroNolasco: {
      titulo: t('capillas.chapelsList.sanPedroNolasco.title'),
      descripcion: t('capillas.chapelsList.sanPedroNolasco.description'),
      historia: t('capillas.chapelsList.sanPedroNolasco.history'),
      horarios: t('capillas.chapelsList.sanPedroNolasco.schedules'),
      sundayMass: t('capillas.chapelsList.sanPedroNolasco.sundayMass'),
      eucharisticAdoration: t('capillas.chapelsList.sanPedroNolasco.eucharisticAdoration'),
      ubicacion: t('capillas.chapelsList.sanPedroNolasco.location'),
      imagen: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.3126625516516!2d-71.61761332519619!3d10.71034968943445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e899f00231723bd%3A0x47a84251bfe62554!2sCapilla%20San%20Pedro%20Nolasco!5e0!3m2!1ses-419!2sve!4v1755452923162!5m2!1ses-419!2sve"
    },
    ermitaCarmen: {
      titulo: t('capillas.chapelsList.ermitaCarmen.title'),
      descripcion: t('capillas.chapelsList.ermitaCarmen.description'),
      historia: t('capillas.chapelsList.ermitaCarmen.history'),
      horarios: t('capillas.chapelsList.ermitaCarmen.schedules'),
      sundayMass: t('capillas.chapelsList.ermitaCarmen.sundayMass'),
      eucharisticAdoration: t('capillas.chapelsList.ermitaCarmen.eucharisticAdoration'),
      ubicacion: t('capillas.chapelsList.ermitaCarmen.location'),
      imagen: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62732.46602531828!2d-71.64932154635308!3d10.674245053761274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e899f1c35e0f84f%3A0x7fdd66cf42d91150!2sCapilla%20Nuestra%20Se%C3%B1ora%20del%20Carmen!5e0!3m2!1ses-419!2sve!4v1755453012883!5m2!1ses-419!2sve"
    }
  };

  const capilla = capillaData[capillaId as keyof typeof capillaData];

  if (!capilla) {
    return (
      <div className="text-center py-16">
        <p className="text-mercedario-brown">{t('capillas.noChapels')}</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-mercedario-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-12 animate-fade-in">
          <img 
            src={capilla.imagen} 
            alt={capilla.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-white font-playfair text-4xl md:text-5xl font-bold mb-4">
              {capilla.titulo}
            </h1>
            <p className="text-mercedario-cream text-lg max-w-3xl">
              {capilla.descripcion}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* History */}
            <div className="bg-mercedario-cream rounded-lg p-8">
              <div className="flex items-center mb-6">
                <History className="h-6 w-6 text-mercedario-red mr-3" />
                <h2 className="font-playfair text-2xl font-semibold text-mercedario-brown">
                  {t('capillas.history')}
                </h2>
              </div>
              <p className="text-mercedario-brown/80 leading-relaxed">
                {capilla.historia}
              </p>
            </div>

            {/* Schedules using InfoHorarios component */}
            <InfoHorarios 
              capillaId={capillaId}
              horarios={capilla.horarios}
              sundayMass={capilla.sundayMass}
              eucharisticAdoration={capilla.eucharisticAdoration}
              imagen={capilla.imagen}
            />
          </div>

          {/* Right column - Map */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-mercedario-cream rounded-lg p-8 h-full">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-mercedario-red mr-3" />
                <h2 className="font-playfair text-2xl font-semibold text-mercedario-brown">
                  Ubicación en el Mapa
                </h2>
              </div>
              <p className="text-mercedario-brown/80 text-lg mb-6">
                {capilla.ubicacion}
              </p>
              <div className="rounded-lg overflow-hidden shadow-lg h-96">
                <iframe
                  src={capilla.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de ${capilla.titulo}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapillaDetail;
