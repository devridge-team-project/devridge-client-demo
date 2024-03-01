import cn from "util/classNames";

export default function Board({
  options,
  children,
}: {
  options?: { gapY?: number };
  children: React.ReactNode;
}) {
  const { gapY } = options ?? {};
  const displays = `flex flex-col gap-${gapY ?? 4}`;
  const sizes = "w-9/10 max-w-160";
  const paddings = "pt-12";

  return (
    <div className="flex justify-center w-full">
      <div className={cn(displays, sizes, paddings)}>{children}</div>
    </div>
  );
}
