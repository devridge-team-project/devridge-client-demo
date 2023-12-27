import Template from "../design/Template";

export default function Home() {
  return (
    <div>
      <div className="text-2xl font-bold">ㅎㅇ</div>
      <Template subject="This is Template's Subject">
        <div>This is Template's Children </div>
      </Template>
    </div>
  );
}
