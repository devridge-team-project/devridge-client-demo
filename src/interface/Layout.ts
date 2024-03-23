import { Button, EventsProps, InputProps, Script } from "interface";

export interface SignUpLayoutProps {
  titles: {
    title: Script;
    subtitle?: Script;
  };
  children?: React.ReactNode;
  inputs?: ({
    title?: string | null;
  } & InputProps<string>)[];
  buttons?: Button[];
  checkboxes?: { flag: string; title: string; scripts?: string }[];
  widgets?: EventsProps;
}
