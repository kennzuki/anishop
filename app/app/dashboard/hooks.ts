import { AniContext } from '@/app/context/ani-context';
import { useContext } from 'react';

export function useAniContext() {
  const context = useContext(AniContext);
  if (!context) {
    throw new Error('useAniContext must be used within a AniContextProvider');
  }
  return context;
}
