import { Alert } from "design/widget/Modal";
import { useWidgetStore } from "shared/store";

export default function Modals() {
  const { nowModal } = useWidgetStore();
  if (nowModal === "necessary")
    return (
      <Alert>
        <div>필수로 입력되어야 하는 내용입니다. 모든 내용을 작성 후 확인을 눌러주세요.</div>
      </Alert>
    );

  return <></>;
}