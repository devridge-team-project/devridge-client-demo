import { ReactNode } from "react";

interface Props {
  type?: "submit" | "button" | "reset";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ className, type, children, onClick }: Props) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
