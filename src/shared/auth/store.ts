import { create } from "zustand";

interface AuthProps {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
  signInType: string;
  setSignInType: (signInType: string) => void;
}

export const useAuthStore = create<AuthProps>((set) => ({
  accessToken: null,
  setAccessToken: (accessToken: string | null) => set({ accessToken }),
  signInType: "",
  setSignInType: (signInType: string) => set({ signInType }),
}));
