import { useWidgetStore } from "shared/store";

export default function ModalDesign({ children }: { children: React.ReactNode }) {
  const { closeModal } = useWidgetStore();
  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center">
      <div className="relative h-64 w-128 rounded-2xl border-2 bg-white shadow-md">
        <div>{children}</div>
        <button
          className="absolute bottom-4 right-4 rounded-xl border-2 px-2  py-1  text-xl font-bold"
          onClick={closeModal}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
