import { create } from "zustand";

interface useSkipQT {
  q: boolean[];
  setQ: (i: number, s: boolean) => void;
}

export const useSkipQ = create<useSkipQT>((set) => ({
  q: [false, false, false],
  setQ: (i: number, s: boolean) =>
    set((state) => {
      if (i >= 0 && i < state.q.length) {
        const updateQ = [...state.q];
        updateQ[i] = s;
        return { q: updateQ };
      } else {
        return state;
      }
    }),
}));
