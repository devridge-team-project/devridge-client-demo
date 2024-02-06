import { useWidgetsStore } from "shared/store";

export default function Widgets({ children }: { children: React.ReactNode }) {
  const { widgets } = useWidgetsStore();

  return <>{children}</>;
}
