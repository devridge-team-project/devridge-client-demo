import { create } from "zustand";

interface ExcepitonsProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string[];
  setError: (error: string) => void;
  clearError: () => void;
}
export const useExceptionsStore = create<ExcepitonsProps>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
  error: [],
  setError: (error: string) => set({ error: [error] }),
  clearError: () => set({ error: [] }),
}));

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

interface WidgetsProps {
  widgets: string[];
  setWidget: (event: string) => void;
  removeWidget: (event: string) => void;
  clearWidget: () => void;
}

export const useWidgetsStore = create<WidgetsProps>((set) => ({
  widgets: [],
  setWidget: (event: string) => set((state) => ({ widgets: [...state.widgets, event] })),
  removeWidget: (event: string) =>
    set((state) => ({ widgets: state.widgets.filter((widget) => widget !== event) })),
  clearWidget: () => set({ widgets: [] }),
}));
