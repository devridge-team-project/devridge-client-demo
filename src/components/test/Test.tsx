const script =
  "# 안녕하세요! 반갑습니다.\n오늘은 이런이런 것이 궁금한데 다음과 같습니다.\n```SELECT * FROM service.user```\n감사합니다!!";

function Formatter({ script }: { script: string }) {
  const lines = script.split("\n");
  console.log(lines);
  const result = lines.map((line, index) => {
    if (line.startsWith("# "))
      return (
        <div className="text-3xl" key={index}>
          {line.replace("# ", "")}
        </div>
      );
    if (line.startsWith("## "))
      return (
        <div className="text-2xl" key={index}>
          {line.replace("## ", "")}
        </div>
      );
    if (line.startsWith("```"))
      return (
        <div className="bg-gray-200 p-2" key={index}>
          {line.replace(/^```|```$/g, "")}
        </div>
      );
    return <div key={index}>{line}</div>;
  });
  return <>{result}</>;
}

export default function Test() {
  return (
    <div>
      <Formatter script={script} />
    </div>
  );
}
