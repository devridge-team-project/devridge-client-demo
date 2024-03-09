import { Dispatch, SetStateAction } from "react";

export type Size = "sm" | "md" | "lg" | "full" | "auto";
export type State<T> = [T, Dispatch<SetStateAction<T>>];
export type Button = [string, () => unknown | (() => Promise<unknown>)];
type Exception = [boolean | string | null | undefined, React.ReactNode];
type Component = [boolean | string, React.ReactNode];

export interface ReplaceProps {
  exceptions?: Exception[];
  children: React.ReactNode;
}
export interface InsertProps {
  components?: Component[];
  children: React.ReactNode;
}

export interface EventsProps {
  exceptions?: Exception[];
  components?: Component[];
}
