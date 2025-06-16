
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Cross } from 'lucide-react';

const QuienesSomos = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Quiénes Somos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una comunidad parroquial católica que vive y transmite el carisma mercedario, 
            dedicada a la redención y liberación de quienes más lo necesitan.
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
            <h3 className="font-playfair text-3xl font-semibold text-gray-900">
              Nuestra Historia
            </h3>
            <p className="text-gray-600 leading-relaxed">
              La Parroquia San Ramón Nonato fue establecida como una extensión del carisma mercedario, 
              heredando la tradición de más de 800 años de la Orden de la Merced. San Ramón Nonato, 
              nuestro santo patrono, es conocido por su dedicación a la liberación de cautivos y su 
              profunda devoción mariana.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Desde nuestros inicios, hemos sido una comunidad comprometida con los valores evangélicos 
              de misericordia, liberación y servicio, especialmente hacia aquellos que viven en situación 
              de vulnerabilidad y cautiverio de cualquier tipo.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-semibold text-center text-gray-900 mb-12">
            El Carisma Mercedario
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <Cross className="h-12 w-12 text-mercedario-gold mx-auto mb-4" />
                <h4 className="font-playfair text-xl font-semibold mb-4 text-gray-900">
                  Redención
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Seguimos el ejemplo de Cristo Redentor, trabajando por la liberación 
                  de toda forma de cautiverio físico, espiritual y social.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-mercedario-gold mx-auto mb-4" />
                <h4 className="font-playfair text-xl font-semibold mb-4 text-gray-900">
                  Misericordia
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Vivimos la misericordia como madre de todas las virtudes, 
                  acogiendo y sirviendo con amor especial a los más necesitados.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-mercedario-gold mx-auto mb-4" />
                <h4 className="font-playfair text-xl font-semibold mb-4 text-gray-900">
                  Comunidad
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Construimos una comunidad fraterna donde cada persona 
                  encuentra su lugar y puede crecer en la fe y el servicio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md animate-fade-in">
          <h3 className="font-playfair text-3xl font-semibold text-center text-gray-900 mb-8">
            Nuestra Misión
          </h3>
          <p className="text-lg text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
            "Ser una comunidad parroquial que vive y anuncia el Evangelio con el carisma mercedario, 
            promoviendo la liberación integral de la persona humana, especialmente de los más vulnerables, 
            a través de la oración, la evangelización y el servicio caritativo."
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
