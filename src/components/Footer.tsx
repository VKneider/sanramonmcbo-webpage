
import { Church, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8 text-mercedario-gold" />
              <div>
                <h3 className="font-playfair font-bold text-xl">San Ramón Nonato</h3>
                <p className="text-mercedario-gold text-sm">Parroquia</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Una comunidad católica guiada por el carisma mercedario, 
              comprometida con la liberación y el servicio a los más necesitados.
            </p>
            <p className="text-gray-400 text-sm italic">
              "Bendito sea Dios Padre de misericordias"
            </p>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-mercedario-gold">
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-mercedario-gold mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Calle Principal #123<br />
                  Colonia Centro<br />
                  Ciudad, Estado CP
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-mercedario-gold" />
                <p className="text-gray-300 text-sm">(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-mercedario-gold" />
                <p className="text-gray-300 text-sm">info@sanramonnonato.org</p>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-mercedario-gold">
              Horarios
            </h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-mercedario-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Misas Dominicales:</p>
                  <p>8:00 AM, 10:00 AM</p>
                  <p>12:00 PM, 6:00 PM</p>
                </div>
              </div>
              <div className="text-gray-300 text-sm ml-7">
                <p className="font-medium">Misas de Semana:</p>
                <p>6:30 AM, 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Parroquia San Ramón Nonato. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Orden de la Merced - Carisma Mercedario
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
