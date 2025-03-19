'use client';

import { createContext, useState } from 'react';

type SearchContextProviderProps = {
  children: React.ReactNode;
};
type TSearchContext = {
  SearchQuery: string;
  handleChangeSearchQuery: (newValue: string) => void;
};

export const AniContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  //state
  const [searchQuery, setSearchQuery] = useState('');
  //derived state

  //event hanndlers
  const handleChangeSearchQuery = (newValue: string) => {
    setSearchQuery(newValue);
  };

  return (
    <AniContext.Provider
      value={{
        searchQuery,
        handleChangeSearchQuery,
      }}
    >
      {children}
    </AniContext.Provider>
  );
}
