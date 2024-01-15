import { between, col } from "style/display";
import LineBreak from "design/LineBreak";

export default function SignUpLayout({
  titles,
  children,
}: {
  titles: string[];
  children: React.ReactNode;
}) {
  return (
    <div className={`${between.col} h-152 w-80`}>
      <div className={`${col(5)} w-full`}>
        <div className="text-4xl font-bold leading-tight">
          {titles.map((title) => (
            <LineBreak contents={[title]} key={title} />
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
