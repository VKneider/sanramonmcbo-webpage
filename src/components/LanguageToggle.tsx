
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-mercedario-white hover:text-mercedario-gold hover:bg-mercedario-gold/10 flex items-center space-x-1"
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium">{language === 'es' ? 'EN' : 'ES'}</span>
    </Button>
  );
};

export default LanguageToggle;
