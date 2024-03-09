import { Fragment } from "react";
import { useWidgetStore } from "shared/store";
import { ReplaceProps, InsertProps } from "interface";

function Show({ components, children }: InsertProps) {
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

function Replace({ exceptions, children }: ReplaceProps) {
  if (!exceptions) return <>{children}</>;
  const trueComponents = exceptions
    .filter(([exception]) => exception)
    .map(([, Component], index) => <Fragment key={index}>{Component}</Fragment>);
  return <>{trueComponents.length > 0 ? trueComponents : children}</>;
}

const Events = {
  Show,
  Replace,
};

export default Events;
