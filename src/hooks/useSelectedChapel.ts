import { useState, useEffect } from 'react';

export const useSelectedChapel = () => {
  const [selectedChapel, setSelectedChapel] = useState<string>('divinaMisericordia');

  useEffect(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem('selectedChapel');
    if (saved) {
      setSelectedChapel(saved);
    }
  }, []);

  const updateSelectedChapel = (chapelId: string) => {
    setSelectedChapel(chapelId);
    localStorage.setItem('selectedChapel', chapelId);
  };

  return {
    selectedChapel,
    setSelectedChapel: updateSelectedChapel
  };
};