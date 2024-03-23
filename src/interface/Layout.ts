import { Button, EventsProps, InputProps, Script, SelectProps } from "interface";

export interface SignUpLayoutProps {
  titles: {
    title: Script;
    subtitle?: Script;
  };
  children?: React.ReactNode;
  inputs?: ({
    title?: string | null;
  } & InputProps<string>)[];
  selects?: ({
    title?: string | null;
  } & SelectProps<number>)[];
  buttons?: Button[];
  checkboxes?: { flag: string; title: string; scripts?: string }[];
  widgets?: EventsProps;
}
