import { useState } from "react";
import LineBreak from "design/text/LineBreaks";
import { between, row } from "style/display";
import { useSignUpStore } from "shared/sign-up/store";

export default function Agreement({
  title,
  contents,
  flag,
}: {
  title: string;
  contents: string[] | null;
  flag: [string, boolean];
}) {
  const { setAgreement, setAllAgreements } = useSignUpStore();
  const [open, setOpen] = useState(false);
  const [key, value] = flag;

  return (
    <div></div>
    // <div>
    //   <div className={`${between.row} text-lg`}>
    //     <div className={`${row(2)} items-center`}>
    //       <button
    //         className={`h-6 w-6 border-2 ${value ? "bg-blue-500" : ""}`}
    //         onClick={() => {
    //           if (key === "all") return setAllAgreements();
    //           return setAgreement(key);
    //         }}
    //       />
    //       <div>{title}</div>
    //     </div>
    //     {contents ? <button onClick={() => setOpen(!open)}>{">"}</button> : null}
    //   </div>
    //   {contents ? (
    //     <div
    //       className={`${
    //         open ? "h-12 border-2 p-2 " : "h-0"
    //       } overflow-y-scroll text-xs duration-500`}
    //     >
    //       <LineBreak contents={contents} />
    //     </div>
    //   ) : null}
    //   {contents === null ? <hr className="mt-5 h-px w-full bg-black/50" /> : null}
    // </div>
  );
}
