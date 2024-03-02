import { col, center } from "style/display";
import LineBreaks from "design/text/LineBreaks";
import { Button } from "design/button";

export default function SignUpLayout({
  titles,
  buttons,
}: {
  titles: {
    title: string[];
    subtitle?: string[];
  };
  buttons?: [string, () => unknown | (() => Promise<unknown>)][];
}) {
  const { title, subtitle } = titles;

  return (
    <div className="h-152 w-80">
      <div className={`${col(5)} w-full`}>
        <LineBreaks texts={title} className="text-4xl font-bold leading-tight" />
        <LineBreaks texts={subtitle} className="text-gray-400" />
        {buttons?.map(([title, onClick]) => (
          <Button
            key={title}
            title={title}
            onClick={onClick}
            options={{
              size: "lg",
              color: "black",
            }}
          />
        ))}
      </div>
    </div>
  );
}
