import { ReactNode } from "react";

interface Props {
  type: "submit" | "button" | "reset";
  children: ReactNode;
  className?: string;
}

export default function Button({ className, type, children }: Props) {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}
