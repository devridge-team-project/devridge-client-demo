import { Dispatch, SetStateAction } from "react";

export type Size = "sm" | "md" | "lg" | "full" | "auto";
export type State<T> = [T, Dispatch<SetStateAction<T>>];

export interface WidgetsProps {
  exceptions?: [boolean, React.ReactNode][];
  components?: [boolean | string, React.ReactNode][];
}

export interface ExceptionProps {
  exceptions?: [boolean, React.ReactNode][];
  children: React.ReactNode;
}
