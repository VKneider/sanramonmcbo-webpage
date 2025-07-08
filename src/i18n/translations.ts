
import { navigationTranslations } from './navigation';
import { heroTranslations } from './hero';
import { aboutUsTranslations } from './aboutUs';
import { whatWeDoTranslations } from './whatWeDo';
import { apostoladosTranslations } from './apostolados';
import { galleryTranslations } from './gallery';
import { activitiesTranslations } from './activities';
import { locationTranslations } from './location';
import { footerTranslations } from './footer';
import { capillasTranslations } from './capillas';
import { donationsTranslations } from './donations';

export type Language = 'es' | 'en';

export const translations = {
  es: {
    ...navigationTranslations.es,
    ...heroTranslations.es,
    ...aboutUsTranslations.es,
    ...whatWeDoTranslations.es,
    ...apostoladosTranslations.es,
    ...galleryTranslations.es,
    ...activitiesTranslations.es,
    ...locationTranslations.es,
    ...footerTranslations.es,
    ...capillasTranslations.es,
    ...donationsTranslations.es
  },
  en: {
    ...navigationTranslations.en,
    ...heroTranslations.en,
    ...aboutUsTranslations.en,
    ...whatWeDoTranslations.en,
    ...apostoladosTranslations.en,
    ...galleryTranslations.en,
    ...activitiesTranslations.en,
    ...locationTranslations.en,
    ...footerTranslations.en,
    ...capillasTranslations.en,
    ...donationsTranslations.en
  }
};

export type TranslationKey = keyof typeof translations.es;
