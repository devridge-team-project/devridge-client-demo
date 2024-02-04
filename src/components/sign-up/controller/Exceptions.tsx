import { useExceptionsStore } from "shared/store";
import ModalDesign from "design/widget/Modal";
export function AgreementsException({ children }: { children: React.ReactNode }) {
  const { error, clearError } = useExceptionsStore();

  const popError = () => {
    if (error.includes("agreements")) {
      return <ModalDesign clearError={clearError}>동의해주세요</ModalDesign>;
    }
    return null;
  };

  return (
    <>
      {popError()}
      {children}
    </>
  );
}
