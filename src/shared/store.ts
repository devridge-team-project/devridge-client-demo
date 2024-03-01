import { WidgetEvent } from "interface/Widget";
import { create } from "zustand";

interface WidgetProps {
  events: WidgetEvent[];
  setView: (prop: string) => void;
  removeView: (prop: string) => void;
  setModal: (prop: string) => void;
  removeModal: (prop: string) => void;
  clearModal: () => void;

  // order for widgets
  order: [string, "asc" | "desc"];
  setOrder: (prop: string) => void;

  // Temporary data for widgets
  tempData: Record<string, string | number>;
  setTempData: (prop: Record<string, string | number>) => void;
  clearTempData: () => void;
}

export const useWidgetStore = create<WidgetProps>((set) => ({
  events: [],
  setView: (prop) =>
    set((state) => ({
      events: [...state.events, { event: prop, type: "view" }],
    })),
  removeView: (prop) => {
    set((state) => ({
      events: state.events.filter(({ event }) => event !== prop),
    }));
  },

  order: ["", "asc"],
  setOrder: (prop) => {
    set((state) => {
      if (state.order[0] !== prop) {
        return {
          order: [prop, "asc"],
        };
      }
      return {
        order: [prop, state.order[1] === "asc" ? "desc" : "asc"],
      };
    });
  },

  setModal: (prop) =>
    set((state) => ({
      events: [...state.events, { event: prop, type: "modal" }],
    })),
  removeModal: (prop) => {
    set((state) => ({
      events: state.events.filter(({ event }) => event !== prop),
    }));
  },
  clearModal: () =>
    set((state) => ({
      events: state.events.filter(({ type }) => type !== "modal"),
    })),

  tempData: {},
  setTempData: (prop) => set((state) => ({ tempData: { ...state.tempData, ...prop } })),
  clearTempData: () => set({ tempData: {} }),
}));
