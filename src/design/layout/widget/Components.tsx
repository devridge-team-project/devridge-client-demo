import { ComponentsProps } from "interface";
import { useWidgetStore } from "shared/store";

export default function Components({ components, children }: ComponentsProps) {
  const { events } = useWidgetStore();
  return (
    <>
      {children}
      {components?.map(([flag, Component]) => {
        if (typeof flag === "boolean") return flag ? <>{Component}</> : null;
        return events?.some(({ event }) => event === flag) ? <>{Component}</> : null;
      })}
    </>
  );
}
