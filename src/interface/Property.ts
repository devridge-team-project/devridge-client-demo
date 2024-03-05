import { Dispatch, SetStateAction } from "react";

export type Size = "sm" | "md" | "lg" | "full" | "auto";
export type State<T> = [T, Dispatch<SetStateAction<T>>];

type Exception = [boolean, React.ReactNode];
type Component = [boolean | string, React.ReactNode];

export interface ExceptionProps {
  exceptions?: Exception[];
  children: React.ReactNode;
}
export interface ComponentsProps {
  components?: Component[];
  children: React.ReactNode;
}

export interface WidgetsProps {
  exceptions?: Exception[];
  components?: Component[];
}
