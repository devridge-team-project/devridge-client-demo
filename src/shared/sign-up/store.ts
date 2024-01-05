import { create } from "zustand";

interface SignUpProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
}

export const useSignUpStore = create<SignUpProps>((set) => ({
  email: "",
  setEmail: (email: string) => set({ email }),
  password: "",
  setPassword: (password: string) => set({ password }),
  confirmPassword: "",
  setConfirmPassword: (confirmPassword: string) => set({ confirmPassword }),
}));
