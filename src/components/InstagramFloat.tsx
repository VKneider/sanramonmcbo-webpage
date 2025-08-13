import { Instagram } from 'lucide-react';

const InstagramFloat = () => {
  return (
    <a
      href="https://www.instagram.com/sanramonmcbo/?hl=es"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Síguenos en Instagram"
    >
      <Instagram size={24} />
    </a>
  );
};

export default InstagramFloat;