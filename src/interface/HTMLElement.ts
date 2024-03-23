import { State, Size } from "./Property";

export type Script = string | string[] | undefined;
export type Button = [string, () => unknown | (() => Promise<unknown>)];
export interface InputProps<T> {
  state: State<T>;
  placeholder?: string;
}
export interface SelectProps<T> {
  state: State<T>;
  selectOptions: { value: number; title: string }[];
  placeholder?: string;
}

export interface ButtonProps {
  title: string;
  type?: string;
  onClick?: () => unknown | (() => Promise<unknown>);
  options?: { size?: Size; color?: string };
  freeze?: boolean;
}
