import { useWidgetStore } from "shared/store";
import ModalDesign from "design/widget/Modal";

export default function Modals() {
  const { nowModal } = useWidgetStore();
  if (nowModal === "something") return <ModalDesign>gd</ModalDesign>;
  return <div />;
}
