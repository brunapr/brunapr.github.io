import { useEffect, useRef } from 'react';
import { useAudioStore } from '../stores/audioStore';

const useSound = (soundUrl: string) => {
  const { audio } = useAudioStore()
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(soundUrl);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [soundUrl]);

  const playSound = () => {
    if (!audio) return
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.error("Error:", e));
    }
  };

  return playSound;
};

export default useSound;