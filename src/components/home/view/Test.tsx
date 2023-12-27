import Template from "../../../design/Template";

export default function Test() {
  return (
    <div>
      <div
        className="w-64 bg-black
			 text-2xl font-bold"
      >
        ㅎㅇ
      </div>
      <Template subject="This is Template's Subject">
        <div>This is Template's Children </div>
      </Template>
    </div>
  );
}
