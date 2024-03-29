import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthProps {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
  signInType: string;
  setSignInType: (signInType: string) => void;
}

export const useAuthStore = create(
  persist<AuthProps>(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken: string | null) => set({ accessToken }),
      signInType: "",
      setSignInType: (signInType: string) => set({ signInType }),
    }),
    { name: "authStore" },
  ),
);
