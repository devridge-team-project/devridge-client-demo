import { useWidgetStore } from "shared/store";
import ModalDesign from "design/widget/Modal";
import Something from "../view/Something";

export default function Modals() {
  const { nowModal } = useWidgetStore();
  if (nowModal === "something")
    return (
      <ModalDesign>
        <Something />
      </ModalDesign>
    );
  return <div />;
}
