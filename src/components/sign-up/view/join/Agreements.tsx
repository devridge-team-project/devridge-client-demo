import { agreements as agreementsScripts } from "asset/sign-up/agreements";
import { between, col, row } from "style/display";
import { useExceptionsStore, useWidgetStore } from "shared/store";
import SignUpLayout from "design/layout/sign-up/SignUpLayout";
import { useSignUpStore } from "shared/sign-up/store";
import Agreement from "./agreements/Agreement";
import { AgreementsException } from "components/sign-up/controller/Exceptions";

export default function Agreements() {
  const { error, setError } = useExceptionsStore();
  const { setView } = useWidgetStore();
  const { agreements, setAgreement } = useSignUpStore();
  const { flag1, flag2, flag3 } = agreements;
  const agreementsArray = Object.entries(agreements);
  const chkAge = "flag6";

  const isAgreedNecessary = () => {
    if (!flag1 || !flag2 || !flag3) {
      console.log("agreements");
      console.log(error);
      return setError("agreements");
    }
    return setView("credentials");
  };

  return (
    <AgreementsException>
      <SignUpLayout
        titles={["약관 동의가", "필요해요"]}
        buttons={[["다음으로", isAgreedNecessary]]}
      >
        <div className={col(5)}>
          {agreementsScripts.map(({ title, contents }, index) => (
            <Agreement
              key={title}
              title={title}
              contents={contents}
              flag={agreementsArray[index]}
            />
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
    </AgreementsException>
  );
}
