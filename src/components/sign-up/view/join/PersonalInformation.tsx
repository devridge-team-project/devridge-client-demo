import SignUpLayout from "design/layout/sign-up/SignUpLayout";
import Input from "design/widget/Input";
import { redirect } from "react-router-dom";
import { useSignUpStore } from "shared/sign-up/store";
import { useWidgetStore } from "shared/store";

const { REACT_APP_SERVER_URL: serverOrigin } = process.env;

export default function PersonalInformation() {
  const { setModal } = useWidgetStore();
  const { email, password, skills, profileImageUrl, provider, nickname, setNickname } =
    useSignUpStore();

  return (
    <SignUpLayout
      titles={["개인정보 입력"]}
      buttons={[
        [
          "확인",
          async () => {
            if (nickname === "") return setModal("necessary");
            try {
              const response = await fetch(`${serverOrigin}/users`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email,
                  password,
                  skills,
                  provider: "normal",
                  nickname,
                }),
              });
              if (!response.ok) throw new Error("Failure to sign up");
              window.location.href = "/sign-up/success";
            } catch (error) {
              console.error(`Error: ${error}`);
            }
          },
        ],
      ]}
    >
      <div className="h-48 w-full ">
        <div className="text-lg font-bold">TEST</div>
        <div>{email}</div>
        <div>{password}</div>
        <span>{skills.map((skill) => skill)}</span>
        <div>{profileImageUrl}</div>
        <div>{provider}</div>
        <div>{nickname}</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="h-25 w-25 rounded-full bg-gray-400 " />
        <Input title="닉네임" onChange={[nickname, setNickname]} />
      </div>
    </SignUpLayout>
  );
}
