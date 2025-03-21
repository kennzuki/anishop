'use client';

import { createContext, useState } from 'react';
import { Animal } from '../lib/types';

type AniContextProviderProps = {
  data: Animal[];
  children: React.ReactNode;
};
type TAniContext = {
  ani: Animal[];
  selectedAni: string | null;
  numberOfAni: number;
  selectedAniId: Animal | undefined;
  handleAddAnimal: (newAni:Omit<Animal, 'id'>) => void; // (newAni: Animal) => void;
  handleAniDelete: (id: string) => void;
  handleClickSelectedId: (id: string) => void;
};

export const AniContext = createContext<TAniContext | null>(null);

export default function AniContextProvider({
  data,
  children,
}: AniContextProviderProps) {
  //state
  const [ani, setAni] = useState(data);
  const [selectedAni, setSelectedAni] = useState<string | null>(null);

  //derived state
  const selectedAniId = ani.find((ani) => ani.id === selectedAni);
  const numberOfAni = ani.length;
  //event handlers
  const handleAddAnimal = (newAni:Omit<Animal, 'id'>) => {
      setAni((prev) => [...prev, {
      ...newAni,
      id: Math.random().toString()
    }]);
  };

  const handleAniDelete = (id: string) => {
    setAni((prev) => prev.filter((ani) => ani.id !== id));
  };
  const handleClickSelectedId = (id: string) => {
    setSelectedAni(id);
  };

  return (
    <AniContext.Provider
      value={{
        ani,
        selectedAni,
        numberOfAni,
        selectedAniId,
        handleAddAnimal,
        handleAniDelete,
        handleClickSelectedId,
      }}
    >
      {children}
    </AniContext.Provider>
  );
}
