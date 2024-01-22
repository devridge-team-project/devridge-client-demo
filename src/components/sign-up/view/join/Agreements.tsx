import { useState } from "react";
import LineBreak from "design/LineBreak";
import { agreements as agreementsScripts } from "asset/sign-up/agreements";
import { between, col, row } from "style/display";
import { useWidgetStore } from "shared/store";
import SignUpLayout from "design/layout/sign-up/SignUpLayout";
import { useSignUpStore } from "shared/sign-up/store";

export default function Agreements() {
  const { setView } = useWidgetStore();
  const { agreements, setAgreement } = useSignUpStore();
  const agreementsArray = Object.entries(agreements);
  const chkAge = "flag6";

  return (
    <SignUpLayout
      titles={["약관 동의가", "필요해요"]}
      buttons={[["다음으로", () => setView("credentials")]]}
    >
      <div className={col(5)}>
        {agreementsScripts.map(({ title, contents }, index) => (
          <Agreement key={title} title={title} contents={contents} flag={agreementsArray[index]} />
        ))}
      </div>
      <div className={`${col(5)} w-full `}>
        <div className={`${row(4)} rounded-md border-2 px-6 py-3`}>
          <button
            className={`h-6 w-6 border-2 ${agreements[chkAge] ? "bg-blue-500" : ""}`}
            onClick={() => setAgreement(chkAge)}
          />
          <div>만 14세 이상입니다.</div>
        </div>
      </div>
    </SignUpLayout>
  );
}

function Agreement({
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
    <div>
      <div className={`${between.row} text-lg`}>
        <div className={`${row(2)} items-center`}>
          <button
            className={`h-6 w-6 border-2 ${value ? "bg-blue-500" : ""}`}
            onClick={() => {
              if (key === "all") return setAllAgreements();
              return setAgreement(key);
            }}
          />
          <div>{title}</div>
        </div>
        {contents ? <button onClick={() => setOpen(!open)}>{">"}</button> : null}
      </div>
      {contents ? (
        <div
          className={`${
            open ? "h-12 border-2 p-2 " : "h-0"
          } overflow-y-scroll text-xs duration-500`}
        >
          <LineBreak contents={contents} />
        </div>
      ) : null}
      {contents === null ? <hr className="mt-5 h-px w-full bg-black/50" /> : null}
    </div>
  );
}
