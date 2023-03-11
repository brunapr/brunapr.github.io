import React, { useEffect } from 'react';
import useForceRerender from './useForceRerender';
export const useLockScroll = () => { 

  const forceRerender = useForceRerender();

  useEffect(() => {
    forceRerender();
  }, []);

  const lockScroll = React.useCallback((element: HTMLElement) => { 
    element.classList.add("hidden");
  }, [])

  const unlockScroll = React.useCallback((element: HTMLElement) => { 
    element.classList.remove("hidden");
  }, []);

  return {
    lockScroll,
    unlockScroll
  };  
}