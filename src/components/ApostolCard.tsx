
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

export interface Apostolado {
  id: string;
  name: string;
  description: string;
  image?: string;
  ageRange?: string;
  schedule?: string;
  location?: string;
  activities?: string[];
  requirements?: string;
  contact?: string;
}

interface ApostolCardProps {
  apostolado: Apostolado;
  onMoreInfo: (apostolado: Apostolado) => void;
}

const ApostolCard: React.FC<ApostolCardProps> = ({ apostolado, onMoreInfo }) => {
  const { t } = useLanguage();

  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden">
      {apostolado.image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={apostolado.image} 
            alt={apostolado.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg text-red-600">{apostolado.name}</CardTitle>
        <CardDescription className="text-gray-600">
          {apostolado.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="space-y-2 mb-4">
          {apostolado.ageRange && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">{t('apostolados.ageRange')}:</span> {apostolado.ageRange}
            </p>
          )}
          {apostolado.schedule && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">{t('apostolados.schedule')}:</span> {apostolado.schedule}
            </p>
          )}
        </div>
        <Button 
          onClick={() => onMoreInfo(apostolado)}
          className="w-full bg-red-600 hover:bg-red-700 text-white"
        >
          {t('apostolados.moreInfo')}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ApostolCard;
