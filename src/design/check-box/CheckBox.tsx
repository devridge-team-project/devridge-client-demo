import { useState } from "react";
import { cn } from "util/classNames";
import { CheckBoxProps } from "interface";
import { useSignUpStore } from "shared/sign-up/store";

export default function CheckBox({ title, script, flag }: CheckBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { agreements, setAgreement, setAllAgreements } = useSignUpStore();
  const isAge = flag === "age";
  const container = {
    positions: "relative",
    displays: "flex flex-col justify-center gap-3",
    styles: "rounded-md",
    isAge: isAge && "h-12 border-2",
  };
  const agreement = {
    container: {
      displays: "flex items-center justify-between gap-3",
      sizes: "w-80",
      isAge: isAge && "pl-6",
    },
    body: {
      displays: "flex items-center gap-3",
    },
    button: {
      sizes: "h-6 w-6",
      styles: "border rounded-md",
      colors: agreements[flag] && "bg-black",
    },
    title: {
      styles: !script && "font-bold",
    },
    script: {
      width: "w-full",
      height: isOpen ? "h-16" : "h-0",
      border: isOpen ? "border-2" : "",
      styles: "overflow-y-scroll duration-500",
    },
  };

  const check = () => {
    if (flag === "all") return setAllAgreements();
    return setAgreement(flag);
  };

  return (
    <div className={cn(container)}>
      <div className={cn(agreement.container)}>
        <div className={cn(agreement.body)}>
          <button className={cn(agreement.button)} onClick={check} />
          <div className={cn(agreement.title)}>{title}</div>
        </div>
        {script && <button onClick={() => setIsOpen(!isOpen)}>{">"}</button>}
      </div>
      {script && <div className={cn(agreement.script)}>{script}</div>}
      {!script && !isAge && <div className="inline-flex border w-full" />}
    </div>
  );
}
