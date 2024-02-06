import { create } from "zustand";

interface SignUpProps {
  agreements: Record<string, boolean> & {
    all: boolean;
    flag1: boolean;
    flag2: boolean;
    flag3: boolean;
    flag4: boolean;
    flag5: boolean;
    flag6: boolean;
  };
  setAgreement: (flag: string) => void;
  setAllAgreements: () => void;

  email: string;
  password: string;
  passwordConfirm: string;
  provider: string;
  nickname: string;
  profileImageUrl: string;
  occupation: string;
  selectedSkills: number[];
  skillIds: number[];

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setPasswordConfirm: (passwordConfirm: string) => void;
  setProvider: (provider: string) => void;
  setNickname: (nickname: string) => void;
  setProfileImageUrl: (profileImage: string) => void;
  setOccupation: (occupation: string) => void;
  setSelectedSkills: (skillId: number) => void;
  setSkillIds: (skillIds: number[]) => void;
}

export const useSignUpStore = create<SignUpProps>((set) => ({
  agreements: {
    all: false,
    flag1: false,
    flag2: false,
    flag3: false,
    flag4: false,
    flag5: false,
    flag6: false,
  },
  setAgreement: (flag) =>
    set((state) => {
      const newAgreements = { ...state.agreements, [flag]: !state.agreements[flag] };
      return { ...state, agreements: newAgreements };
    }),
  setAllAgreements: () =>
    set((state) => {
      const reverseAll = !state.agreements.all;
      const obj = { ...state.agreements };
      Object.keys(obj).forEach((key) => {
        obj[key] = reverseAll;
      });
      return { ...state, agreements: obj };
    }),

  email: "",
  password: "",
  passwordConfirm: "",
  provider: "",
  nickname: "",
  profileImageUrl: "",
  occupation: "",
  selectedSkills: [],
  skillIds: [],

  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setPasswordConfirm: (passwordConfirm) => set({ passwordConfirm }),
  setProvider: (provider) => set({ provider }),
  setNickname: (nickname) => set({ nickname }),
  setProfileImageUrl: (profileImageUrl) => set({ profileImageUrl }),
  setOccupation: (occupation) => set({ occupation }),
  setSelectedSkills: (skill) =>
    set((state) => {
      const newSkills = state.selectedSkills.includes(skill)
        ? state.selectedSkills.filter((s) => s !== skill)
        : [...state.selectedSkills, skill];
      return { ...state, selectedSkills: newSkills };
    }),
  setSkillIds: (skillIds) => set({ skillIds }),
}));
