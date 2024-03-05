import { col, center } from "style/display";
import { Button, CheckBox, LineBreaks } from "design";
import { useId } from "react";
import { cn } from "util/classNames";
import Exception from "../widget/Exception";
import { SignUpLayoutProps } from "interface/Layout";

export default function SignUpLayout({ titles, buttons, checkboxes, widgets }: SignUpLayoutProps) {
  const { title, subtitle } = titles;
  const id = useId();
  const container = {
    sizes: "w-80",
    displays: "flex flex-col justify-center gap-5",
  };

  return (
    <Exception exceptions={widgets?.exceptions}>
      <div className={cn(container)}>
        <LineBreaks texts={title} className="text-4xl font-bold leading-tight" />
        <LineBreaks texts={subtitle} className="text-gray-400" />
        {checkboxes?.map(({ flag, title, scripts }) => (
          <CheckBox key={id} title={title} script={scripts} flag={flag} />
        ))}
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
    </Exception>
  );
}
