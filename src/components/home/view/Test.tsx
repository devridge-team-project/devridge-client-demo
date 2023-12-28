import Template from "design/Template";
import { useWidgetStore } from "shared/store";

export default function Test() {
  const { setModal } = useWidgetStore();
  return (
    <div>
      <div className="w-64 bg-white text-2xl font-bold md:bg-red-500">ㅎㅇ</div>
      <img src="/images/cat.png" alt="cat" width={500} height={500} />
      <Template subject="This is Template's Subject">
        <div>This is Template's Children </div>
      </Template>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => setModal("something")}
      >
        모달
      </button>
    </div>
  );
}
