import { useWidgetStore } from "shared/store";

export default function Widgets({ children }: { children: React.ReactNode }) {
  const { events } = useWidgetStore();

  return <>{children}</>;
}
