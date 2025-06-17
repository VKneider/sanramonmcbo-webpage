
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from '@/contexts/LanguageContext';
import { Apostolado } from './ApostolCard';

interface ApostolModalProps {
  apostolado: Apostolado | null;
  isOpen: boolean;
  onClose: () => void;
}

const ApostolModal: React.FC<ApostolModalProps> = ({ apostolado, isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!apostolado) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-red-800 mb-2">
            {apostolado.name}
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-base">
            {apostolado.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          {apostolado.ageRange && (
            <div>
              <h4 className="font-semibold text-red-700 mb-1">{t('apostolados.ageRange')}</h4>
              <p className="text-gray-700">{apostolado.ageRange}</p>
            </div>
          )}
          
          {apostolado.schedule && (
            <div>
              <h4 className="font-semibold text-red-700 mb-1">{t('apostolados.schedule')}</h4>
              <p className="text-gray-700">{apostolado.schedule}</p>
            </div>
          )}
          
          {apostolado.location && (
            <div>
              <h4 className="font-semibold text-red-700 mb-1">{t('apostolados.location')}</h4>
              <p className="text-gray-700">{apostolado.location}</p>
            </div>
          )}
          
          {apostolado.activities && apostolado.activities.length > 0 && (
            <div>
              <h4 className="font-semibold text-red-700 mb-1">{t('apostolados.activities')}</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {apostolado.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          )}
          
          {apostolado.requirements && (
            <div>
              <h4 className="font-semibold text-red-700 mb-1">{t('apostolados.requirements')}</h4>
              <p className="text-gray-700">{apostolado.requirements}</p>
            </div>
          )}
          
          {apostolado.contact && (
            <div>
              <h4 className="font-semibold text-red-700 mb-1">{t('apostolados.contact')}</h4>
              <p className="text-gray-700">{apostolado.contact}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApostolModal;
