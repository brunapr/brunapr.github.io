import { useEffect } from 'react';

export function useViewportHeight() {
  useEffect(() => {
    const updateHeight = () => {
      document.documentElement.style.setProperty('--dvh', `${window.innerHeight}px`);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);
}