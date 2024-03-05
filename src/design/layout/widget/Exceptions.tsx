import { Fragment } from "react";
import { ExceptionProps } from "interface";

export default function Exceptions({ exceptions, children }: ExceptionProps) {
  if (!exceptions) return <>{children}</>;
  const trueComponents = exceptions
    .filter(([exception]) => exception)
    .map(([, Component], index) => <Fragment key={index}>{Component}</Fragment>);
  return <>{trueComponents.length > 0 ? trueComponents : children}</>;
}
