
import { navigationTranslations } from './navigation';
import { heroTranslations } from './hero';
import { aboutUsTranslations } from './aboutUs';
import { whatWeDoTranslations } from './whatWeDo';
// Import removed: apostoladosTranslations - now using distributed system
import { galleryTranslations } from './gallery';
import { clergyTranslations } from './clergy';

import { locationTranslations } from './location';
import { contactTranslations } from './contact';
import { footerTranslations } from './footer';
import { capillasTranslations } from './capillas';
import { donationsTranslations } from './donations';

// Import consolidated apostolados translations from distributed system
import { chapelApostolates } from './chapels';

// Generate consolidated apostolados translations
const generateApostoladosTranslations = () => {
  const baseTranslations = {
    title: "Nuestros Apostolados",
    description: "Descubre los diferentes grupos y ministerios donde puedes crecer en la fe y servir a la comunidad siguiendo el carisma mercedario, organizados por nuestras capillas filiales.",
    subtitle: "Apostolados y ministerios de",
    ageRange: "Rango de edades",
    schedule: "Horario de encuentros",
    location: "Lugar",
    activities: "Actividades",
    requirements: "Requisitos",
    contact: "Contacto",
    moreInfo: "Más Información",
    activityGallery: "Galería de Actividades",
    joinUs: "¡Únete a Nosotros!",
    joinUsDescription: "Todos los apostolados están abiertos para nuevos miembros. Contáctanos para más información sobre cómo participar.",
    contactInfo: "Información de contacto",
    officeHours: "Atención: Lun-Vie 9AM-6PM",
    chapelsList: {}
  };

  // Add chapel data from distributed system
  Object.entries(chapelApostolates).forEach(([chapelKey, chapelData]) => {
    baseTranslations.chapelsList[chapelKey] = {
      title: chapelData.title,
      apostolates: {}
    };

    // Add apostolate data
    Object.entries(chapelData.apostolates).forEach(([apostolateKey, apostolateData]) => {
      baseTranslations.chapelsList[chapelKey].apostolates[apostolateKey] = {
        name: apostolateData.es.name,
        description: apostolateData.es.description,
        ageRange: apostolateData.es.ageRange,
        schedule: apostolateData.es.schedule,
        location: apostolateData.es.location,
        activities: apostolateData.es.activities,
        requirements: apostolateData.es.requirements || undefined,
        contact: apostolateData.es.coordinadores?.map(coord => `${coord.nombre}: ${coord.telefono}`).join(', ') || '',
        activityImages: apostolateData.es.activityImages
      };
    });
  });

  // Generate English version
  const englishTranslations = {
    title: "Our Apostolates",
    description: "Discover the different groups and ministries where you can grow in faith and serve the community following the Mercedarian charism, organized by our filial chapels.",
    subtitle: "Apostolates and ministries of",
    ageRange: "Age range",
    schedule: "Meeting schedule",
    location: "Location",
    activities: "Activities",
    requirements: "Requirements",
    contact: "Contact",
    moreInfo: "More Information",
    activityGallery: "Activity Gallery",
    joinUs: "Join Us!",
    joinUsDescription: "All apostolates are open to new members. Contact us for more information on how to participate.",
    contactInfo: "Contact information",
    officeHours: "Hours: Mon-Fri 9AM-6PM",
    chapelsList: {}
  };

  // Add English chapel data
  Object.entries(chapelApostolates).forEach(([chapelKey, chapelData]) => {
    englishTranslations.chapelsList[chapelKey] = {
      title: chapelData.title,
      apostolates: {}
    };

    // Add English apostolate data
    Object.entries(chapelData.apostolates).forEach(([apostolateKey, apostolateData]) => {
      englishTranslations.chapelsList[chapelKey].apostolates[apostolateKey] = {
        name: apostolateData.en.name,
        description: apostolateData.en.description,
        ageRange: apostolateData.en.ageRange,
        schedule: apostolateData.en.schedule,
        location: apostolateData.en.location,
        activities: apostolateData.en.activities,
        requirements: apostolateData.en.requirements || undefined,
        contact: apostolateData.en.coordinadores?.map(coord => `${coord.nombre}: ${coord.telefono}`).join(', ') || '',
        activityImages: apostolateData.en.activityImages
      };
    });
  });

  return {
    es: { apostolados: baseTranslations },
    en: { apostolados: englishTranslations }
  };
};

const consolidatedApostoladosTranslations = generateApostoladosTranslations();

export type Language = 'es' | 'en';

export const translations = {
  es: {
    ...navigationTranslations.es,
    ...heroTranslations.es,
    ...aboutUsTranslations.es,
    ...whatWeDoTranslations.es,
    ...consolidatedApostoladosTranslations.es,
    ...galleryTranslations.es,
    ...clergyTranslations.es,

    ...locationTranslations.es,
    ...contactTranslations.es,
    ...footerTranslations.es,
    ...capillasTranslations.es,
    ...donationsTranslations.es
  },
  en: {
    ...navigationTranslations.en,
    ...heroTranslations.en,
    ...aboutUsTranslations.en,
    ...whatWeDoTranslations.en,
    ...consolidatedApostoladosTranslations.en,
    ...galleryTranslations.en,
    ...clergyTranslations.en,

    ...locationTranslations.en,
    ...contactTranslations.en,
    ...footerTranslations.en,
    ...capillasTranslations.en,
    ...donationsTranslations.en
  }
};

export type TranslationKey = keyof typeof translations.es;
