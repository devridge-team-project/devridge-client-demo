import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SignUpDataSetProps {
  email: string;
  password: string;
  passwordConfirm: string;
  provider: string;
  nickname: string;
  occupation: string;
  introduction: string;
  imageUrl: string | null;
  selectedSkills: number[];
  skillIds: number[];
}

interface SignUpProps {
  authToken: string;
  setAuthToken: (token: string) => void;

  agreements: Record<string, boolean> & {
    all: boolean;
    flag1: boolean;
    flag2: boolean;
    flag3: boolean;
    flag4: boolean;
    flag5: boolean;
    age: boolean;
  };
  setAgreement: (flag: string) => void;
  setAllAgreements: () => void;

  signUpData: SignUpDataSetProps;
  setSignUpData: (data: Partial<SignUpDataSetProps>) => void;
}

export const useSignUpStore = create(
  persist<SignUpProps>(
    (set) => ({
      authToken: "",
      setAuthToken: (token: string) =>
        set({
          authToken: token,
        }),

      agreements: {
        all: false,
        flag1: false,
        flag2: false,
        flag3: false,
        flag4: false,
        flag5: false,
        age: false,
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

      signUpData: {
        email: "",
        password: "",
        passwordConfirm: "",
        provider: "",
        nickname: "",
        occupation: "",
        introduction: "",
        imageUrl: null,
        selectedSkills: [],
        skillIds: [],
      },

      setSignUpData: (data) =>
        set((state) => {
          const newSignUpData = { ...state.signUpData, ...data };
          return { ...state, signUpData: newSignUpData };
        }),
    }),
    { name: "signUpStore" },
  ),
);
