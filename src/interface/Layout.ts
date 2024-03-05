import { WidgetsProps } from "./Property";

export interface SignUpLayoutProps {
  titles: {
    title: string[];
    subtitle?: string[];
  };
  buttons?: [string, () => unknown | (() => Promise<unknown>)][];
  checkboxes?: { flag: string; title: string; scripts?: string }[];
  widgets?: WidgetsProps;
}
