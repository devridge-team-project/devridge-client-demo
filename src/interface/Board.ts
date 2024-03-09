import { EventsProps } from "./Property";

export interface BoardProps {
  events?: EventsProps;
  options?: { gapY?: number };
  children: React.ReactNode;
}
