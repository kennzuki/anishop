'use client';

import { createContext, useState } from 'react';
import { Animal } from '../lib/types';
import { addPet } from '../actions';

type AniContextProviderProps = {
  data: Animal[];
  children: React.ReactNode;
};
type TAniContext = {
  ani: Animal[];
  selectedAni: string | null;
  numberOfAni: number;
  selectedAniId: Animal | undefined;
  handleAddAnimal: (newAni: Omit<Animal, 'id'>) => void;
  handleEditPet: (aniId: string, newAniData: Omit<Animal, 'id'>) => void;
  handleAniDelete: (id: string) => void;
  handleClickSelectedId: (id: string) => void;
};

export const AniContext = createContext<TAniContext | null>(null);

export default function AniContextProvider({
  data:ani,
  children,
}: AniContextProviderProps) {
  //state
  // const [ani, setAni] = useState(data);
  const [selectedAni, setSelectedAni] = useState<string | null>(null);

  //derived state
  const selectedAniId = ani.find((ani) => ani.id === selectedAni);
  const numberOfAni = ani.length;
  //event handlers
  const handleAddAnimal =async (newAni: Omit<Animal, 'id'>) => {
    // setAni((prev) => [...prev, {
    //   ...newAni,
    //   id: Math.random().toString()
    // }]);
    await  addPet(newAni)
  };

  const handleEditPet = (aniId: string, newAniData: Omit<Animal, 'id'>) => {
    setAni((prev) => prev.map((ani) => {
      if (ani.id === aniId) {
        return {
         id: ani.id,
         ...newAniData
       }
     }
   }))
}

  const handleAniDelete = (id: string) => {
    setAni((prev) => prev.filter((ani) => ani.id !== id));
    setSelectedAni(null);
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
       handleEditPet,
        handleAniDelete,
        handleClickSelectedId,
      }}
    >
      {children}
    </AniContext.Provider>
  );
}
