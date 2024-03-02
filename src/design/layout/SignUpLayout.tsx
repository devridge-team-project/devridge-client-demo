import { col, center } from "style/display";
import LineBreaks from "design/text/LineBreaks";
import { Button } from "design/button";
import { useId } from "react";
import { cn } from "util/classNames";

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
  const id = useId();

  const container = {
    sizes: "h-152 w-80",
  };

  return (
    <div className={cn(container)}>
      <div className={`${col(5)} w-full`}>
        <LineBreaks texts={title} className="text-4xl font-bold leading-tight" />
        <LineBreaks texts={subtitle} className="text-gray-400" />
        {buttons?.map(([title, onClick]) => (
          <Button
            key={id}
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
