
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Church } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { href: '/', label: t('navigation.home') },
    { href: '/actividades', label: t('navigation.activities') },
    { href: '/apostolados', label: t('navigation.apostolates') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mercedario-cream/95 backdrop-blur-sm border-b border-mercedario-gold/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Church className="h-8 w-8 text-mercedario-red" />
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-lg text-mercedario-dark">San Ramón Nonato</span>
              <span className="text-xs text-mercedario-gold -mt-1">{t('navigation.parish')}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-mercedario-red border-b-2 border-mercedario-red'
                    : 'text-mercedario-dark hover:text-mercedario-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-mercedario-dark"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-mercedario-gold/20 bg-mercedario-cream">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-mercedario-red bg-mercedario-red/10'
                      : 'text-mercedario-dark hover:text-mercedario-red hover:bg-mercedario-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
