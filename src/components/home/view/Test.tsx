import Template from "design/Template";

export default function Test() {
  return (
    <div>
      <div className="w-64 bg-white text-2xl font-bold md:bg-red-500">ㅎㅇ</div>
      <img src="/images/cat.png" alt="cat" width={500} height={500} />
      <Template subject="This is Template's Subject">
        <div>This is Template's Children </div>
      </Template>
    </div>
  );
}
