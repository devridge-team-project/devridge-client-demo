import { create } from "zustand";

interface WidgetProps {
  nowModal: string;
  setModal: (nowModal: string) => void;
  closeModal: () => void;
  nowView: string;
  setView: (nowView: string) => void;
}

export const useWidgetStore = create<WidgetProps>((set) => ({
  nowModal: "",
  setModal: (nowModal: string) => set({ nowModal }),
  closeModal: () => set({ nowModal: "" }),
  nowView: "",
  setView: (nowView: string) => set({ nowView }),
}));

interface TempProps {
  text: string;
  setText: (text: string) => void;
}

export const useTempStore = create<TempProps>((set) => ({
  text: "",
  setText: (text: string) => set({ text }),
}));
