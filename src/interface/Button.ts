import { Size } from "./Property";

export interface ButtonProps {
  title: string;
  type?: string;
  onClick?: () => unknown | (() => Promise<unknown>);
  options?: { size?: Size; color?: string };
  freeze?: boolean;
}
