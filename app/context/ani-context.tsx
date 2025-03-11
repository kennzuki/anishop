'use client'

import { createContext, useState } from "react";
import { Animal } from "../lib/types";

type AniContextProviderProps = {
    data: Animal[];
    children: React.ReactNode;
}
type TAniContext = {
    ani: Animal[];
    selectedAni: string | null;
    numberOfAni: number;
    selectedAniId: Animal | undefined;
    handleClickSelectedId: (id: string) => void;
}

export const AniContext = createContext < TAniContext | null >( null);

export default function AniContextProvider({data, children }:AniContextProviderProps) {
    

    const [ani, setAni] = useState(data);
    const [selectedAni, setSelectedAni] = useState<string | null>(null);


    //derived state
    const selectedAniId = ani.find((ani) => ani.id === selectedAni);
    const numberOfAni = ani.length;
    const handleClickSelectedId = (id: string) => { 
        setSelectedAni(id);
    }
 
    
    
    return (
        <AniContext.Provider value={{ ani,  selectedAni,numberOfAni,selectedAniId,handleClickSelectedId}}>
            {children}
        </AniContext.Provider>
    );
}