import { Button, EventsProps } from "./Property";

export interface SignUpLayoutProps {
  titles: {
    title: string[];
    subtitle?: string[];
  };
  buttons?: Button[];
  checkboxes?: { flag: string; title: string; scripts?: string }[];
  widgets?: EventsProps;
}
