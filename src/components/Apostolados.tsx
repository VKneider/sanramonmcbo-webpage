
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ApostolCard, { Apostolado } from './ApostolCard';
import ApostolModal from './ApostolModal';

const Apostolados: React.FC = () => {
  const { t } = useLanguage();
  const [selectedApostolado, setSelectedApostolado] = useState<Apostolado | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Datos de ejemplo de apostolados
  const apostolados: Apostolado[] = [
    {
      id: '1',
      name: t('apostolados.youthCatholicAction.name'),
      description: t('apostolados.youthCatholicAction.description'),
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
      ageRange: '16-30 años',
      schedule: 'Sábados 4:00 PM - 6:00 PM',
      location: 'Salón parroquial',
      activities: [
        'Formación espiritual semanal',
        'Retiros espirituales',
        'Servicio social comunitario',
        'Evangelización juvenil'
      ],
      requirements: 'Jóvenes bautizados con deseos de crecer en la fe',
      contact: 'pastoral.juvenil@sanramonnnonato.org'
    },
    {
      id: '2',
      name: t('apostolados.familyPastoral.name'),
      description: t('apostolados.familyPastoral.description'),
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=300&fit=crop',
      ageRange: 'Matrimonios y familias',
      schedule: 'Domingos 6:00 PM - 8:00 PM',
      location: 'Aula magna',
      activities: [
        'Preparación matrimonial',
        'Formación familiar',
        'Retiros para parejas',
        'Acompañamiento espiritual'
      ],
      requirements: 'Parejas casadas o en preparación matrimonial',
      contact: 'pastoral.familiar@sanramonnnonato.org'
    },
    {
      id: '3',
      name: t('apostolados.charismaticRenewal.name'),
      description: t('apostolados.charismaticRenewal.description'),
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop',
      ageRange: 'Todas las edades',
      schedule: 'Jueves 7:00 PM - 9:00 PM',
      location: 'Capilla de adoración',
      activities: [
        'Oración carismática',
        'Sanación interior',
        'Alabanza y adoración',
        'Retiros de sanación'
      ],
      requirements: 'Personas bautizadas abiertas a la experiencia del Espíritu Santo',
      contact: 'renovacion.carismatica@sanramonnnonato.org'
    },
    {
      id: '4',
      name: t('apostolados.caritas.name'),
      description: t('apostolados.caritas.description'),
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      ageRange: 'Adultos',
      schedule: 'Martes y Viernes 9:00 AM - 12:00 PM',
      location: 'Centro de acopio parroquial',
      activities: [
        'Distribución de alimentos',
        'Visita a enfermos',
        'Apoyo a familias necesitadas',
        'Programas de ayuda social'
      ],
      requirements: 'Personas con espíritu de servicio y disponibilidad de tiempo',
      contact: 'caritas@sanramonnnonato.org'
    }
  ];

  const handleMoreInfo = (apostolado: Apostolado) => {
    setSelectedApostolado(apostolado);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApostolado(null);
  };

  return (
    <div className="min-h-screen bg-mercedario-cream">
      {/* Header */}
      <section className="min-h-[40vh] bg-mercedario-red flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-mercedario-white mb-4">
            {t('apostolados.title')}
          </h1>
          <p className="text-xl text-mercedario-cream max-w-3xl mx-auto">
            {t('apostolados.description')}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {apostolados.map((apostolado) => (
              <ApostolCard
                key={apostolado.id}
                apostolado={apostolado}
                onMoreInfo={handleMoreInfo}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 shadow-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                {t('apostolados.joinUs')}
              </h3>
              <p className="text-gray-700 mb-6">
                {t('apostolados.joinUsDescription')}
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>{t('apostolados.contactInfo')}:</strong></p>
                <p>📧 info@sanramonnnonato.org</p>
                <p>📞 (555) 123-4567</p>
                <p>🕐 {t('apostolados.officeHours')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ApostolModal
        apostolado={selectedApostolado}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Apostolados;
