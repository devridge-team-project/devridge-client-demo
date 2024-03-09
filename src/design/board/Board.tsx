import { cn } from "util/classNames";
import { Events } from "design";
import { EventsProps } from "interface";

export default function Board({
  events,
  options,
  children,
}: {
  events?: EventsProps;
  options?: { gapY?: number };
  children: React.ReactNode;
}) {
  const { gapY } = options ?? {};
  const displays = `flex flex-col gap-${gapY ?? 4}`;
  const sizes = "w-9/10 max-w-160";
  const paddings = "pt-12";

  return (
    <Events.Show components={events?.components}>
      <div className="flex justify-center w-full">
        <Events.Replace exceptions={events?.exceptions}>
          <div className={cn(displays, sizes, paddings)}>{children}</div>
        </Events.Replace>
      </div>
    </Events.Show>
  );
}
