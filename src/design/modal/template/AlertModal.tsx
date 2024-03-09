import { cn } from "util/classNames";
import Modal from "../widget/Modal";
export default function AlertModal() {
  const modal = {
    displays: "flex flex-col items-center",
    sizes: "w-full h-full",
    styles: "pt-6",
  };
  return (
    <Modal classNames={cn(modal)}>
      <img src="/images/icons/warning.svg" alt="warning" width={40} height={40} />
    </Modal>
  );
}
