import { useWidgetStore } from "@/shared/store";
export default function Modals() {
  const { nowModal } = useWidgetStore();
  if (nowModal === "someModal") return <div>Some Modal</div>;
  return <></>;
}
