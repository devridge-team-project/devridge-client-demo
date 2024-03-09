import { Dispatch, SetStateAction } from "react";

export type Size = "xs" | "sm" | "md" | "lg" | "full" | "auto";
export type State<T> = [T, Dispatch<SetStateAction<T>>];
type Exception = [boolean | string | null | undefined, React.ReactNode];
type Component = [boolean | string, React.ReactNode];

export interface ReplaceProps {
  exceptions?: Exception[];
  children: React.ReactNode;
}
export interface ShowProps {
  components?: Component[];
  children: React.ReactNode;
}

export interface EventsProps {
  exceptions?: Exception[];
  components?: Component[];
}
