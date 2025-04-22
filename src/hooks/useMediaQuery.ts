// hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Verifica se window está disponível (para SSR/Next.js)
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);

      // Função handler para quando a media query mudar
      const documentChangeHandler = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      // Verifica o valor inicial
      setMatches(mediaQueryList.matches);

      // Adiciona listener para mudanças futuras
      mediaQueryList.addEventListener('change', documentChangeHandler);

      // Cleanup function
      return () => {
        mediaQueryList.removeEventListener('change', documentChangeHandler);
      };
    }
  }, [query]);

  return matches;
};