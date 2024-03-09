import { Button, CheckBox, Events, Input, LineBreaks } from "design";
import { useId, useState } from "react";
import { cn } from "util/classNames";
import { SignUpLayoutProps } from "interface/Layout";

export default function SignUpLayout({
  titles,
  buttons,
  inputs,
  checkboxes,
  widgets,
}: SignUpLayoutProps) {
  const state = useState<string>("");
  const { title, subtitle } = titles;
  const id = useId();
  const container = {
    sizes: "w-80",
    displays: "flex flex-col justify-center gap-5",
  };

  return (
    <Events.Show components={widgets?.components}>
      <div className={cn(container)}>
        <LineBreaks texts={title} className="text-4xl font-bold leading-tight" />
        <LineBreaks texts={subtitle} className="text-gray-400" />
        {checkboxes?.map(({ flag, title, scripts }) => (
          <CheckBox key={id} title={title} script={scripts} flag={flag} />
        ))}
        {inputs?.map(({ title, state, placeholder }) => (
          <div className="flex w-full flex-col gap-2">
            <div>{title}</div>
            <Input state={state} />
          </div>
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
    </Events.Show>
  );
}
