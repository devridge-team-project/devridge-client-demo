import { create } from "zustand";

interface SignUpProps {
  email: string;
  password: string;
  passwordConfirm: string;
  provider: string;
  nickname: string;
  profileImageUrl: string;
  skills: string[];

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setPasswordConfirm: (passwordConfirm: string) => void;
  setProvider: (provider: string) => void;
  setNickname: (nickname: string) => void;
  setProfileImageUrl: (profileImage: string) => void;
  setSkills: (skills: string[]) => void;
}

export const useSignUpStore = create<SignUpProps>((set) => ({
  email: "",
  password: "",
  passwordConfirm: "",
  provider: "",
  nickname: "",
  profileImageUrl: "",
  skills: [],

  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setPasswordConfirm: (passwordConfirm) => set({ passwordConfirm }),
  setProvider: (provider) => set({ provider }),
  setNickname: (nickname) => set({ nickname }),
  setProfileImageUrl: (profileImageUrl) => set({ profileImageUrl }),
  setSkills: (skills) => set({ skills }),
}));
