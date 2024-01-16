import { between, col, center } from "style/display";
import LineBreak from "design/LineBreak";

export default function SignUpLayout({
  titles,
  subTitles,
  children,
  buttons,
}: {
  titles: string[];
  subTitles?: string[];
  children: React.ReactNode;
  buttons?: [string, () => unknown | (() => Promise<unknown>)][];
}) {
  return (
    <div className={`${between.col} h-152 w-80`}>
      <div className={`${col(5)} w-full`}>
        <div className="text-4xl font-bold leading-tight">
          {titles.map((title) => (
            <LineBreak contents={[title]} key={title} />
          ))}
        </div>
        <div className="text-gray-400  ">
          {subTitles?.map((subTitle) => <LineBreak contents={[subTitle]} key={subTitle} />)}
        </div>
        {children}
        {buttons?.map(([title, onClick]) => (
          <button
            onClick={onClick}
            className={`${center.colO(0)} h-12 w-full rounded-md bg-black text-white`}
            key={title}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}
