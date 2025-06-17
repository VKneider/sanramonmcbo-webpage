
import Navigation from '@/components/Navigation';
import Apostolados from '@/components/Apostolados';
import Footer from '@/components/Footer';

const ApostolateosPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Apostolados />
      </div>
      <Footer />
    </div>
  );
};

export default ApostolateosPage;
