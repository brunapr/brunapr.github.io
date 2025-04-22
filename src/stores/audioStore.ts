import { create } from "zustand";

function getStorageAudio(): boolean {
  const storageAudio = localStorage.getItem("audio");
  if (!storageAudio) {
    localStorage.setItem("audio", JSON.stringify(true))
    return true
  }

  return JSON.parse(storageAudio)
}

interface AudioStore {
  audio: boolean;
  setAudio: (audio: boolean) => void;
  toggleAudio: () => void;
}

export const useAudioStore = create<AudioStore>()((set) => ({
  audio: getStorageAudio(),
  setAudio: (audio) => {
    localStorage.setItem("audio", JSON.stringify(audio));
    set({ audio });
  },
  toggleAudio: () =>
    set((state) => {
      const newAudio = !state.audio
      localStorage.setItem("audio", JSON.stringify(newAudio));
      return { audio: newAudio };
    }),
}))
