import { useMutation } from "@tanstack/react-query";
import SignUpLayout from "design/template/SignUpLayout";
import Input from "design/input/Input";
import { useSignUpStore } from "shared/sign-up/store";
import { useWidgetStore } from "shared/store";
import { user } from "connection/api/user";
import useNavigation from "hook/useNavigation";
import { useState } from "react";

export default function PersonalInformation() {
  const [nickname, setNickname] = useState<string>("");
  const [introduction, setIntroduction] = useState<string>("");
  const [occupationId, setOccupationId] = useState<number>(4);

  const { email, password, selectedSkills, profileImageUrl, provider } = useSignUpStore();
  const navigate = useNavigation();

  const { mutate, error, isError, isSuccess } = useMutation({
    mutationKey: ["user"],
    mutationFn: () =>
      user.post({
        email,
        password: "asdfasdf1234",
        provider: "normal",
        nickname,
        introduction: "안녕하세요개발자입니다",
        profileImageUrl: null,
        skillIds: selectedSkills,
        occupationId,
      }),
  });
  if (isError) {
    console.log("email", email, "password", password, "provider", provider, "nickname", nickname);
    console.log(error);
  }
  if (isSuccess) navigate("/sign-up/success");

  return (
    <SignUpLayout titles={["개인정보 입력"]} buttons={[["확인", mutate]]}>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="h-25 w-25 rounded-full bg-gray-400 " />
        <Input title="닉네임" onChange={[nickname, setNickname]} />
        <Input title="자기소개" onChange={[introduction, setIntroduction]} />
        {/* <Input title="직군선택" onChange={[occupationId, setOccupationId]} /> */}
      </div>
    </SignUpLayout>
  );
}
