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
}

export const AniContext = createContext < TAniContext | null >( null);

export default function AniContextProvider({data, children }:AniContextProviderProps) {
    

    const [ani, setAni] = useState(data);
    const[selectedAni, setSelectedAni] = useState(null);
    return (
        <AniContext.Provider value={{ ani,  selectedAni }}>
            {children}
        </AniContext.Provider>
    );
}