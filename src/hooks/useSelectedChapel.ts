import { useState, useEffect } from 'react';

interface UseSelectedChapelOptions {
  validChapels?: string[];
}

export const useSelectedChapel = (options?: UseSelectedChapelOptions) => {
  const [selectedChapel, setSelectedChapel] = useState<string>('divinaMisericordia');

  useEffect(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem('selectedChapel');
    let chapelToSet = saved || 'divinaMisericordia';

    // If we have valid chapels restriction and current selection is not valid
    if (options?.validChapels && saved && !options.validChapels.includes(saved)) {
      // Select the first valid chapel
      chapelToSet = options.validChapels[0] || 'divinaMisericordia';
    }

    setSelectedChapel(chapelToSet);
  }, [options?.validChapels]);

  const updateSelectedChapel = (chapelId: string) => {
    setSelectedChapel(chapelId);
    localStorage.setItem('selectedChapel', chapelId);
  };

  return {
    selectedChapel,
    setSelectedChapel: updateSelectedChapel
  };
};