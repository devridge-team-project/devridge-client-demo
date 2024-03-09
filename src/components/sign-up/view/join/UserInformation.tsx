import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { SignUpLayout, Input, AlertModal } from "design";
import { useWidgetStore, useSignUpStore } from "shared";
import { users } from "connection";
import useNavigation from "hook/useNavigation";
import { modal } from "../../static/modal";

export default function UserInformation() {
  const nickname = useState<string>("");
  const introduction = useState<string>("");
  const { signUpData } = useSignUpStore();
  const { email, password, provider } = signUpData;
  const navigate = useNavigation();

  const data = {
    email: "test135125137@test.com",
    password: "asdf1234",
    provider: "normal",
    nickname: "test123125",
    introduction: "안녕하세요개발자입니다",
    skillIds: [1, 2, 3],
    occupationId: 2,
  };

  const formData = new FormData();
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  // if (profileImageUrl) {
  //   formData.append("image", profileImageUrl);
  //   const file = new File([""], "/images/test/default.png");
  //   formData.append("image", file);
  // }
  formData.append("member", blob);

  const { mutate, error, isError, isSuccess } = useMutation({
    mutationKey: ["user"],
    mutationFn: () => users.post(formData),
  });

  if (isError) {
    console.log("email", email, "password", password, "provider", provider, "nickname", nickname);
    console.log(error);
  }
  if (isSuccess) navigate("/sign-up/success");
  const isDuplicatedId = false;

  return (
    <SignUpLayout
      widgets={{ components: [[isDuplicatedId, <AlertModal script={modal.duplicatedId} />]] }}
      titles={{ title: "개인정보 입력" }}
      inputs={[
        { title: "닉네임", state: nickname, placeholder: "닉네임" },
        { title: "자기 소개", state: introduction, placeholder: "자기소개" },
      ]}
      buttons={[["확인", mutate]]}
    />
  );
}
