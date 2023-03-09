import React, { useEffect } from 'react';
import useForceRerender from './useForceRerender';
export const useLockScroll = () => { 

  const forceRerender = useForceRerender();

  useEffect(() => {
    forceRerender();
  }, []);

  const slide = document.getElementById("slide");

  const lockScroll = React.useCallback(() => { 
    slide!.classList.add("hidden");
  }, [])

  const unlockScroll = React.useCallback(() => { 
    slide!.classList.remove("hidden");
  }, []);

  return {
    lockScroll,
    unlockScroll
  };  
}