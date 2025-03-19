import { AniContext } from '@/app/context/ani-context';
import { SearchContext } from '@/app/context/search-context-provider';
import { useContext } from 'react';

export function useAniContext() {
  const context = useContext(AniContext);
  if (!context) {
    throw new Error('useAniContext must be used within a AniContextProvider');
  }
  return context;
}
export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchContext provider');
  }
  return context;
}
