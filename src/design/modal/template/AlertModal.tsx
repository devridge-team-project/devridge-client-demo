import { cn } from "util/classNames";
import Modal from "../widget/Modal";
import { Button, LineBreaks } from "design";
import { Script } from "interface";
import { useWidgetStore } from "shared/store";
export default function AlertModal({ script }: { script: Script }) {
  const { clearModal } = useWidgetStore();

  const modal = {
    displays: "flex flex-col items-center gap-7",
    sizes: "w-full h-full",
    styles: "pt-6",
  };
  const textBox = {
    sizes: "h-13",
    text: "text-base font-bold",
  };

  return (
    <Modal classNames={cn(modal)}>
      <img src="/images/icons/warning.svg" alt="warning" width={40} height={40} />
      <LineBreaks texts={script} className={cn(textBox)} />
      <Button title="확인" onClick={clearModal} options={{ size: "xs" }} />
    </Modal>
  );
}
