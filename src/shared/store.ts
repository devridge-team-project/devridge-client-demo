import { create } from "zustand";

interface WidgetProps {
  nowModal: string;
  setModal: (nowModal: string) => void;
  closeModal: () => void;
}

export const useWidgetStore = create<WidgetProps>((set) => ({
  nowModal: "",
  setModal: (nowModal: string) => set({ nowModal }),
  closeModal: () => set({ nowModal: "" }),
}));

interface TempProps {
  text: string;
  setText: (text: string) => void;
}

export const useTempStore = create<TempProps>((set) => ({
  text: "",
  setText: (text: string) => set({ text }),
}));
