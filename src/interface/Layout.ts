import { Button, EventsProps } from "./Property";
import { Script } from "interface";

export interface SignUpLayoutProps {
  titles: {
    title: Script;
    subtitle?: Script;
  };
  buttons?: Button[];
  checkboxes?: { flag: string; title: string; scripts?: string }[];
  widgets?: EventsProps;
}
