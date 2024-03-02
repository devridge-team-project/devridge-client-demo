import { useWidgetStore } from "shared/store";

export default function ModalDesign({ children }: { children: React.ReactNode }) {
  const { clearModal } = useWidgetStore();
  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center">
      <div className="relative h-64 w-128 rounded-2xl border-2 bg-white shadow-md">
        <div>{children}</div>
        <button
          className="absolute bottom-4 right-4 rounded-xl border-2 px-2  py-1  text-xl font-bold"
          onClick={clearModal}
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export function Alert({ scripts }: { scripts: string[] }) {
  const { clearModal } = useWidgetStore();
  const scriptsClassNames = ["w-9/10 text-center font-bold", "lg:text-lg"].join(" ");

  return (
    <div className="absolute left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center bg-black/20">
      <div className="min-h-60 flex aspect-video w-3/10 min-w-72 flex-col items-center justify-center gap-4 rounded-xl bg-white shadow-md shadow-black/50">
        <div className="h-12 w-12 rounded-full bg-black" />
        <div className={scriptsClassNames}>
          {scripts.map((script) => (
            <div>{script}</div>
          ))}
        </div>
        <button onClick={clearModal} className="rounded-xl bg-black px-6 py-2 font-bold text-white">
          확인
        </button>
      </div>
    </div>
  );
}
